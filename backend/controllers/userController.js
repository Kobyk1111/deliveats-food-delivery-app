import User from "../models/UserModel.js";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function registerUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next(createHttpError(400, "All fields are required"));
  }

  try {
    const foundUser = await User.findOne({ firstName, lastName, email });

    if (!foundUser) {
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({ firstName, lastName, email, password: hashedPassword });

      const accessToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      };

      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15,
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24,
      };

      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

      res.status(201).json({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
      });
    } else {
      return next(createHttpError(409, "User already exists"));
    }
  } catch (error) {
    console.error("Registration error:", error);
    next(createHttpError(500, "Registration unsuccessful"));
  }
}

export async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      const matchPasswords = await bcrypt.compare(password, foundUser.password);

      if (!matchPasswords) {
        return next(createHttpError(400, "Wrong Password, please try again!"));
      }

      const accessToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" });
      const refreshToken = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });

      const cookieOptions = {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      };

      const accessOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 15,
      };

      const refreshOptions = {
        ...cookieOptions,
        maxAge: 1000 * 60 * 60 * 24,
      };

      res.cookie("accessCookie", accessToken, accessOptions);
      res.cookie("refreshCookie", refreshToken, refreshOptions);

      res.json({
        id: foundUser._id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
      });
    } else {
      return next(createHttpError(404, "No user found"));
    }
  } catch (error) {
    console.error("Login error:", error);
    next(createHttpError(500, "login unsuccessful"));
  }
}

export async function checkAuthentication(req, res, next) {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return next(400, createHttpError("User not found, Authentication failed! Please login."));
    }

    res.json({
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    return next(createHttpError(500, "Authentication failed! Please login again."));
  }
}

export async function updateUser(req, res, next) {
  const { firstName, lastName, email, password } = req.body;
  const { userId } = req.params;
  console.log(userId);
  try {
    const user = await User.findById(userId);
    if (user) {
      const options = {
        new: true,
        runValidators: true,
      };
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          firstName,
          lastName,
          email,
          password,
        },
        options
      );
      res.status(200).json({ message: `${updatedUser.firstName} updated successfully` });
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    res.status(400).send(`Error updating user`);
  }
}

export async function deleteUser(req, res, next) {
  const { userId } = req.params;
  try {
    await User.findByIdAndDelete(userId);
    res.status(200).send(`User deleted successfully`);
  } catch (error) {
    res.status(400).send(`Error deleting user`);
  }
}

export async function getUserData(req, res, next) {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (user) {
      res.json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      return next(createHttpError(404, "User not found"));
    }
  } catch (error) {
    return next(createHttpError(500, "Server error"));
  }
}

export async function addAddress(req, res, next) {
  const { label, address } = req.body;
  const { id } = req.params;

  if (!label || !address) {
    return next(createHttpError(400, "Label and address are required"));
  }

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    const options = {
      new: true,
      runValidators: true,
    };

    const updatedUser = await User.findByIdAndUpdate(id, { $push: { addresses: { label, address } } }, options);

    res.json({ addresses: updatedUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error"));
  }
}

export async function deleteAddress(req, res, next) {
  const { userId, id } = req.params;

  try {
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    foundUser.addresses = foundUser.addresses.filter((address) => address._id.toString() !== id);
    await foundUser.save();

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error"));
  }
}

export async function editAddress(req, res, next) {
  const { editedAddress, editedLabel } = req.body;
  const { id, userId } = req.params;

  if (!editedAddress || !editedLabel) {
    return next(createHttpError(400, "Address and label are required"));
  }

  try {
    const foundUser = await User.findById(userId);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    foundUser.addresses = foundUser.addresses.map((address) =>
      address._id.toString() === id ? { ...address, address: editedAddress, label: editedLabel } : address
    );
    await foundUser.save();

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error"));
  }
}

export async function getAllAddresses(req, res, next) {
  const { id } = req.params;

  try {
    const foundUser = await User.findById(id);

    if (!foundUser) {
      return next(createHttpError(404, "No user found"));
    }

    res.json({ addresses: foundUser.addresses });
  } catch (error) {
    console.error(error);
    return next(createHttpError(500, "Server error"));
  }
}

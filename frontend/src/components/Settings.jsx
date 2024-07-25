import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [originalUser, setOriginalUser] = useState({});
  const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      const { firstName, lastName, email } = loggedInUser;
      setUser({ firstName, lastName, email, password: '' });
      setOriginalUser({ firstName, lastName, email, password: '' });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5002/users/update/${loggedInUser.id}`,
        settings
      );
      if (response.ok) {
        const updatedUser = await response.json();
        setLoggedInUser(updatedUser);
        setOriginalUser({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: '' });
        alert(updatedUser.message);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };

  const handleCancel = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
        };
        const response = await fetch(
          `http://localhost:5002/users/delete/${loggedInUser.id}`,
          settings
        );
        console.log(response);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: '', lastName: '', email: '', password: '' });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <h2>Settings</h2>
        <div>
          <strong>First Name:</strong>
          {!isEditing ? (
            <> {user.firstName}</>
          ) : (
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleChange}
              className="settings-input"
            />
          )}
        </div>
        <div>
          <strong>Last Name:</strong>
          {!isEditing ? (
            <> {user.lastName}</>
          ) : (
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleChange}
              className="settings-input"
            />
          )}
        </div>
        <div>
          <strong>Email:</strong>
          {!isEditing ? (
            <> {user.email}</>
          ) : (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="settings-input"
            />
          )}
        </div>
        <div>
          <strong>Password:</strong>
          {!isEditing ? (
            <> ********</>
          ) : (
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="form-input password-input"
              />
              <span
                className="settings-password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          )}
        </div>
        {!isEditing ? (
          <button type="button" className="settings-edit" onClick={handleEdit}>Edit</button>
        ) : (
          <div className="settings-save-cancel-button-container">
            <button type="button" className="settings-cancel" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="settings-save">Save</button>  
          </div>
        )}
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;

/* import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [originalUser, setOriginalUser] = useState({});
  const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      const { firstName, lastName, email } = loggedInUser;
      setUser({ firstName, lastName, email, password: '' });
      setOriginalUser({ firstName, lastName, email, password: '' });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5002/users/update/${loggedInUser.id}`,
        settings
      );
      if (response.ok) {
        const updatedUser = await response.json();
        setLoggedInUser(updatedUser);
        setOriginalUser({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: '' });
        alert(updatedUser.message);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };

  const handleCancel = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
        };
        const response = await fetch(
          `http://localhost:5002/users/delete/${loggedInUser.id}`,
          settings
        );
        console.log(response);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: '', lastName: '', email: '', password: '' });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <h2>Settings</h2>
        {!isEditing ? (
          <>
            <div>
              <strong>First Name:</strong> {user.firstName}
            </div>
            <div>
              <strong>Last Name:</strong> {user.lastName}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <button type="button" className="settings-edit" onClick={handleEdit}>Edit</button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={user.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={user.lastName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
            />
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                className="form-input password-input"
              />
              <span
                className="settings-password-toggle-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            <button type="submit" className="settings-save">Save</button>
            <button type="button" className="settings-cancel" onClick={handleCancel}>Cancel</button>
          </>
        )}
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;
 */

/* import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [originalUser, setOriginalUser] = useState({});
  const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (loggedInUser) {
      const { firstName, lastName, email } = loggedInUser;
      setUser({ firstName, lastName, email, password: '' });
      setOriginalUser({ firstName, lastName, email, password: '' });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5002/users/update/${loggedInUser.id}`,
        settings
      );
      if (response.ok) {
        const updatedUser = await response.json();
        setLoggedInUser(updatedUser);
        setOriginalUser({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: '' });
        alert(updatedUser.message);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };

  const handleCancel = () => {
    setUser(originalUser);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
        };
        const response = await fetch(
          `http://localhost:5002/users/delete/${loggedInUser.id}`,
          settings
        );
        console.log(response);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: '', lastName: '', email: '', password: '' });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <h2>Settings</h2>
        <input
          type="text"
          name="firstName"
          placeholder={loggedInUser?.firstName || "First Name"}
          value={user.firstName}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <input
          type="text"
          name="lastName"
          placeholder={loggedInUser?.lastName || "Last Name"}
          value={user.lastName}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <input
          type="email"
          name="email"
          placeholder={loggedInUser?.email || "Email"}
          value={user.email}
          onChange={handleChange}
          disabled={!isEditing}
        />
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="form-input password-input"
            disabled={!isEditing}
          />
          <span
            className="settings-password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        {isEditing ? (
          <>
            <button type="submit" className="settings-save">Save</button>
            <button type="button" className="settings-cancel" onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <button type="button" className="settings-edit" onClick={handleEdit}>Edit</button>
        )}
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings; */


/* import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);

  useEffect(() => {
    if (loggedInUser) {
      setUser({
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        email: loggedInUser.email,
        password: '', // Do not prefill password for security reasons
      });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5002/users/update/${loggedInUser.id}`,
        settings
      );
      if (response.ok) {
        const user = await response.json();
        setLoggedInUser(user);
        alert(user.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
        };
        const response = await fetch(
          `http://localhost:5002/users/delete/${loggedInUser.id}`,
          settings
        );
        console.log(response);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: '', lastName: '', email: '', password: '' });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleUpdate}>
        <h2>Settings</h2>
        <input
          type="text"
          name="firstName"
          placeholder={loggedInUser?.firstName || "First Name"}
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder={loggedInUser?.lastName || "Last Name"}
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={loggedInUser?.email || "Email"}
          value={user.email}
          onChange={handleChange}
        />

        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="form-input password-input"
          />
          <span
            className="settings-password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button className="settings-update">Update</button>
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings; */


/* import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

import "../style/Settings.css";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    password: ``,
  });
  const { showPassword, setShowPassword, togglePasswordVisibility } =
    useContext(DataContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userObject = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    };
    const settings = {
      body: JSON.stringify(userObject),
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:5002/users/update/${loggedInUser.id}`,
        settings
      );
      if (response.ok) {
        const user = await response.json();
        setLoggedInUser(user);
        alert(user.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    setShowPassword(false);
  };
  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      try {
        const settings = {
          method: "DELETE",
          // headers: {
          // "Content-Type": "application/JSON"
          //},
          //body: JSON.stringify({ userId: loggedInUser._id})
        };
        const response = await fetch(
          `http://localhost:5002/users/delete/${loggedInUser.id}`,
          settings
        );
        console.log(response);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: ``, lastName: ``, email: ``, password: `` });
          setLoggedInUser(null);
          navigate("/");
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
        console.log(err.message);
      }
    }
  };
  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleUpdate}>
        <h2>Settings</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="form-input password-input"
          />
          <span
            className="settings-password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>
        <button className="settings-update">Update</button>
      </form>
      <button className="settings-delete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;
 */
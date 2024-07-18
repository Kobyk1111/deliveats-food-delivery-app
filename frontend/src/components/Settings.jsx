import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({
    firstName: ``,
    lastName: ``,
    email: ``,
    password: ``,
  });
 const { showPassword, setShowPassword, togglePasswordVisibility } = useContext(DataContext);

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
    <div className="userProfileContainer">
      <form className="userProfileForm" onSubmit={handleUpdate}>
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
        {/* <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        /> */}
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
        <button className="userProfileUpdate">Update</button>
      </form>
      <button className="userProfileDelete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;

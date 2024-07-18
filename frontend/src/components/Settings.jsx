import { useState, useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function Settings() {
  const { loggedInUser, setLoggedInUser } = useContext(DataContext);
  const [user, setUser] = useState({ firstName: ``, lastName: ``, email: ``, password: `` });

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
      const response = await fetch(`http://localhost:5002/users/update/${loggedInUser.id}`, settings);
      if (response.ok) {
        const { message } = await response.json();
        alert(message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
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
        const response = await fetch(`http://localhost:5002/users/delete/${loggedInUser.id}`, settings);

        if (response.ok) {
          const { message } = await response.json();
          alert(message);
          setUser({ firstName: ``, lastName: ``, email: ``, password: `` });
          setLoggedInUser(null);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };
  return (
    <div className="userProfileContainer">
      <form className="userProfileForm" onSubmit={handleUpdate}>
        <h2>Profile</h2>
        <input type="text" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
        <button className="userProfileUpdate">Update</button>
      </form>
      <button className="userProfileDelete" onClick={handleDelete}>
        Delete Account
      </button>
    </div>
  );
}

export default Settings;

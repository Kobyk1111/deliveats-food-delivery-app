import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.jsx";
import CustomModal from "./CustomModal.jsx";

function RegisterAndLogin() {
  // State to check all inputs here
  const [loginInputs, setLoginInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // state to check if user wants to register
  const [isToRegister, setIsToRegister] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setLoggedInUser, setData } = useContext(DataContext);

  // initialize useNavigate hook
  // const navigate = useNavigate();

  // function to handle inputs
  function handleChange(e) {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  }

  // function to run when the form is submitted
  async function handleSubmit(e) {
    e.preventDefault();

    // Since we are doing conditional request, we first declare a variable to contain the object we are sending
    let user;

    // If isToRegister is true, it means the user is registering so we send an object that includes the username field
    // If isToRegister is false, it means the user is logging in so we don't add the username field
    if (isToRegister) {
      user = {
        firstName: loginInputs.firstName,
        lastName: loginInputs.lastName,
        email: loginInputs.email,
        password: loginInputs.password,
      };
    } else {
      user = {
        email: loginInputs.email,
        password: loginInputs.password,
      };
    }

    const settings = {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };

    // If isToRegister is true, we send the request to the register route, if isToRegister is false, then we send the request to the login route
    try {
      const response = await fetch(
        isToRegister
          ? "http://localhost:3002/users/register"
          : "http://localhost:3002/users/login",
        settings
      );

      if (response.ok) {
        const userData = await response.json();

        setLoggedInUser(userData); // We set the loggedInUser in the DataContext.jsx with the userData from the server
        setIsModalOpen(false);
        // navigate("/"); // We then navigate back to the home page.
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    setLoginInputs({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }

  return (
    <div className="register-login-page">
      <div className="button-container">
        <button
          className={`toggle-button ${isToRegister === false ? "active" : ""}`}
          onClick={() => {
            setIsToRegister(false);
            setIsModalOpen(true);
          }}
        >
          Login
        </button>
        <button
          className={`toggle-button ${isToRegister === true ? "active" : ""}`}
          onClick={() => {
            setIsToRegister(true);
            setIsModalOpen(true);
          }}
        >
          Register
        </button>
      </div>

      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {isToRegister !== null && (
          <div className="register-login-container">
            <form onSubmit={handleSubmit} className="form">
              {isToRegister && (
                <div className="name-fields">
                  <label className="form-label">
                    First Name
                    <input
                      type="text"
                      name="firstName"
                      value={loginInputs.firstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Last Name
                    <input
                      type="text"
                      name="lastName"
                      value={loginInputs.lastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </label>
                </div>
              )}
              <label className="form-label">
                Email
                <input
                  type="email"
                  name="email"
                  value={loginInputs.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <label className="form-label">
                Password
                <input
                  type="password"
                  name="password"
                  value={loginInputs.password}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </label>
              <button className="submit-button">
                {isToRegister ? "Register" : "Login"}
              </button>
            </form>
          </div>
        )}
      </CustomModal>
    </div>
  );
}

export default RegisterAndLogin;

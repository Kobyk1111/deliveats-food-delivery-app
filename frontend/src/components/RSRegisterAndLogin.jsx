import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.jsx";
import CustomModal from "./CustomModal.jsx";
import "../style/RSRegisterAndLogin.css";

function RSRegisterAndLogin() {
  // State to check all inputs here
  const [loginInputs, setLoginInputs] = useState({
    basicInfo: {
      businessName: "",
      businessId: "",
      owner: "",
      password: "",
      venueName: "",
      contact: {
        email: "",
        phoneNumber: "",
      },
      address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
      },
      openAndCloseHours: {
        monday: {
          open: "",
          close: "",
        },
        tuesday: {
          open: "",
          close: "",
        },
        wednesday: {
          open: "",
          close: "",
        },
        thursday: {
          open: "",
          close: "",
        },
        friday: {
          open: "",
          close: "",
        },
        saturday: {
          open: "",
          close: "",
        },
        sunday: {
          open: "",
          close: "",
        },
      },
    },
  });
  // state to check if user wants to register
  const [isToRegister, setIsToRegister] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false); // state variable to control the checkbox

  const { setLoggedInRestaurant, showPassword, togglePasswordVisibility } =
    useContext(DataContext);

  // initialize useNavigate hook
  // const navigate = useNavigate();

  // function to handle inputs
  function handleChange(e) {
    const { name, value } = e.target;
    const keys = name.split(".");

    setLoginInputs((prevState) => {
      let newState = { ...prevState };
      let nestedState = newState;

      for (let i = 0; i < keys.length - 1; i++) {
        nestedState = nestedState[keys[i]];
      }

      nestedState[keys[keys.length - 1]] = value;

      return newState;
    });
  }

  // function to handle checkbox
  function handleCheckboxChange(e) {
    setIsTermsChecked(e.target.checked);
  }

  // function to run when the form is submitted
  async function handleSubmit(e) {
    e.preventDefault();

    if (isToRegister && !isTermsChecked) {
      alert("You must agree to the Terms of Use before proceeding.");
      return;
    }

    // Since we are doing conditional request, we first declare a variable to contain the object we are sending
    let user;

    // If isToRegister is true, it means the user is registering so we send an object that includes the username field
    // If isToRegister is false, it means the user is logging in so we don't add the username field
    if (isToRegister) {
      user = {
        basicInfo: {
          businessName: loginInputs.basicInfo.businessName,
          businessId: loginInputs.basicInfo.businessId,
          owner: loginInputs.basicInfo.owner,
          password: loginInputs.basicInfo.password,
          venueName: loginInputs.basicInfo.venueName,
          contact: {
            email: loginInputs.basicInfo.contact.email,
            phoneNumber: loginInputs.basicInfo.contact.phoneNumber,
          },
          address: {
            street: loginInputs.basicInfo.address.street,
            city: loginInputs.basicInfo.address.city,
            state: loginInputs.basicInfo.address.state,
            postalCode: loginInputs.basicInfo.address.postalCode,
          },
          openAndCloseHours: {
            monday: {
              open: loginInputs.basicInfo.openAndCloseHours.monday.open,
              close: loginInputs.basicInfo.openAndCloseHours.monday.close,
            },
            tuesday: {
              open: loginInputs.basicInfo.openAndCloseHours.tuesday.open,
              close: loginInputs.basicInfo.openAndCloseHours.tuesday.close,
            },
            wednesday: {
              open: loginInputs.basicInfo.openAndCloseHours.wednesday.open,
              close: loginInputs.basicInfo.openAndCloseHours.wednesday.close,
            },
            thursday: {
              open: loginInputs.basicInfo.openAndCloseHours.thursday.open,
              close: loginInputs.basicInfo.openAndCloseHours.thursday.close,
            },
            friday: {
              open: loginInputs.basicInfo.openAndCloseHours.friday.open,
              close: loginInputs.basicInfo.openAndCloseHours.friday.close,
            },
            saturday: {
              open: loginInputs.basicInfo.openAndCloseHours.saturday.open,
              close: loginInputs.basicInfo.openAndCloseHours.saturday.close,
            },
            sunday: {
              open: loginInputs.basicInfo.openAndCloseHours.sunday.open,
              close: loginInputs.basicInfo.openAndCloseHours.sunday.close,
            },
          },
        },
      };
    } else {
      user = {
        email: loginInputs.basicInfo.contact.email,
        password: loginInputs.basicInfo.password,
      };
    }

    const settings = {
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    };

    // If isToRegister is true, we send the request to the register route, if isToRegister is false, then we send the request to the login route
    try {
      const response = await fetch(
        isToRegister
          ? "http://localhost:5002/restaurants/register"
          : "http://localhost:5002/restaurants/login",
        settings
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        setLoggedInRestaurant(data.restaurant);
        setIsModalOpen(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }

    setLoginInputs({
      basicInfo: {
        businessName: "",
        businessId: "",
        owner: "",
        password: "",
        venueName: "",
        contact: {
          email: "",
          phoneNumber: "",
        },
        address: {
          street: "",
          city: "",
          state: "",
          postalCode: "",
        },
        openAndCloseHours: {
          monday: {
            open: "",
            close: "",
          },
          tuesday: {
            open: "",
            close: "",
          },
          wednesday: {
            open: "",
            close: "",
          },
          thursday: {
            open: "",
            close: "",
          },
          friday: {
            open: "",
            close: "",
          },
          saturday: {
            open: "",
            close: "",
          },
          sunday: {
            open: "",
            close: "",
          },
        },
      },
    });
    setIsTermsChecked(false); // Reset the checkbox state
  }

  return (
    <>
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

      <CustomModal
        className="restaurant-register-login-modal"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {isToRegister !== null && (
          <form onSubmit={handleSubmit} className="form">
            {isToRegister && (
              <div className="name-fields">
                <label className="form-label">
                  Business Name
                  <input
                    type="text"
                    name="basicInfo.businessName"
                    value={loginInputs.basicInfo.businessName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Business Id
                  <input
                    type="text"
                    name="basicInfo.businessId"
                    value={loginInputs.basicInfo.businessId}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Owner
                  <input
                    type="text"
                    name="basicInfo.owner"
                    value={loginInputs.basicInfo.owner}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Venue Name
                  <input
                    type="text"
                    name="basicInfo.venueName"
                    value={loginInputs.basicInfo.venueName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Phone Number
                  <input
                    type="text"
                    name="basicInfo.contact.phoneNumber"
                    value={loginInputs.basicInfo.contact.phoneNumber}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Street
                  <input
                    type="text"
                    name="basicInfo.address.street"
                    value={loginInputs.basicInfo.address.street}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  City
                  <input
                    type="text"
                    name="basicInfo.address.city"
                    value={loginInputs.basicInfo.address.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  State
                  <input
                    type="text"
                    name="basicInfo.address.state"
                    value={loginInputs.basicInfo.address.state}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </label>
                <label className="form-label">
                  Postal Code
                  <input
                    type="text"
                    name="basicInfo.address.postalCode"
                    value={loginInputs.basicInfo.address.postalCode}
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
                name="basicInfo.contact.email"
                value={loginInputs.basicInfo.contact.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>
            <label className="form-label password-field">
              Password
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  name="basicInfo.password"
                  value={loginInputs.basicInfo.password}
                  onChange={handleChange}
                  required
                  className="form-input password-input"
                />
                <span
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </label>
            {isToRegister && (
              <>
                <h3>Open and Close Hours</h3>
                <h4>Monday</h4>
                <div className="monday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.monday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.monday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.monday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.monday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Tuesday</h4>
                <div className="tuesday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.tuesday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.tuesday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.tuesday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.tuesday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Wednesday</h4>
                <div className="wednesday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.wednesday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.wednesday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.wednesday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.wednesday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Thursday</h4>
                <div className="thursday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.thursday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.thursday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.thursday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.thursday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Friday</h4>
                <div className="friday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.friday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.friday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.friday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.friday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Saturday</h4>
                <div className="saturday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.saturday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.saturday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.saturday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.saturday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
                <h4>Sunday</h4>
                <div className="sunday-container">
                  <label className="form-label">
                    Open
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.sunday.open"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.sunday.open
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                  <label className="form-label">
                    Close
                    <input
                      type="time"
                      name="basicInfo.openAndCloseHours.sunday.close"
                      value={
                        loginInputs.basicInfo.openAndCloseHours.sunday.close
                      }
                      onChange={handleChange}
                      // required
                      className="form-input"
                    />
                  </label>
                </div>
              </>
            )}

            {isToRegister && (
              <label className="checkbox-form-label">
                <input
                  type="checkbox"
                  checked={isTermsChecked}
                  onChange={handleCheckboxChange}
                  required
                  className="form-checkbox"
                />
                <span
                  className="terms-of-use-span"
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {" "}
                  I agree to the Terms of Use.
                </span>
              </label>
            )}

            <button className="submit-button">
              {isToRegister ? "Register" : "Login"}
            </button>
          </form>
        )}
      </CustomModal>
    </>
  );
}

export default RSRegisterAndLogin;

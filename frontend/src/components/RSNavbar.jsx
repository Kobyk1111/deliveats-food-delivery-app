import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import RSRegisterAndLogin from "./RSRegisterAndLogin";
import "../style/RSNavbar.css";

// import RSNavStatus from "./RSNavStatus";

function RSNavbar() {
  const { loggedInRestaurant, logoutRestaurant } = useContext(DataContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <nav className="rs-nav">
        <div className="logo-nav" onClick={() => navigate("/")}>
          DelivEats
          <div>
            <small>for Restaurants</small>
          </div>
        </div>

        {/* <RSNavStatus /> */}

        <div className="buttons-nav">
          {loggedInRestaurant ? (
            <div className="user-info">
              <span className="welcome-message">
                Welcome, {loggedInRestaurant.basicInfo.businessName}!
              </span>
              <button className="logout-button" onClick={logoutRestaurant}>
                    Logout
                  </button>
            </div>
          ) : (
            <RSRegisterAndLogin />
          )}
        </div>
      </nav>
    </>
  );
}

export default RSNavbar;

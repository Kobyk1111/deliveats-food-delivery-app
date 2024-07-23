import { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../style/Navbar.css";
import RestaurantRegisterAndLogin from "./RestaurantRegisterAndLogin";

function RestaurantNavbar() {
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
      <nav>
        <h1 onClick={() => navigate("/")}>DelivEats</h1>
        <div className="basket-and-register-container">
          {loggedInRestaurant ? (
            <div className="user-info" ref={dropdownRef}>
              <span className="welcome-message" onClick={toggleDropdown}>
                Welcome, {loggedInRestaurant.basicInfo.businessName}! {""}
                <FontAwesomeIcon icon={faCaretDown} style={{ color: "#266241" }} />
              </span>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>

                  <button className="logout-button" onClick={logoutRestaurant}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <RestaurantRegisterAndLogin />
          )}
        </div>
      </nav>
    </>
  );
}

export default RestaurantNavbar;

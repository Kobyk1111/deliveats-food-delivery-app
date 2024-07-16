import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import RegisterAndLogin from "./RegisterAndLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCartShopping, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "../style/Navbar.css";

function Navbar() {
  const { loggedInUser, logout } = useContext(DataContext);
  const { basket } = useContext(BasketContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
        {loggedInUser ? (
          <div className="user-info" ref={dropdownRef}>
            <span className="welcome-message" onClick={toggleDropdown}>
              Welcome, {loggedInUser.firstName}! {""}
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ color: "#266241" }}
              />
            </span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  Profile
                </Link>

                <button className="logout-button" onClick={logout}>
                  Logout
                </button>
              </div>
            )}

            <Link to="/BasketPage" className="cart-logo">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#266241" }}
              />
              <span className="item-count">{basket.length}</span>
            </Link>
          </div>
        ) : (
          <RegisterAndLogin />
        )}
      </nav>
    </>
  );
}

export default Navbar;

// const [dropdownOpen, setDropdownOpen] = useState(false);

// const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
// };

{
  /* <nav className="navbar">
        {loggedInUser ? (
          <div className="user-info">
            <span className="welcome-message">
              Welcome, {loggedInUser.firstName}!
            </span>
            <div className="dropdown" ref={dropdownRef}>
              <button className="dropdown-toggle" onClick={toggleDropdown}>
             
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <NavLink
                    to="/profile"
                    className="dropdown-link"
                    onClick={toggleDropdown}
                    activeClassName="active"
                  >
                    Profile
                  </NavLink>
                  <button className="dropdown-link" onClick={logout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
            <Link to="/BasketPage" className="cart-logo">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#266241" }}
              />
              <span className="item-count">{basket.length}</span>
            </Link>
          </div>
        ) : (
          <RegisterAndLogin />
        )}
      </nav> */
}

{
  /* <nav className="navbar">
        {loggedInUser ? (
          <div className="user-info">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {loggedInUser.firstName}
              <FontAwesomeIcon
                icon={faCaretDown}
                style={{ marginLeft: "8px" }}
              />
            </button>
            {dropdownVisible && (
              <div className="dropdown-menu" ref={dropdownRef}>
                <Link
                  to="/profile"
                  className="dropdown-link"
                  onClick={toggleDropdown}
                >
                  Profile
                </Link>
                <button className="dropdown-link" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
            <Link to="/BasketPage" className="cart-logo">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ color: "#266241" }}
              />
              <span className="item-count">{basket.length}</span>
            </Link>
          </div>
        ) : (
          <RegisterAndLogin />
        )}
      </nav> */
}

{
  /* <nav className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <a href="#">Shop</a>
                    Welcome, {loggedInUser.firstName}!
                </li>
                <div className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-toggle">
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#266241' }} />
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#profile" className="dropdown-item">Profile</a>
                                <a href="#logout" className="dropdown-item">Logout</a>
                            </div>
                        )}
                    </div>
                <li className="navbar-item">
                    <div className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-toggle">
                            <FontAwesomeIcon icon={faCartShopping} style={{ color: '#266241' }} />
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown-menu">
                                <a href="#profile" className="dropdown-item">Profile</a>
                                <a href="#logout" className="dropdown-item">Logout</a>
                            </div>
                        )}
                    </div>
                </li>
            </ul>
        </nav> */
}

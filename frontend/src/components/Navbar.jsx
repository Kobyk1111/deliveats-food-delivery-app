import { useContext, useState, useEffect, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext";
import RegisterAndLogin from "./RegisterAndLogin";
import CustomModal from "./CustomModal";
import Basket from "./Basket";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "../style/Navbar.css";

function Navbar() {
  const { loggedInUser, logout } = useContext(DataContext);
  const { totalItemCount } = useContext(BasketContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const [isBasketModalOpen, setIsBasketModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openBasketModal = () => {
    setIsBasketModalOpen(true);
  };

  const closeBasketModal = () => {
    setIsBasketModalOpen(false);
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
          {loggedInUser ? (
            <div className="user-info" ref={dropdownRef}>
              <span className="welcome-message" onClick={toggleDropdown}>
                Welcome, {loggedInUser.firstName}! {""}
                <FontAwesomeIcon icon={faCaretDown} style={{ color: "#266241" }} />
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
            </div>
          ) : (
            <RegisterAndLogin />
          )}
          {/* <Link to="/BasketPage" className="cart-logo">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#266241" }}
            />
            <span className="item-count">{basket.length}</span>
          </Link> */}

          <div className="cart-logo" onClick={openBasketModal}>
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#266241" }} />
            <span className="item-count">{totalItemCount}</span>
          </div>
        </div>
      </nav>

      <CustomModal isOpen={isBasketModalOpen} onClose={closeBasketModal}>
        <Basket isModal={true} />
      </CustomModal>
    </>
  );
}

export default Navbar;

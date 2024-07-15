import RegisterAndLogin from "./RegisterAndLogin";
// import Basket from "./Basket";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { BasketContext } from "../contexts/BasketContext"; 
import { Link } from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.min.css'; 

function Navbar() {

  const { loggedInUser, logout } = useContext(DataContext);

  const { basket } = useContext(BasketContext);

  return (
    <>
      <nav>
        {loggedInUser ? (
          <div className= "user-info">
            <span className="welcome-message">Welcome, {loggedInUser.firstName}!</span>
            <button className="logout-button" onClick={logout}>
              Logout
            </button> 
            <Link to="/manage-orders" className="cart-logo">
            <i className="fas fa-shopping-cart"></i>
            <span className="item-count">{basket.length}</span>
          </Link>
          </div>
        ) : (
          <RegisterAndLogin />
        )
        }
        {/* <Basket /> */}
      </nav>
    </>
  );
}

export default Navbar;

// <nav>
//   <ul>
//     <li>Welcome "username" </li>
//   </ul>
//   <button >Logout</button>
// </nav>

import RegisterAndLogin from "./RegisterAndLogin";
// import Basket from "./Basket";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";


function Navbar() {

  const { loggedInUser, logout } = useContext(DataContext);

  return (
    <>
      <nav>
        {loggedInUser ? (
          <div className= "user-info">
            <span className="welcome-message">Welcome, {loggedInUser.firstName}!</span>
            <button className="logout-button" onClick={logout}>
              Logout
            </button> 
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

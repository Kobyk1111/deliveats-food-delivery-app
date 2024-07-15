import RegisterAndLogin from "./RegisterAndLogin";
// import Basket from "./Basket";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
//import UserProfile from "./UserProfile";

function Settings() {

  const { loggedInUser, setLoggedInUser, showProfile, setShowProfile, logout: contextLogout } = useContext(DataContext);
  
  
  //const [showToggle, setShowToggle] = useState(false);

  const toggleProfile = () => {
    //setLoggedInUser(!loggedInUser)
    setShowProfile(!showProfile);
  };

  /* const toggleShowToggle = () => {
    setShowToggle(!showToggle);
  } */
  const logout = () => {
    setShowProfile(false);
    contextLogout();
  }

  return (
    <>
      <nav>
        {loggedInUser ? (
          <div className= "user-info">
            
            <span className="welcome-message">Welcome, {loggedInUser.firstName}!</span>
            <button className="logout-button" onClick={logout}>
              Logout
            </button> 
            {showProfile && (<button className="profile-button" onClick={toggleProfile}>
               {showProfile ? `Hide Profile` : `Show Profile`}
            </button>)}
          </div>
        ) : (
          <RegisterAndLogin />
        )
        }
        {/* <Basket /> */}
      </nav>
      {loggedInUser && showProfile && <UserProfile />}
    </>
  );
}

export default Settings;

import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container-profile">
        <header className="header-profile">
          <h1 className="title-profile">Profile</h1>
        </header>
        <div className="navbar-profile">
          <ul>
            <li>
              <NavLink to="preferences">Preferences</NavLink>
            </li>
            <li>
              <NavLink to="addresses">Addresses</NavLink>
            </li>
            <li>
              <NavLink to="order-history">Order history</NavLink>
            </li>
            <li>
              <NavLink to="settings">Settings</NavLink>
            </li>
          </ul>
        </div>
        <div className="content-profile"></div>
        <div className="content-profile">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;

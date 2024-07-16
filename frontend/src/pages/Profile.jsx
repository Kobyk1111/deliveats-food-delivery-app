import { Link, Outlet } from "react-router-dom";
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
              <Link to="preferences">Preferences</Link>
            </li>
            <li>
              <Link to="addresses">Addresses</Link>
            </li>
            <li>
              <Link to="order-history">Order history</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
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

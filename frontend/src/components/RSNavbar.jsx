import { useNavigate } from "react-router-dom";

import "../style/RSNavbar.css";
import RSNavStatus from "./RSNavStatus";

function RSNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="rs-nav">
        {/* check this link - changes Navbar */}
        <div className="logo-nav" onClick={() => navigate("/")}>
          DelivEats
          <div>
            <small>for Restaurants</small>
          </div>
        </div>
        <RSNavStatus />

        <div className="buttons-nav">
          <button>register</button>
          <button>login</button>
        </div>
      </nav>
    </>
  );
}

export default RSNavbar;

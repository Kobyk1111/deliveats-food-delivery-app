import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faMortarPestle,
  faUtensils,
  faTruck,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import "../style/RSNavStatus.css";

function RSNavStatus() {
  return (
    <>
      <div className="rs-nav-status">
        <div className="received">
          <FontAwesomeIcon
            icon={faClipboardList}
            style={{ color: "#274691" }}
          />
          <span className="rs-item-count">1</span>
        </div>
        <div className="preparing">
          <FontAwesomeIcon icon={faMortarPestle} style={{ color: "#274691" }} />
          <span className="rs-item-count">4</span>
        </div>
        <div className="ready">
          <FontAwesomeIcon icon={faUtensils} style={{ color: "#274691" }} />
          <span className="rs-item-count">2</span>
        </div>
        <div className="delivery">
          <FontAwesomeIcon icon={faTruck} style={{ color: "#274691" }} />
          <span className="rs-item-count">3</span>
        </div>
        <div className="completed">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            style={{ color: "#274691" }}
          />
          <span className="rs-item-count">5</span>
        </div>
      </div>
    </>
  );
}

export default RSNavStatus;

import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faMortarPestle,
  faUtensils,
  faTruck,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import { DataContext } from "../contexts/DataContext";

import "../style/RSNavStatus.css";

function RSNavStatus() {
  const { orderCounts } = useContext(DataContext);

  return (
    <>
      <div className="rs-nav-status">
        <div className="received">
          <FontAwesomeIcon
            icon={faClipboardList}
            style={{ color: "#274691" }}
          />
          <span className="rs-item-count">{orderCounts.received}</span>
        </div>
        <div className="preparing">
          <FontAwesomeIcon icon={faMortarPestle} style={{ color: "#274691" }} />
          <span className="rs-item-count">{orderCounts.preparing}</span>
        </div>
        <div className="ready">
          <FontAwesomeIcon icon={faUtensils} style={{ color: "#274691" }} />
          <span className="rs-item-count">{orderCounts.ready}</span>
        </div>
        <div className="delivery">
          <FontAwesomeIcon icon={faTruck} style={{ color: "#274691" }} />
          <span className="rs-item-count">{orderCounts.delivery}</span>
        </div>
        <div className="completed">
          <FontAwesomeIcon
            icon={faClipboardCheck}
            style={{ color: "#274691" }}
          />
          <span className="rs-item-count">{orderCounts.completed}</span>
        </div>
      </div>
    </>
  );
}

export default RSNavStatus;

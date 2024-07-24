import "../style/RSProfile.css";

import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function RSProfile() {
  const { loggedInRestaurant } = useContext(DataContext);

  return (
    <>
      <div className="rs-profile-container">
        <div className="basic-info">
          <h3>Basic Info</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Business Name:</strong>{" "}
              {loggedInRestaurant.basicInfo.businessName}
            </div>
            <div>
              <strong>Business ID:</strong>{" "}
              {loggedInRestaurant.basicInfo.businessId}
            </div>
            <div>
              <strong>Owner:</strong> {loggedInRestaurant.basicInfo.owner}
            </div>
            <div>
              <strong>Venue Name:</strong>{" "}
              {loggedInRestaurant.basicInfo.venueName}
            </div>
            <div>
              <strong>Password:</strong>{" "}
              {/* {loggedInRestaurant.basicInfo.password} */}
            </div>
          </div>
        </div>
        <div className="contact-information">
          <h3>Contact Information</h3>

          <div className="rs-profile-section">
            <div>
              <strong>Email:</strong>{" "}
              {loggedInRestaurant.basicInfo.contact.email}
            </div>
            <div>
              <strong>Phone Number:</strong>{" "}
              {loggedInRestaurant.basicInfo.contact.phoneNumber}
            </div>
          </div>
        </div>
        <div className="address">
          <h3>Address</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Street:</strong>{" "}
              {loggedInRestaurant.basicInfo.address.street}
            </div>
            <div>
              <strong>City:</strong> {loggedInRestaurant.basicInfo.address.city}
            </div>
            <div>
              <strong>State:</strong>{" "}
              {loggedInRestaurant.basicInfo.address.state}
            </div>
            <div>
              <strong>Postal Code:</strong>{" "}
              {loggedInRestaurant.basicInfo.address.postalCode}
            </div>
          </div>
        </div>
        <div className="digital-presence">
          <h3>Digital Presence</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Facebook:</strong>{" "}
              {/* {
                loggedInRestaurant.basicInfo.digitalPresence.socialMedia
                  .facebook
              } */}
            </div>
            <div>
              <strong>Instagram:</strong>{" "}
              {/* {
                loggedInRestaurant.basicInfo.digitalPresence.socialMedia
                  .instagram
              } */}
            </div>
          </div>
        </div>
        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Monday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.monday.open} -{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.monday.close}
            </div>
            <div>
              <strong>Tuesday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.tuesday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.tuesday.close}
            </div>
            <div>
              <strong>Wednesday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.wednesday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.wednesday.close}
            </div>
            <div>
              <strong>Thursday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.thursday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.thursday.close}
            </div>
            <div>
              <strong>Friday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.friday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.friday.close}
            </div>
            <div>
              <strong>Saturday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.saturday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.saturday.close}
            </div>
            <div>
              <strong>Sunday:</strong>{" "}
              {loggedInRestaurant.basicInfo.openAndCloseHours.sunday.open} -
              {loggedInRestaurant.basicInfo.openAndCloseHours.sunday.close} 

            </div>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </div>
    </>
  );
}

export default RSProfile;

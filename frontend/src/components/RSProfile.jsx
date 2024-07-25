import "../style/RSProfile.css";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

function RSProfile() {
  const { loggedInRestaurant, handleHTTPRequestWithToken } = useContext(DataContext);

  // State for editing modes
  const [editingSection, setEditingSection] = useState(null);

  // State for input values and original values
  const [basicInfo, setBasicInfo] = useState(loggedInRestaurant.basicInfo);
  const [originalBasicInfo, setOriginalBasicInfo] = useState(loggedInRestaurant.basicInfo);
  
  const [contact, setContact] = useState(loggedInRestaurant.basicInfo.contact);
  const [originalContact, setOriginalContact] = useState(loggedInRestaurant.basicInfo.contact);
  
  const [address, setAddress] = useState(loggedInRestaurant.basicInfo.address);
  const [originalAddress, setOriginalAddress] = useState(loggedInRestaurant.basicInfo.address);
  
  const [digitalPresence, setDigitalPresence] = useState(loggedInRestaurant.digitalPresence);
  const [originalDigitalPresence, setOriginalDigitalPresence] = useState(loggedInRestaurant.digitalPresence);
  
  const [openingHours, setOpeningHours] = useState(loggedInRestaurant.openAndCloseHours);
  const [originalOpeningHours, setOriginalOpeningHours] = useState(loggedInRestaurant.openAndCloseHours);

  // Handle input changes
  const handleInputChange = (section, field, value) => {
    switch (section) {
      case "basicInfo":
        setBasicInfo({ ...basicInfo, [field]: value });
        break;
      case "contact":
        setContact({ ...contact, [field]: value });
        break;
      case "address":
        setAddress({ ...address, [field]: value });
        break;
      case "digitalPresence":
        setDigitalPresence({ ...digitalPresence, socialMedia: { ...digitalPresence.socialMedia, [field]: value } });
        break;
      case "openingHours":
        setOpeningHours({ ...openingHours, [field]: value });
        break;
      default:
        break;
    }
  };

  // Handle edit button click
  const handleEdit = (section) => {
    setEditingSection(section);
  };

  // Handle save button click
  const handleSave = async (section) => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ [section]: eval(section) }),
    };

    try {
      const response = await handleHTTPRequestWithToken(
        `http://localhost:5002/restaurants/update/${loggedInRestaurant.id}/${section}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        switch (section) {
          case "basicInfo":
            setBasicInfo(data.basicInfo);
            setOriginalBasicInfo(data.basicInfo);
            break;
          case "contact":
            setContact(data.contact);
            setOriginalContact(data.contact);
            break;
          case "address":
            setAddress(data.address);
            setOriginalAddress(data.address);
            break;
          case "digitalPresence":
            setDigitalPresence(data.digitalPresence);
            setOriginalDigitalPresence(data.digitalPresence);
            break;
          case "openingHours":
            setOpeningHours(data.openingHours);
            setOriginalOpeningHours(data.openingHours);
            break;
          default:
            break;
        }
        setEditingSection(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Handle cancel button click
  const handleCancel = (section) => {
    switch (section) {
      case "basicInfo":
        setBasicInfo(originalBasicInfo);
        break;
      case "contact":
        setContact(originalContact);
        break;
      case "address":
        setAddress(originalAddress);
        break;
      case "digitalPresence":
        setDigitalPresence(originalDigitalPresence);
        break;
      case "openingHours":
        setOpeningHours(originalOpeningHours);
        break;
      default:
        break;
    }
    setEditingSection(null);
  };

  return (
    <div className="rs-profile-container">
      <div className="basic-info">
        <h3>Basic Info</h3>
        <div className="rs-profile-section">
          {editingSection === "basicInfo" ? (
            <>
              <div>
                <strong>Business Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessName}
                  onChange={(e) => handleInputChange("basicInfo", "businessName", e.target.value)}
                />
              </div>
              <div>
                <strong>Business ID:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessId}
                  onChange={(e) => handleInputChange("basicInfo", "businessId", e.target.value)}
                />
              </div>
              <div>
                <strong>Owner:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.owner}
                  onChange={(e) => handleInputChange("basicInfo", "owner", e.target.value)}
                />
              </div>
              <div>
                <strong>Venue Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.venueName}
                  onChange={(e) => handleInputChange("basicInfo", "venueName", e.target.value)}
                />
              </div>
              <button className="edit-button" onClick={() => handleSave("basicInfo")}>Save</button>
              <button className="edit-button" onClick={() => handleCancel("basicInfo")}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Business Name:</strong> {basicInfo.businessName}
              </div>
              <div>
                <strong>Business ID:</strong> {basicInfo.businessId}
              </div>
              <div>
                <strong>Owner:</strong> {basicInfo.owner}
              </div>
              <div>
                <strong>Venue Name:</strong> {basicInfo.venueName}
              </div>
              <button className="edit-button" onClick={() => handleEdit("basicInfo")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="contact-information">
        <h3>Contact Information</h3>
        <div className="rs-profile-section">
          {editingSection === "contact" ? (
            <>
              <div>
                <strong>Email:</strong>{" "}
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => handleInputChange("contact", "email", e.target.value)}
                />
              </div>
              <div>
                <strong>Phone Number:</strong>{" "}
                <input
                  type="text"
                  value={contact.phoneNumber}
                  onChange={(e) => handleInputChange("contact", "phoneNumber", e.target.value)}
                />
              </div>
              <button className="edit-button" onClick={() => handleSave("contact")}>Save</button>
              <button className="edit-button" onClick={() => handleCancel("contact")}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Phone Number:</strong> {contact.phoneNumber}
              </div>
              <button className="edit-button" onClick={() => handleEdit("contact")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="address">
        <h3>Address</h3>
        <div className="rs-profile-section">
          {editingSection === "address" ? (
            <>
              <div>
                <strong>Street:</strong>{" "}
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => handleInputChange("address", "street", e.target.value)}
                />
              </div>
              <div>
                <strong>City:</strong>{" "}
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleInputChange("address", "city", e.target.value)}
                />
              </div>
              <div>
                <strong>State:</strong>{" "}
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => handleInputChange("address", "state", e.target.value)}
                />
              </div>
              <div>
                <strong>Postal Code:</strong>{" "}
                <input
                  type="text"
                  value={address.postalCode}
                  onChange={(e) => handleInputChange("address", "postalCode", e.target.value)}
                />
              </div>
              <button className="edit-button" onClick={() => handleSave("address")}>Save</button>
              <button className="edit-button" onClick={() => handleCancel("address")}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Street:</strong> {address.street}
              </div>
              <div>
                <strong>City:</strong> {address.city}
              </div>
              <div>
                <strong>State:</strong> {address.state}
              </div>
              <div>
                <strong>Postal Code:</strong> {address.postalCode}
              </div>
              <button className="edit-button" onClick={() => handleEdit("address")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="digital-presence">
        <h3>Digital Presence</h3>
        <div className="rs-profile-section">
          {editingSection === "digitalPresence" ? (
            <>
              <div>
                <strong>Facebook:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.facebook}
                  onChange={(e) => handleInputChange("digitalPresence", "facebook", e.target.value)}
                />
              </div>
              <div>
                <strong>Instagram:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.instagram}
                  onChange={(e) => handleInputChange("digitalPresence", "instagram", e.target.value)}
                />
              </div>
              <button className="edit-button" onClick={() => handleSave("digitalPresence")}>Save</button>
              <button className="edit-button" onClick={() => handleCancel("digitalPresence")}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Facebook:</strong> {digitalPresence.socialMedia.facebook}
              </div>
              <div>
                <strong>Instagram:</strong> {digitalPresence.socialMedia.instagram}
              </div>
              <button className="edit-button" onClick={() => handleEdit("digitalPresence")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <div className="rs-profile-section">
          {editingSection === "openingHours" ? (
            <>
              <div>
                <strong>Monday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.monday}
                  onChange={(e) => handleInputChange("openingHours", "monday", e.target.value)}
                />
              </div>
              <div>
                <strong>Tuesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.tuesday}
                  onChange={(e) => handleInputChange("openingHours", "tuesday", e.target.value)}
                />
              </div>
              <div>
                <strong>Wednesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.wednesday}
                  onChange={(e) => handleInputChange("openingHours", "wednesday", e.target.value)}
                />
              </div>
              <div>
                <strong>Thursday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.thursday}
                  onChange={(e) => handleInputChange("openingHours", "thursday", e.target.value)}
                />
              </div>
              <div>
                <strong>Friday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.friday}
                  onChange={(e) => handleInputChange("openingHours", "friday", e.target.value)}
                />
              </div>
              <div>
                <strong>Saturday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.saturday}
                  onChange={(e) => handleInputChange("openingHours", "saturday", e.target.value)}
                />
              </div>
              <div>
                <strong>Sunday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.sunday}
                  onChange={(e) => handleInputChange("openingHours", "sunday", e.target.value)}
                />
              </div>
              <button className="edit-button" onClick={() => handleSave("openingHours")}>Save</button>
              <button className="edit-button" onClick={() => handleCancel("openingHours")}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Monday:</strong> {openingHours.monday}
              </div>
              <div>
                <strong>Tuesday:</strong> {openingHours.tuesday}
              </div>
              <div>
                <strong>Wednesday:</strong> {openingHours.wednesday}
              </div>
              <div>
                <strong>Thursday:</strong> {openingHours.thursday}
              </div>
              <div>
                <strong>Friday:</strong> {openingHours.friday}
              </div>
              <div>
                <strong>Saturday:</strong> {openingHours.saturday}
              </div>
              <div>
                <strong>Sunday:</strong> {openingHours.sunday}
              </div>
              <button className="edit-button" onClick={() => handleEdit("openingHours")}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RSProfile;


/* import "../style/RSProfile.css";

import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

function RSProfile() {
  const { loggedInRestaurant, handleHTTPRequestWithToken } = useContext(DataContext);
  
  // State for editing modes
  const [editingSection, setEditingSection] = useState(null);

  // State for input values
  const [basicInfo, setBasicInfo] = useState(loggedInRestaurant.basicInfo);
  const [contact, setContact] = useState(loggedInRestaurant.basicInfo.contact);
  const [address, setaddress] = useState(loggedInRestaurant.basicInfo.address);
  const [digitalPresence, setDigitalPresence] = useState(loggedInRestaurant.digitalPresence);
  const [openingHours, setOpeningHours] = useState(loggedInRestaurant.openAndCloseHours);

  // Handle input changes

  const handleInputChange = (section, field, value) => {
    switch (section){
      case "basicInfo":
        setBasicInfo({ ...basicInfo, [field]: value });
        break;
      case "contact":
        setContact({ ...contact, [field]: value });
        break;
      case "address":
        setaddress({ ...address, [field]: value});
        break;
      case "digitalPresence":
        setDigitalPresence({ ...digitalPresence, socialMedia: { ...digitalPresence.socialMedia, [field]: value}});
        break;
      case "openingHours":
        setOpeningHours({ ...openingHours, [field]: value});
        break;
      default:
        break;
    }
  };

  // Handle edit button click
  const handleEdit = (section) => {
    setEditingSection(section);
  }

  // Handle save button click
  const handleSave = async (section) => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ [section]: eval(section) }),
    };
    try {
      const response = await handleHTTPRequestWithToken(
        `http://localhost:5002/restaurants/update/${loggedInRestaurant.id}/${section}`, settings

      );
      if (response.ok){
        const data = await response.json();
        switch (section){
          case "basicInfo":
            setBasicInfo(data.basicInfo);
            break;
          case "contact":
            setContact(data.contact);
            break;
          case "address":
            setaddress(data.address);
            break;
          case "digitalPresence":
            setDigitalPresence(data.digitalPresence);
            break;
          case "openingHours":
            setOpeningHours(data.openingHours);
            break;
          default:
            break;
        } 
        setEditingSection(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Handle cancel button click

  const handleCancel = () => {
    setEditingSection(null);
    setBasicInfo(loggedInRestaurant.basicInfo);
    setContact(loggedInRestaurant.basicInfo.contact);
    setaddress(loggedInRestaurant.basicInfo.address);
    setDigitalPresence(loggedInRestaurant.digitalPresence);
    setOpeningHours(loggedInRestaurant.openAndCloseHours);
  };

  return (
    <div className="rs-profile-container">
      <div className="basic-info">
        <h3>Basic Info</h3>
        <div className="rs-profile-section">
          {editingSection === "basicInfo" ? (
            <>
              <div>
                <strong>Business Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessName}
                  onChange={(e) => handleInputChange("basicInfo", "businessName", e.target.value)}
                />
              </div>
              <div>
                <strong>Business ID:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.businessId}
                  onChange={(e) => handleInputChange("basicInfo", "businessId", e.target.value)}
                />
              </div>
              <div>
                <strong>Owner:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.owner}
                  onChange={(e) => handleInputChange("basicInfo", "owner", e.target.value)}
                />
              </div>
              <div>
                <strong>Venue Name:</strong>{" "}
                <input
                  type="text"
                  value={basicInfo.venueName}
                  onChange={(e) => handleInputChange("basicInfo", "venueName", e.target.value)}
                />
              </div>
              <button onClick={() => handleSave("basicInfo")}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Business Name:</strong> {basicInfo.businessName}
              </div>
              <div>
                <strong>Business ID:</strong> {basicInfo.businessId}
              </div>
              <div>
                <strong>Owner:</strong> {basicInfo.owner}
              </div>
              <div>
                <strong>Venue Name:</strong> {basicInfo.venueName}
              </div>
              <button onClick={() => handleEdit("basicInfo")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="contact-information">
        <h3>Contact Information</h3>
        <div className="rs-profile-section">
          {editingSection === "contact" ? (
            <>
              <div>
                <strong>Email:</strong>{" "}
                <input
                  type="email"
                  value={contact.email}
                  onChange={(e) => handleInputChange("contact", "email", e.target.value)}
                />
              </div>
              <div>
                <strong>Phone Number:</strong>{" "}
                <input
                  type="text"
                  value={contact.phoneNumber}
                  onChange={(e) => handleInputChange("contact", "phoneNumber", e.target.value)}
                />
              </div>
              <button onClick={() => handleSave("contact")}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Email:</strong> {contact.email}
              </div>
              <div>
                <strong>Phone Number:</strong> {contact.phoneNumber}
              </div>
              <button onClick={() => handleEdit("contact")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="address">
        <h3>Address</h3>
        <div className="rs-profile-section">
          {editingSection === "address" ? (
            <>
              <div>
                <strong>Street:</strong>{" "}
                <input
                  type="text"
                  value={address.street}
                  onChange={(e) => handleInputChange("address", "street", e.target.value)}
                />
              </div>
              <div>
                <strong>City:</strong>{" "}
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => handleInputChange("address", "city", e.target.value)}
                />
              </div>
              <div>
                <strong>State:</strong>{" "}
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => handleInputChange("address", "state", e.target.value)}
                />
              </div>
              <div>
                <strong>Postal Code:</strong>{" "}
                <input
                  type="text"
                  value={address.postalCode}
                  onChange={(e) => handleInputChange("address", "postalCode", e.target.value)}
                />
              </div>
              <button onClick={() => handleSave("address")}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Street:</strong> {address.street}
              </div>
              <div>
                <strong>City:</strong> {address.city}
              </div>
              <div>
                <strong>State:</strong> {address.state}
              </div>
              <div>
                <strong>Postal Code:</strong> {address.postalCode}
              </div>
              <button onClick={() => handleEdit("address")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="digital-presence">
        <h3>Digital Presence</h3>
        <div className="rs-profile-section">
          {editingSection === "digitalPresence" ? (
            <>
              <div>
                <strong>Facebook:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.facebook}
                  onChange={(e) => handleInputChange("digitalPresence", "facebook", e.target.value)}
                />
              </div>
              <div>
                <strong>Instagram:</strong>{" "}
                <input
                  type="text"
                  value={digitalPresence.socialMedia.instagram}
                  onChange={(e) => handleInputChange("digitalPresence", "instagram", e.target.value)}
                />
              </div>
              <button onClick={() => handleSave("digitalPresence")}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Facebook:</strong> {digitalPresence.socialMedia.facebook}
              </div>
              <div>
                <strong>Instagram:</strong> {digitalPresence.socialMedia.instagram}
              </div>
              <button onClick={() => handleEdit("digitalPresence")}>Edit</button>
            </>
          )}
        </div>
      </div>

      <div className="opening-hours">
        <h3>Opening Hours</h3>
        <div className="rs-profile-section">
          {editingSection === "openingHours" ? (
            <>
              <div>
                <strong>Monday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.monday}
                  onChange={(e) => handleInputChange("openingHours", "monday", e.target.value)}
                />
              </div>
              <div>
                <strong>Tuesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.tuesday}
                  onChange={(e) => handleInputChange("openingHours", "tuesday", e.target.value)}
                />
              </div>
              <div>
                <strong>Wednesday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.wednesday}
                  onChange={(e) => handleInputChange("openingHours", "wednesday", e.target.value)}
                />
              </div>
              <div>
                <strong>Thursday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.thursday}
                  onChange={(e) => handleInputChange("openingHours", "thursday", e.target.value)}
                />
              </div>
              <div>
                <strong>Friday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.friday}
                  onChange={(e) => handleInputChange("openingHours", "friday", e.target.value)}
                />
              </div>
              <div>
                <strong>Saturday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.saturday}
                  onChange={(e) => handleInputChange("openingHours", "saturday", e.target.value)}
                />
              </div>
              <div>
                <strong>Sunday:</strong>{" "}
                <input
                  type="text"
                  value={openingHours.sunday}
                  onChange={(e) => handleInputChange("openingHours", "sunday", e.target.value)}
                />
              </div>
              <button onClick={() => handleSave("openingHours")}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <div>
                <strong>Monday:</strong> {openingHours.monday}
              </div>
              <div>
                <strong>Tuesday:</strong> {openingHours.tuesday}
              </div>
              <div>
                <strong>Wednesday:</strong> {openingHours.wednesday}
              </div>
              <div>
                <strong>Thursday:</strong> {openingHours.thursday}
              </div>
              <div>
                <strong>Friday:</strong> {openingHours.friday}
              </div>
              <div>
                <strong>Saturday:</strong> {openingHours.saturday}
              </div>
              <div>
                <strong>Sunday:</strong> {openingHours.sunday}
              </div>
              <button onClick={() => handleEdit("openingHours")}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}


export default RSProfile;
 */
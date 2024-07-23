import "../style/RSProfile.css";

function RSProfile() {
  const profile = {
    businessName: "Gourmet Haven",
    businessId: "12/345/67890",
    owner: "Jane Doe",
    venueName: "Gourmet",
    contact: {
      email: "janedoe@gourmethaven.com",
      phoneNumber: "+1234567890",
    },
    address: {
      street: "123 Foodie Lane",
      city: "Culinary City",
      state: "Gastronomy",
      zipCode: "12345",
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "closed",
    },
    digitalPresence: {
      photos: [
        "https://www.hvarstaste.com/photos/restaurant1.jpg",
        "https://www.hvarstaste.com/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/hvarstaste",
        instagram: "http://www.instagram.com/hvarstaste",
      },
    },
  };

  return (
    <>
      <div className="rs-profile-container">
        <div className="basic-info">
          <h3>Basic Info</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Business Name:</strong> {profile.businessName}
            </div>
            <div>
              <strong>Business ID:</strong> {profile.businessId}
            </div>
            <div>
              <strong>Owner:</strong> {profile.owner}
            </div>
            <div>
              <strong>Venue Name:</strong> {profile.venueName}
            </div>
          </div>
        </div>
        <div className="contact-information">
          <h3>Contact Information</h3>

          <div className="rs-profile-section">
            <div>
              <strong>Email:</strong> {profile.contact.email}
            </div>
            <div>
              <strong>Phone Number:</strong> {profile.contact.phoneNumber}
            </div>
          </div>
        </div>
        <div className="address">
          <h3>Address</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Street:</strong> {profile.address.street}
            </div>
            <div>
              <strong>City:</strong> {profile.address.city}
            </div>
            <div>
              <strong>State:</strong> {profile.address.state}
            </div>
            <div>
              <strong>Zip Code:</strong> {profile.address.zipCode}
            </div>
          </div>
        </div>
        <div className="digital-presence">
          <h3>Digital Presence</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Facebook:</strong>{" "}
              {profile.digitalPresence.socialMedia.facebook}
            </div>
            <div>
              <strong>Instagram:</strong>{" "}
              {profile.digitalPresence.socialMedia.instagram}
            </div>
          </div>
        </div>
        <div className="opening-hours">
          <h3>Opening Hours</h3>
          <div className="rs-profile-section">
            <div>
              <strong>Monday:</strong> {profile.openAndCloseHours.monday}
            </div>
            <div>
              <strong>Tuesday:</strong> {profile.openAndCloseHours.tuesday}
            </div>
            <div>
              <strong>Wednesday:</strong> {profile.openAndCloseHours.wednesday}
            </div>
            <div>
              <strong>Thursday:</strong> {profile.openAndCloseHours.thursday}
            </div>
            <div>
              <strong>Friday:</strong> {profile.openAndCloseHours.friday}
            </div>
            <div>
              <strong>Saturday:</strong> {profile.openAndCloseHours.saturday}
            </div>
            <div>
              <strong>Sunday:</strong> {profile.openAndCloseHours.sunday}
            </div>
          </div>
        </div>
        <button className="edit-button">Edit</button>
      </div>
    </>
  );
}

export default RSProfile;

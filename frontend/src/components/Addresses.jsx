import "../style/Adressess.css";
import { useContext, useEffect, useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { DataContext } from "../contexts/DataContext";

function Addresses() {
  const { loggedInUser, handleHTTPRequestWithToken } = useContext(DataContext);
  const [addresses, setAddresses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState("");
  const [editedLabel, setEditedLabel] = useState("");
  const [label, setLabel] = useState("");
  const [address, setAddress] = useState("");

  function handleEdit(id) {
    setEditingId(id);
    const addressToEdit = addresses.find((address) => address._id === id);
    setEditedAddress(addressToEdit.address);
    setEditedLabel(addressToEdit.label);
  }

  function handleLabelChange(e) {
    setEditedLabel(e.target.value);
  }

  function handlePlaceSelected(place) {
    setAddress(place.formatted_address);
  }

  function handleCancel() {
    setEditingId(null);
  }

  useEffect(() => {
    async function getAllAddresses() {
      try {
        const response = await fetch(`http://localhost:5002/users/getAllAddresses/${loggedInUser.id}`);

        if (response.ok) {
          const data = await response.json();
          setAddresses(data.addresses);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }

    if (loggedInUser) {
      getAllAddresses();
    }
  }, [loggedInUser]);

  async function handleSave(id) {
    const settings = {
      method: "POST",
      body: JSON.stringify({ editedAddress, editedLabel }),
      headers: {
        "Content-Type": "application/JSON",
      },
    };

    try {
      const response = await fetch(
        `http://localhost:5002/users/editAddress/${loggedInUser.id}/addresses/${id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setEditingId(null);
  }

  async function handleDelete(id) {
    const settings = {
      method: "DELETE",
    };

    try {
      const response = await fetch(
        `http://localhost:5002/users/deleteAddress/${loggedInUser.id}/addresses/${id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ label, address }),
    };

    try {
      const response = await handleHTTPRequestWithToken(
        `http://localhost:5002/users/addAddress/${loggedInUser.id}`,
        settings
      );

      if (response.ok) {
        const data = await response.json();
        setAddresses(data.addresses);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setLabel("");
    setAddress("");
  }

  return (
    <div className="address-book">
      <h2>Addresses</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="eg. Home, Office, Other"
            required
          />
          <Autocomplete
            apiKey={import.meta.env.VITE_GOOGLE_API}
            value={address}
            onPlaceSelected={handlePlaceSelected}
            options={{
              types: ["address"],
            }}
            placeholder="Address"
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className="add-address-button">Add New Address</button>
      </form>
      <ul>
        {addresses.length === 0 ? (
          <h3>You have no saved addresses</h3>
        ) : (
          addresses.map((address) => (
            <li key={address._id} className="address-item">
              {editingId === address._id ? (
                <div className="address-edit">
                  <input type="text" value={editedLabel} onChange={handleLabelChange} placeholder="Label" required />
                  <Autocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_API}
                    value={editedAddress}
                    onPlaceSelected={(place) => setEditedAddress(place.formatted_address)}
                    options={{
                      types: ["address"],
                    }}
                    placeholder="Address"
                    required
                    onChange={(e) => setEditedAddress(e.target.value)}
                  />
                  <button onClick={() => handleSave(address._id)} className="save-button">
                    Save
                  </button>
                  <button onClick={handleCancel} className="cancel-button">
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="address-view">
                  <div className="address-label">{address.label}</div>
                  <div className="address-details">{address.address}</div>
                  <div className="address-actions">
                    <button onClick={() => handleEdit(address._id)} className="edit-button">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(address._id)} className="delete-button">
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Addresses;

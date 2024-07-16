import { useState } from "react";
import "../style/Adressess.css";

function Addresses() {
  const [addresses, setAddresses] = useState([
    { id: 1, label: "Home", address: "Degerstraße 44" },
    { id: 2, label: "Other", address: "Gladbacher Straße 12" },
    { id: 3, label: "Casa Flavia", address: "Albertstraße 102" },
    { id: 4, label: "Velvet", address: "Stresemannstraße 8" },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState("");

  const handleEdit = (id) => {
    setEditingId(id);
    const addressToEdit = addresses.find((address) => address.id === id);
    setEditedAddress(addressToEdit.address);
  };

  const handleSave = (id) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, address: editedAddress } : address
    );
    setAddresses(updatedAddresses);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleAddNewAddress = () => {
    const newAddress = {
      id: addresses.length + 1,
      label: "New Address",
      address: "New Address Street 1",
    };
    setAddresses([...addresses, newAddress]);
  };

  const handleChange = (e) => {
    setEditedAddress(e.target.value);
  };

  return (
    <div className="address-book">
      <h2>Addresses</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id} className="address-item">
            {editingId === address.id ? (
              <div className="address-edit">
                <input
                  type="text"
                  value={editedAddress}
                  onChange={handleChange}
                />
                <button onClick={() => handleSave(address.id)}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div className="address-info">
                <div className="address-label">{address.label}</div>
                <div className="address-details">{address.address}</div>
                <div className="address-actions">
                  <button onClick={() => handleEdit(address.id)}>Edit</button>
                  <button onClick={() => handleDelete(address.id)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <button className="add-address-button" onClick={handleAddNewAddress}>
        Add New Address
      </button>
    </div>
  );
}

export default Addresses;

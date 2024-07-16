

import "../style/Adressess.css";


import React, { useState } from 'react';

function Addresses() {
  const [addresses, setAddresses] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState('');
  const [editedLabel, setEditedLabel] = useState('');
  const [label, setLabel] = useState('');
  const [address, setAddress] = useState('');


  const handleEdit = (id) => {
    setEditingId(id);
    const addressToEdit = addresses.find((address) => address.id === id);
    setEditedAddress(addressToEdit.address);
    setEditedLabel(addressToEdit.label);
  };

  const handleSave = (id) => {

    const updatedAddresses = addresses.map(address =>
      address.id === id ? { ...address, address: editedAddress, label: editedLabel } : address

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


  const handleAddNewAddress = (e) => {
    e.preventDefault();

    const newAddress = { id: addresses.length + 1, label: label, address: address };

    setAddresses([...addresses, newAddress]);
    setLabel('');
    setAddress('');
    
  };

  const handleAddressChange = (e) => {
    setEditedAddress(e.target.value);
  };

  const handleLabelChange = (e) => {
    setEditedLabel(e.target.value);
  };

  return (
    <div className="address-book">
      <h2>Addresses</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id} className="address-item">
            {editingId === address.id ? (
              <div className="address-edit">

                <input type="text" value={editedLabel} onChange={handleLabelChange} placeholder="Label" required />
                <input type="text" value={editedAddress} onChange={handleAddressChange} placeholder="Address" required />
                <button onClick={() => handleSave(address.id)} className="save-button">Save</button>
                <button onClick={handleCancel} className="cancel-button">Cancel</button>
              </div>
            ) : (
              <div className="address-view">
                <div className="address-label">{address.label}</div>
                <div className="address-details">{address.address}</div>
                <div className="address-actions">

                  <button onClick={() => handleEdit(address.id)} className="edit-button">Edit</button>
                  <button onClick={() => handleDelete(address.id)} className="delete-button">Delete</button>

                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <form>
        <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Label" required />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
        <button className="add-address-button" onClick={handleAddNewAddress}>Add New Address</button>
      </form>

    </div>
  );
}

export default Addresses;

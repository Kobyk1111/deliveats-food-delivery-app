import "../style/RSMenu.css";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

function RSMenu() {
  const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newMenuData, setNewMenuData] = useState({});

  const handleEditClick = (category) => {
    setEditingCategory(category);
    const categoryData = loggedInRestaurant.menu.find(cat => cat.category === category);
    setNewMenuData({ ...categoryData });
  };

  const handleInputChange = (index, field, value) => {
    if (field === 'price') {
      value = parseFloat(value) || 0; // Ensure price is a number
    }
    const updatedItems = [...newMenuData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setNewMenuData({ ...newMenuData, items: updatedItems });
  };

  const handleSaveClick = () => {
    const updatedMenu = loggedInRestaurant.menu.map(cat =>
      cat.category === editingCategory ? newMenuData : cat
    );
    setLoggedInRestaurant({ ...loggedInRestaurant, menu: updatedMenu });
    setEditingCategory(null);
  };

  const handleCancelClick = () => {
    setEditingCategory(null);
  };

  return (
    <div className="rs-menu-container">
      <div className="cuisine">
        <p>{loggedInRestaurant.basicInfo.businessName}</p>
        <h2>Cuisine: {loggedInRestaurant.cuisine.join(", ")}</h2>
      </div>

      {loggedInRestaurant.menu.map((category) => (
        <div key={category.category} className="menu-category">
          <div className="category-header">
            <h2>{category.category}</h2>
            <button
              className="edit-button"
              onClick={() => handleEditClick(category.category)}
            >
              {editingCategory === category.category ? "Cancel" : "Edit"}
            </button>
          </div>

          {editingCategory === category.category ? (
            <div className="edit-form">
              <h2>Edit {category.category}</h2>
              {newMenuData.items.map((item, index) => (
                <div key={index} className="edit-item">
                  <label>Name:
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleInputChange(index, "name", e.target.value)}
                    />
                  </label>
                  <label>Description:
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleInputChange(index, "description", e.target.value)}
                    />
                  </label>
                  <label>Price:
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => handleInputChange(index, "price", e.target.value)}
                    />
                  </label>
                </div>
              ))}
              <button className="save-button" onClick={handleSaveClick}>Save</button>
              <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
            </div>
          ) : (
            category.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="item-price">€{Number(item.price).toFixed(2)}</div>
              </div>
            ))
          )}
        </div>
      ))}

      <div>
        <h3>Promotionals Info</h3>
        <div> Current Offers</div>
        <div> Loyalty Programs</div>
      </div>
    </div>
  );
}

export default RSMenu;

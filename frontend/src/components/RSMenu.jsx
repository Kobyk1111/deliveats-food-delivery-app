import "../style/RSMenu.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

function RSMenu() {
  const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newMenuData, setNewMenuData] = useState({});

  useEffect(() => {
    async function getRestaurant() {
      try {
        const response = await fetch(`http://localhost:5002/restaurants/${loggedInRestaurant._id}`);

        if (response.ok) {
          const data = await response.json();
          setLoggedInRestaurant(data);
        } else {
          const { error } = await response.json();
          throw new Error(error.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    if (loggedInRestaurant) {
      getRestaurant();
    }
  }, [loggedInRestaurant]);

  const handleEditClick = (category) => {
    setEditingCategory(category);
    const categoryData = loggedInRestaurant.menu.find((cat) => cat.category === category);
    setNewMenuData({ ...categoryData });
  };

  const handleInputChange = (index, field, value) => {
    if (field === "price") {
      value = parseFloat(value) || 0; // Ensure price is a number
    }
    const updatedItems = [...newMenuData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setNewMenuData({ ...newMenuData, items: updatedItems });
  };

  const handleSaveClick = async () => {
    const updatedMenu = loggedInRestaurant.menu.map((cat) => (cat.category === editingCategory ? newMenuData : cat));

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify({ menu: updatedMenu }),
    };

    try {
      const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingCategory(null);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleCancelClick = () => {
    setEditingCategory(null);
  };

  return (
    <div className="rs-menu-container">
      <div className="cuisine">
        <h2>Cuisine: {loggedInRestaurant.cuisine.join(", ")}</h2>
      </div>

      {loggedInRestaurant.menu.map((category) => (
        <div key={category.category} className="menu-category">
          <div className="category-header">
            <h2>{category.category}</h2>
          </div>

          {editingCategory === category.category ? (
            <div className="edit-form">
              {/* <h2>Edit {category.category}</h2> */}
              {newMenuData.items.map((item, index) => (
                <div key={index} className="edit-item">
                  <label>
                    Name:
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleInputChange(index, "name", e.target.value)}
                    />
                  </label>
                  <label>
                    Description:
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) => handleInputChange(index, "description", e.target.value)}
                    />
                  </label>
                  <label>
                    Price:
                    <input
                      type="number"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => handleInputChange(index, "price", e.target.value)}
                    />
                  </label>
                </div>
              ))}
              <div className="buttons-container">
                <button className="save1-button" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="cancel1-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
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
          {editingCategory !== category.category && (
            <button className="edit-button" onClick={() => handleEditClick(category.category)}>
              Edit
            </button>
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

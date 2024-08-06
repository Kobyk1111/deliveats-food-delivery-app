import "../style/RSMenu.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

function RSMenu() {
  const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
  const [editingCategory, setEditingCategory] = useState(null);
  const [newMenuData, setNewMenuData] = useState({});
  const [newCategory, setNewCategory] = useState("");
  const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
  const [newItemForEdit, setNewItemForEdit] = useState({ name: "", description: "", price: "" });
  const [newMenu, setNewMenu] = useState([]);
  const [toAddNewMenu, setToAddNewMenu] = useState(false);
  const [toAddNewItem, setToAddNewItem] = useState(false);

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
    if (loggedInRestaurant && !loggedInRestaurant.menu) {
      getRestaurant();
    }
  }, [loggedInRestaurant, setLoggedInRestaurant]);

  const handleEditClick = (category) => {
    setEditingCategory(category);
    const categoryData = loggedInRestaurant.menu.find((cat) => cat.category === category);
    setNewMenuData({ ...categoryData });
  };

  const handleInputChange = (index, field, value) => {
    if (field === "price") {
      value = parseFloat(value) || 0;
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: updatedMenu }),
    };

    try {
      const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingCategory(null);
        setNewItemForEdit({ name: "", description: "", price: "" });
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
    setNewItemForEdit({ name: "", description: "", price: "" });
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleNewItemForEditChange = (e) => {
    const { name, value } = e.target;
    setNewItemForEdit({ ...newItemForEdit, [name]: value });
  };

  const handleAddNewCategory = async (e) => {
    e.preventDefault();

    // Add the current newItem to newMenu
    const updatedNewMenu = [...newMenu, newItem];

    const newMenuCategory = { category: newCategory, items: updatedNewMenu };

    const updatedMenu = [...loggedInRestaurant.menu, newMenuCategory];

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: updatedMenu }),
    };

    try {
      const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setNewCategory("");
        setNewMenu([]);
        setToAddNewMenu(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }

    setNewItem({ name: "", description: "", price: "" });
  };

  const handleAddNewItemForEdit = () => {
    const updatedItems = [...newMenuData.items, newItemForEdit];
    setNewMenuData({ ...newMenuData, items: updatedItems });
    setNewItemForEdit({ name: "", description: "", price: "" });
    setToAddNewItem(false);
  };

  return (
    <div className="rs-menu-container">
      <button onClick={() => setToAddNewMenu(true)}>Add New Menu</button>
      {toAddNewMenu && (
        <>
          <h3>Add New Menu</h3>
          <form onSubmit={handleAddNewCategory}>
            <input
              type="text"
              name="newCategory"
              value={newCategory}
              onChange={handleNewCategoryChange}
              placeholder="New Category"
            />
            {newMenu.map((item, index) => (
              <div key={index} className="new-item">
                <p>
                  {item.name} - {item.description} - €{Number(item.price).toFixed(2)}
                </p>
              </div>
            ))}
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleNewItemChange}
              placeholder="Item Name"
            />
            <input
              type="text"
              name="description"
              value={newItem.description}
              onChange={handleNewItemChange}
              placeholder="Item Description"
            />
            <input
              type="number"
              step="0.01"
              name="price"
              value={newItem.price}
              onChange={handleNewItemChange}
              placeholder="Item Price"
            />
            <button type="submit">Add Menu</button>
          </form>
        </>
      )}

      {!toAddNewMenu && (
        <>
          <div className="cuisine">
            <h2>Cuisine: {loggedInRestaurant.cuisine.join(", ")}</h2>
          </div>

          {loggedInRestaurant.menu.map((category) => (
            <div key={category._id} className="menu-category">
              <div className="category-header">
                <h2>{category.category}</h2>
              </div>

              {editingCategory === category.category ? (
                <div className="edit-form">
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
                  <div
                    style={{
                      border: "1px solid black",
                      width: "fit-content",
                      padding: "0.4rem 1rem",
                      fontSize: "3rem",
                      cursor: "pointer",
                    }}
                    onClick={() => setToAddNewItem(!toAddNewItem)}
                  >
                    +
                  </div>
                  {toAddNewItem && (
                    <div className="new-item-form">
                      <input
                        type="text"
                        name="name"
                        value={newItemForEdit.name}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Name"
                      />
                      <input
                        type="text"
                        name="description"
                        value={newItemForEdit.description}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Description"
                      />
                      <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={newItemForEdit.price}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Price"
                      />
                      <button type="button" onClick={handleAddNewItemForEdit}>
                        Add Item
                      </button>
                    </div>
                  )}

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
        </>
      )}
    </div>
  );
}

export default RSMenu;

// import "../style/RSMenu.css";
// import { useContext, useEffect, useState } from "react";
// import { DataContext } from "../contexts/DataContext";
// import { MdOutlineDeleteForever } from "react-icons/md";
// import { FaSquarePlus } from "react-icons/fa6";
// import { FaSquareMinus } from "react-icons/fa6";
// import { FaEdit } from "react-icons/fa";

// function RSMenu() {
//   const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
//   const [editingCategory, setEditingCategory] = useState(null);
//   const [newMenuData, setNewMenuData] = useState({});
//   const [newCategory, setNewCategory] = useState("");
//   const [newItem, setNewItem] = useState({ name: "", description: "", price: "" });
//   const [newItemForEdit, setNewItemForEdit] = useState({ name: "", description: "", price: "" });
//   const [newMenu, setNewMenu] = useState([]);
//   const [toAddNewMenu, setToAddNewMenu] = useState(false);
//   const [toAddNewItem, setToAddNewItem] = useState(false);
//   const [editingCuisine, setEditingCuisine] = useState(false);
//   const [newCuisine, setNewCuisine] = useState(loggedInRestaurant.cuisine || []);
//   const [toggleAdd, setToggleAdd] = useState(true);
//   const [toggleAddNewMenu, setToggleAddNewMenu] = useState(false);

//   useEffect(() => {
//     async function getRestaurant() {
//       try {
//         const response = await fetch(`http://localhost:5002/restaurants/${loggedInRestaurant._id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setLoggedInRestaurant(data);
//         } else {
//           const { error } = await response.json();
//           throw new Error(error.message);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     if (loggedInRestaurant && !loggedInRestaurant.menu) {
//       getRestaurant();
//     }
//   }, [loggedInRestaurant, setLoggedInRestaurant]);

//   const handleEditClick = (category) => {
//     setEditingCategory(category);
//     const categoryData = loggedInRestaurant.menu.find((cat) => cat.category === category);
//     setNewMenuData({ ...categoryData });
//   };

//   const handleInputChange = (index, field, value) => {
//     if (field === "price") {
//       value = parseFloat(value) || 0;
//     }
//     const updatedItems = [...newMenuData.items];
//     updatedItems[index] = { ...updatedItems[index], [field]: value };
//     setNewMenuData({ ...newMenuData, items: updatedItems });
//   };

//   const handleDeleteCategory = async (category) => {
//     if (confirm("Are you sure you want to delete this category? All items will be deleted.")) {
//       const updatedMenu = loggedInRestaurant.menu.filter((cat) => cat.category !== category);

//       const settings = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ menu: updatedMenu }),
//       };

//       try {
//         const response = await fetch(
//           `http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`,
//           settings
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setLoggedInRestaurant(data);
//         } else {
//           const { error } = await response.json();
//           throw new Error(error.message);
//         }
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   };

//   const handleSaveClick = async () => {
//     const updatedMenu = loggedInRestaurant.menu.map((cat) => (cat.category === editingCategory ? newMenuData : cat));

//     const settings = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ menu: updatedMenu, cuisine: newCuisine }),
//     };

//     try {
//       const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

//       if (response.ok) {
//         const data = await response.json();
//         setLoggedInRestaurant(data);
//         setEditingCategory(null);
//         setEditingCuisine(false);
//       } else {
//         const { error } = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleCancelClick = () => {
//     setEditingCategory(null);
//     setNewItemForEdit({ name: "", description: "", price: "" });
//     setToggleAdd(true);
//     setToAddNewItem(false);
//   };

//   const handleNewCategoryChange = (e) => {
//     setNewCategory(e.target.value);
//   };

//   const handleNewItemChange = (e) => {
//     const { name, value } = e.target;
//     setNewItem({ ...newItem, [name]: value });
//   };

//   const handleNewItemForEditChange = (e) => {
//     const { name, value } = e.target;
//     setNewItemForEdit({ ...newItemForEdit, [name]: value });
//   };

//   const handleAddNewCategory = async (e) => {
//     e.preventDefault();

//     const updatedNewMenu = [...newMenu, newItem];

//     const newMenuCategory = { category: newCategory, items: updatedNewMenu };

//     const updatedMenu = [...loggedInRestaurant.menu, newMenuCategory];

//     const settings = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ menu: updatedMenu }),
//     };

//     try {
//       const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

//       if (response.ok) {
//         const data = await response.json();
//         setLoggedInRestaurant(data);
//         setNewCategory("");
//         setNewMenu([]);
//         setToAddNewMenu(false);
//       } else {
//         const { error } = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }

//     setNewItem({ name: "", description: "", price: "" });
//     setToggleAddNewMenu(false);
//   };

//   const handleAddNewItemForEdit = (e) => {
//     e.preventDefault();
//     const updatedItems = [...newMenuData.items, newItemForEdit];
//     setNewMenuData({ ...newMenuData, items: updatedItems });
//     setNewItemForEdit({ name: "", description: "", price: "" });
//     setToAddNewItem(false);
//     setToggleAdd(true);
//   };

//   const handleCuisineChange = (index, value) => {
//     const updatedCuisine = [...newCuisine];
//     updatedCuisine[index] = value;
//     setNewCuisine(updatedCuisine);
//   };

//   const addCuisineField = () => {
//     setNewCuisine([...newCuisine, ""]);
//   };

//   const removeCuisineField = (index) => {
//     if (newCuisine.length > 1) {
//       const updatedCuisine = newCuisine.filter((_, i) => i !== index);
//       setNewCuisine(updatedCuisine);
//     } else {
//       alert("You cannot delete a cuisine. Add another cuisine name before deleting");
//     }
//   };

//   const handleSaveCuisine = async () => {
//     const settings = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ menu: loggedInRestaurant.menu, cuisine: newCuisine }),
//     };

//     try {
//       const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

//       if (response.ok) {
//         const data = await response.json();
//         setLoggedInRestaurant(data);
//         setEditingCuisine(false);
//       } else {
//         const { error } = await response.json();
//         throw new Error(error.message);
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleDeleteItem = (index) => {
//     if (confirm("Are you sure you want to delete this item?")) {
//       const updatedItems = newMenuData.items.filter((_, i) => i !== index);
//       setNewMenuData({ ...newMenuData, items: updatedItems });
//     }
//   };

//   return (
//     <div className="rs-menu-container">
//       <button
//         onClick={() => {
//           setToAddNewMenu(!toAddNewMenu);
//           setToggleAddNewMenu(!toggleAddNewMenu);
//         }}
//         className="create-new-menu-button"
//       >
//         {!toggleAddNewMenu ? "Create New Menu" : "Cancel"}
//       </button>
//       {toAddNewMenu && (
//         <>
//           <h3>Add New Menu</h3>
//           <form onSubmit={handleAddNewCategory} className="add-menu-form">
//             <div className="inputs-container">
//               <input
//                 type="text"
//                 name="newCategory"
//                 value={newCategory}
//                 onChange={handleNewCategoryChange}
//                 placeholder="New Category"
//               />
//               {newMenu.map((item, index) => (
//                 <div key={index} className="new-item">
//                   <p>
//                     {item.name} - {item.description} - €{Number(item.price).toFixed(2)}
//                   </p>
//                 </div>
//               ))}
//               <input
//                 type="text"
//                 name="name"
//                 value={newItem.name}
//                 onChange={handleNewItemChange}
//                 placeholder="Item Name"
//               />
//               <input
//                 type="text"
//                 name="description"
//                 value={newItem.description}
//                 onChange={handleNewItemChange}
//                 placeholder="Item Description"
//               />
//               <input
//                 type="number"
//                 step="0.01"
//                 name="price"
//                 value={newItem.price}
//                 onChange={handleNewItemChange}
//                 placeholder="Item Price"
//               />
//             </div>
//             <button>Add Menu</button>
//           </form>
//         </>
//       )}

//       <>
//         {editingCuisine ? (
//           <div className="edit-cuisine">
//             <h2>Edit Cuisine</h2>
//             {newCuisine.map((cuisine, index) => (
//               <div key={index} className="change-cuisine-container">
//                 <input
//                   type="text"
//                   value={cuisine}
//                   onChange={(e) => handleCuisineChange(index, e.target.value)}
//                   placeholder="add cuisine here..."
//                 />
//                 <MdOutlineDeleteForever
//                   onClick={() => removeCuisineField(index)}
//                   size="2.5rem"
//                   className="delete-icon"
//                 />
//               </div>
//             ))}
//             <FaSquarePlus className="add-cuisine-icon" size="4rem" onClick={addCuisineField} />
//             <div className="buttons-container">
//               <button onClick={handleSaveCuisine} className="save-cuisine-button">
//                 Save Cuisine
//               </button>
//               <button onClick={() => setEditingCuisine(false)} className="cancel-cuisine-button">
//                 Cancel
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div className="cuisine">
//             <h2>Cuisine: {loggedInRestaurant.cuisine.join(", ")}</h2>
//             <FaEdit onClick={() => setEditingCuisine(true)} size="2rem" className="cuisine-edit-icon" />
//           </div>
//         )}

//         {loggedInRestaurant.menu.map((category) => (
//           <div key={category._id} className="menu-category">
//             <div className="category-header">
//               <h2>{category.category}</h2>
//               <FaEdit onClick={() => handleEditClick(category.category)} size="2rem" className="edit-category-icon" />
//               <MdOutlineDeleteForever
//                 onClick={() => handleDeleteCategory(category.category)}
//                 size="2.5rem"
//                 className="delete-category-icon"
//               />
//             </div>

//             {editingCategory === category.category ? (
//               <div className="edit-form">
//                 {newMenuData.items.map((item, index) => (
//                   <div key={index} className="edit-item">
//                     <label>
//                       Name:
//                       <input
//                         type="text"
//                         value={item.name}
//                         onChange={(e) => handleInputChange(index, "name", e.target.value)}
//                       />
//                     </label>
//                     <label>
//                       Description:
//                       <input
//                         type="text"
//                         value={item.description}
//                         onChange={(e) => handleInputChange(index, "description", e.target.value)}
//                       />
//                     </label>
//                     <label className="price-label">
//                       Price:
//                       <input
//                         type="number"
//                         className="price"
//                         step="0.01"
//                         value={item.price}
//                         onChange={(e) => handleInputChange(index, "price", e.target.value)}
//                       />
//                     </label>
//                     <MdOutlineDeleteForever
//                       onClick={() => handleDeleteItem(index)}
//                       size="2.5rem"
//                       className="delete-icon"
//                     />
//                   </div>
//                 ))}
//                 <div className="add-item-container">
//                   {toggleAdd ? (
//                     <FaSquarePlus
//                       className="add-icon"
//                       size="4rem"
//                       onClick={() => {
//                         setToAddNewItem(!toAddNewItem);
//                         setToggleAdd(false);
//                       }}
//                     />
//                   ) : (
//                     <FaSquareMinus
//                       className="add-icon"
//                       size="4rem"
//                       onClick={() => {
//                         setToAddNewItem(!toAddNewItem);
//                         setToggleAdd(true);
//                       }}
//                     />
//                   )}

//                   {toAddNewItem && (
//                     <form className="new-item-form" onSubmit={handleAddNewItemForEdit}>
//                       <input
//                         type="text"
//                         name="name"
//                         value={newItemForEdit.name}
//                         onChange={handleNewItemForEditChange}
//                         placeholder="Item Name"
//                         required
//                       />
//                       <input
//                         type="text"
//                         name="description"
//                         value={newItemForEdit.description}
//                         onChange={handleNewItemForEditChange}
//                         placeholder="Item Description"
//                         required
//                       />
//                       <input
//                         type="number"
//                         step="0.01"
//                         name="price"
//                         value={newItemForEdit.price}
//                         onChange={handleNewItemForEditChange}
//                         placeholder="Item Price"
//                         required
//                       />
//                       <button>Add Item</button>
//                     </form>
//                   )}
//                 </div>

//                 <div className="buttons-container">
//                   <button className="save1-button" onClick={handleSaveClick}>
//                     Save
//                   </button>
//                   <button className="cancel1-button" onClick={handleCancelClick}>
//                     Cancel
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               category.items.map((item) => (
//                 <div key={item.name} className="menu-item">
//                   <div className="item-info">
//                     <h3>{item.name}</h3>
//                     <p>{item.description}</p>
//                   </div>
//                   <div className="item-price">€{Number(item.price).toFixed(2)}</div>
//                 </div>
//               ))
//             )}
//             {editingCategory !== category.category && (
//               <button className="edit-button" onClick={() => handleEditClick(category.category)}>
//                 Edit
//               </button>
//             )}
//           </div>
//         ))}

//         <div>
//           <h3>Promotions Info</h3>
//           <div> Current Offers</div>
//           <div> Loyalty Programs</div>
//         </div>
//       </>
//     </div>
//   );
// }

// export default RSMenu;

import "../style/RSMenu.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

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
  const [editingCuisine, setEditingCuisine] = useState(false);
  const [newCuisine, setNewCuisine] = useState(loggedInRestaurant.cuisine || []);
  const [toggleAdd, setToggleAdd] = useState(true);
  const [toggleAddNewMenu, setToggleAddNewMenu] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

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
    setNewCategoryName(category); // Set the current category name for editing
  };

  // New function to handle category name change
  const handleCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleInputChange = (index, field, value) => {
    if (field === "price") {
      value = parseFloat(value) || 0;
    }
    const updatedItems = [...newMenuData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setNewMenuData({ ...newMenuData, items: updatedItems });
  };

  const handleDeleteCategory = async (category) => {
    if (confirm("Are you sure you want to delete this category? All items will be deleted.")) {
      const updatedMenu = loggedInRestaurant.menu.filter((cat) => cat.category !== category);

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ menu: updatedMenu }),
      };

      try {
        const response = await fetch(
          `http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`,
          settings
        );

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
  };

  const handleSaveClick = async () => {
    const updatedMenuData = { ...newMenuData, category: newCategoryName };
    const updatedMenu = loggedInRestaurant.menu.map((cat) =>
      cat.category === editingCategory ? updatedMenuData : cat
    );

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: updatedMenu, cuisine: newCuisine }),
    };

    try {
      const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingCategory(null);
        setEditingCuisine(false);
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
    setToggleAdd(true);
    setToAddNewItem(false);
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
    setToggleAddNewMenu(false);
  };

  const handleAddNewItemForEdit = (e) => {
    e.preventDefault();
    const updatedItems = [...newMenuData.items, newItemForEdit];
    setNewMenuData({ ...newMenuData, items: updatedItems });
    setNewItemForEdit({ name: "", description: "", price: "" });
    setToAddNewItem(false);
    setToggleAdd(true);
  };

  const handleCuisineChange = (index, value) => {
    const updatedCuisine = [...newCuisine];
    updatedCuisine[index] = value;
    setNewCuisine(updatedCuisine);
  };

  const addCuisineField = () => {
    setNewCuisine([...newCuisine, ""]);
  };

  const removeCuisineField = (index) => {
    if (newCuisine.length > 1) {
      const updatedCuisine = newCuisine.filter((_, i) => i !== index);
      setNewCuisine(updatedCuisine);
    } else {
      alert("You cannot delete a cuisine. Add another cuisine name before deleting");
    }
  };

  const handleSaveCuisine = async () => {
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ menu: loggedInRestaurant.menu, cuisine: newCuisine }),
    };

    try {
      const response = await fetch(`http://localhost:5002/restaurants/update/menu/${loggedInRestaurant._id}`, settings);

      if (response.ok) {
        const data = await response.json();
        setLoggedInRestaurant(data);
        setEditingCuisine(false);
      } else {
        const { error } = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeleteItem = (index) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const updatedItems = newMenuData.items.filter((_, i) => i !== index);
      setNewMenuData({ ...newMenuData, items: updatedItems });
    }
  };

  return (
    <div className="rs-menu-container">
      <button
        onClick={() => {
          setToAddNewMenu(!toAddNewMenu);
          setToggleAddNewMenu(!toggleAddNewMenu);
        }}
        className="create-new-menu-button"
      >
        {!toggleAddNewMenu ? "Create New Category" : "Cancel"}
      </button>
      {toAddNewMenu && (
        <>
          <h3>Add New Category</h3>
          <form onSubmit={handleAddNewCategory} className="add-menu-form">
            <div className="inputs-container">
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
            </div>
            <button>Add Category</button>
          </form>
        </>
      )}

      <>
        {editingCuisine ? (
          <div className="edit-cuisine">
            <h2>Edit Cuisine</h2>
            {newCuisine.map((cuisine, index) => (
              <div key={index} className="change-cuisine-container">
                <input
                  type="text"
                  value={cuisine}
                  onChange={(e) => handleCuisineChange(index, e.target.value)}
                  placeholder="add cuisine here..."
                />
                <MdOutlineDeleteForever
                  onClick={() => removeCuisineField(index)}
                  size="2.5rem"
                  className="delete-icon"
                />
              </div>
            ))}
            <FaSquarePlus className="add-cuisine-icon" size="4rem" onClick={addCuisineField} />
            <div className="buttons-container">
              <button onClick={handleSaveCuisine} className="save-cuisine-button">
                Save Cuisine
              </button>
              <button onClick={() => setEditingCuisine(false)} className="cancel-cuisine-button">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="cuisine">
            <h2>Keywords: {loggedInRestaurant.cuisine.join(", ")}</h2>
            <FaEdit onClick={() => setEditingCuisine(true)} size="2rem" className="cuisine-edit-icon" />
          </div>
        )}

        {loggedInRestaurant.menu.map((category) => (
          <div key={category._id} className="menu-category">
            <div className="category-header">
              {/* Conditional rendering for category name editing */}
              {editingCategory === category.category ? (
                <>
                  <label>
                    Category Name:
                    <input
                      type="text"
                      value={newCategoryName}
                      onChange={handleCategoryNameChange}
                      placeholder="Edit Category Name"
                      className="edit-category-name-input"
                    />
                  </label>
                  <MdOutlineDeleteForever
                    onClick={() => handleDeleteCategory(category.category)}
                    size="2.5rem"
                    className="delete-icon"
                  />
                </>
              ) : (
                <h2>{category.category}</h2>
              )}
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
                    <label className="price-label">
                      Price:
                      <input
                        type="number"
                        className="price"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => handleInputChange(index, "price", e.target.value)}
                      />
                    </label>
                    <MdOutlineDeleteForever
                      onClick={() => handleDeleteItem(index)}
                      size="2.5rem"
                      className="delete-icon"
                    />
                  </div>
                ))}
                <div className="add-item-container">
                  {toggleAdd ? (
                    <FaSquarePlus
                      className="add-icon"
                      size="4rem"
                      onClick={() => {
                        setToAddNewItem(!toAddNewItem);
                        setToggleAdd(false);
                      }}
                    />
                  ) : (
                    <FaSquareMinus
                      className="add-icon"
                      size="4rem"
                      onClick={() => {
                        setToAddNewItem(!toAddNewItem);
                        setToggleAdd(true);
                      }}
                    />
                  )}

                  {toAddNewItem && (
                    <form className="new-item-form" onSubmit={handleAddNewItemForEdit}>
                      <input
                        type="text"
                        name="name"
                        value={newItemForEdit.name}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Name"
                        required
                      />
                      <input
                        type="text"
                        name="description"
                        value={newItemForEdit.description}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Description"
                        required
                      />
                      <input
                        type="number"
                        step="0.01"
                        name="price"
                        value={newItemForEdit.price}
                        onChange={handleNewItemForEditChange}
                        placeholder="Item Price"
                        required
                      />
                      <button>Add Item</button>
                    </form>
                  )}
                </div>

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
          <h3>Promotions Info</h3>
          <div> Current Offers</div>
          <div> Loyalty Programs</div>
        </div>
      </>
    </div>
  );
}

export default RSMenu;

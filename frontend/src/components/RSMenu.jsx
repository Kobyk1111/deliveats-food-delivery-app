import "../style/RSMenu.css";

import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

function RSMenu() {
  const menuData = {
    cuisine: ["Croatian", "Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          {
            name: "Istrian Ham",
            description: "Cured ham from Istria",
            price: 5.0,
          },
          {
            name: "Stuffed Peppers",
            description: "Peppers stuffed with cheese",
            price: 6.5,
          },
          {
            name: "Seafood Salad",
            description: "Mixed seafood with olive oil",
            price: 7.0,
          },
          {
            name: "Bread with Olive Oil",
            description: "Fresh bread with extra virgin olive oil",
            price: 4.5,
          },
          {
            name: "Marinated Olives",
            description: "Olives marinated with herbs",
            price: 4.0,
          },
        ],
      },
      {
        category: "Main Courses",
        items: [
          {
            name: "Lamb Peka",
            description: "Lamb slow-cooked under a bell",
            price: 14.0,
          },
          {
            name: "Mussels Buzara",
            description: "Mussels cooked in tomato and wine sauce",
            price: 12.5,
          },
          {
            name: "Grilled Tuna",
            description: "Fresh tuna steak grilled",
            price: 13.5,
          },
          {
            name: "Vegetable Risotto",
            description: "Creamy risotto with seasonal vegetables",
            price: 11.0,
          },
          {
            name: "Pork Ribs",
            description: "Barbecued pork ribs",
            price: 15.0,
          },
        ],
      },
      {
        category: "Desserts",
        items: [
          {
            name: "Povitica",
            description: "Nut roll from Croatia",
            price: 5.0,
          },
          {
            name: "Apple Strudel",
            description: "Traditional apple strudel",
            price: 4.5,
          },
          {
            name: "Sweet Ricotta Balls",
            description: "Ricotta balls coated in sugar",
            price: 5.5,
          },
          {
            name: "Croatian Cheesecake",
            description: "Rich and creamy cheesecake",
            price: 6.0,
          },
          { name: "Tiramisu", description: "Classic tiramisu", price: 5.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          {
            name: "Croatian Lager",
            description: "Local Croatian beer",
            price: 4.0,
          },
          { name: "Red Wine", description: "House red wine", price: 5.5 },
          {
            name: "Sparkling Water",
            description: "Carbonated water",
            price: 3.0,
          },
          {
            name: "Fruit Juice",
            description: "Seasonal fruit juice",
            price: 3.5,
          },
          {
            name: "Herbal Tea",
            description: "Selection of herbal teas",
            price: 2.0,
          },
        ],
      },
    ],
  };

  const { loggedInRestaurant } = useContext(DataContext);

  return (
    <div className="rs-menu-container">
      <div className="cuisine">
        <h2>Cuisine: {loggedInRestaurant.cuisine.join(", ")}</h2>
      </div>
      {loggedInRestaurant.menu.map((category) => (
        <div key={category.category} className="menu-category">
          <h2>{category.category}</h2>
          {category.items.map((item) => (
            <div key={item.name} className="menu-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="item-price">€{item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      ))}
      <button className="update-button">Update</button>

      <div>
        <h3>Promotionals Info</h3>
        <div> Current Offers</div>
        <div> Loyalty Programs</div>
      </div>
    </div>
  );
}

export default RSMenu;

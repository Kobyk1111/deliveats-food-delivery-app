// const menus = [
//   {
//     id: 1,
//     cuisine: "Italian",
//     items: [
//       { name: "Margherita Pizza", description: "Classic cheese and tomato pizza", price: 8.99 },
//       { name: "Pepperoni Pizza", description: "Pepperoni, cheese, and tomato pizza", price: 9.99 },
//       { name: "Caesar Salad", description: "Romaine lettuce, croutons, and Caesar dressing", price: 7.99 },
//       { name: "Pasta Carbonara", description: "Pasta with creamy bacon sauce", price: 11.99 },
//     ],
//   },
//   {
//     id: 2,
//     cuisine: "Japanese",
//     items: [
//       { name: "Sushi Platter", description: "Assorted sushi rolls", price: 15.99 },
//       { name: "Tempura", description: "Deep-fried vegetables and shrimp", price: 12.99 },
//       { name: "Miso Soup", description: "Traditional Japanese soup", price: 3.99 },
//       { name: "Teriyaki Chicken", description: "Grilled chicken with teriyaki sauce", price: 10.99 },
//     ],
//   },
//   {
//     id: 3,
//     cuisine: "American",
//     items: [
//       { name: "Cheeseburger", description: "Juicy beef patty with cheese", price: 10.99 },
//       { name: "Chicken Wings", description: "Spicy buffalo wings", price: 8.99 },
//       { name: "Fries", description: "Crispy golden fries", price: 3.99 },
//       { name: "Milkshake", description: "Thick vanilla milkshake", price: 4.99 },
//     ],
//   },
//   {
//     id: 4,
//     cuisine: "Mexican",
//     items: [
//       { name: "Tacos", description: "Beef tacos with salsa", price: 6.99 },
//       { name: "Burrito", description: "Chicken burrito with beans and rice", price: 7.99 },
//       { name: "Quesadilla", description: "Cheese quesadilla with guacamole", price: 5.99 },
//       { name: "Nachos", description: "Loaded nachos with cheese and jalapenos", price: 7.99 },
//     ],
//   },
//   {
//     id: 5,
//     cuisine: "Thai",
//     items: [
//       { name: "Pad Thai", description: "Thai stir-fried noodles with shrimp", price: 12.99 },
//       { name: "Green Curry", description: "Spicy green curry with chicken", price: 13.99 },
//       { name: "Spring Rolls", description: "Crispy vegetable spring rolls", price: 5.99 },
//       { name: "Mango Sticky Rice", description: "Sweet mango with sticky rice", price: 6.99 },
//     ],
//   },
//   {
//     id: 6,
//     cuisine: "American BBQ",
//     items: [
//       { name: "BBQ Ribs", description: "Slow-cooked BBQ ribs", price: 14.99 },
//       { name: "Coleslaw", description: "Creamy coleslaw salad", price: 3.99 },
//       { name: "Baked Beans", description: "Savory baked beans", price: 2.99 },
//       { name: "Cornbread", description: "Sweet cornbread", price: 2.99 },
//     ],
//   },
//   {
//     id: 7,
//     cuisine: "American Breakfast",
//     items: [
//       { name: "Pancakes", description: "Fluffy pancakes with syrup", price: 7.99 },
//       { name: "Omelette", description: "Three-egg omelette with cheese", price: 6.99 },
//       { name: "French Toast", description: "Cinnamon French toast", price: 7.99 },
//       { name: "Bacon", description: "Crispy bacon strips", price: 3.99 },
//     ],
//   },
//   {
//     id: 8,
//     cuisine: "Italian",
//     items: [
//       { name: "Chicken Alfredo", description: "Pasta with creamy Alfredo sauce and chicken", price: 11.99 },
//       { name: "Garlic Bread", description: "Toasted garlic bread", price: 3.99 },
//       { name: "Caesar Salad", description: "Romaine lettuce, croutons, and Caesar dressing", price: 7.99 },
//       { name: "Tiramisu", description: "Classic Italian dessert", price: 6.99 },
//     ],
//   },
//   {
//     id: 9,
//     cuisine: "British",
//     items: [
//       { name: "Fish and Chips", description: "Battered fish with fries", price: 10.99 },
//       { name: "Mushy Peas", description: "Traditional mushy peas", price: 2.99 },
//       { name: "Tartar Sauce", description: "Homemade tartar sauce", price: 1.99 },
//       { name: "Apple Pie", description: "Warm apple pie with vanilla ice cream", price: 5.99 },
//     ],
//   },
//   {
//     id: 10,
//     cuisine: "Chinese",
//     items: [
//       { name: "Dim Sum", description: "Assorted Chinese dumplings", price: 9.99 },
//       { name: "Kung Pao Chicken", description: "Spicy stir-fried chicken with peanuts", price: 11.99 },
//       { name: "Fried Rice", description: "Vegetable fried rice", price: 7.99 },
//       { name: "Egg Drop Soup", description: "Traditional egg drop soup", price: 4.99 },
//     ],
//   },
//   {
//     id: 11,
//     cuisine: "Vietnamese",
//     items: [
//       { name: "Pho", description: "Vietnamese noodle soup with beef", price: 9.99 },
//       { name: "Banh Mi", description: "Vietnamese sandwich with pork", price: 6.99 },
//       { name: "Spring Rolls", description: "Fresh spring rolls with shrimp", price: 5.99 },
//       { name: "Vietnamese Iced Coffee", description: "Sweetened iced coffee with condensed milk", price: 3.99 },
//     ],
//   },
//   {
//     id: 12,
//     cuisine: "Greek",
//     items: [
//       { name: "Greek Salad", description: "Salad with feta cheese and olives", price: 8.99 },
//       { name: "Gyro", description: "Greek sandwich with lamb", price: 7.99 },
//       { name: "Spanakopita", description: "Spinach and cheese pastry", price: 4.99 },
//       { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 5.99 },
//     ],
//   },
//   {
//     id: 13,
//     cuisine: "Middle Eastern",
//     items: [
//       { name: "Falafel", description: "Fried chickpea balls", price: 6.99 },
//       { name: "Hummus", description: "Chickpea dip with pita bread", price: 5.99 },
//       { name: "Shawarma", description: "Marinated meat wrap", price: 7.99 },
//       { name: "Tabbouleh", description: "Parsley salad with tomatoes and bulgur", price: 4.99 },
//     ],
//   },
//   {
//     id: 14,
//     cuisine: "American Diner",
//     items: [
//       { name: "Hamburger", description: "Beef patty with lettuce and tomato", price: 9.99 },
//       { name: "Cheese Fries", description: "Fries with melted cheese", price: 4.99 },
//       { name: "Onion Rings", description: "Crispy onion rings", price: 5.99 },
//       { name: "Milkshake", description: "Thick chocolate milkshake", price: 4.99 },
//     ],
//   },
//   {
//     id: 15,
//     cuisine: "Italian",
//     items: [
//       { name: "Pizza Margherita", description: "Pizza with tomatoes and mozzarella", price: 8.99 },
//       { name: "Focaccia", description: "Italian flatbread with herbs", price: 3.99 },
//       { name: "Bruschetta", description: "Grilled bread with tomato topping", price: 4.99 },
//       { name: "Panna Cotta", description: "Creamy Italian dessert", price: 5.99 },
//     ],
//   },
//   {
//     id: 16,
//     cuisine: "Indian",
//     items: [
//       { name: "Chicken Tikka Masala", description: "Chicken in spiced tomato sauce", price: 12.99 },
//       { name: "Naan Bread", description: "Traditional Indian flatbread", price: 2.99 },
//       { name: "Samosas", description: "Fried pastry with spiced potatoes", price: 4.99 },
//       { name: "Mango Lassi", description: "Sweet mango yogurt drink", price: 3.99 },
//     ],
//   },
//   {
//     id: 17,
//     cuisine: "Japanese",
//     items: [
//       { name: "Ramen", description: "Japanese noodle soup with pork", price: 10.99 },
//       { name: "Gyoza", description: "Japanese dumplings", price: 6.99 },
//       { name: "Katsu Curry", description: "Breaded chicken with curry sauce", price: 11.99 },
//       { name: "Mochi", description: "Sweet rice cake", price: 4.99 },
//     ],
//   },
//   {
//     id: 18,
//     cuisine: "Russian",
//     items: [
//       { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 11.99 },
//       { name: "Borscht", description: "Beet soup with sour cream", price: 5.99 },
//       { name: "Pelmeni", description: "Russian dumplings", price: 8.99 },
//       { name: "Blini", description: "Russian pancakes with caviar", price: 6.99 },
//     ],
//   },
//   {
//     id: 19,
//     cuisine: "Spanish",
//     items: [
//       { name: "Paella", description: "Spanish rice dish with seafood", price: 14.99 },
//       { name: "Tapas", description: "Assorted Spanish appetizers", price: 9.99 },
//       { name: "Gazpacho", description: "Cold tomato soup", price: 4.99 },
//       { name: "Churros", description: "Fried dough pastry with chocolate", price: 5.99 },
//     ],
//   },
//   {
//     id: 20,
//     cuisine: "French",
//     items: [
//       { name: "Croissant", description: "Buttery French pastry", price: 3.99 },
//       { name: "Quiche Lorraine", description: "Savory pie with bacon and cheese", price: 7.99 },
//       { name: "Ratatouille", description: "Vegetable stew", price: 8.99 },
//       { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.99 },
//     ],
//   },
// ];

// export default menus;

const menus = [
  {
    id: 1,
    cuisine: "Italian",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Classic cheese and tomato pizza",
        price: 8.99,
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Pepperoni, cheese, and tomato pizza",
        price: 9.99,
      },
      {
        id: 3,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, and Caesar dressing",
        price: 7.99,
      },
      {
        id: 4,
        name: "Pasta Carbonara",
        description: "Pasta with creamy bacon sauce",
        price: 11.99,
      },
    ],
  },
  {
    id: 2,
    cuisine: "Japanese",
    items: [
      {
        id: 5,
        name: "Sushi Platter",
        description: "Assorted sushi rolls",
        price: 15.99,
      },
      {
        id: 6,
        name: "Tempura",
        description: "Deep-fried vegetables and shrimp",
        price: 12.99,
      },
      {
        id: 7,
        name: "Miso Soup",
        description: "Traditional Japanese soup",
        price: 3.99,
      },
      {
        id: 8,
        name: "Teriyaki Chicken",
        description: "Grilled chicken with teriyaki sauce",
        price: 10.99,
      },
    ],
  },
  {
    id: 3,
    cuisine: "American",
    items: [
      {
        id: 9,
        name: "Cheeseburger",
        description: "Juicy beef patty with cheese",
        price: 10.99,
      },
      {
        id: 10,
        name: "Chicken Wings",
        description: "Spicy buffalo wings",
        price: 8.99,
      },
      {
        id: 11,
        name: "Fries",
        description: "Crispy golden fries",
        price: 3.99,
      },
      {
        id: 12,
        name: "Milkshake",
        description: "Thick vanilla milkshake",
        price: 4.99,
      },
    ],
  },
  {
    id: 4,
    cuisine: "Mexican",
    items: [
      {
        id: 13,
        name: "Tacos",
        description: "Beef tacos with salsa",
        price: 6.99,
      },
      {
        id: 14,
        name: "Burrito",
        description: "Chicken burrito with beans and rice",
        price: 7.99,
      },
      {
        id: 15,
        name: "Quesadilla",
        description: "Cheese quesadilla with guacamole",
        price: 5.99,
      },
      {
        id: 16,
        name: "Nachos",
        description: "Loaded nachos with cheese and jalapenos",
        price: 7.99,
      },
    ],
  },
  {
    id: 5,
    cuisine: "Thai",
    items: [
      {
        id: 17,
        name: "Pad Thai",
        description: "Thai stir-fried noodles with shrimp",
        price: 12.99,
      },
      {
        id: 18,
        name: "Green Curry",
        description: "Spicy green curry with chicken",
        price: 13.99,
      },
      {
        id: 19,
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls",
        price: 5.99,
      },
      {
        id: 20,
        name: "Mango Sticky Rice",
        description: "Sweet mango with sticky rice",
        price: 6.99,
      },
    ],
  },
  {
    id: 6,
    cuisine: "American BBQ",
    items: [
      {
        id: 21,
        name: "BBQ Ribs",
        description: "Slow-cooked BBQ ribs",
        price: 14.99,
      },
      {
        id: 22,
        name: "Coleslaw",
        description: "Creamy coleslaw salad",
        price: 3.99,
      },
      {
        id: 23,
        name: "Baked Beans",
        description: "Savory baked beans",
        price: 2.99,
      },
      {
        id: 24,
        name: "Cornbread",
        description: "Sweet cornbread",
        price: 2.99,
      },
    ],
  },
  {
    id: 7,
    cuisine: "American Breakfast",
    items: [
      {
        id: 25,
        name: "Pancakes",
        description: "Fluffy pancakes with syrup",
        price: 7.99,
      },
      {
        id: 26,
        name: "Omelette",
        description: "Three-egg omelette with cheese",
        price: 6.99,
      },
      {
        id: 27,
        name: "French Toast",
        description: "Cinnamon French toast",
        price: 7.99,
      },
      {
        id: 28,
        name: "Bacon",
        description: "Crispy bacon strips",
        price: 3.99,
      },
    ],
  },
  {
    id: 8,
    cuisine: "Italian",
    items: [
      {
        id: 29,
        name: "Chicken Alfredo",
        description: "Pasta with creamy Alfredo sauce and chicken",
        price: 11.99,
      },
      {
        id: 30,
        name: "Garlic Bread",
        description: "Toasted garlic bread",
        price: 3.99,
      },
      {
        id: 31,
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, and Caesar dressing",
        price: 7.99,
      },
      {
        id: 32,
        name: "Tiramisu",
        description: "Classic Italian dessert",
        price: 6.99,
      },
    ],
  },
  {
    id: 9,
    cuisine: "British",
    items: [
      {
        id: 33,
        name: "Fish and Chips",
        description: "Battered fish with fries",
        price: 10.99,
      },
      {
        id: 34,
        name: "Mushy Peas",
        description: "Traditional mushy peas",
        price: 2.99,
      },
      {
        id: 35,
        name: "Tartar Sauce",
        description: "Homemade tartar sauce",
        price: 1.99,
      },
      {
        id: 36,
        name: "Apple Pie",
        description: "Warm apple pie with vanilla ice cream",
        price: 5.99,
      },
    ],
  },
  {
    id: 10,
    cuisine: "Chinese",
    items: [
      {
        id: 37,
        name: "Dim Sum",
        description: "Assorted Chinese dumplings",
        price: 9.99,
      },
      {
        id: 38,
        name: "Kung Pao Chicken",
        description: "Spicy stir-fried chicken with peanuts",
        price: 11.99,
      },
      {
        id: 39,
        name: "Fried Rice",
        description: "Vegetable fried rice",
        price: 7.99,
      },
      {
        id: 40,
        name: "Egg Drop Soup",
        description: "Traditional egg drop soup",
        price: 4.99,
      },
    ],
  },
  {
    id: 11,
    cuisine: "Vietnamese",
    items: [
      {
        id: 41,
        name: "Pho",
        description: "Vietnamese noodle soup with beef",
        price: 9.99,
      },
      {
        id: 42,
        name: "Banh Mi",
        description: "Vietnamese sandwich with pork",
        price: 6.99,
      },
      {
        id: 43,
        name: "Spring Rolls",
        description: "Fresh spring rolls with shrimp",
        price: 5.99,
      },
      {
        id: 44,
        name: "Vietnamese Iced Coffee",
        description: "Sweetened iced coffee with condensed milk",
        price: 3.99,
      },
    ],
  },
  {
    id: 12,
    cuisine: "Greek",
    items: [
      {
        id: 45,
        name: "Greek Salad",
        description: "Salad with feta cheese and olives",
        price: 8.99,
      },
      {
        id: 46,
        name: "Gyro",
        description: "Greek sandwich with lamb",
        price: 7.99,
      },
      {
        id: 47,
        name: "Spanakopita",
        description: "Spinach and cheese pastry",
        price: 4.99,
      },
      {
        id: 48,
        name: "Baklava",
        description: "Sweet pastry with nuts and honey",
        price: 5.99,
      },
    ],
  },
  {
    id: 13,
    cuisine: "Middle Eastern",
    items: [
      {
        id: 49,
        name: "Falafel",
        description: "Fried chickpea balls",
        price: 6.99,
      },
      {
        id: 50,
        name: "Hummus",
        description: "Chickpea dip with pita bread",
        price: 5.99,
      },
      {
        id: 51,
        name: "Shawarma",
        description: "Marinated meat wrap",
        price: 7.99,
      },
      {
        id: 52,
        name: "Tabbouleh",
        description: "Parsley salad with tomatoes and bulgur",
        price: 4.99,
      },
    ],
  },
  {
    id: 14,
    cuisine: "American Diner",
    items: [
      {
        id: 53,
        name: "Hamburger",
        description: "Beef patty with lettuce and tomato",
        price: 9.99,
      },
      {
        id: 54,
        name: "Cheese Fries",
        description: "Fries with melted cheese",
        price: 4.99,
      },
      {
        id: 55,
        name: "Onion Rings",
        description: "Crispy onion rings",
        price: 5.99,
      },
      {
        id: 56,
        name: "Milkshake",
        description: "Thick chocolate milkshake",
        price: 4.99,
      },
    ],
  },
  {
    id: 15,
    cuisine: "Indian",
    items: [
      {
        id: 57,
        name: "Butter Chicken",
        description: "Creamy tomato chicken curry",
        price: 12.99,
      },
      { id: 58, name: "Naan", description: "Soft Indian bread", price: 2.99 },
      {
        id: 59,
        name: "Biryani",
        description: "Spiced rice with chicken",
        price: 11.99,
      },
      {
        id: 60,
        name: "Samosa",
        description: "Fried pastry with spiced potatoes",
        price: 4.99,
      },
    ],
  },
];

export default menus;

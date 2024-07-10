const menus = [
  {
    cuisine: "Italian",
    items: [
      {
        name: "Margherita Pizza",
        description: "Classic cheese and tomato pizza",
        price: 8.99,
      },
      {
        name: "Pepperoni Pizza",
        description: "Pepperoni, cheese, and tomato pizza",
        price: 9.99,
      },
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, and Caesar dressing",
        price: 7.99,
      },
      {
        name: "Pasta Carbonara",
        description: "Pasta with creamy bacon sauce",
        price: 11.99,
      },
    ],
  },
  {
    cuisine: "Japanese",
    items: [
      {
        name: "Sushi Platter",
        description: "Assorted sushi rolls",
        price: 15.99,
      },
      {
        name: "Tempura",
        description: "Deep-fried vegetables and shrimp",
        price: 12.99,
      },
      {
        name: "Miso Soup",
        description: "Traditional Japanese soup",
        price: 3.99,
      },
      {
        name: "Teriyaki Chicken",
        description: "Grilled chicken with teriyaki sauce",
        price: 10.99,
      },
    ],
  },
  {
    cuisine: "American",
    items: [
      {
        name: "Cheeseburger",
        description: "Juicy beef patty with cheese",
        price: 10.99,
      },
      {
        name: "Chicken Wings",
        description: "Spicy buffalo wings",
        price: 8.99,
      },
      {
        name: "Fries",
        description: "Crispy golden fries",
        price: 3.99,
      },
      {
        name: "Milkshake",
        description: "Thick vanilla milkshake",
        price: 4.99,
      },
    ],
  },
  {
    cuisine: "Mexican",
    items: [
      {
        name: "Tacos",
        description: "Beef tacos with salsa",
        price: 6.99,
      },
      {
        name: "Burrito",
        description: "Chicken burrito with beans and rice",
        price: 7.99,
      },
      {
        name: "Quesadilla",
        description: "Cheese quesadilla with guacamole",
        price: 5.99,
      },
      {
        name: "Nachos",
        description: "Loaded nachos with cheese and jalapenos",
        price: 7.99,
      },
    ],
  },
  {
    cuisine: "Thai",
    items: [
      {
        name: "Pad Thai",
        description: "Thai stir-fried noodles with shrimp",
        price: 12.99,
      },
      {
        name: "Green Curry",
        description: "Spicy green curry with chicken",
        price: 13.99,
      },
      {
        name: "Spring Rolls",
        description: "Crispy vegetable spring rolls",
        price: 5.99,
      },
      {
        name: "Mango Sticky Rice",
        description: "Sweet mango with sticky rice",
        price: 6.99,
      },
    ],
  },
  {
    cuisine: "American BBQ",
    items: [
      {
        name: "BBQ Ribs",
        description: "Slow-cooked BBQ ribs",
        price: 14.99,
      },
      {
        name: "Coleslaw",
        description: "Creamy coleslaw salad",
        price: 3.99,
      },
      {
        name: "Baked Beans",
        description: "Savory baked beans",
        price: 2.99,
      },
      {
        name: "Cornbread",
        description: "Sweet cornbread",
        price: 2.99,
      },
    ],
  },
  {
    cuisine: "American Breakfast",
    items: [
      {
        name: "Pancakes",
        description: "Fluffy pancakes with syrup",
        price: 7.99,
      },
      {
        name: "Omelette",
        description: "Three-egg omelette with cheese",
        price: 6.99,
      },
      {
        name: "French Toast",
        description: "Cinnamon French toast",
        price: 7.99,
      },
      {
        name: "Bacon",
        description: "Crispy bacon strips",
        price: 3.99,
      },
    ],
  },
  {
    cuisine: "Italian",
    items: [
      {
        name: "Chicken Alfredo",
        description: "Pasta with creamy Alfredo sauce and chicken",
        price: 11.99,
      },
      {
        name: "Garlic Bread",
        description: "Toasted garlic bread",
        price: 3.99,
      },
      {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, and Caesar dressing",
        price: 7.99,
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert",
        price: 6.99,
      },
    ],
  },
  {
    cuisine: "British",
    items: [
      {
        name: "Fish and Chips",
        description: "Battered fish with fries",
        price: 10.99,
      },
      {
        name: "Mushy Peas",
        description: "Traditional mushy peas",
        price: 2.99,
      },
      {
        name: "Tartar Sauce",
        description: "Homemade tartar sauce",
        price: 1.99,
      },
      {
        name: "Apple Pie",
        description: "Warm apple pie with vanilla ice cream",
        price: 5.99,
      },
    ],
  },
  {
    cuisine: "Chinese",
    items: [
      {
        name: "Dim Sum",
        description: "Assorted Chinese dumplings",
        price: 9.99,
      },
      {
        name: "Kung Pao Chicken",
        description: "Spicy stir-fried chicken with peanuts",
        price: 11.99,
      },
      {
        name: "Fried Rice",
        description: "Vegetable fried rice",
        price: 7.99,
      },
      {
        name: "Egg Drop Soup",
        description: "Traditional egg drop soup",
        price: 4.99,
      },
    ],
  },
  {
    cuisine: "Vietnamese",
    items: [
      {
        name: "Pho",
        description: "Vietnamese noodle soup with beef",
        price: 9.99,
      },
      {
        name: "Banh Mi",
        description: "Vietnamese sandwich with pork",
        price: 6.99,
      },
      {
        name: "Spring Rolls",
        description: "Fresh spring rolls with shrimp",
        price: 5.99,
      },
      {
        name: "Vietnamese Iced Coffee",
        description: "Sweetened iced coffee with condensed milk",
        price: 3.99,
      },
    ],
  },
  {
    cuisine: "Greek",
    items: [
      {
        name: "Greek Salad",
        description: "Salad with feta cheese and olives",
        price: 8.99,
      },
      {
        name: "Gyro",
        description: "Greek sandwich with lamb",
        price: 7.99,
      },
      {
        name: "Spanakopita",
        description: "Spinach and cheese pastry",
        price: 4.99,
      },
      {
        name: "Baklava",
        description: "Sweet pastry with nuts and honey",
        price: 5.99,
      },
    ],
  },
  {
    cuisine: "Middle Eastern",
    items: [
      {
        name: "Falafel",
        description: "Fried chickpea balls",
        price: 6.99,
      },
      {
        name: "Hummus",
        description: "Chickpea dip with pita bread",
        price: 5.99,
      },
      {
        name: "Shawarma",
        description: "Marinated meat wrap",
        price: 7.99,
      },
      {
        name: "Tabbouleh",
        description: "Parsley salad with tomatoes and bulgur",
        price: 4.99,
      },
    ],
  },
  {
    cuisine: "American Diner",
    items: [
      {
        name: "Hamburger",
        description: "Beef patty with lettuce and tomato",
        price: 9.99,
      },
      {
        name: "Cheese Fries",
        description: "Fries with melted cheese",
        price: 4.99,
      },
      {
        name: "Onion Rings",
        description: "Crispy onion rings",
        price: 5.99,
      },
      {
        name: "Milkshake",
        description: "Thick chocolate milkshake",
        price: 4.99,
      },
    ],
  },
  {
    cuisine: "Indian",
    items: [
      {
        name: "Butter Chicken",
        description: "Creamy tomato chicken curry",
        price: 12.99,
      },
      { name: "Naan", description: "Soft Indian bread", price: 2.99 },
      {
        name: "Biryani",
        description: "Spiced rice with chicken",
        price: 11.99,
      },
      {
        name: "Samosa",
        description: "Fried pastry with spiced potatoes",
        price: 4.99,
      },
    ],
  },
];

export default menus;

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
  {
    cuisine: "Croatian",
    items: [
      {
        name: "Black risotto",
        description: "Rice and squid parts cooked in squid ink",
        price: 15.99,
      },
      {
        name: "Pašticada",
        description: "Beef slowly cooked in wine, carrots and cloves sweet and sour sauce, with gnocchi",
        price: 14.99,
      },
      {
        name: "Brudet",
        description: "Rich fish stew with squid, shrimps, with polenta",
        price: 15.99,
      },
      
      {
        name: "Buzara",
        description: "Mussels and shrimp stew in a wine broth with garlic and breadcrumbs",
        price: 12.99,
      },
      
      
    ]
  },
  {
    cuisine: "Croatian",
    items: [
      {
        name: "Zagrebački odrezak",
        description: "Veal steak stuffed with ham and cheese, deep-fried in egg, flour and breadcrumbs coat",
        price: 10.99,
      },
      {
        name: "Istrian Yota",
        description: "Beans, potatoes, bacon, spare ribs and sauerkraut stew",
        price: 11.99,
      },
      {
        name: "Sarma",
        description: "Slowly cooked minced meat wrapped in cabbage leaves, with mashed potatoes",
        price: 12.99,
      },
      {
        name: "Lamb on a spit",
        description: "Lamb roasted on a spit, with roasted potatoes",
        price: 13.99,
      },
    ]
  },
  {
    cuisine: "German",
    items: [
      {
        name: "Käsespätzle",
        description: "Small Spätzle pasta layered with grated cheese and topping with fried onion",
        price: 8.99,
      },
      {
        name: "Currywurst",
        description: "Chopped up sausages, fried potatoes and a spicy ketchup sauce",
        price: 5.99,
      },
      {
        name: "Rouladen",
        description: "Pickles and bacon wrapped in thin slices of beef, or veal, with gravy, dumplings, mashed potatoes, and cabbage",
        price: 9.99,
      },
      {
        name: "Eintopf",
        description: "Broth stew with vegetables, potatoes, lentils and meat, with bread",
        price: 10.99,
      }
    ]
  },
  { 
    cuisine: "German",
    items: [
      {
        name: "Sauerbraten",
        description: "Marinated veal/beef/pork meat, pickled in a sweet and sour gravy-like sauce, and slowly roasted in a dish, with potatoes",
        price: 11.99,
      },
      {
        name: "Pork Schnitzel",
        description: "Tenderized pork meat, coated in egg, flour and breadcrumbs, and fried in oil",
        price: 8.99,
      },
      {
        name: "Bratkartoffeln",
        description: "Small chunks of potatoes parboiled and fried with onion and bacon",
        price: 7.99,
      },
      {
        name: "Kartoffelpuffer",
        description: "Shallow fried pancake made from grated potatoes, egg, and flour, served with eggs and bacon",
        price: 6.99,
      }

    ]
  },
  {
    cuisine: "Bosnian",
    items: [
      {
        name: "Ćevapi",
        description: "Two types of minced beef meat hand-mixed and formed using a funnel, with lepinja flatbread, chopped onions, ajvar (bell pepper relish), sour cream, kajmak (similar to clotted cream), and cottage cheese",
        price: 9.99,
      },
      {
        name: "Pljeskavica",
        description: "Two types of minced beef meat hand-mixed and patty formed, served in lepinja flatbread with onions, ajvar, kajmak, and urnebes (spicy cheese salad)",
        price: 8.99,
      },
      {
        name: "Musaka",
        description: "Seasoned round beef and potato rounds casserole, layered, baked, and finished off with an egg and sour cream topping",
        price: 10.59,
      },
      {
        name: "Boranija",
        description: "Romano green beans simmered with chunks of veal, carrots, potatoes, onions and garlic, and seasoned with paprika, bay leaves, salt and pepper",
        price: 8.99,
      }
    ]
  },
  {
    cuisine: "Ukrainian",
    items: [
      {
        name: "Borsch",
        description: "Lent and meat soup with dried mushrooms, beets, carrots, beet kvass, dairy butter, and flour, with small mushrooms stuffed dough (vushka)",
        price: 9.99,
      },
      {
        name: "Varenyky",
        description: "Savory water, flour and yeast made perogie dumplings, stuffed with  the mixture of stewed cabbage and onions",
        price: 7.99,
      },
      {
        name: "Holubtsi",
        description: "Cabbage rolls filled with potatoes, mushrooms, onions, and carrots mixture, fried in a pan with a little vegetable oil, and stewed in tomato paste",
        price: 8.99,
      },
      {
        name: "Haricots",
        description: "White harricots cooked with dried mushrooms, bulb onions, and garlic",
        price: 8.99,
      }
    ]
  },
  {
    cuisine: "Turkish",
    items: [
      {
        name: "Kuru fasulye",
        description: "Stewed white beans, olive oil, pastirma highly seasoned, air-dried cured beef and onion and tomato sauce, with cacik salted strained yogurt or diluted yogurt mixed with cucumbers, garlic, salt, olive oil, red wine vinegar, and rice",
        price: 9.99,
      },
      {
        name: "Saksuka",
        description: "Silky purple skinned cubes of green eggplant flesh are cooked with zucchinis, garlic, tomatoes and chili",
        price: 7.99,
      },
      {
        name: "Iskender Kebab",
        description: "Thin slices of doner meat reverently laid over pieces of plump pide bread, smothered in freshly made tomato sauce, with a dash of sizzling melted butter, served with a portion of tanghy yoghurt, grilled tomato and green peppers",
        price: 11.99,
      },
      {
        name: "Hamsili pilav",
        description: "Filleted anchovies arranged over the rice and cooked in stock made from fried onions, butter, peanuts, Turkish allspice and raisins, mixed with fresh parsley and dill",
        price: 10.99,
      }
    ]
  }
  {
    cuisine: "Colombian",
    items: [
      {
        name: "Sopa de lentejas",
        description: "Lentil soup with chopped onion, garlic and grated carrots, served with avocado, rice, tomato and sweet plantain",
        price: 7.99,
      },
      {
        name: "Bandeja Paisa",
        description: "Rice, avocado, plantain, beans, chorizo and morilla sausages, chicharron fried pork rind, and minced beef",
        price: 9.99,
      },
      {
        name: "Empanadas",
        description: "Deep fried flaky pockets of pastry filled with minced beef meat chunks, potatoes, rice, tomatoes, green peppers, peanut sauce, with a squeeze of lime and a spoonful of aji",
        price: 8.99,
      },
      {
        name: "Sancocho",
        description: "Chicken, corn on the cob, plantain and beans soup, served with cooked rice, avocado, and aji dipping sauce on the side",
        price: 7.99,
      }
    ]
  },
  {
    cuisine: "Venezuelan",
    items: [
      {
        name: "Chupe Andino",
        description: "Chicken, potatoes, corn, cheese and cream soup",
        price: 7.99,
      },
      {
        name: "Chicharron Salad",
        description: "Chicharron crispy pork rings mixed with lettuce, tomatoes, onions, avocado, olive oil and vinegar dressing",
        price: 8.99,
      },
      {
        name: "Pabellon Criollo",
        description: "Shredded beef, cooked rice and black beans, and fried plantains",
        price: 9.99,
      },
      {
        name: "Asado Negro",
        description: "Juicy roasted beef steak, marinated in caramelized sugar and slow cooked, served with cooked rice and fried plantains",
        price: 10.99,
      }
    ]
  },
  {
    cuisine: "Irish",
    items: [
      {
        name: "Colcannon Potatoes",
        description: "Mashed potatoes, crumbled bacon, shredded cabbage, grean onions, butter and whole milk",
        price: 8.99,
      },
      {
        name: "Irish Stew",
        description: "Thick, hearty mutton, potatoes, onions and carrots stew",
        price: 7.99,
      },
      {
        name: "Shepherd's Pie",
        description: "Casserole with a layer of cooked ground lamb meat, onions and carrots, topped with mashed potatoes, and baked in the oven until the mashed potatoes are well browned",
        price: 9.99,
      },
      {
        name: "Coddle",
        description: "Potatoes, sausages, bacon and onions simmered in a broth",
        price: 10.99,
      }
      
    ]
  }

];

export default menus;

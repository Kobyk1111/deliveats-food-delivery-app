const restaurants = [
    {
    basicInfo: {
      businessName: "Gourmet Haven",
      businessId: "“12/345/67890",
      owner: "Jane Doe",
      venueName: "Gourmet",
      contact: {
        email: "janedoe@gourmethaven.com",
        phoneNumber: "+1234567890",
      },
      address: {
        street: "123 Foodie Lane",
        city: "Culinary City",
        state: "Gastronomy",
        zipCode: "12345",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Italian", "Mediterranean"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread with tomatoes, garlic, and basil", price: 6.99 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and herbs", price: 8.99 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Margherita Pizza", description: "Classic pizza with tomatoes, mozzarella, and basil", price: 12.99 },
          { name: "Lasagna", description: "Layers of pasta with meat sauce and cheese", price: 14.99 },
        ],
      },
      {
        category: "Deserts",
        items: [
          { name: "Apple Pie", description: "Classic apple pie with a scoop of vanilla ice cream", price: 3.00 },
          { name: "Chocolate Brownie", description: "Rich chocolate brownie served with whipped cream", price: 3.99 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Lemonade", description: "Freshly squeezed lemonade", price: 3.00 },
          { name: "Iced Tea", description: "Sweetened iced tea withlemon", price: 3.00 },
        ],
      },
      { 
        category : "20 menu",
        items: [
            { category: "Appetizers", name: "Bruschetta", description: "Grilled bread with tomatoes, garlic, and basil", price: 3.00 },
            { category: "Main Courses", name: "Margherita Pizza", description: "Classic pizza with tomatoes, mozzarella, and basil", price: 11.00 },
            { category: "Deserts", name: "Apple Pie", description: "Classic apple pie with a scoop of vanilla ice cream", price: 3.00 },
            { category: "Drinks", name: "Lemonade", description: "Freshly squeezed lemonade", price: 3.00 },
             
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.gourmethaven.com/photos/restaurant1.jpg", "https://www.gourmethaven.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/gourmethaven",
        instagram: "http://www.instagram.com/gourmethaven",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Buy 1 Get 1 Free on all pizzas on Wednesdays", code: "BOGO_WED" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
},
{
    basicInfo: {
      businessName: "Adriatic Flavors",
      businessId: "12/345/67893",
      owner: "Luka Jovanović",
      venueName: "Adriatic",
      contact: {
        email: "luka@adriaticflavors.com",
        phoneNumber: "+1234567893",
      },
      address: {
        street: "789 Ocean Road",
        city: "Dubrovnik",
        state: "Gastronomy",
        zipCode: "54321",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Dalmatian Prosciutto", description: "Dry-cured ham", price: 6.00 },
          { name: "Grilled Octopus", description: "Tender grilled octopus with herbs", price: 7.50 },
          { name: "Marinated Anchovies", description: "Anchovies marinated in olive oil", price: 5.00 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.50 },
          { name: "Tomato Salad", description: "Fresh tomatoes with olive oil and basil", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables under a bell-shaped lid", price: 13.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 12.50 },
          { name: "Grilled Sea Bass", description: "Fresh sea bass grilled to perfection", price: 15.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.00 },
          { name: "Pasticada", description: "Beef stew cooked in red wine", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Kremšnita", description: "Cream cake with layers of custard", price: 4.50 },
          { name: "Palačinke", description: "Crepes with sweet filling", price: 5.00 },
          { name: "Baklava", description: "Sweet pastry made with layers of filo dough", price: 5.50 },
          { name: "Torta", description: "Traditional Croatian cake", price: 6.00 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Plavac Mali", description: "Local red wine", price: 5.00 },
          { name: "Žlahtina", description: "White wine from Krk", price: 6.00 },
          { name: "Pivo", description: "Croatian beer", price: 4.00 },
          { name: "Rakija", description: "Traditional Croatian brandy", price: 7.00 },
          { name: "Sok od Narandže", description: "Freshly squeezed orange juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Grilled Octopus", description: "Tender grilled octopus with herbs", price: 7.50 },
          { category: "Main Courses", name: "Ćevapi", description: "Grilled minced meat sausages", price: 12.50 },
          { category: "Desserts", name: "Kremšnita", description: "Cream cake with layers of custard", price: 4.50 },
          { category: "Drinks", name: "Sok od Narandže", description: "Freshly squeezed orange juice", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.adriaticflavors.com/photos/restaurant1.jpg", "https://www.adriaticflavors.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/adriaticflavors",
        instagram: "http://www.instagram.com/adriaticflavors",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with every main course on Saturdays", code: "FREEDESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Hvar's Taste",
      businessId: "12/345/67894",
      owner: "Ivana Kovač",
      venueName: "Hvar's",
      contact: {
        email: "ivana@hvarstaste.com",
        phoneNumber: "+1234567894",
      },
      address: {
        street: "101 Vineyard Avenue",
        city: "Hvar",
        state: "Gastronomy",
        zipCode: "65432",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Istrian Ham", description: "Cured ham from Istria", price: 5.00 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with cheese", price: 6.50 },
          { name: "Seafood Salad", description: "Mixed seafood with olive oil", price: 7.00 },
          { name: "Bread with Olive Oil", description: "Fresh bread with extra virgin olive oil", price: 4.50 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lamb Peka", description: "Lamb slow-cooked under a bell", price: 14.00 },
          { name: "Mussels Buzara", description: "Mussels cooked in tomato and wine sauce", price: 12.50 },
          { name: "Grilled Tuna", description: "Fresh tuna steak grilled", price: 13.50 },
          { name: "Vegetable Risotto", description: "Creamy risotto with seasonal vegetables", price: 11.00 },
          { name: "Pork Ribs", description: "Barbecued pork ribs", price: 15.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Povitica", description: "Nut roll from Croatia", price: 5.00 },
          { name: "Apple Strudel", description: "Traditional apple strudel", price: 4.50 },
          { name: "Sweet Ricotta Balls", description: "Ricotta balls coated in sugar", price: 5.50 },
          { name: "Croatian Cheesecake", description: "Rich and creamy cheesecake", price: 6.00 },
          { name: "Tiramisu", description: "Classic tiramisu", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Lager", description: "Local Croatian beer", price: 4.00 },
          { name: "Red Wine", description: "House red wine", price: 5.50 },
          { name: "Sparkling Water", description: "Carbonated water", price: 3.00 },
          { name: "Fruit Juice", description: "Seasonal fruit juice", price: 3.50 },
          { name: "Herbal Tea", description: "Selection of herbal teas", price: 2.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Seafood Salad", description: "Mixed seafood with olive oil", price: 7.00 },
          { category: "Main Courses", name: "Lamb Peka", description: "Lamb slow-cooked under a bell", price: 14.00 },
          { category: "Desserts", name: "Apple Strudel", description: "Traditional apple strudel", price: 4.50 },
          { category: "Drinks", name: "Sparkling Water", description: "Carbonated water", price: 3.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.hvarstaste.com/photos/restaurant1.jpg", "https://www.hvarstaste.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/hvarstaste",
        instagram: "http://www.instagram.com/hvarstaste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free drink with every main course on Thursdays", code: "FREEDRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Zagreb Eats",
      businessId: "12/345/67895",
      owner: "Petra Horvat",
      venueName: "Zagreb",
      contact: {
        email: "petra@zagrebeats.com",
        phoneNumber: "+1234567895",
      },
      address: {
        street: "202 Capital Street",
        city: "Zagreb",
        state: "Gastronomy",
        zipCode: "67890",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Slavonian Sausages", description: "Spicy sausages from Slavonia", price: 6.00 },
          { name: "Fish Carpaccio", description: "Raw fish slices with lemon", price: 7.00 },
          { name: "Mixed Pickles", description: "Selection of pickled vegetables", price: 5.00 },
          { name: "Croatian Bruschetta", description: "Toasted bread with toppings", price: 4.50 },
          { name: "Stuffed Calamari", description: "Calamari stuffed with cheese and herbs", price: 6.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Grilled Swordfish", description: "Swordfish steak grilled with herbs", price: 15.00 },
          { name: "Vegetarian Pita", description: "Pastry filled with mixed vegetables", price: 12.00 },
          { name: "Beef Steak", description: "Juicy steak cooked to perfection", price: 16.00 },
          { name: "Chicken Paprikash", description: "Chicken cooked in a paprika sauce", price: 13.00 },
          { name: "Seafood Risotto", description: "Risotto with a mix of seafood", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Zagreb Cake", description: "Chocolate and cream cake", price: 5.00 },
          { name: "Strawberry Tart", description: "Tart with fresh strawberries", price: 5.50 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 4.00 },
          { name: "Orange Cake", description: "Cake with a hint of orange", price: 4.50 },
          { name: "Baklava", description: "Layers of filo pastry with nuts", price: 6.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Red Wine", description: "Red wine from Croatia", price: 5.00 },
          { name: "Herbal Liqueur", description: "Croatian herbal liqueur", price: 7.00 },
          { name: "Craft Beer", description: "Locally brewed craft beer", price: 4.00 },
          { name: "Lemon Juice", description: "Freshly squeezed lemon juice", price: 3.00 },
          { name: "Sparkling Lemonade", description: "Lemonade with a sparkling twist", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Stuffed Calamari", description: "Calamari stuffed with cheese and herbs", price: 6.50 },
          { category: "Main Courses", name: "Grilled Swordfish", description: "Swordfish steak grilled with herbs", price: 15.00 },
          { category: "Desserts", name: "Orange Cake", description: "Cake with a hint of orange", price: 4.50 },
          { category: "Drinks", name: "Sparkling Lemonade", description: "Lemonade with a sparkling twist", price: 3.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.zagrebeats.com/photos/restaurant1.jpg", "https://www.zagrebeats.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zagrebeats",
        instagram: "http://www.instagram.com/zagrebeats",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with main course on Fridays", code: "FREEDESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Dubrovnik Bites",
      businessId: "12/345/67896",
      owner: "Miroslav Petrić",
      venueName: "Dubrovnik",
      contact: {
        email: "miroslav@dubrovnikbites.com",
        phoneNumber: "+1234567896",
      },
      address: {
        street: "303 Coastal Street",
        city: "Dubrovnik",
        state: "Gastronomy",
        zipCode: "78901",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Dalmatian Olives", description: "Olives marinated in herbs", price: 5.50 },
          { name: "Seafood Soup", description: "Rich seafood broth", price: 6.00 },
          { name: "Cured Meats", description: "Assorted cured meats", price: 7.00 },
          { name: "Fried Calamari", description: "Crispy fried calamari", price: 6.50 },
          { name: "Cheese and Prosciutto", description: "Cheese and prosciutto platter", price: 5.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Roasted Lamb", description: "Slow-roasted lamb with herbs", price: 15.00 },
          { name: "Fish Paprikash", description: "Fish stewed in paprika sauce", price: 12.50 },
          { name: "Grilled Chicken", description: "Chicken grilled with spices", price: 13.00 },
          { name: "Vegetable Stew", description: "Hearty stew with mixed vegetables", price: 11.00 },
          { name: "Beef Goulash", description: "Spicy beef stew", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Peach Cobbler", description: "Warm peach cobbler with cream", price: 4.50 },
          { name: "Cherry Strudel", description: "Strudel filled with cherries", price: 5.00 },
          { name: "Lemon Cheesecake", description: "Cheesecake with a lemon twist", price: 5.50 },
          { name: "Chocolate Cake", description: "Rich chocolate cake", price: 6.00 },
          { name: "Panna Cotta", description: "Creamy panna cotta with berry sauce", price: 5.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Red Wine", description: "Local red wine", price: 6.00 },
          { name: "White Wine", description: "Local white wine", price: 5.50 },
          { name: "Craft Beer", description: "Locally brewed craft beer", price: 4.00 },
          { name: "Juice Blend", description: "Mixed fruit juice", price: 3.00 },
          { name: "Herbal Infusion", description: "Selection of herbal infusions", price: 2.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Calamari", description: "Crispy fried calamari", price: 6.50 },
          { category: "Main Courses", name: "Roasted Lamb", description: "Slow-roasted lamb with herbs", price: 15.00 },
          { category: "Desserts", name: "Cherry Strudel", description: "Strudel filled with cherries", price: 5.00 },
          { category: "Drinks", name: "Juice Blend", description: "Mixed fruit juice", price: 3.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.dubrovnikbites.com/photos/restaurant1.jpg", "https://www.dubrovnikbites.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikbites",
        instagram: "http://www.instagram.com/dubrovnikbites",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free drink with any dessert on Sundays", code: "FREEDRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Split Savory",
      businessId: "12/345/67897",
      owner: "Jasna Kralj",
      venueName: "Split",
      contact: {
        email: "jasna@splitsavory.com",
        phoneNumber: "+1234567897",
      },
      address: {
        street: "404 Harbor Street",
        city: "Split",
        state: "Gastronomy",
        zipCode: "90123",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Grilled Sardines", description: "Fresh sardines grilled with herbs", price: 6.00 },
          { name: "Smoked Ham", description: "Smoked ham with pickles", price: 5.50 },
          { name: "Salami Platter", description: "Assorted Croatian salamis", price: 7.00 },
          { name: "Tomato Bruschetta", description: "Toasted bread with tomato topping", price: 5.00 },
          { name: "Garlic Shrimp", description: "Shrimp cooked in garlic sauce", price: 6.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Seafood Platter", description: "Assortment of grilled seafood", price: 16.00 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 13.00 },
          { name: "Vegetarian Lasagna", description: "Lasagna layered with vegetables", price: 12.00 },
          { name: "Roasted Duck", description: "Duck roasted with herbs and spices", price: 15.00 },
          { name: "Spaghetti Carbonara", description: "Pasta with creamy carbonara sauce", price: 11.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Churros", description: "Fried dough pastry with sugar", price: 4.00 },
          { name: "Ricotta Cake", description: "Cake made with ricotta cheese", price: 5.00 },
          { name: "Berry Sorbet", description: "Refreshing sorbet made with mixed berries", price: 4.50 },
          { name: "Cinnamon Roll", description: "Sweet roll with cinnamon glaze", price: 4.00 },
          { name: "Apple Crumble", description: "Apple crumble with a crunchy topping", price: 5.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Craft Lager", description: "Locally brewed lager", price: 4.50 },
          { name: "Local Red Wine", description: "Red wine from local vineyards", price: 6.00 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 3.50 },
          { name: "Orange Smoothie", description: "Smoothie made with fresh oranges", price: 4.00 },
          { name: "Herbal Tea", description: "Selection of herbal teas", price: 2.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Garlic Shrimp", description: "Shrimp cooked in garlic sauce", price: 6.50 },
          { category: "Main Courses", name: "Spaghetti Carbonara", description: "Pasta with creamy carbonara sauce", price: 11.00 },
          { category: "Desserts", name: "Berry Sorbet", description: "Refreshing sorbet made with mixed berries", price: 4.50 },
          { category: "Drinks", name: "Apple Cider", description: "Fresh apple cider", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.splitsavory.com/photos/restaurant1.jpg", "https://www.splitsavory.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/splitsavory",
        instagram: "http://www.instagram.com/splitsavory",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free appetizer with every main course on Mondays", code: "FREEAPPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Croatian Delight",
      businessId: "12/345/67898",
      owner: "Ivan Milović",
      venueName: "Croatian",
      contact: {
        email: "ivan@croatiandelight.com",
        phoneNumber: "+1234567898",
      },
      address: {
        street: "505 Heritage Boulevard",
        city: "Osijek",
        state: "Gastronomy",
        zipCode: "23456",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Cheese Stuffed Peppers", description: "Peppers stuffed with cheese", price: 5.50 },
          { name: "Prawn Cocktail", description: "Cocktail with prawns and cocktail sauce", price: 6.00 },
          { name: "Marinated Eggplant", description: "Eggplant marinated with herbs", price: 4.50 },
          { name: "Vegetable Skewers", description: "Grilled vegetable skewers", price: 5.00 },
          { name: "Garlic Bread", description: "Toasted bread with garlic", price: 3.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Braised Pork", description: "Pork slow-cooked in its juices", price: 14.00 },
          { name: "Stuffed Bell Peppers", description: "Bell peppers stuffed with meat and rice", price: 13.00 },
          { name: "Grilled Tuna", description: "Tuna steak grilled with herbs", price: 15.00 },
          { name: "Vegetarian Stir Fry", description: "Stir-fried vegetables with sauce", price: 12.00 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Fruit Tart", description: "Tart with fresh fruits", price: 5.50 },
          { name: "Chocolate Mousse", description: "Rich chocolate mousse", price: 5.00 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.50 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.00 },
          { name: "Baklava", description: "Layers of filo pastry with nuts", price: 6.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian White Wine", description: "White wine from Croatia", price: 5.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 4.00 },
          { name: "Soft Drink", description: "Selection of soft drinks", price: 2.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
          { name: "Fruit Smoothie", description: "Smoothie with mixed fruits", price: 4.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Vegetable Skewers", description: "Grilled vegetable skewers", price: 5.00 },
          { category: "Main Courses", name: "Grilled Tuna", description: "Tuna steak grilled with herbs", price: 15.00 },
          { category: "Desserts", name: "Fruit Tart", description: "Tart with fresh fruits", price: 5.50 },
          { category: "Drinks", name: "Fruit Smoothie", description: "Smoothie with mixed fruits", price: 4.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.croatiandelight.com/photos/restaurant1.jpg", "https://www.croatiandelight.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/croatiandelight",
        instagram: "http://www.instagram.com/croatiandelight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with main course on Tuesdays", code: "FREEDESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Osijek Taste",
      businessId: "12/345/67899",
      owner: "Maja Novak",
      venueName: "Osijek",
      contact: {
        email: "maja@osijektaste.com",
        phoneNumber: "+1234567899",
      },
      address: {
        street: "606 Riverside Drive",
        city: "Osijek",
        state: "Gastronomy",
        zipCode: "34567",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Cheese Platter", description: "Selection of Croatian cheeses", price: 6.00 },
          { name: "Olive Tapenade", description: "Tapenade made from olives", price: 5.50 },
          { name: "Prosciutto and Melon", description: "Prosciutto served with melon", price: 7.00 },
          { name: "Tomato Salad", description: "Salad with fresh tomatoes and basil", price: 5.00 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese", price: 5.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Seafood Paella", description: "Paella with a variety of seafood", price: 16.00 },
          { name: "Pork Ribs", description: "Ribs slow-cooked in a savory sauce", price: 14.00 },
          { name: "Stuffed Chicken Breast", description: "Chicken breast stuffed with cheese and herbs", price: 15.00 },
          { name: "Vegetable Risotto", description: "Risotto with mixed vegetables", price: 12.00 },
          { name: "Beef Tenderloin", description: "Tenderloin steak cooked to order", price: 17.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 5.50 },
          { name: "Apple Pie", description: "Traditional apple pie with a flaky crust", price: 4.50 },
          { name: "Chocolate Brownie", description: "Rich and fudgy brownie", price: 4.00 },
          { name: "Panna Cotta", description: "Creamy panna cotta with a berry compote", price: 5.00 },
          { name: "Baklava", description: "Layers of filo pastry with nuts", price: 6.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Local Red Wine", description: "Red wine from local vineyards", price: 5.50 },
          { name: "Craft Beer", description: "Locally brewed craft beer", price: 4.00 },
          { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
          { name: "Iced Coffee", description: "Refreshing iced coffee", price: 4.00 },
          { name: "Herbal Tea", description: "Selection of herbal teas", price: 2.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Cheese Platter", description: "Selection of Croatian cheeses", price: 6.00 },
          { category: "Main Courses", name: "Seafood Paella", description: "Paella with a variety of seafood", price: 16.00 },
          { category: "Desserts", name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 5.50 },
          { category: "Drinks", name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.osijektaste.com/photos/restaurant1.jpg", "https://www.osijektaste.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/osijektaste",
        instagram: "http://www.instagram.com/osijektaste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free appetizer with main course on Saturdays", code: "FREEAPPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every $1 spent. Redeem 50 points for a $5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Delights",
      businessId: "12/345/67890",
      owner: "Kwame Nkrumah",
      venueName: "Accra Delights",
      contact: {
        email: "kwame@accradelights.com",
        phoneNumber: "+233123456789",
      },
      address: {
        street: "1 Heritage Road",
        city: "Accra",
        state: "Greater Accra",
        zipCode: "00233",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.50 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.00 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.00 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.00 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.50 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.50 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accradelights.com/photos/restaurant1.jpg", "https://www.accradelights.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accradelights",
        instagram: "http://www.instagram.com/accradelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free appetizer with any main course on Fridays", code: "FREEAPPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kumasi Cuisine",
      businessId: "12/345/67891",
      owner: "Ama Serwaa",
      venueName: "Kumasi Cuisine",
      contact: {
        email: "ama@kumasicuisine.com",
        phoneNumber: "+233234567890",
      },
      address: {
        street: "22 Cultural Avenue",
        city: "Kumasi",
        state: "Ashanti",
        zipCode: "00234",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 5.00 },
          { name: "Meat Pie", description: "Savory pie filled with spiced meat", price: 6.00 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.50 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Jollof Rice with Chicken", description: "Spicy rice with grilled chicken", price: 14.00 },
          { name: "Fufu with Light Soup", description: "Cassava dough with tomato-based soup", price: 15.00 },
          { name: "Gari and Beans", description: "Gari served with beans", price: 12.00 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Fresh Mango Juice", description: "Juice made from fresh mangoes", price: 4.00 },
          { name: "Beer", description: "Local Ghanaian beer", price: 5.00 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
          { name: "Sobolo", description: "Hibiscus tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { category: "Main Courses", name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { category: "Desserts", name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { category: "Drinks", name: "Fresh Mango Juice", description: "Juice made from fresh mangoes", price: 4.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.kumasicuisine.com/photos/restaurant1.jpg", "https://www.kumasicuisine.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kumasicuisine",
        instagram: "http://www.instagram.com/kumasicuisine",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with main course on Thursdays", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Takoradi Tastes",
      businessId: "12/345/67892",
      owner: "Esi Agyei",
      venueName: "Takoradi Tastes",
      contact: {
        email: "esi@takoraditastes.com",
        phoneNumber: "+233345678901",
      },
      address: {
        street: "33 Coastal Road",
        city: "Takoradi",
        state: "Western",
        zipCode: "00235",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.50 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.00 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.50 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.50 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.50 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.takoraditastes.com/photos/restaurant1.jpg", "https://www.takoraditastes.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/takoraditastes",
        instagram: "http://www.instagram.com/takoraditastes",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free appetizer with main course on Mondays", code: "FREEAPPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Tema Taste",
      businessId: "12/345/67893",
      owner: "Kwesi Appiah",
      venueName: "Tema Taste",
      contact: {
        email: "kwesi@temataste.com",
        phoneNumber: "+233456789012",
      },
      address: {
        street: "44 Port Road",
        city: "Tema",
        state: "Greater Accra",
        zipCode: "00236",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.50 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.50 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.50 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { category: "Drinks", name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.temataste.com/photos/restaurant1.jpg", "https://www.temataste.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/temataste",
        instagram: "http://www.instagram.com/temataste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with main course on Tuesdays", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Grills",
      businessId: "12/345/67894",
      owner: "Akosua Boateng",
      venueName: "Ghana Grills",
      contact: {
        email: "akosua@ghanagrills.com",
        phoneNumber: "+233567890123",
      },
      address: {
        street: "55 Grill Street",
        city: "Koforidua",
        state: "Eastern",
        zipCode: "00237",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.50 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.00 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Fufu with Light Soup", description: "Cassava dough with tomato-based soup", price: 15.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.00 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.50 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.ghanagrills.com/photos/restaurant1.jpg", "https://www.ghanagrills.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanagrills",
        instagram: "http://www.instagram.com/ghanagrills",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Buy 1 Get 1 Free on all main courses on Sundays", code: "BOGO_SUN" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Bolgatanga Bites",
      businessId: "12/345/67895",
      owner: "Isaac Mensah",
      venueName: "Bolgatanga Bites",
      contact: {
        email: "isaac@bolgatangabites.com",
        phoneNumber: "+233678901234",
      },
      address: {
        street: "77 Market Street",
        city: "Bolgatanga",
        state: "Upper East",
        zipCode: "00238",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.50 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.00 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.bolgatangabites.com/photos/restaurant1.jpg", "https://www.bolgatangabites.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/bolgatangabites",
        instagram: "http://www.instagram.com/bolgatangabites",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Buy 1 Get 1 Free on all appetizers on Fridays", code: "BOGO_APP" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kumasi Delights",
      businessId: "12/345/67896",
      owner: "Amma Owusu",
      venueName: "Kumasi Delights",
      contact: {
        email: "amma@kumasidelights.com",
        phoneNumber: "+233789012345",
      },
      address: {
        street: "12 Main Street",
        city: "Kumasi",
        state: "Ashanti",
        zipCode: "00239",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.50 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.50 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.50 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Kelewele", description: "Spicy fried plantains", price: 5.00 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fresh Juice", description: "Freshly squeezed fruit juice", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.kumasidelights.com/photos/restaurant1.jpg", "https://www.kumasidelights.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kumasidelights",
        instagram: "http://www.instagram.com/kumasidelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with main course on Wednesdays", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Eats",
      businessId: "12/345/67897",
      owner: "Nana Asante",
      venueName: "Accra Eats",
      contact: {
        email: "nana@accratastes.com",
        phoneNumber: "+233890123456",
      },
      address: {
        street: "66 High Street",
        city: "Accra",
        state: "Greater Accra",
        zipCode: "00240",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.00 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.50 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.50 },
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Pudding", description: "Creamy mango pudding", price: 4.50 },
          { category: "Drinks", name: "Fruit Punch", description: "Mixed fruit punch", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accratastes.com/photos/restaurant1.jpg", "https://www.accratastes.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accratastes",
        instagram: "http://www.instagram.com/accratastes",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free drink with main course on Fridays", code: "FREE_DRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Takoradi Treats",
      businessId: "12/345/67898",
      owner: "Kwame Akoto",
      venueName: "Takoradi Treats",
      contact: {
        email: "kwame@takoraditreats.com",
        phoneNumber: "+233901234567",
      },
      address: {
        street: "88 Beach Road",
        city: "Takoradi",
        state: "Western",
        zipCode: "00241",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 5.00 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.50 },
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.00 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.00 },
          { name: "Fufu with Groundnut Soup", description: "Cassava dough with peanut soup", price: 15.00 },
          { name: "Banku with Okra Soup", description: "Corn dough served with okra soup", price: 14.00 },
          { name: "Light Soup with Fish", description: "Spicy tomato-based soup with fish", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Plantain Cake", description: "Sweet plantain-based cake", price: 5.00 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.00 },
          { name: "Pineapple Cake", description: "Cake made with fresh pineapple", price: 5.50 },
          { name: "Chocolate Brownies", description: "Rich and fudgy brownies", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.00 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.50 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.00 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
          { name: "Iced Tea", description: "Refreshing iced tea", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.50 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.00 },
          { category: "Drinks", name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.takoraditreats.com/photos/restaurant1.jpg", "https://www.takoraditreats.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/takoraditreats",
        instagram: "http://www.instagram.com/takoraditreats",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on Sundays", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every GHS 10 spent. Redeem 50 points for a GHS 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kosovo Tastes",
      businessId: "12/345/67890",
      owner: "Arta Hoxha",
      venueName: "Kosovo Tastes",
      contact: {
        email: "arta@kosovotastes.com",
        phoneNumber: "+355601234567",
      },
      address: {
        street: "4 Republic Street",
        city: "Priština",
        state: "Kosovo",
        zipCode: "1011",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.tiranatastes.com/photos/restaurant1.jpg", "https://www.tiranatastes.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/tiranatastes",
        instagram: "http://www.instagram.com/tiranatastes",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kosovo Delights",
      businessId: "12/345/67891",
      owner: "Elira Doda",
      venueName: "Kosovo Delights",
      contact: {
        email: "elira@kosovo-delights.com",
        phoneNumber: "+355602345678",
      },
      address: {
        street: "22 Freedom Avenue",
        city: "Mitrovica",
        state: "Mitrovica",
        zipCode: "4004",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albanian-delights.com/photos/restaurant2.jpg", "https://www.albanian-delights.com/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albaniandelights",
        instagram: "http://www.instagram.com/albaniandelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on Fridays", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Tirana Tastes",
      businessId: "12/345/67890",
      owner: "Arta Hoxha",
      venueName: "Tirana Tastes",
      contact: {
        email: "arta@tiranatastes.com",
        phoneNumber: "+355601234567",
      },
      address: {
        street: "45 Republic Street",
        city: "Tirana",
        state: "Tirana",
        zipCode: "1001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.tiranatastes.com/photos/restaurant1.jpg", "https://www.tiranatastes.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/tiranatastes",
        instagram: "http://www.instagram.com/tiranatastes",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Delights",
      businessId: "12/345/67891",
      owner: "Elira Doda",
      venueName: "Albanian Delights",
      contact: {
        email: "elira@albanian-delights.com",
        phoneNumber: "+355602345678",
      },
      address: {
        street: "22 Freedom Avenue",
        city: "Shkodra",
        state: "Shkodra",
        zipCode: "4001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albanian-delights.com/photos/restaurant1.jpg", "https://www.albanian-delights.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-delights",
        instagram: "http://www.instagram.com/albanian-delights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  // Additional 8 restaurants with similar structure
  {
    basicInfo: {
      businessName: "Albanian Flavors",
      businessId: "12/345/67892",
      owner: "Besar Dajti",
      venueName: "Albanian Flavors",
      contact: {
        email: "besar@albanianflavors.com",
        phoneNumber: "+355603456789",
      },
      address: {
        street: "78 Sunset Road",
        city: "Korçë",
        state: "Korçë",
        zipCode: "7001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albanianflavors.com/photos/restaurant1.jpg", "https://www.albanianflavors.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanianflavors",
        instagram: "http://www.instagram.com/albanianflavors",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Taste House",
      businessId: "12/345/67893",
      owner: "Flora Kastrioti",
      venueName: "Albanian Taste House",
      contact: {
        email: "flora@albaniantastehouse.com",
        phoneNumber: "+355604567890",
      },
      address: {
        street: "10 River Walk",
        city: "Fier",
        state: "Fier",
        zipCode: "6001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.50 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albaniantastehouse.com/photos/restaurant1.jpg", "https://www.albaniantastehouse.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albaniantastehouse",
        instagram: "http://www.instagram.com/albaniantastehouse",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Gourmet",
      businessId: "12/345/67894",
      owner: "Dorian Leka",
      venueName: "Albanian Gourmet",
      contact: {
        email: "dorian@albangourmet.com",
        phoneNumber: "+355605678901",
      },
      address: {
        street: "90 Heritage Street",
        city: "Saranda",
        state: "Saranda",
        zipCode: "8001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albangourmet.com/photos/restaurant1.jpg", "https://www.albangourmet.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albangourmet",
        instagram: "http://www.instagram.com/albangourmet",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Gastronomy Albania",
      businessId: "12/345/67895",
      owner: "Anita Baraku",
      venueName: "Gastronomy Albania",
      contact: {
        email: "anita@gastronomyalbania.com",
        phoneNumber: "+355606789012",
      },
      address: {
        street: "34 Market Street",
        city: "Berat",
        state: "Berat",
        zipCode: "5001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.gastronomyalbania.com/photos/restaurant1.jpg", "https://www.gastronomyalbania.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/gastronomyalbania",
        instagram: "http://www.instagram.com/gastronomyalbania",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Essence",
      businessId: "12/345/67896",
      owner: "Elira Hoxha",
      venueName: "Albanian Essence",
      contact: {
        email: "elira@albanianessence.com",
        phoneNumber: "+355607890123",
      },
      address: {
        street: "22 Garden Avenue",
        city: "Vlorë",
        state: "Vlorë",
        zipCode: "9001",
      },
    },
    openAndCloseHours: {
      monday: "10:00 AM - 10:00 PM",
      tuesday: "10:00 AM - 10:00 PM",
      wednesday: "10:00 AM - 10:00 PM",
      thursday: "10:00 AM - 10:00 PM",
      friday: "10:00 AM - 11:00 PM",
      saturday: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { name: "Kofte", description: "Grilled minced meatballs with spices", price: 5.00 },
          { name: "Fërgesë", description: "Tomato and pepper stew with feta cheese", price: 4.50 },
          { name: "Suxhuk", description: "Spicy Albanian sausage", price: 6.00 },
          { name: "Grilled Vegetables", description: "Seasonal vegetables grilled with herbs", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { name: "Pasticcio", description: "Albanian-style lasagna with meat and béchamel sauce", price: 13.00 },
          { name: "Fërgesë me Mish", description: "Stew with meat, peppers, and tomatoes", price: 14.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with a side of vegetables", price: 15.00 },
          { name: "Kuzinë", description: "Slow-cooked beef with seasonal vegetables", price: 14.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { name: "Qofte me Pjeshke", description: "Peach-flavored cake", price: 4.50 },
          { name: "Kadaif", description: "Shredded pastry with nuts and syrup", price: 5.00 },
          { name: "Raki Ice Cream", description: "Ice cream with a hint of raki", price: 5.50 },
          { name: "Almond Cake", description: "Moist cake with almond flavor", price: 5.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 6.00 },
          { name: "Tullum", description: "Albanian grape juice", price: 4.50 },
          { name: "Beer", description: "Locally brewed Albanian beer", price: 5.00 },
          { name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
          { name: "Herbal Tea", description: "Tea made with local herbs", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Byrek", description: "Savory pastry filled with cheese and spinach", price: 4.00 },
          { category: "Main Courses", name: "Tavë Kosi", description: "Baked lamb with yogurt and eggs", price: 12.00 },
          { category: "Desserts", name: "Baklava", description: "Layered pastry with nuts and honey", price: 5.00 },
          { category: "Drinks", name: "Fresh Lemonade", description: "Homemade lemonade with mint", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.albanianessence.com/photos/restaurant1.jpg", "https://www.albanianessence.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanianessence",
        instagram: "http://www.instagram.com/albanianessence",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every ALL 100 spent. Redeem 50 points for a ALL 5 discount.",
    },
  },
  [
    {
      "street": "Alexanderplatz 1",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10178"
    },
    {
      "street": "Friedrichstraße 76",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117"
    },
    {
      "street": "Kurfürstendamm 25",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10719"
    },
    {
      "street": "Potsdamer Platz 3",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10785"
    },
    {
      "street": "Unter den Linden 16",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117"
    },
    {
      "street": "Karl-Marx-Allee 34",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10178"
    },
    {
      "street": "Schönhauser Allee 145",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10437"
    },
    {
      "street": "Frankfurter Allee 60",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10247"
    },
    {
      "street": "Heinrich-Heine-Straße 5",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10179"
    },
    {
      "street": "Oranienburger Straße 50",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117"
    },
    {
      "street": "Elsenstraße 11",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "12435"
    },
    {
      "street": "Alexanderufer 3",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117"
    },
    {
      "street": "Kochstraße 22",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10969"
    },
    {
      "street": "Spandauer Damm 20",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "14059"
    },
    {
      "street": "Breite Straße 30",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10178"
    },
    {
      "street": "Tauentzienstraße 8",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10789"
    },
    {
      "street": "Weinmeisterstraße 9",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10178"
    },
    {
      "street": "Invalidenstraße 30",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10115"
    },
    {
      "street": "Bernauer Straße 111",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "13355"
    },
    {
      "street": "Gendarmenmarkt 5",
      "city": "Berlin",
      "state": "Berlin",
      "zipCode": "10117"
    },
    {
      "street": "Graf-Adolf-Platz 15",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40213"
    },
    {
      "street": "Königsallee 20",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40212"
    },
    {
      "street": "Schadowstraße 75",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40212"
    },
    {
      "street": "Berliner Allee 56",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40212"
    },
    {
      "street": "Friedrichstraße 133",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40217"
    },
    {
      "street": "Kaiserswerther Straße 100",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40474"
    },
    {
      "street": "Heinrich-Heine-Allee 51",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40213"
    },
    {
      "street": "Bismarckstraße 77",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40210"
    },
    {
      "street": "Benrather Schlossallee 31",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40597"
    },
    {
      "street": "Ellerstraße 25",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40227"
    },
    {
      "street": "Kaiserswerther Markt 5",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40489"
    },
    {
      "street": "Luegallee 121",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40545"
    },
    {
      "street": "Münsterstraße 324",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40470"
    },
    {
      "street": "Breite Straße 29",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40213"
    },
    {
      "street": "Hohenzollernstraße 25",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40211"
    },
    {
      "street": "Nordstraße 47",
      "city": "Düsseldorf",
      "state": "North Rhine-Westphalia",
      "zipCode": "40477"
    },
    {
      "street": "Marktplatz 2",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30159"
    },
    {
      "street": "Georgstraße 10",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30159"
    },
    {
      "street": "Lister Meile 37",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30161"
    },
    {
      "street": "Königstraße 34",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30175"
    },
    {
      "street": "Podbielskistraße 200",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30177"
    },
    {
      "street": "Bahnhofstraße 2",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30159"
    },
    {
      "street": "Raschplatz 7",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30161"
    },
    {
      "street": "Vahrenwalder Straße 200",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30165"
    },
    {
      "street": "Schmiedestraße 24",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30159"
    },
    {
      "street": "Hildesheimer Straße 236",
      "city": "Hannover",
      "state": "Lower Saxony",
      "zipCode": "30519"
    },
    {
      "street": "Markt 10",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04109"
    },
    {
      "street": "Karl-Liebknecht-Straße 10",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04107"
    },
    {
      "street": "Petersstraße 50",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04109"
    },
    {
      "street": "Grimmaische Straße 25",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04109"
    },
    {
      "street": "Prager Straße 50",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04317"
    },
    {
      "street": "Lützner Straße 29",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04177"
    },
    {
      "street": "Goethestraße 15",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04109"
    },
    {
      "street": "Ritterstraße 22",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04109"
    },
    {
      "street": "Bernhard-Göring-Straße 152",
      "city": "Leipzig",
      "state": "Saxony",
      "zipCode": "04277"
    }
  ]
];
const restaurants = [
    {
    basicInfo: {
      businessName: "Sabor do Brasil",
      businessId: "23/456/78901",
      owner: "Ana Souza",
      venueName: "Sabor",
      contact: {
        email: "ana@sabordobrasil.com",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Adenauerallee 45",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10557",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.sabordobrasil.com/photos/restaurant1.jpg", "https://www.sabordobrasil.com/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/sabordobrasil",
        instagram: "http://www.instagram.com/sabordobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Buy 1 Get 1 Free on Caipirinhas on Fridays", code: "BOGO_FRIDAY" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Brasil Gourmet",
      businessId: "23/456/78902",
      owner: "Carlos Oliveira",
      venueName: "Brasil Gourmet",
      contact: {
        email: "carlos@brasilgourmet.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Kaiserstraße 12",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.brasilgourmet.de/photos/restaurant1.jpg", "https://www.brasilgourmet.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/brasilgourmet",
        instagram: "http://www.instagram.com/brasilgourmet",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Churrascaria do Brasil",
      businessId: "23/456/78903",
      owner: "Ricardo Costa",
      venueName: "Churrascaria",
      contact: {
        email: "ricardo@churrascarianobrasil.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Lindenstraße 23",
        city: "Munich",
        state: "Bavaria",
        zipCode: "80331",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.churrascarianobrasil.de/photos/restaurant1.jpg", "https://www.churrascarianobrasil.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/churrascarianobrasil",
        instagram: "http://www.instagram.com/churrascarianobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Carioca Grill",
      businessId: "23/456/78904",
      owner: "Fernanda Lima",
      venueName: "Carioca",
      contact: {
        email: "fernanda@cariocagrill.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Schillerstraße 18",
        city: "Hamburg",
        state: "Hamburg",
        zipCode: "20095",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.cariocagrill.de/photos/restaurant1.jpg", "https://www.cariocagrill.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/cariocagrill",
        instagram: "http://www.instagram.com/cariocagrill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ginga Restaurant",
      businessId: "23/456/78905",
      owner: "Luana Silva",
      venueName: "Ginga",
      contact: {
        email: "luana@gingarestaurant.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Kurfürstendamm 80",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10709",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.gingarestaurant.de/photos/restaurant1.jpg", "https://www.gingarestaurant.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/gingarestaurant",
        instagram: "http://www.instagram.com/gingarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Acarajé & Co.",
      businessId: "23/456/78906",
      owner: "Mariana Almeida",
      venueName: "Acarajé",
      contact: {
        email: "mariana@acarajeandco.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Friedrichstraße 50",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10117",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.acarajeandco.de/photos/restaurant1.jpg", "https://www.acarajeandco.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/acarajeandco",
        instagram: "http://www.instagram.com/acarajeandco",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Sabor Brasileiro",
      businessId: "23/456/78907",
      owner: "Ana Costa",
      venueName: "Sabor",
      contact: {
        email: "ana@saborbrasileiro.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Steinstraße 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        zipCode: "40210",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.saborbrasileiro.de/photos/restaurant1.jpg", "https://www.saborbrasileiro.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/saborbrasileiro",
        instagram: "http://www.instagram.com/saborbrasileiro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Delícia Brasileira",
      businessId: "23/456/78908",
      owner: "Carlos Fernandes",
      venueName: "Delícia",
      contact: {
        email: "carlos@deliciabrasileira.de",
        phoneNumber: "+49 170 7890124",
      },
      address: {
        street: "Gänsemarkt 3",
        city: "Hamburg",
        state: "Hamburg",
        zipCode: "20354",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.deliciabrasileira.de/photos/restaurant1.jpg", "https://www.deliciabrasileira.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/deliciabrasileira",
        instagram: "http://www.instagram.com/deliciabrasileira",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Café do Brasil",
      businessId: "23/456/78909",
      owner: "Jorge Almeida",
      venueName: "Café",
      contact: {
        email: "jorge@cafedobrasil.de",
        phoneNumber: "+49 170 8901234",
      },
      address: {
        street: "Schleswiger Straße 10",
        city: "Munich",
        state: "Bavaria",
        zipCode: "80335",
      },
    },
    openAndCloseHours: {
      monday: "8:00 AM - 8:00 PM",
      tuesday: "8:00 AM - 8:00 PM",
      wednesday: "8:00 AM - 8:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 9:00 PM",
      saturday: "9:00 AM - 9:00 PM",
      sunday: "9:00 AM - 7:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.cafedobrasil.de/photos/restaurant1.jpg", "https://www.cafedobrasil.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/cafedobrasil",
        instagram: "http://www.instagram.com/cafedobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Sabor do Brasil",
      businessId: "23/456/78910",
      owner: "Mariana Lima",
      venueName: "Sabor",
      contact: {
        email: "mariana@sabordobrasil.de",
        phoneNumber: "+49 170 8901235",
      },
      address: {
        street: "Marktplatz 12",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.00 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.00 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.50 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.50 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.00 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.00 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.00 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { name: "Quindim", description: "Coconut custard", price: 4.00 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.50 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.00 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.50 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.00 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.00 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.50 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Coxinha", description: "Chicken croquettes", price: 5.00 },
          { category: "Main Courses", name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.00 },
          { category: "Desserts", name: "Brigadeiro", description: "Chocolate truffles", price: 3.00 },
          { category: "Drinks", name: "Guaraná", description: "Brazilian guaraná soda", price: 3.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.sabordobrasil.de/photos/restaurant1.jpg", "https://www.sabordobrasil.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/sabordobrasil",
        instagram: "http://www.instagram.com/sabordobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Zagreb Bistro",
      businessId: "01/234/56789",
      owner: "Ana Kovačić",
      venueName: "Zagreb",
      contact: {
        email: "ana@zagreb-bistro.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Kaiserstraße 10",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10707",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.zagreb-bistro.de/photos/restaurant1.jpg", "https://www.zagreb-bistro.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zagreb-bistro",
        instagram: "http://www.instagram.com/zagreb-bistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Dubrovnik Delights",
      businessId: "01/234/56790",
      owner: "Ivana Petrović",
      venueName: "Dubrovnik",
      contact: {
        email: "ivana@dubrovnikdelights.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Hauptstraße 5",
        city: "Munich",
        state: "Bavaria",
        zipCode: "80331",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.dubrovnikdelights.de/photos/restaurant1.jpg", "https://www.dubrovnikdelights.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Split Supremacy",
      businessId: "01/234/56791",
      owner: "Marko Jurić",
      venueName: "Split",
      contact: {
        email: "marko@split-supremacy.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Goethestraße 15",
        city: "Hamburg",
        state: "Hamburg",
        zipCode: "20095",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.splitsupremacy.de/photos/restaurant1.jpg", "https://www.splitsupremacy.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/splitsupremacy",
        instagram: "http://www.instagram.com/splitsupremacy",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Rijeka Restaurant",
      businessId: "01/234/56792",
      owner: "Luka Novak",
      venueName: "Rijeka",
      contact: {
        email: "luka@rijekarestaurant.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Berliner Allee 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        zipCode: "40212",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.rijekarestaurant.de/photos/restaurant1.jpg", "https://www.rijekarestaurant.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/rijekarestaurant",
        instagram: "http://www.instagram.com/rijekarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Osijek Oasis",
      businessId: "01/234/56793",
      owner: "Jelena Kolić",
      venueName: "Osijek",
      contact: {
        email: "jelena@osijek-oasis.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Steinweg 25",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.osijek-oasis.de/photos/restaurant1.jpg", "https://www.osijek-oasis.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/osijek-oasis",
        instagram: "http://www.instagram.com/osijek-oasis",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Pula Plate",
      businessId: "01/234/56794",
      owner: "Petra Šarić",
      venueName: "Pula",
      contact: {
        email: "petra@pulaplate.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Friedrichstraße 45",
        city: "Cologne",
        state: "North Rhine-Westphalia",
        zipCode: "50667",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.pulaplate.de/photos/restaurant1.jpg", "https://www.pulaplate.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/pulaplate",
        instagram: "http://www.instagram.com/pulaplate",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Dubrovnik Delights",
      businessId: "01/234/56795",
      owner: "Ivana Petrović",
      venueName: "Dubrovnik",
      contact: {
        email: "ivana@dubrovnik-delights.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Kaiserstraße 60",
        city: "Munich",
        state: "Bavaria",
        zipCode: "80331",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.dubrovnikdelights.de/photos/restaurant1.jpg", "https://www.dubrovnikdelights.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Zagreb Zest",
      businessId: "01/234/56796",
      owner: "Ana Horvat",
      venueName: "Zagreb",
      contact: {
        email: "ana@zagrebzest.de",
        phoneNumber: "+49 170 7890124",
      },
      address: {
        street: "Marktplatz 70",
        city: "Stuttgart",
        state: "Baden-Württemberg",
        zipCode: "70173",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.00 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.50 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.00 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.00 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.00 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.00 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.50 },
          { name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.00 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.00 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.00 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.00 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.50 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.50 },
          { category: "Main Courses", name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.00 },
          { category: "Desserts", name: "Krempita", description: "Custard cream pie", price: 3.50 },
          { category: "Drinks", name: "Croatian Wine", description: "Selection of local wines", price: 5.00 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.zagrebzest.de/photos/restaurant1.jpg", "https://www.zagrebzest.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zagrebzest",
        instagram: "http://www.instagram.com/zagrebzest",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course on weekends", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Delight",
      businessId: "01/234/56780",
      owner: "Kwame Mensah",
      venueName: "Accra",
      contact: {
        email: "kwame@accradelight.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Kaiserstraße 35",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
    },
    cuisine: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.50 },
          { name: "Chinchinga", description: "Grilled beef kebabs", price: 6.00 },
          { name: "Banku and Tilapia", description: "Fermented maize dough with grilled fish", price: 7.50 },
          { name: "Fufu", description: "Pounded yam with soup", price: 6.50 },
          { name: "Gari Fortor", description: "Spicy cassava granules", price: 5.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spiced rice cooked with tomatoes and vegetables", price: 12.00 },
          { name: "Waakye", description: "Rice and beans served with fried plantains", price: 11.00 },
          { name: "Kenkey and Fish", description: "Corn dough with grilled fish", price: 13.00 },
          { name: "Groundnut Soup", description: "Peanut soup with meat or fish", price: 14.00 },
          { name: "Kontomire Stew", description: "Leafy green stew with meat", price: 12.50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Milo", description: "Chocolate malt drink", price: 4.00 },
          { name: "Bofrot", description: "Fried dough balls", price: 3.50 },
          { name: "Puff Puff", description: "Sweet fried dough balls", price: 3.00 },
          { name: "Kelewele Cake", description: "Cake made from spicy plantains", price: 4.50 },
          { name: "Fruit Salad", description: "Fresh fruit mix with honey", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Sobolo", description: "Hibiscus tea drink", price: 4.50 },
          { name: "Palm Wine", description: "Traditional Ghanaian palm wine", price: 5.50 },
          { name: "Pito", description: "Traditional Ghanaian millet beer", price: 6.00 },
          { name: "Zobo", description: "Hibiscus and ginger drink", price: 4.00 },
          { name: "Ginger Beer", description: "Homemade ginger drink", price: 3.50 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { category: "Appetizers", name: "Kelewele", description: "Spicy fried plantains", price: 5.50 },
          { category: "Main Courses", name: "Jollof Rice", description: "Spiced rice cooked with tomatoes and vegetables", price: 12.00 },
          { category: "Desserts", name: "Puff Puff", description: "Sweet fried dough balls", price: 3.00 },
          { category: "Drinks", name: "Sobolo", description: "Hibiscus tea drink", price: 4.50 },
        ],
      },
    ],
    digitalPresence: {
      photos: ["https://www.accradelight.de/photos/restaurant1.jpg", "https://www.accradelight.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accradelight",
        instagram: "http://www.instagram.com/accradelight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free drink with any main course on weekends", code: "FREE_DRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Delight",
      businessId: "01/234/56780",
      owner: "Kwame Mensah",
      venueName: "Accra",
      contact: {
        email: "kwame@accradelight.de",
        phoneNumber: "+49 170 1234567",
      },
      address: {
        street: "Kaiserstraße 35",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.accradelight.de/photos/restaurant1.jpg", "https://www.accradelight.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accradelight",
        instagram: "http://www.instagram.com/accradelight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free drink with any main course on weekends", code: "FREE_DRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Taste",
      businessId: "02/345/67891",
      owner: "Ama Ababio",
      venueName: "Ghana Taste",
      contact: {
        email: "ama@ghanataste.de",
        phoneNumber: "+49 160 2345678",
      },
      address: {
        street: "Münsterplatz 12",
        city: "Cologne",
        state: "North Rhine-Westphalia",
        zipCode: "50667",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
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
      photos: ["https://www.ghanataste.de/photos/restaurant2.jpg", "https://www.ghanataste.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanataste",
        instagram: "http://www.instagram.com/ghanataste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "15% off on orders over €30", code: "DISCOUNT15" },
        { description: "Free appetizer with any main course on Fridays", code: "FREE_APPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Gourmet",
      businessId: "03/456/78902",
      owner: "Kwesi Adom",
      venueName: "Ghana Gourmet",
      contact: {
        email: "kwesi@ghanagourmet.de",
        phoneNumber: "+49 170 3456789",
      },
      address: {
        street: "Schlossstraße 45",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10785",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.ghanagourmet.de/photos/restaurant3.jpg", "https://www.ghanagourmet.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanagourmet",
        instagram: "http://www.instagram.com/ghanagourmet",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first visit", code: "WELCOME10" },
        { description: "Buy 2 main courses, get 1 free drink", code: "BOGO_DRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Accra Bistro",
      businessId: "04/567/89013",
      owner: "Esi Kwaku",
      venueName: "Accra Bistro",
      contact: {
        email: "esi@accrabistro.de",
        phoneNumber: "+49 160 4567890",
      },
      address: {
        street: "Lindenstraße 98",
        city: "Hamburg",
        state: "Hamburg",
        zipCode: "20095",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.accrabistro.de/photos/restaurant4.jpg", "https://www.accrabistro.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/accrabistro",
        instagram: "http://www.instagram.com/accrabistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first order", code: "WELCOME10" },
        { description: "Free dessert with any main course", code: "FREE_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €12 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Flavors",
      businessId: "05/678/90124",
      owner: "Daniel Appiah",
      venueName: "Ghana Flavors",
      contact: {
        email: "daniel@ghanaflavors.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Holstenstraße 23",
        city: "Bremen",
        state: "Bremen",
        zipCode: "28195",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
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
      photos: ["https://www.ghanaflavors.de/photos/restaurant5.jpg", "https://www.ghanaflavors.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanaflavors",
        instagram: "http://www.instagram.com/ghanaflavors",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "15% off on orders over €25", code: "DISCOUNT15" },
        { description: "Free appetizer with main course on weekends", code: "FREE_APPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghanaian Delight",
      businessId: "06/789/01235",
      owner: "Kwame Osei",
      venueName: "Ghanaian Delight",
      contact: {
        email: "kwame@ghanaian-delight.de",
        phoneNumber: "+49 160 6789012",
      },
      address: {
        street: "Berliner Straße 12",
        city: "Stuttgart",
        state: "Baden-Württemberg",
        zipCode: "70173",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.ghanaian-delight.de/photos/restaurant6.jpg", "https://www.ghanaian-delight.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanaian-delight",
        instagram: "http://www.instagram.com/ghanaian-delight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all takeout orders", code: "TAKEOUT10" },
        { description: "Buy 1 Get 1 Free on Fridays", code: "BOGO_FRIDAY" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Kumasi Kitchen",
      businessId: "07/890/12346",
      owner: "Akosua Nkrumah",
      venueName: "Kumasi Kitchen",
      contact: {
        email: "akosua@kumasikitchen.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "August-Bebel-Straße 48",
        city: "Dusseldorf",
        state: "North Rhine-Westphalia",
        zipCode: "40227",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
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
      photos: ["https://www.kumasikitchen.de/photos/restaurant7.jpg", "https://www.kumasikitchen.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kumasikitchen",
        instagram: "http://www.instagram.com/kumasikitchen",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first meal", code: "WELCOME10" },
        { description: "Free dessert with any main course on Sundays", code: "FREE_DESSERT_SUNDAY" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Grill",
      businessId: "08/901/23457",
      owner: "Ellen Akonor",
      venueName: "Ghana Grill",
      contact: {
        email: "ellen@ghanagrill.de",
        phoneNumber: "+49 160 8901234",
      },
      address: {
        street: "Oberbaumstraße 70",
        city: "Leipzig",
        state: "Saxony",
        zipCode: "04103",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.ghanagrill.de/photos/restaurant8.jpg", "https://www.ghanagrill.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanagrill",
        instagram: "http://www.instagram.com/ghanagrill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all orders", code: "ORDER10" },
        { description: "Free appetizer with main course on Thursdays", code: "FREE_APPETIZER" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Savory",
      businessId: "09/012/34568",
      owner: "Kofi Asante",
      venueName: "Ghana Savory",
      contact: {
        email: "kofi@ghanasavory.de",
        phoneNumber: "+49 170 9012345",
      },
      address: {
        street: "Schönhauser Allee 101",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10439",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
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
      photos: ["https://www.ghanasavory.de/photos/restaurant9.jpg", "https://www.ghanasavory.de/photos/dish9.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanasavory",
        instagram: "http://www.instagram.com/ghanasavory",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all takeout orders", code: "TAKEOUT10" },
        { description: "Buy 1 Get 1 Free on main courses on Mondays", code: "BOGO_MON" },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €10 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Ghana Feast",
      businessId: "10/123/45679",
      owner: "Grace Ankomah",
      venueName: "Ghana Feast",
      contact: {
        email: "grace@ghanafeast.de",
        phoneNumber: "+49 160 0123456",
      },
      address: {
        street: "Darmstädter Straße 56",
        city: "Mannheim",
        state: "Baden-Württemberg",
        zipCode: "68165",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM",
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
      photos: ["https://www.ghanafeast.de/photos/restaurant10.jpg", "https://www.ghanafeast.de/photos/dish10.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanafeast",
        instagram: "http://www.instagram.com/ghanafeast",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all orders over €20", code: "ORDER20" },
        { description: "Free drink with main course on Saturdays", code: "FREE_DRINK" },
      ],
      loyaltyPrograms: "Earn 1 point for every €12 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Taste",
      businessId: "01/234/56789",
      owner: "Arben Doda",
      venueName: "Albanian Taste",
      contact: {
        email: "info@albanian-taste.de",
        phoneNumber: "+49 170 2345678",
      },
      address: {
        street: "Kaiserstraße 12",
        city: "Frankfurt",
        state: "Hesse",
        zipCode: "60311",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.00 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.50 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.00 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-taste.de/photos/restaurant1.jpg", "https://www.albanian-taste.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-taste",
        instagram: "http://www.instagram.com/albanian-taste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first visit", code: "WELCOME10" },
        { description: "Free dessert with main course on Wednesdays", code: "DESSERT_WED" },
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Grill",
      businessId: "02/345/67890",
      owner: "Elira Leka",
      venueName: "Albanian Grill",
      contact: {
        email: "contact@albanian-grill.de",
        phoneNumber: "+49 160 3456789",
      },
      address: {
        street: "Friedrichstraße 20",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10117",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 6.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 11.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 12.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 12.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-grill.de/photos/restaurant2.jpg", "https://www.albanian-grill.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all orders over €25", code: "ORDER25" },
        { description: "Free appetizer with main course on Fridays", code: "FREE_APP_FRIDAY" },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Tirana Delights",
      businessId: "03/456/78901",
      owner: "Besnik Cani",
      venueName: "Tirana Delights",
      contact: {
        email: "contact@tirana-delights.de",
        phoneNumber: "+49 170 4567890",
      },
      address: {
        street: "Wilhelmstraße 32",
        city: "Berlin",
        state: "Berlin",
        zipCode: "10963",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.tirana-delights.de/photos/restaurant3.jpg", "https://www.tirana-delights.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/tirana-delights",
        instagram: "http://www.instagram.com/tirana-delights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on orders over €30", code: "ORDER30" },
        { description: "Free appetizer on first visit", code: "FREE_APP_FIRST" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Bistro",
      businessId: "04/567/89012",
      owner: "Flora Hoxha",
      venueName: "Albanian Bistro",
      contact: {
        email: "info@albanian-bistro.de",
        phoneNumber: "+49 170 5678901",
      },
      address: {
        street: "Hauptstraße 45",
        city: "Munich",
        state: "Bavaria",
        zipCode: "80331",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-bistro.de/photos/restaurant4.jpg", "https://www.albanian-bistro.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-bistro",
        instagram: "http://www.instagram.com/albanian-bistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on first visit", code: "WELCOME10" },
        { description: "Free dessert with main course on Thursdays", code: "DESSERT_THUR" },
      ],
      loyaltyPrograms: "Earn 1 point for every €15 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Feast",
      businessId: "05/678/90123",
      owner: "Lina Nikollaj",
      venueName: "Albanian Feast",
      contact: {
        email: "info@albanian-feast.de",
        phoneNumber: "+49 170 6789012",
      },
      address: {
        street: "Berliner Allee 89",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        zipCode: "40212",
      },
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 10:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-feast.de/photos/restaurant5.jpg", "https://www.albanian-feast.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-feast",
        instagram: "http://www.instagram.com/albanian-feast",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all takeout orders", code: "TAKEOUT10" },
        { description: "Free dessert on weekends", code: "WEEKEND_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Table",
      businessId: "06/789/01234",
      owner: "Genti Hoxha",
      venueName: "Albanian Table",
      contact: {
        email: "info@albanian-table.de",
        phoneNumber: "+49 170 7890123",
      },
      address: {
        street: "Königsstraße 67",
        city: "Stuttgart",
        state: "Baden-Württemberg",
        zipCode: "70173",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-table.de/photos/restaurant6.jpg", "https://www.albanian-table.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-table",
        instagram: "http://www.instagram.com/albanian-table",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all orders over €25", code: "ORDER25" },
        { description: "Free dessert with main course on Mondays", code: "MONDAY_DESSERT" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "Albanian Grill",
      businessId: "07/890/12345",
      owner: "Elira Gashi",
      venueName: "Albanian Grill",
      contact: {
        email: "info@albanian-grill.de",
        phoneNumber: "+49 170 8901234",
      },
      address: {
        street: "Gartenstraße 54",
        city: "Cologne",
        state: "North Rhine-Westphalia",
        zipCode: "50667",
      },
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 10:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM",
    },
    cuisine: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.50 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 6.50 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 5.00 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.50 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.00 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.00 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.00 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.00 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.00 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.00 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.00 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.50 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.00 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.50 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.00 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.00 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
          { name: "Beer", description: "Selection of local beers", price: 4.00 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.00 },
        ],
      },
      {
        category: "20 menu",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 4.00 },
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 10.00 },
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.50 },
          { name: "Coke", description: "Classic soft drink", price: 2.50 },
        ],
      }
    ],
    digitalPresence: {
      photos: ["https://www.albanian-grill.de/photos/restaurant7.jpg", "https://www.albanian-grill.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        { description: "10% off on all orders over €30", code: "ORDER30" },
        { description: "Free appetizer with main course on weekends", code: "WEEKEND_APP" },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },

];
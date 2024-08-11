export const restaurants = [
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
        postalCode: "10557",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.0 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },  
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 4.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 4.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 4.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.0 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 4.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 3.5 },
          { name: "Aipim Frito", description: "Fried manioc sticks", price: 3.5 },
          { name: "Macaxeira Frita", description: "Fried cassava sticks", price: 4.0 },
          { name: "Salame", description: "Brazilian salami", price: 3.0 },
          { name: "Torresmo", description: "Pork cracklings", price: 3.0 },
          { name: "Farofa", description: "Toasted cassava flour mixture", price: 3.0 },




        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 12.0 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 12.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 13.0 },
          { name: "Rabada", description: "Oxtail stew", price: 12.5 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 14.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 12.5 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 13.0 },
          { name: "Peixada", description: "Fish stew", price: 13.0 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 14.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 13.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 14.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 12.5 },
          { name: "Tainha Assada", description: "Grilled mullet fish", price: 13.5 },
         
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 4.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 5.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 3.5 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.5 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 3.5 },
          { name: "Quindão", description: "Large quindim", price: 4.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.5 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 }, 
          { name: "Doce de Leite", description: "Milk caramel", price: 4.0 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.5 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          
          



        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 4.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 4.5 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 4.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.5 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 4.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 4.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.0 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 4.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.5 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 3.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 3.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 4.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.0 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 4.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 3.0 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.0 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.0 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 3.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.0 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 3.0 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 3.0 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 3.0 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 3.0 },
          { name: "Sorvete de Açaí", description: "Açaí ice cream", price: 3.0 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.sabordobrasil.com/photos/restaurant1.jpg",
        "https://www.sabordobrasil.com/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/sabordobrasil",
        instagram: "http://www.instagram.com/sabordobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Alexanderplatz 1",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10178",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.5 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 4.0 }, 
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Costela de Porco", description: "Pork ribs", price: 13.0 },
          { name: "Cuscuz Paulista", description: "Savory corn and vegetable cake", price: 11.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 12.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.0 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 3.0 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 3.0 },
          { name: "Sorvete de Açaí", description: "Açaí ice cream", price: 3.0 },
          { name: "Água de Coco", description: "Fresh Coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
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
        {
          category: "20 menu",
          items: [
            
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Graf-Adolf-Platz 15",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40213",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.churrascarianobrasil.de/photos/restaurant1.jpg",
        "https://www.churrascarianobrasil.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/churrascarianobrasil",
        instagram: "http://www.instagram.com/churrascarianobrasil",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
           
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Marktplatz 2",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "230159",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        postalCode: "10709",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.gingarestaurant.de/photos/restaurant1.jpg",
        "https://www.gingarestaurant.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/gingarestaurant",
        instagram: "http://www.instagram.com/gingarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        postalCode: "10117",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
          
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        postalCode: "40210",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.saborbrasileiro.de/photos/restaurant1.jpg",
        "https://www.saborbrasileiro.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/saborbrasileiro",
        instagram: "http://www.instagram.com/saborbrasileiro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Markt 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.deliciabrasileira.de/photos/restaurant1.jpg",
        "https://www.deliciabrasileira.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/deliciabrasileira",
        instagram: "http://www.instagram.com/deliciabrasileira",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Karl-Liebknecht-Straße 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04107",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        street: "Raschplatz 7",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161",
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
    restaurantType: ["Brazilian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Coxinha", description: "Chicken croquettes", price: 5.0 },
          { name: "Pão de Queijo", description: "Cheese bread rolls", price: 4.0 },
          { name: "Bolinho de Bacalhau", description: "Codfish cakes", price: 6.0 },
          { name: "Kibe", description: "Spiced bulgur and meat croquettes", price: 5.5 },
          { name: "Pastéis", description: "Fried pastries with assorted fillings", price: 4.5 },
          { name: "Acarajé", description: "Black-eyed pea fritters with shrimp", price: 5.5 },
          { name: "Empada", description: "Mini pies with various fillings", price: 4.5 },
          { name: "Esfiha", description: "Middle Eastern meat pastries", price: 5.0 },
          { name: "Tapioca", description: "Tapioca crepes with cheese", price: 4.0 },
          { name: "Bolinho de Aipim", description: "Cassava balls with cheese", price: 5.0 },
          { name: "Mandioca Frita", description: "Fried cassava sticks", price: 4.5 },
          { name: "Polenta Frita", description: "Fried polenta sticks", price: 4.0 },
          { name: "Salpicão", description: "Chicken salad with mayonnaise", price: 5.5 },
          { name: "Bolinho de Carne", description: "Meatballs", price: 5.0 },
          { name: "Caldinho de Feijão", description: "Black bean soup", price: 4.0 },
          { name: "Bolinho de Arroz", description: "Rice balls", price: 4.5 },
          { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 6.5 },
          { name: "Linguiça Frita", description: "Fried sausage", price: 5.0 },
          { name: "Pão com Alho", description: "Garlic bread", price: 3.5 },
          { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 4.5 },
          { name: "Torradas com Patê", description: "Toasts with pâté", price: 4.0 },
          { name: "Bolinhos de Queijo", description: "Cheese balls", price: 5.0 },
          { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 6.0 },
          { name: "Calabresa Acebolada", description: "Sausage with onions", price: 5.0 },
          { name: "Espetinho de Frango", description: "Chicken skewers", price: 4.5 },
          { name: "Espetinho de Camarão", description: "Shrimp skewers", price: 6.0 },
          { name: "Camarão Alho e Óleo", description: "Garlic and oil shrimp", price: 6.0 },
          { name: "Moela Acebolada", description: "Gizzards with onions", price: 4.5 },
          { name: "Frango à Passarinho", description: "Fried chicken bites", price: 5.5 },
          { name: "Azeitonas Temperadas", description: "Seasoned olives", price: 3.5 },
          { name: "Salada de Palmito", description: "Hearts of palm salad", price: 5.5 },
          { name: "Ceviche", description: "Brazilian style ceviche", price: 6.5 },
          { name: "Batata Frita", description: "French fries", price: 3.5 },
          { name: "Batata Rústica", description: "Rustic potatoes", price: 4.0 },
          { name: "Canapé de Salmão", description: "Salmon canapés", price: 6.0 },
          { name: "Carpaccio de Carne", description: "Beef carpaccio", price: 6.5 },
          { name: "Casquinha de Siri", description: "Stuffed crab shells", price: 5.5 },
          { name: "Quibe Cru", description: "Raw kibbeh", price: 6.0 },
          { name: "Sanduíche Natural", description: "Natural sandwich", price: 4.0 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 12.0 },
          { name: "Picanha", description: "Grilled rump steak", price: 15.0 },
          { name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 14.0 },
          { name: "Coxinha de Frango", description: "Chicken stew with manioc", price: 13.0 },
          { name: "Churrasco", description: "Brazilian barbecue assortment", price: 16.0 },
          { name: "Bobo de Camarão", description: "Shrimp in a manioc cream sauce", price: 14.5 },
          { name: "Vatapá", description: "Seafood and coconut milk stew", price: 13.0 },
          { name: "Acarajé", description: "Fried black-eyed pea ball with shrimp", price: 11.0 },
          { name: "Escondidinho", description: "Cassava casserole with meat", price: 12.0 },
          { name: "Galinhada", description: "Brazilian chicken and rice", price: 13.5 },
          { name: "Baião de Dois", description: "Rice and beans with meat", price: 12.5 },
          { name: "Frango com Quiabo", description: "Chicken with okra", price: 11.5 },
          { name: "Rabada", description: "Oxtail stew", price: 14.0 },
          { name: "Costela no Bafo", description: "Steamed ribs", price: 15.0 },
          { name: "Tutu de Feijão", description: "Bean paste with sausage and bacon", price: 11.0 },
          { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 12.5 },
          { name: "Arroz de Pato", description: "Duck rice", price: 14.0 },
          { name: "Caldeirada", description: "Seafood stew", price: 14.5 },
          { name: "Peixada", description: "Fish stew", price: 13.5 },
          { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 12.0 },
          { name: "Bife à Cavalo", description: "Steak with fried eggs", price: 11.0 },
          { name: "Carne Seca com Abóbora", description: "Sun-dried beef with pumpkin", price: 12.0 },
          { name: "Arroz com Pequi", description: "Rice with pequi fruit", price: 10.5 },
          { name: "Pato no Tucupi", description: "Duck in tucupi sauce", price: 15.0 },
          { name: "Acarajé com Vatapá", description: "Acarajé with vatapá", price: 11.0 },
          { name: "Caldo Verde", description: "Green broth with sausage and potatoes", price: 10.0 },
          { name: "Lasanha de Berinjela", description: "Eggplant lasagna", price: 12.5 },
          { name: "Moqueca de Banana", description: "Banana moqueca", price: 11.0 },
          { name: "Arroz Carreteiro", description: "Wagoner's rice with meat", price: 12.0 },
          { name: "Chester Recheado", description: "Stuffed chester", price: 14.0 },
          { name: "Carne de Sol com Queijo", description: "Sun-dried meat with cheese", price: 13.0 },
          { name: "Picanha na Chapa", description: "Grilled picanha", price: 15.0 },
          { name: "Tilápia Grelhada", description: "Grilled tilapia", price: 13.0 },
          { name: "Frango ao Molho Pardo", description: "Chicken in brown sauce", price: 12.5 },
          { name: "Sarapatel", description: "Offal stew", price: 11.0 },
          { name: "Frango Assado", description: "Roast chicken", price: 13.0 },
          { name: "Camarão na Moranga", description: "Pumpkin stuffed with shrimp", price: 15.0 },
          { name: "Cordeiro Assado", description: "Roast lamb", price: 16.0 },
          { name: "Rocambole de Carne", description: "Meat roulade", price: 12.0 }
          
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
          { name: "Quindim", description: "Coconut custard", price: 4.0 },
          { name: "Pudim", description: "Brazilian caramel flan", price: 4.5 },
          { name: "Bolo de Rolo", description: "Rolled sponge cake with guava paste", price: 5.0 },
          { name: "Canjica", description: "Sweet corn pudding", price: 4.5 },
          { name: "Beijinho", description: "Coconut balls", price: 3.0 },
          { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 4.0 },
          { name: "Mousse de Maracujá", description: "Passion fruit mousse", price: 4.0 },
          { name: "Curau", description: "Corn pudding", price: 3.5 },
          { name: "Pavê", description: "Layered dessert with biscuits and cream", price: 4.5 },
          { name: "Cocada", description: "Coconut candy", price: 3.0 },
          { name: "Manjar Branco", description: "Coconut blancmange", price: 4.5 },
          { name: "Rabanada", description: "Brazilian French toast", price: 3.5 },
          { name: "Paçoca", description: "Peanut candy", price: 3.0 },
          { name: "Torta de Limão", description: "Lemon tart", price: 4.0 },
          { name: "Brigadeirão", description: "Chocolate flan", price: 5.0 },
          { name: "Quindão", description: "Large quindim", price: 5.0 },
          { name: "Arroz Doce", description: "Rice pudding", price: 3.5 },
          { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 4.0 },
          { name: "Banana Frita", description: "Fried banana", price: 3.0 },
          { name: "Sagu", description: "Tapioca pearls in wine", price: 3.5 },
          { name: "Doce de Leite", description: "Milk caramel", price: 3.5 },
          { name: "Pé de Moleque", description: "Peanut brittle", price: 3.0 },
          { name: "Tapioca Pudding", description: "Tapioca and coconut pudding", price: 4.0 },
          { name: "Gelatina Colorida", description: "Rainbow jelly", price: 3.0 },
          { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 2.5 },
          { name: "Bananada", description: "Banana candy", price: 3.0 },
          { name: "Ambrosia", description: "Egg and milk dessert", price: 4.5 },
          { name: "Torta Holandesa", description: "Dutch pie", price: 4.5 },
          { name: "Torta de Maçã", description: "Apple pie", price: 4.5 },
          { name: "Bolo de Milho", description: "Corn cake", price: 3.5 },
          { name: "Pamonha", description: "Corn pudding", price: 3.0 },
          { name: "Bolo de Fubá", description: "Cornmeal cake", price: 3.5 },
          { name: "Torta de Morango", description: "Strawberry tart", price: 5.0 },
          { name: "Trufa de Chocolate", description: "Chocolate truffle", price: 3.5 },
          { name: "Mousse de Chocolate", description: "Chocolate mousse", price: 4.0 },
          { name: "Sorvete de Tapioca", description: "Tapioca ice cream", price: 4.5 },
          { name: "Docinho de Abóbora", description: "Pumpkin candy", price: 3.0 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Caipirinha", description: "Brazilian lime cocktail", price: 6.0 },
          { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.5 },
          { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 5.0 },
          { name: "Açaí Smoothie", description: "Smoothie made with açaí berries", price: 4.5 },
          { name: "Coconut Water", description: "Fresh coconut water", price: 3.0 },
          { name: "Batida de Coco", description: "Coconut cocktail", price: 5.5 },
          { name: "Caldo de Cana", description: "Sugarcane juice", price: 3.0 },
          { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
          { name: "Suco de Goiaba", description: "Guava juice", price: 3.0 },
          { name: "Suco de Acerola", description: "Acerola juice", price: 3.0 },
          { name: "Mate Gelado", description: "Iced mate tea", price: 3.0 },
          { name: "Vitamina de Abacate", description: "Avocado smoothie", price: 3.5 },
          { name: "Cajuína", description: "Cashew juice", price: 3.5 },
          { name: "Limonada Suíça", description: "Swiss lemonade", price: 3.0 },
          { name: "Caipiroska", description: "Vodka-based caipirinha", price: 6.0 },
          { name: "Rabo de Galo", description: "Cachaça with vermouth", price: 5.5 },
          { name: "Quentão", description: "Hot spiced wine", price: 4.0 },
          { name: "Cerveja", description: "Beer", price: 4.0 },
          { name: "Vinho Brasileiro", description: "Brazilian wine", price: 5.0 },
          { name: "Pinga com Mel", description: "Cachaça with honey", price: 4.5 },
          { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 5.5 },
          { name: "Chá de Hibisco", description: "Hibiscus tea", price: 3.0 },
          { name: "Chá Mate", description: "Mate tea", price: 2.5 },
          { name: "Guaraná Jesus", description: "Guaraná soda from Maranhão", price: 3.5 },
          { name: "Suco de Graviola", description: "Soursop juice", price: 3.0 },
          { name: "Suco de Cupuaçu", description: "Cupuaçu juice", price: 3.0 },
          { name: "Refrigerante de Uva", description: "Grape soda", price: 2.5 },
          { name: "Refrigerante de Laranja", description: "Orange soda", price: 2.5 },
          { name: "Água de Coco", description: "Coconut water", price: 3.0 },
          { name: "Água Mineral", description: "Mineral water", price: 2.0 },
          { name: "Chimarrão", description: "Hot mate tea", price: 3.0 },
          { name: "Tubaína", description: "Brazilian soda", price: 3.0 },
          { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
          { name: "Chocolate Quente", description: "Hot chocolate", price: 3.5 },
          { name: "Suco de Acerola com Laranja", description: "Acerola and orange juice", price: 3.5 },
          { name: "Café Brasileiro", description: "Brazilian coffee", price: 2.0 },
          { name: "Smoothie de Banana e Morango", description: "Banana and strawberry smoothie", price: 3.5 },
          { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.5 },
          { name: "Refrigerante de Limão", description: "Lemon soda", price: 2.5 },
          { name: "Ponche de Frutas", description: "Fruit punch", price: 3.0 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Coxinha", description: "Chicken croquettes", price: 3.0 },
              mainCourse: { name: "Feijoada", description: "Brazilian black bean stew with pork", price: 11.0 },
              dessert: { name: "Brigadeiro", description: "Chocolate truffles", price: 3.0 },
              drink: { name: "Guaraná", description: "Brazilian guaraná soda", price: 3.0 },
            },
            {
              appetizer: { name: "Pão de Queijo", description: "Cheese bread rolls", price: 3.0 },
              mainCourse: { name: "Picanha", description: "Grilled rump steak", price: 11.0 },
              dessert: { name: "Quindim", description: "Coconut custard", price: 3.0 },
              drink: { name: "Caipirinha", description: "Brazilian lime cocktail", price: 3.0 },
            },
            {
              appetizer: { name: "Biscoito de Polvilho", description: "Cassava starch biscuits", price: 3.0 },
              mainCourse: {  name: "Moqueca", description: "Brazilian fish stew with coconut milk", price: 11.0 },
              dessert: { name: "Romeu e Julieta", description: "Guava paste with cheese", price: 3.0 },
              drink: { name: "Suco de Maracujá", description: "Passion fruit juice", price: 3.0 },
            },
            {
              appetizer: { name: "Tábua de Frios", description: "Cold cuts and cheese platter", price: 3.0 },
              mainCourse: { name: "Carne de Sol com Mandioca", description: "Sun-dried meat with cassava", price: 11.0 },
              dessert: { name: "Torta de Limão", description: "Lemon tart", price: 3.0 },
              drink: { name: "Caipiroska", description: "Vodka-based caipirinha", price: 3.0 },
            },
            {
              appetizer: { name: "Ovo de Codorna", description: "Quail eggs with herbs", price: 3.0 },
              mainCourse: { name: "Costela no Bafo", description: "Steamed ribs", price: 11.0 },
              dessert: { name: "Bolo de Cenoura", description: "Carrot cake with chocolate", price: 3.0 },
              drink: { name: "Cachaça", description: "Brazilian sugarcane spirit", price: 3.0 },
            },
            {
              appetizer: { name: "Mandioca Frita", description: "Fried cassava sticks", price: 3.0 },
              mainCourse: { name: "Feijão Tropeiro", description: "Beans with sausage and collard greens", price: 11.0 },
              dessert: { name: "Banana Frita", description: "Fried banana", price: 3.0 },
              drink: { name: "Xarope de Groselha", description: "Redcurrant syrup drink", price: 3.0 },
            },
            {
              appetizer: { name: "Polenta Frita", description: "Fried polenta sticks", price: 3.5 },
              mainCourse: { name: "Vaca Atolada", description: "Beef ribs with cassava", price: 11.0 },
              dessert: { name: "Sagu", description: "Tapioca pearls in wine", price: 3.0 },
              drink: { name: "Vitamina de Mamão", description: "Papaya smoothie", price: 3.0 },
            },
            {
              appetizer: { name: "Bolinho de Carne", description: "Meatballs", price: 3.0 },
              mainCourse: { name: "Tainha Assada", description: "Grilled mullet fish", price: 11.0 },
              dessert: { name: "Doce de Leite", description: "Milk caramel", price: 3.0 },
              drink: { name: "Licor de Jabuticaba", description: "Jabuticaba liqueur", price: 3.0 },
            },
          ],
        },
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
        postalCode: "10707",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }

        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
          
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
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
        {
          category: "20 menu",
          items: [
            {
            appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
            mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
            },
            {
              appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
              mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
            },
            {
              appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
              mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
              dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
              drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
            },
            {
              appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
              mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
              dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
            },
            {
              appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
              mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
              dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
              drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
            },
            {
              appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
              mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
              drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
              mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
              dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
              drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
            },
            {
              appetizer: { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", "price": 3.0 },
              mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
              dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
              drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
            }
          ],
        },
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
        street: "Königsallee 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.dubrovnikdelights.de/photos/restaurant1.jpg",
        "https://www.dubrovnikdelights.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
            { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
            { name: "Krempita", description: "Custard cream pie", price: 3.0 },
            { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
          ],
        },
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
        street: "Georgstraße 10",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.splitsupremacy.de/photos/restaurant1.jpg",
        "https://www.splitsupremacy.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/splitsupremacy",
        instagram: "http://www.instagram.com/splitsupremacy",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            
            {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        postalCode: "40212",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.rijekarestaurant.de/photos/restaurant1.jpg",
        "https://www.rijekarestaurant.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/rijekarestaurant",
        instagram: "http://www.instagram.com/rijekarestaurant",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        street: "Petersstraße 50",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        street: "Friedrichstraße 76",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        street: "Schadowstraße 75",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "4021",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.dubrovnikdelights.de/photos/restaurant1.jpg",
        "https://www.dubrovnikdelights.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/dubrovnikdelights",
        instagram: "http://www.instagram.com/dubrovnikdelights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        street: "Lister Meile 37",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161",
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
    restaurantType: ["Croatian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Peka", description: "Slow-cooked meat and vegetables", price: 6.0 },
          { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 5.5 },
          { name: "Grilled Octopus", description: "Octopus grilled with garlic and herbs", price: 7.0 },
          { name: "Ćevapi", description: "Grilled minced meat sausages", price: 6.5 },
          { name: "Pršut", description: "Cured ham served with cheese", price: 6.0 },
          { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.5 },
          { name: "Burek", description: "Pastry filled with meat or cheese", price: 5.0 },
          { name: "Linguine with Prawns", description: "Pasta with garlic and prawns", price: 6.0 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with rice and meat", price: 5.5 },
          { name: "Shrimp Cocktail", description: "Shrimp served with cocktail sauce", price: 6.5 },
          { name: "Hummus with Pita", description: "Chickpea dip served with pita bread", price: 4.5 },
          { name: "Grilled Sardines", description: "Sardines grilled with olive oil and herbs", price: 5.0 },
          { name: "Pancetta", description: "Cured pork belly", price: 6.0 },
          { name: "Caprese Salad", description: "Tomato and mozzarella salad", price: 5.5 },
          { name: "Octopus Salad", description: "Salad with octopus and vegetables", price: 6.5 },
          { name: "Marinated Olives", description: "Olives marinated with herbs", price: 4.0 },
          { name: "Crostini with Tomato", description: "Toasted bread with tomato topping", price: 5.0 },
          { name: "Cheese Platter", description: "Assorted Croatian cheeses", price: 6.0 },
          { name: "Tuna Tartare", description: "Raw tuna mixed with spices", price: 7.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pašticada", description: "Beef stew in a rich sauce", price: 14.0 },
          { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 12.0 },
          { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 13.0 },
          { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 15.0 },
          { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 13.0 },
          { name: "Grilled Lamb Chops", description: "Lamb chops grilled to perfection", price: 14.0 },
          { name: "Baked Ziti", description: "Pasta baked with tomato sauce and cheese", price: 12.0 },
          { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", price: 13.0 },
          { name: "Goulash", description: "Spicy beef stew with paprika", price: 12.0 },
          { name: "Seafood Pasta", description: "Pasta with a mix of seafood", price: 14.0 },
          { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", price: 13.0 },
          { name: "Pork Schnitzel", description: "Breaded and fried pork cutlet", price: 12.0 },
          { name: "Lamb Kebab", description: "Grilled lamb skewers", price: 13.0 },
          { name: "Vegetarian Stuffed Eggplant", description: "Eggplant stuffed with vegetables and cheese", price: 12.0 },
          { name: "Seafood Paella", description: "Rice dish with seafood", price: 14.0 },
          { name: "Beef Tenderloin", description: "Tender beef steak grilled to order", price: 15.0 },
          { name: "Chicken Paprikash", description: "Chicken stewed with paprika", price: 12.0 },
          { name: "Seafood Risotto", description: "Creamy risotto with mixed seafood", price: 13.0 },
          { name: "Pork Roast", description: "Oven-roasted pork with herbs", price: 13.0 },
          { name: "Vegetable Stir-Fry", description: "Mixed vegetables stir-fried with sauce", price: 12.0 },
          { name: "Baked Trout", description: "Trout baked with herbs and lemon", price: 13.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Torta", description: "Layered cake with chocolate and nuts", price: 4.5 },
          { name: "Krempita", description: "Custard cream pie", price: 3.5 },
          { name: "Palačinke", description: "Crepes with sweet fillings", price: 4.0 },
          { name: "Rakija Cake", description: "Cake made with Croatian brandy", price: 5.0 },
          { name: "Fritule", description: "Croatian doughnuts with powdered sugar", price: 4.0 },
          { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 4.5 },
          { name: "Apple Strudel", description: "Pastry with spiced apple filling", price: 4.0 },
          { name: "Pudding", description: "Vanilla or chocolate pudding", price: 3.0 },
          { name: "Cherry Cake", description: "Cake with fresh cherries", price: 4.5 },
          { name: "Coconut Macaroons", description: "Sweet coconut treats", price: 3.5 },
          { name: "Lemon Cake", description: "Cake with lemon glaze", price: 4.0 },
          { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", price: 4.5 },
          { name: "Baked Apples", description: "Apples baked with cinnamon and sugar", price: 3.5 },
          { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 4.5 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 5.0 },
          { name: "Nut Cake", description: "Cake made with nuts and honey", price: 4.5 },
          { name: "Meringue", description: "Sweet, crisp meringue cookies", price: 3.0 },
          { name: "Raspberry Sorbet", description: "Frozen raspberry dessert", price: 4.0 },
          { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", price: 5.0 },
          { name: "Sweet Crepes", description: "Crepes served with sweet toppings", price: 4.0 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Croatian Wine", description: "Selection of local wines", price: 5.0 },
          { name: "Rakija", description: "Croatian fruit brandy", price: 6.0 },
          { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 },
          { name: "Craft Beer", description: "Locally brewed Croatian craft beer", price: 4.5 },
          { name: "Juice", description: "Freshly squeezed juice", price: 3.5 },
          { name: "Sangria", description: "Wine-based punch with fruit", "price": 5.0 },
          { name: "Coffee", description: "Strong Croatian espresso", "price": 2.5 },
          { name: "Mineral Water", description: "Sparkling mineral water", "price": 3.0 },
          { name: "Peach Iced Tea", description: "Refreshing iced tea with peach flavor", "price": 3.5 },
          { name: "Beer", description: "Selection of local and international beers", "price": 4.0 },
          { name: "Mulled Wine", description: "Warm spiced red wine", "price": 5.0 },
          { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.5 },
          { name: "Cappuccino", description: "Espresso with steamed milk and foam", "price": 3.5 },
          { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 },
          { name: "Hot Chocolate", description: "Rich hot chocolate drink", "price": 3.5 },
          { name: "Cider", description: "Apple-flavored alcoholic drink", "price": 4.5 },
          { name: "Lemonade", description: "Freshly made lemonade", "price": 3.0 },
          { name: "Black Tea", description: "Strong brewed black tea", "price": 3.0 },
          { name: "Wine Spritzer", description: "Wine mixed with soda water", "price": 4.0 },
          { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.5 }
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
        {
          category: "20 menu",
          items: [
              {
              appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
              mainCourse: { name: "Pašticada", description: "Beef stew in a rich sauce", price: 11.0 },
              dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
              drink: { name: "Croatian Wine", description: "Selection of local wines", price: 3.0 },
              },
              {
                appetizer: { name: "Pršut", description: "Cured ham served with cheese", price: 3.0 },
                mainCourse: { name: "Sarma", description: "Cabbage rolls stuffed with meat and rice", price: 11.0 },
                dessert: { name: "Krempita", description: "Custard cream pie", price: 3.0 },
                drink: { name: "Herbal Tea", description: "Traditional Croatian herbal tea", price: 3.0 }
              },
              {
                appetizer: { name: "Ćevapi", description: "Grilled minced meat sausages", price: 3.0 },
                mainCourse: { name: "Black Risotto", description: "Risotto with cuttlefish ink", price: 11.0 },
                dessert: { name: "Palačinke", description: "Crepes with sweet fillings", price: 3.0 },
                drink: { name: "Juice", description: "Freshly squeezed juice", price: 3.0 }
              },
              {
                appetizer: { name: "Grilled Cheese", description: "Cheese grilled with herbs", price: 3.0 },
                mainCourse: { name: "Peka", description: "Traditional slow-cooked dish with meat and vegetables", price: 11.0 },
                dessert: { name: "Štrukli", description: "Pastry filled with cheese and cream", price: 3.0 },
                drink: { name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 3.0 }
              },
              {
                appetizer: { name: "Burek", description: "Pastry filled with meat or cheese", price: 3.0 },
                mainCourse: { name: "Grilled Fish", description: "Freshly grilled fish with lemon and herbs", price: 11.0 },
                dessert: { name: "Berry Tart", description: "Pastry tart filled with fresh berries", price: 3.0 },
                drink: { name: "Black Tea", description: "Strong brewed black tea", price: 3.0 }
              },
              {
                appetizer: { name: "Fritule", description: "Croatian doughnuts with powdered sugar", "price": 3.0 },
                mainCourse: { name: "Beef Stroganoff", description: "Beef in creamy mushroom sauce", "price": 11.0 },
                dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", "price": 3.0 },
                drink: { name: "Fruit Smoothie", description: "Blended fruit smoothie", "price": 3.0 }
              },
              {
                appetizer: { name: "Caprese Salad", description: "Tomato and mozzarella salad", "price": 3.0 },
                mainCourse: { name: "Chicken Cacciatore", description: "Chicken stewed with tomatoes and herbs", "price": 11.0 },
                dessert: { name: "Chocolate Lava Cake", description: "Chocolate cake with molten center", "price": 3.0 },
                drink: { name: "Ginger Ale", description: "Spicy ginger-flavored soda", "price": 3.0 }
              },
              {
                appetizer: { name: "Soparnik", description: "Dalmatian Swiss chard pie", price: 3.0 },
                mainCourse: { name: "Seafood Paella", description: "Rice dish with seafood", "price": 11.0 },
                dessert: { name: "Peach Cobbler", description: "Baked peach dessert with biscuit topping", "price": 3.0 },
                drink: { name: "Almond Milkshake", description: "Milkshake made with almond milk", "price": 3.0 }
              }
          ],
        },
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
        street: "Grimmaische Straße 25",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          
          { name: "Banku and Tilapia", description: "Fermented maize dough with grilled fish", price: 7.5 },
          { name: "Fufu", description: "Pounded yam with soup", price: 6.5 },
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },  
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Bernauer Straße 111",
        city: "Berlin",
        state: "Berlin",
        postalCode: "13355",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Heinrich-Heine-Allee 51",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40213",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fried Plantains", description: "Sweet and crispy fried plantains", price: 4.5 },
          { name: "Meat Pie", description: "Savory pie filled with spiced meat", price: 6.0 },
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Pepper Soup", description: "Spicy soup with fish", price: 6.0 },
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        postalCode: "10785",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [ 
          { name: "Fish Cakes", description: "Deep-fried fish cakes", price: 5.5 },
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Königstraße 34",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30175",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Prager Straße 50",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04317",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Karl-Marx-Allee 34",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10178",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.ghanaian-delight.de/photos/restaurant6.jpg",
        "https://www.ghanaian-delight.de/photos/dish6.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/ghanaian-delight",
        instagram: "http://www.instagram.com/ghanaian-delight",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        postalCode: "40227",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        postalCode: "04103",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        postalCode: "10439",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Podbielskistraße 200",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30177",
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
    restaurantType: ["Ghanaian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Kelewele", description: "Spicy fried plantains", price: 5.0 },
          { name: "Chinchinga", description: "Spicy kebabs", price: 6.0 },
          { name: "Gari Fortor", description: "Gari soaked with vegetables", price: 4.5 },
          { name: "Beans Cake", description: "Deep-fried bean cake", price: 4.0 },
          { name: "Fried Yam", description: "Crispy fried yam chunks", price: 5.5 },
          { name: "Spring Rolls", description: "Vegetable spring rolls", price: 4.5 },
          { name: "Chicken Wings", description: "Spicy grilled chicken wings", price: 6.0 },
          { name: "Accra Banana", description: "Banana fritters", price: 4.0 },
          { name: "Beef Kebabs", description: "Grilled beef skewers", price: 5.5 },
          { name: "Fish Pie", description: "Fried fish pastries", price: 4.0 },
          { name: "Fried Snails", description: "Deep-fried snails", price: 6.0 },
          { name: "Cassava Balls", description: "Deep-fried cassava balls", price: 4.5 },
          { name: "Spicy Gizzard", description: "Spicy grilled gizzard", price: 5.0 },
          { name: "Vegetable Samosas", description: "Fried vegetable pastries", price: 4.5 },
          { name: "Corn Dough Fritters", description: "Fried corn dough balls", price: 4.0 },
          { name: "Meat Pie", description: "Pastry filled with meat", price: 4.5 },
          { name: "Fried Plantain Chips", description: "Crispy plantain chips", price: 3.5 },
          { name: "Crab Cakes", description: "Spicy crab cakes", price: 6.0 },
          { name: "Fish Balls", description: "Fried fish balls", price: 5.0 },
          { name: "Peppered Shrimps", description: "Spicy grilled shrimps", price: 6.5 },
          { name: "Fried Eggplant", description: "Crispy fried eggplant slices", price: 4.0 },
          { name: "Prawn Crackers", description: "Crispy prawn crackers", price: 5.0 },
          { name: "Grilled Sausages", description: "Spicy grilled sausages", price: 5.5 },
          { name: "Stuffed Peppers", description: "Peppers stuffed with meat", price: 4.5 },
          { name: "Gizzard Kebab", description: "Skewered gizzard", price: 5.0 },
          { name: "Okra Chips", description: "Crispy fried okra", price: 4.0 },
          { name: "Goat Meat Kebabs", description: "Spicy grilled goat meat", price: 6.0 },
          { name: "Paprika Potatoes", description: "Spicy fried potato wedges", price: 4.5 },
          { name: "Chicken Livers", description: "Spicy fried chicken livers", price: 5.0 },
          { name: "Fried Okra", description: "Crispy fried okra", price: 4.0 },
          { name: "Cornbread", description: "Sweet cornbread slices", price: 4.0 },
          { name: "Spicy Meatballs", description: "Spicy fried meatballs", price: 5.0 },
          { name: "Fried Coconut Shrimp", description: "Crispy fried coconut shrimp", price: 6.0 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with vegetables", price: 5.0 },
          { name: "Sweet Potato Fries", description: "Crispy sweet potato fries", price: 4.5 },
          { name: "Boiled Peanuts", description: "Boiled spicy peanuts", price: 3.5 },
          { name: "Taro Chips", description: "Crispy taro chips", price: 4.0 },
          { name: "Yam Balls", description: "Fried yam balls", price: 5.0 },
          { name: "Fried Groundnut", description: "Crispy fried groundnuts", price: 3.5 },
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Jollof Rice", description: "Spicy rice cooked with tomatoes and vegetables", price: 12.0 },
          { name: "Banku and Tilapia", description: "Corn dough served with grilled tilapia", price: 15.0 },
          { name: "Kenkey and Fish", description: "Fermented corn dough served with fried fish", price: 13.0 },
          { name: "Light Soup", description: "Tomato-based soup with meat", price: 14.0 },
          { name: "Fufu and Groundnut Soup", description: "Cassava dough with peanut soup", price: 16.0 },
          { name: "Waakye", description: "Rice and beans cooked with millet leaves", price: 11.0 },
          { name: "Red Red", description: "Beans stew with fried plantain", price: 12.0 },
          { name: "Kelewele with Rice", description: "Spicy fried plantains with rice", price: 11.5 },
          { name: "Yam Pottage", description: "Yam cooked with vegetables and palm oil", price: 13.5 },
          { name: "Palava Sauce with Rice", description: "Spinach sauce with rice", price: 12.0 },
          { name: "Tilapia and Banku", description: "Grilled tilapia with banku", price: 14.0 },
          { name: "Kontomire Stew", description: "Spinach stew with boiled yam", price: 12.5 },
          { name: "Egusi Soup", description: "Melon seed soup with fufu", price: 15.0 },
          { name: "Grilled Chicken", description: "Spicy grilled chicken with jollof rice", price: 14.0 },
          { name: "Beef Stew", description: "Spicy beef stew with rice", price: 13.0 },
          { name: "Goat Light Soup", description: "Goat meat in a tomato-based soup", price: 15.5 },
          { name: "Fried Rice", description: "Ghanaian-style fried rice with vegetables", price: 11.0 },
          { name: "Chicken Curry", description: "Spicy chicken curry with rice", price: 13.5 },
          { name: "Okro Stew", description: "Okra stew with banku", price: 12.0 },
          { name: "Angwa Mo", description: "Oil rice with fried eggs", price: 11.5 },
          { name: "Bean Stew with Gari", description: "Bean stew served with cassava flakes", price: 11.0 },
          { name: "Abolo and Shrimp", description: "Steamed corn dough with shrimp", price: 14.0 },
          { name: "Cassava Fish", description: "Fried cassava with fish stew", price: 13.0 },
          { name: "Kokonte with Palm Nut Soup", description: "Cassava flour with palm nut soup", price: 14.5 },
          { name: "Eto with Avocado", description: "Mashed plantain with avocado", price: 12.0 },
          { name: "Boiled Yam and Kontomire", description: "Boiled yam with spinach stew", price: 12.5 },
          { name: "Fried Plantain with Beans", description: "Fried plantain served with beans stew", price: 11.0 },
          { name: "Nkatie Cake", description: "Groundnut soup with rice balls", price: 14.0 },
          { name: "Boiled Cassava with Fish", description: "Boiled cassava served with fish stew", price: 13.0 },
          { name: "Yam Fufu with Light Soup", description: "Yam fufu served with light soup", price: 15.0 },
          { name: "Atieke with Fish", description: "Cassava couscous with fried fish", price: 14.5 },
          { name: "Beans and Plantain", description: "Beans stew served with fried plantain", price: 11.5 },
          { name: "Rice Balls with Palm Nut Soup", description: "Rice balls served with palm nut soup", price: 13.0 },
          { name: "Cornbread and Chicken", description: "Sweet cornbread with fried chicken", price: 12.0 },
          { name: "Groundnut Soup with Fufu", description: "Peanut soup served with fufu", price: 16.0 },
          { name: "Akple with Okro Soup", description: "Corn dough with okro soup", price: 13.0 },
          { name: "Steamed Rice with Sauce", description: "Steamed rice with vegetable sauce", price: 11.0 },
          { name: "Chicken Light Soup with Rice Balls", description: "Chicken light soup served with rice balls", price: 14.0 },
          { name: "Tilapia with Yam Fries", description: "Grilled tilapia with yam fries", price: 14.5 },
          { name: "Fried Fish with Banku", description: "Fried fish served with banku", price: 13.0 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Choco Banana Cake", description: "Chocolate and banana cake", price: 5.0 },
          { name: "Pineapple Upside Down Cake", description: "Pineapple cake with caramel", price: 5.5 },
          { name: "Coconut Candy", description: "Sweet coconut candy", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango sorbet", price: 4.0 },
          { name: "Plantain Chips", description: "Crispy plantain slices", price: 4.5 },
          { name: "Boiled Groundnuts", description: "Boiled peanuts", price: 3.5 },
          { name: "Sweet Bean Cakes", description: "Sweet bean cakes", price: 4.0 },
          { name: "Papaya Pudding", description: "Creamy papaya pudding", price: 4.5 },
          { name: "Coconut Cake", description: "Moist coconut cake", price: 5.0 },
          { name: "Fried Plantain", description: "Sweet fried plantain", price: 3.5 },
          { name: "Bofrot", description: "Ghanaian doughnuts", price: 4.0 },
          { name: "Rice Pudding", description: "Creamy rice pudding", price: 4.5 },
          { name: "Banana Fritters", description: "Deep-fried banana fritters", price: 4.0 },
          { name: "Spicy Plantain Cake", description: "Spicy cake made from plantains", price: 4.5 },
          { name: "Tropical Fruit Salad", description: "Fresh mixed fruit salad", price: 4.0 },
          { name: "Sweet Potato Pie", description: "Creamy sweet potato pie", price: 5.0 },
          { name: "Peanut Brittle", description: "Crunchy peanut brittle", price: 3.5 },
          { name: "Cassava Pudding", description: "Sweet cassava pudding", price: 4.5 },
          { name: "Fried Coconut Balls", description: "Crispy fried coconut balls", price: 4.0 },
          { name: "Banana Bread", description: "Moist banana bread", price: 4.5 },
          { name: "Ginger Cookies", description: "Spicy ginger cookies", price: 3.5 },
          { name: "Mango Tart", description: "Sweet mango tart", price: 5.0 },
          { name: "Pineapple Cake", description: "Moist pineapple cake", price: 5.0 },
          { name: "Lemon Bars", description: "Tangy lemon bars", price: 4.0 },
          { name: "Coconut Macaroons", description: "Chewy coconut macaroons", price: 4.5 },
          { name: "Chocolate Souffle", description: "Rich chocolate souffle", price: 5.5 },
          { name: "Papaya Cake", description: "Sweet papaya cake", price: 4.0 },
          { name: "Caramel Flan", description: "Creamy caramel flan", price: 4.5 },
          { name: "Fruit Popsicles", description: "Frozen fruit popsicles", price: 3.5 },
          { name: "Honey Buns", description: "Sweet honey buns", price: 4.0 },
          { name: "Chocolate Fudge", description: "Rich chocolate fudge", price: 5.0 },
          { name: "Sweet Corn Cake", description: "Sweet and moist corn cake", price: 4.0 },
          { name: "Cashew Nut Brittle", description: "Crunchy cashew nut brittle", price: 3.5 },
          { name: "Tropical Smoothie", description: "Fresh tropical fruit smoothie", price: 4.0 },
          { name: "Coconut Ice Cream", description: "Creamy coconut ice cream", price: 4.5 },
          { name: "Banana Ice Cream", description: "Creamy banana ice cream", price: 4.5 },
          { name: "Passion Fruit Sorbet", description: "Refreshing passion fruit sorbet", price: 4.0 },
          { name: "Sweet Rice Cake", description: "Sweet and sticky rice cake", price: 3.5 },
          { name: "Pumpkin Pie", description: "Creamy pumpkin pie", price: 4.5 },
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Palm Wine", description: "Traditional palm wine", price: 6.0 },
          { name: "Sobolo", description: "Hibiscus tea", price: 4.5 },
          { name: "Local Beer", description: "Beer brewed locally", price: 5.0 },
          { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", price: 3.5 },
          { name: "Coconut Water", description: "Refreshing coconut water", price: 3.0 },
          { name: "Ginger Beer", description: "Spicy ginger-flavored beer", price: 5.0 },
          { name: "Malted Drink", description: "Non-alcoholic malt beverage", price: 4.0 },
          { name: "Bissap", description: "Hibiscus drink", price: 3.5 },
          { name: "Passion Fruit Juice", description: "Fresh passion fruit juice", price: 4.0 },
          { name: "Mango Juice", description: "Fresh mango juice", price: 3.5 },
          { name: "Lime and Mint Juice", description: "Refreshing lime and mint juice", price: 4.0 },
          { name: "Soursop Juice", description: "Fresh soursop juice", price: 4.0 },
          { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 },
          { name: "Pineapple Ginger Juice", description: "Pineapple juice with ginger", price: 3.5 },
          { name: "Tamarind Juice", description: "Sweet and tangy tamarind juice", price: 3.5 },
          { name: "Papaya Juice", description: "Fresh papaya juice", price: 4.0 },
          { name: "Coconut Milk", description: "Fresh coconut milk", price: 3.5 },
          { name: "Banana Smoothie", description: "Creamy banana smoothie", price: 4.0 },
          { name: "Watermelon Juice", description: "Fresh watermelon juice", price: 3.5 },
          { name: "Carrot Juice", description: "Fresh carrot juice", price: 4.0 },
          { name: "Ginger Lemonade", description: "Refreshing lemonade with ginger", price: 3.5 },
          { name: "Guava Juice", description: "Fresh guava juice", price: 4.0 },
          { name: "Fruit Punch", description: "Mixed fruit punch", price: 3.5 },
          { name: "Apple Cider", description: "Fresh apple cider", price: 4.0 },
          { name: "Milkshake", description: "Creamy milkshake", price: 4.5 },
          { name: "Chocolate Milk", description: "Chocolate-flavored milk", price: 3.5 },
          { name: "Herbal Tea", description: "Traditional herbal tea", price: 3.0 },
          { name: "Baobab Juice", description: "Juice made from baobab fruit", price: 3.5 },
          { name: "Tropical Punch", description: "Mixed tropical fruit punch", price: 4.0 },
          { name: "Cashew Juice", description: "Juice made from cashew fruit", price: 3.5 },
          { name: "Mint Tea", description: "Fresh mint tea", price: 3.0 },
          { name: "Chilled Coconut Milk", description: "Chilled fresh coconut milk", price: 3.5 },
          { name: "Strawberry Smoothie", description: "Creamy strawberry smoothie", price: 4.5 },
          { name: "Cucumber Juice", description: "Refreshing cucumber juice", price: 3.5 },
          { name: "Lemon Grass Tea", description: "Fresh lemon grass tea", price: 3.0 },
          { name: "Pineapple Mint Juice", description: "Pineapple juice with mint", price: 3.5 },
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
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Puff Puff", description: "Deep-fried dough balls", "price": 3.0 },
              mainCourse: { name: "Waakye", description: "Rice and beans with plantains", "price": 11.0 },
              dessert: { name: "Bofrot", description: "Sweet fried dough balls", "price": 3.0 },
              drink: { name: "Fresh Pineapple Juice", description: "Juice made from fresh pineapples", "price": 3.0 }
            },
            {
              appetizer: { name: "Chibom", description: "Bread with beans and spices", "price": 3.0 },
              mainCourse: { name: "Fufu with Light Soup", description: "Cassava and plantain dough with spicy soup", "price": 11.0 },
              dessert: { name: "Kelewele Cake", description: "Cake flavored with spicy plantains", "price": 3.0 },
              drink: { name: "Palm Wine", description: "Traditional fermented palm drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables", "price": 3.0 },
              mainCourse: { name: "Banku and Tilapia", description: "Fermented corn dough with grilled fish", "price": 11.0 },
              dessert: { name: "Millets Porridge", description: "Sweet millet porridge", "price": 3.0 },
              drink: { name: "Bissap", description: "Hibiscus flower drink", "price": 3.0 }
            },
            {
              appetizer: { name: "Jollof Balls", description: "Fried rice balls with tomato sauce", "price": 3.0 },
              mainCourse: { name: "Kenkey with Fish", description: "Fermented corn dough with fried fish", "price": 11.0 },
              dessert: { name: "Coconut Cake", description: "Cake made with fresh coconut", "price": 3.0 },
              drink: { name: "Tamarind Juice", description: "Juice made from tamarind", "price": 3.0 }
            },
            {
              appetizer: { name: "Akara", description: "Deep-fried bean cakes", "price": 3.0 },
              mainCourse: { name: "Gari Fortor", description: "Spicy gari dough with vegetables", "price": 11.0 },
              dessert: { name: "Sweet Plantain", description: "Ripe plantains cooked with honey", "price": 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Fried Yam", description: "Crispy fried yam slices", "price": 3.0 },
              mainCourse: { name: "Ghanaian Jollof Rice", description: "Tomato-based rice with vegetables and spices", "price": 11.0 },
              dessert: { name: "Peanut Butter Cake", description: "Cake made with peanut butter", "price": 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Plantain Chips", description: "Crispy fried plantain slices", "price": 3.0 },
              mainCourse: { name: "Jollof Rice and Chicken", description: "Tomato rice with grilled chicken", "price": 11.0 },
              dessert: { name: "Mango Pudding", description: "Sweet pudding made with mangoes", "price": 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Tomato Soup", description: "Spicy tomato soup with herbs", "price": 3.0 },
              mainCourse: { name: "Gari and Beans", description: "Gari served with spicy beans", "price": 11.0 },
              dessert: { name: "Banana Fritters", description: "Deep-fried banana slices", "price": 3.0 },
              drink: { name: "Coconut Water", description: "Fresh coconut water", "price": 3.0 }
            },
          ],
        },
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
        street: "Königstraße 34",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30175",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-taste.de/photos/restaurant1.jpg",
        "https://www.albanian-taste.de/photos/dish1.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-taste",
        instagram: "http://www.instagram.com/albanian-taste",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
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
        postalCode: "10117",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-grill.de/photos/restaurant2.jpg",
        "https://www.albanian-grill.de/photos/dish2.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
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
        postalCode: "10963",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.tirana-delights.de/photos/restaurant3.jpg",
        "https://www.tirana-delights.de/photos/dish3.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/tirana-delights",
        instagram: "http://www.instagram.com/tirana-delights",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
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
        street: "Kaiserswerther Straße 100",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40474",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-bistro.de/photos/restaurant4.jpg",
        "https://www.albanian-bistro.de/photos/dish4.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-bistro",
        instagram: "http://www.instagram.com/albanian-bistro",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        }, 
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
        postalCode: "40212",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-feast.de/photos/restaurant5.jpg",
        "https://www.albanian-feast.de/photos/dish5.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-feast",
        instagram: "http://www.instagram.com/albanian-feast",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
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
        street: "Ritterstraße 22",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-table.de/photos/restaurant6.jpg",
        "https://www.albanian-table.de/photos/dish6.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-table",
        instagram: "http://www.instagram.com/albanian-table",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
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
        street: "Hildesheimer Straße 236",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30519",
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
    restaurantType: ["Albanian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 5.5 },
          { name: "Tavë Kosi", description: "Baked lamb with yogurt", price: 7.0 },
          { name: "Kackavall", description: "Grilled cheese with herbs", price: 6.5 },
          { name: "Burek", description: "Flaky pastry filled with meat and cheese", price: 5.0 },
          { name: "Meze Platter", description: "Assorted cold appetizers", price: 6.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 5.0 },
          { name: "Byrek me Qumësht", description: "Milk pie", price: 5.0 },
          { name: "Fli", description: "Traditional Albanian crepe", price: 5.5 },
          { name: "Petulla", description: "Fried dough", price: 4.5 },
          { name: "Kofte të Vogla", description: "Small meatballs", price: 5.0 },
          { name: "Sallatë e Freskët", description: "Fresh salad", price: 4.0 },
          { name: "Byrek me Mish", description: "Meat-filled pie", price: 5.0 },
          { name: "Sallatë Me Domate dhe Kastravec", description: "Tomato and cucumber salad", price: 4.0 },
          { name: "Suxhuk i Pjekur", description: "Grilled sausage", price: 5.5 },
          { name: "Fasule të Pjekura", description: "Baked beans", price: 4.5 },
          { name: "Kackavall i Pjekur", description: "Grilled cheese", price: 6.0 },
          { name: "Peshk i Tiganisur", description: "Fried fish", price: 5.5 },
          { name: "Qofte Me Presh", description: "Meatballs with leeks", price: 5.0 },
          { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 4.5 },
          { name: "Raki Me Presh", description: "Leek rakia", price: 5.5 },
          { name: "Hapëza me Majonezë", description: "Mayonnaise dip", price: 4.0 },
          { name: "Sallatë e Lajthive", description: "Nut salad", price: 4.5 },
          { name: "Supa e Qumështit", description: "Milk soup", price: 4.0 },
          { name: "Sallatë e Shijshme", description: "Delicious salad", price: 4.0 },
          { name: "Patate të Pjekura", description: "Roasted potatoes", price: 4.5 },
          { nam: "Keke i Pjekur", description: "Baked cake", price: 5.0 }
        ],
      },
      {
        category: "Main Courses",
        items: [
          { name: "Pasticcio", description: "Layered pasta with meat sauce", price: 12.0 },
          { name: "Byrek me Spinaq", description: "Spinach and feta pie", price: 10.0 },
          { name: "Grilled Fish", description: "Seasonal fish grilled with herbs", price: 13.0 },
          { name: "Fërgesë e Shijshme", description: "Baked vegetables and meat stew", price: 11.0 },
          { name: "Sofra", description: "Mixed grill platter", price: 14.0 },
          { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 12.0 },
          { name: "Fasule me Mish", description: "Beans with meat", price: 12.0 },
          { name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
          { name: "Pite", description: "Stuffed flatbread", price: 12.0 },
          { name: "Biftek i Pjekur", description: "Roast beef", price: 13.0 },
          { name: "Kosi i Pjekur", description: "Baked yogurt", price: 11.0 },
          { name: "Shqetë e Kambës", description: "Lamb shanks", price: 13.0 },
          { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
          { name: "Tave Dheu", description: "Traditional earth oven dish", price: 12.0 },
          { name: "Supa e Mishit", description: "Meat soup", price: 11.0 },
          { name: "Krek", description: "Roasted pork", price: 12.0 },
          { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
          { name: "Sallatë e Mishit", description: "Meat salad", price: 12.0 },
          { name: "Pita me Mish", description: "Meat pie", price: 11.0 },
          { name: "Zgare", description: "Grilled assorted meats", price: 12.0 },
          { name: "Pule me Perime", description: "Chicken with vegetables", price: 11.0 }
        ],
      },
      {
        category: "Desserts",
        items: [
          { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 4.0 },
          { name: "Kadaif", description: "Shredded pastry with syrup", price: 4.5 },
          { name: "Raki Cake", description: "Cake infused with raki", price: 5.0 },
          { name: "Almond Cookies", description: "Soft almond cookies", price: 3.5 },
          { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 4.0 },
          { name: "Revani", description: "Semolina cake with syrup", price: 3.5 },
          { name: "Gështenjë të Pjekura", description: "Roasted chestnuts", price: 4.0 },
          { name: "Mëngjes i Frutave", description: "Fruit breakfast bowl", price: 4.0 },
          { name: "Qumështor", description: "Milk pudding", price: 3.5 },
          { name: "Mango Sorbet", description: "Refreshing mango ice dessert", price: 4.5 },
          { name: "Përshesh", description: "Corn pudding", price: 3.5 },
          { name: "Kek me Arrat", description: "Nut cake", price: 4.0 },
          { name: "Pina Colada Cake", description: "Cake with pineapple and coconut", price: 4.5 },
          { name: "Sallatë Me Molla", description: "Apple salad", price: 3.5 },
          { name: "Shije e Frutave", description: "Fruit taste", price: 3.0 },
          { name: "Kek i Thjeshtë", description: "Simple cake", price: 3.5 },
          { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 4.0 },
          { name: "Mocca Cake", description: "Coffee-flavored cake", price: 4.5 },
          { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 4.0 },
          { name: "Torte me Mjedra", description: "Berry tart", price: 4.5 }
        ],
      },
      {
        category: "Drinks",
        items: [
          { name: "Raki", description: "Traditional Albanian spirit", price: 5.0 },
          { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.5 },
          { name: "Coke", description: "Classic soft drink", price: 2.5 },
          { name: "Beer", description: "Selection of local beers", price: 4.0 },
          { name: "Albanian Wine", description: "Red or white wine from Albania", price: 6.0 },
          { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 },
          { name: "Kafe", description: "Espresso coffee", price: 2.5 },
          { name: "Çaj", description: "Tea", price: 2.0 },
          { name: "Lëng Limoni", description: "Lemon juice", price: 3.0 },
          { name: "Freska", description: "Fruit punch", price: 3.5 },
          { name: "Raki e Rëndë", description: "Strong rakia", price: 5.0 },
          { name: "Koktej Frutash", description: "Fruit cocktail", price: 3.5 },
          { name: "Birrë e Zezë", description: "Dark beer", price: 4.5 },
          { name: "Lëng Molla", description: "Apple juice", price: 3.0 },
          { name: "Pije Energjike", description: "Energy drink", price: 3.5 },
          { name: "Lëng Perime", description: "Vegetable juice", price: 3.0 },
          { name: "Raki e Butë", description: "Smooth rakia", price: 5.0 },
          { name: "Koktej i Bardhë", description: "White cocktail", price: 4.0 },
          { name: "Lëng Mango", description: "Mango juice", price: 3.5 },
          { name: "Vino i Kuq", description: "Red wine", price: 6.0 }
        ],
      },
    ],
    digitalPresence: {
      photos: [
        "https://www.albanian-grill.de/photos/restaurant7.jpg",
        "https://www.albanian-grill.de/photos/dish7.jpg",
      ],
      socialMedia: {
        facebook: "http://www.facebook.com/albanian-grill",
        instagram: "http://www.instagram.com/albanian-grill",
      },
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Fërgesë", description: "Baked peppers and tomatoes with cheese", price: 3.0 },
              mainCourse: { name: "Tave Kosi", description: "Baked lamb with yogurt", price: 11.0 },
              dessert: { name: "Baklava", description: "Sweet pastry with nuts and honey", price: 3.0 },
              drink: { name: "Raki", description: "Traditional Albanian spirit", price: 3.0 }
            },
            {
              appetizer: { name: "Fli", description: "Traditional Albanian crepe", price: 3.0 },
              mainCourse: { name: "Fasule me Mish", description: "Beans with meat", price: 11.0 },
              dessert: { name: "Kadaif", description: "Shredded pastry with syrup", price: 3.0 },
              drink: { name: "Jus Portokalli", description: "Fresh orange juice", price: 3.0 }
            },
            {
              appetizer: { name: "Meze Platter", description: "Assorted cold appetizers", price: 3.0 },
              mainCourse: {name: "Kebab", description: "Grilled meat skewers", price: 11.0 },
              dessert: { name: "Fruit Salad", description: "Mixed seasonal fruits", price: 3.0 },
              drink: { name: "Albanian Wine", description: "Red or white wine from Albania", price: 3.0 }
            },
            {
              appetizer: { name: "Petulla", description: "Fried dough", price: 3.0 },
              mainCourse: { name: "Shqetë e Kambës", description: "Lamb shanks", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake with syrup", price: 3.0 },
              drink: { name: "Shërbet", description: "Traditional fruit drink", price: 3.0 }
            },
            {
              appetizer: { name: "Kofte të Vogla", description: "Small meatballs", price: 3.0  },
              mainCourse: { name: "Pule me Erëza", description: "Spiced chicken", price: 11.0 },
              dessert: { name: "Qumështor", description: "Milk pudding", price: 3.0 },
              drink: { name: "Lemonade", description: "Freshly squeezed lemonade", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Freskët", description: "Fresh salad", price: 3.0 },
              mainCourse: { name: "Krek", description: "Roasted pork", price: 12.0 },
              dessert: { name: "Puding i Çokollatës", description: "Chocolate pudding", price: 3.0 },
              drink: { name: "Orange Juice", description: "Freshly squeezed orange juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë Me Qepë dhe Feta", description: "Onion and feta salad", price: 3.0 },
              mainCourse: { name: "Fergese", description: "Mixed vegetables and meat", price: 11.0 },
              dessert: { name: "Kremë e Vaniljes", description: "Vanilla cream", price: 3.0 },
              drink: { name: "Apple Juice", description: "Freshly squeezed apple juice", "price": 3.0 }
            },
            {
              appetizer: { name: "Sallatë e Lajthive", description: "Nut salad", price: 3.0 },
              mainCourse: { name: "Pita me Mish", description: "Meat pie", price: 11.00 },
              dessert: { name: "Torte me Mjedra", description: "Berry tart", price: 3.0 },
              drink: { name: "Birrë e Zezë", description: "Dark beer", price: 3.0 }
            },
          ],
        },
      ],
      loyaltyPrograms: "Earn 1 point for every €20 spent. Redeem 50 points for a €5 discount.",
    },
  },
  {
    basicInfo: {
      businessName: "La Dolce Vita",
      businessId: "01/234/56781",
      owner: "Marco Rossi",
      venueName: "Dolce Berlin",
      contact: {
        email: "marco@ladolcevitaberlin.de",
        phoneNumber: "+49 30 12345678"
      },
      address: {
        street: "Friedrichstraße 45",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },             
          { name: "Prosciutto e Melone", description: "Cured Italian ham served with sweet melon", price: 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             
          { name: "Pollo alla Parmigiana", description: "Breaded chicken with tomato sauce and mozzarella", price: 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             
          { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    
    digitalPresence: {
      photos: ["https://www.ladolcevitaberlin.de/photos/restaurant1.jpg", "https://www.ladolcevitaberlin.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ladolcevitaberlin",
        instagram: "http://www.instagram.com/ladolcevitaberlin"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Minestrone Soup", description: "Hearty vegetable soup", price: 3.0 },
              mainCourse: { name: "Penne Arrabbiata", description: "Pasta with spicy tomato sauce", price: 11.0 },
              dessert: { name: "Gelato", description: "Italian ice cream", price: 3.0 },
              drink: { name: "Lemonade", description: "Fresh homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }  
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Trattoria Roma",
      businessId: "01/234/56782",
      owner: "Giovanni Bianchi",
      venueName: "Trattoria Berlin",
      contact: {
        email: "giovanni@trattoriaroma.de",
        phoneNumber: "+49 30 98765432"
      },
      address: {
        street: "Kurfürstendamm 50",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10707"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },             
          { name: "Prosciutto e Melone", description: "Cured Italian ham served with sweet melon", price: 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             
          { name: "Pollo alla Parmigiana", description: "Breaded chicken with tomato sauce and mozzarella", price: 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             
          { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.trattoriaroma.de/photos/restaurant2.jpg", "https://www.trattoriaroma.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/trattoriaroma",
        instagram: "http://www.instagram.com/trattoriaroma"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Caprese Salad", description: "Tomato, mozzarella, and basil", price: 3.0 },
              mainCourse: { name: "Fettuccine Alfredo", description: "Pasta with creamy sauce", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Italian coffee-flavored dessert", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Osteria Amici",
      businessId: "02/345/67890",
      owner: "Luca Moretti",
      venueName: "Amici Düsseldorf",
      contact: {
        email: "luca@osteriaamici.de",
        phoneNumber: "+49 211 1234567"
      },
      address: {
        street: "Königsallee 15",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday : "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.osteriaamici.de/photos/restaurant3.jpg", "https://www.osteriaamici.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/osteriaamici",
        instagram: "http://www.instagram.com/osteriaamici"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Puttanesca", description: "Pasta with tomatoes, olives, and capers", price: 11.0 },
              dessert: { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Limoncello", description: "Italian lemon liqueur", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }

          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Ristorante Il Gusto",
      businessId: "02/345/67891",
      owner: "Francesca Ricci",
      venueName: "Il Gusto",
      contact: {
        email: "francesca@ilgusto.de",
        phoneNumber: "+49 211 7654321"
      },
      address: {
        street: "Schadowstraße 100",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.ilgusto.de/photos/restaurant4.jpg", "https://www.ilgusto.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ilgusto",
        instagram: "http://www.instagram.com/ilgusto"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with Parmesan", price: 3.0 },
              mainCourse: { name: "Osso Buco", description: "Braised veal shanks with risotto", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert", price: 3.0 },
              drink: { name: "Chianti", description: "Full-bodied red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }

          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Ristorante Bella Italia",
      businessId: "03/456/78901",
      owner: "Alessandro Verdi",
      venueName: "Bella Italia",
      contact: {
        email: "alessandro@bellaitaliahannover.de",
        phoneNumber: "+49 511 1234567"
      },
      address: {
        street: "Georgstraße 10",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.bellaitaliahannover.de/photos/restaurant5.jpg", "https://www.bellaitaliahannover.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/bellaitaliahannover",
        instagram: "http://www.instagram.com/bellaitaliahannover"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread with tomatoes", price: 3.0 },
              mainCourse: { name: "Penne alla Vodka", description: "Pasta with tomato vodka sauce", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Prosecco", description: "Italian sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Da Vinci Ristorante",
      businessId: "03/456/78902",
      owner: "Leonardo Marini",
      venueName: "Da Vinci Hannover",
      contact: {
        email: "leonardo@davincihannover.de",
        phoneNumber: "+49 511 7654321"
      },
      address: {
        street: "Lister Meile 50",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.davincihannover.de/photos/restaurant6.jpg", "https://www.davincihannover.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/davincihannover",
        instagram: "http://www.instagram.com/davincihannover"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Zuppa di Minestrone", description: "Hearty vegetable soup", price: 3.0 },
              mainCourse: { name: "Fusilli al Pesto", description: "Pasta with basil pesto", price: 11.0 },
              dessert: { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Espresso", description: "Italian coffee", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Trattoria Milano",
      businessId: "04/567/89012",
      owner: "Mario Lombardi",
      venueName: "Milano Leipzig",
      contact: {
        email: "mario@trattoriamilano.de",
        phoneNumber: "+49 341 1234567"
      },
      address: {
        street: "Petersstraße 20",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.trattoriamilano.de/photos/restaurant7.jpg", "https://www.trattoriamilano.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/trattoriamilano",
        instagram: "http://www.instagram.com/trattoriamilano"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread with tomato", price: 3.0 },
              mainCourse: { name: "Pizza Margherita", description: "Classic tomato and mozzarella pizza", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Italian coffee-flavored dessert", price: 3.0 },
              drink: { name: "Limoncello", description: "Lemon liqueur", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Pizza Margherita", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Osteria Toscana",
      businessId: "04/567/89013",
      owner: "Luigi Conti",
      venueName: "Toscana Leipzig",
      contact: {
        email: "luigi@osteria-toscana.de",
        phoneNumber: "+49 341 9876543"
      },
      address: {
        street: "Nikolaistraße 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "12:00 PM - 10:00 PM",
      tuesday: "12:00 PM - 10:00 PM",
      wednesday: "12:00 PM - 10:00 PM",
      thursday: "12:00 PM - 11:00 PM",
      friday: "12:00 PM - 11:00 PM",
      saturday: "12:00 PM - 11:00 PM",
      sunday: "12:00 PM - 9:00 PM"
    },
    cuisine: ["Italian"],
    restaurantType: ["Italian"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 7.0 },
          { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 5.0 },
          { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 6.5 },
          { name: "Arancini", description: "Sicilian rice balls filled with cheese", price: 6.0 },
          { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 7.5 },              { "name": "Prosciutto e Melone", "description": "Cured Italian ham served with sweet melon", "price": 7.0 },
          { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.0 },
          { name: "Olive Ascolane", description: "Fried stuffed olives", price: 5.5 },
          { name: "Antipasto Misto", description: "Mixed Italian appetizers with meats and cheeses", price: 8.5 },
          { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 9.0 },
          { name: "Mozzarella in Carrozza", description: "Fried mozzarella sandwiches", price: 6.5 },
          { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with herbs and cheese", price: 5.5 },
          { name: "Burrata", description: "Creamy burrata cheese served with arugula", price: 8.0 },
          { name: "Suppli", description: "Roman rice balls with mozzarella", price: 5.0 },
          { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 6.0 },
          { name: "Fritto Misto", description: "Mixed fried seafood platter", price: 9.0 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and cheese", price: 12.0 },
          { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 9.0 },
          { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 12.0 },
          { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 13.5 },
          { name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 14.0 },
          { name: "Pizza Margherita", description: "Classic pizza with tomato, mozzarella, and basil", price: 9.0 },             { "name": "Pollo alla Parmigiana", "description": "Breaded chicken with tomato sauce and mozzarella", "price": 14.5 },
          { name: "Fettuccine Alfredo", description: "Pasta with a creamy Parmesan sauce", price: 11.5 },
          { name: "Tagliatelle al Ragu", description: "Pasta with traditional Bolognese sauce", price: 13.0 },             { "name": "Gnocchi al Pesto", "description": "Potato dumplings in a basil pesto sauce", "price": 11.0 },
          { name: "Osso Buco", description: "Braised veal shanks with vegetables", price: 18.0 },
          { name: "Pizza Quattro Stagioni", description: "Pizza with four different toppings", price: 10.5 },
          { name: "Tortellini alla Panna", description: "Pasta filled with cheese in a creamy sauce", price: 12.0 },
          { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 14.0 },
          { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 19.0 },
          { name: "Saltimbocca alla Romana", description: "Veal with prosciutto and sage in white wine sauce", price: 16.5 },
          { name: "Pizza Capricciosa", description: "Pizza with ham, mushrooms, and artichokes", price: 10.0 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 5.5 },
          { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 6.0 },
          { name: "Cannoli Siciliani", description: "Sicilian pastry filled with sweet ricotta", price: 5.0 },
          { name: "Gelato al Cioccolato", description: "Rich chocolate ice cream", price: 4.5 },
          { name: "Zabaglione", description: "Italian custard flavored with Marsala wine", price: 6.0 },
          { name: "Profiteroles", description: "Cream-filled pastry with chocolate sauce", price: 5.5 },
          { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 5.5 },
          { name: "Baba al Rum", description: "Rum-soaked sponge cake", price: 6.0 },
          { name: "Affogato", description: "Vanilla ice cream drowned in espresso", price: 5.0 },
          { name: "Semifreddo", description: "Semi-frozen dessert with almonds", price: 5.5 },
          { name: "Tartufo", description: "Chocolate truffle ice cream", price: 5.5 },
          { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 6.0 },
          { name: "Crostata di Frutta", description: "Italian fruit tart", price: 5.0 },
          { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 6.0 },
          { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 6.0 },
          { name: "Espresso", description: "Strong Italian coffee", price: 2.5 },
          { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 },
          { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.5 },
          { name: "Aperol Spritz", description: "Popular Italian aperitif", price: 5.5 },
          { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 6.5 },
          { name: "Prosecco", description: "Italian sparkling wine", price: 5.0 },
          { name: "Limoncello", description: "Traditional lemon liqueur", price: 4.0 },
          { name: "Bellini", description: "Peach and Prosecco cocktail", price: 6.0 },
          { name: "Amaretto Sour", description: "Italian almond liqueur cocktail", price: 5.5 },
          { name: "Campari Soda", description: "Campari with soda water", price: 5.0 },
          { name: "Sangiovese", description: "Red wine from Tuscany", price: 6.0 },
          { name: "Frascati", description: "White wine from Lazio", price: 5.5 },
          { name: "Vermouth", description: "Aromatic wine with herbs", price: 4.5 },
          { name: "Grappa", description: "Italian grape-based brandy", price: 6.5 }
        ]
      },
    ],
    digitalPresence: {
      photos: ["https://www.osteria-toscana.de/photos/restaurant8.jpg", "https://www.osteria-toscana.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/osteria-toscana",
        instagram: "http://www.instagram.com/osteria-toscana"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Prosciutto e Melone", description: "Cured ham with melon", price: 3.0 },
              mainCourse: { name: "Tagliata di Manzo", description: "Sliced beef steak with arugula and Parmesan", price: 11.0 },
              dessert: { name: "Panna Cotta", description: "Creamy dessert with caramel", price: 3.0 },
              drink: { name: "Chianti Classico", description: "Classic Tuscan red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta", description: "Grilled bread topped with tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Margherita Pizza", description: "Tomato, mozzarella, and basil", price: 11.0 },
              dessert: {name: "Panna Cotta", description: "Creamy dessert with berry sauce", price: 3.0 },
              drink: { name: "Chianti Wine", description: "Classic red wine from Tuscany", price: 3.0 }
            },
            {
              appetizer: { name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 3.0 },
              mainCourse: { name: "Spaghetti Carbonara", description: "Pasta with pancetta, egg, and Parmesan cheese", price: 11.0 },
              dessert: { name: "Tiramisu", description: "Classic Italian dessert with coffee and mascarpone", price: 3.0 },
              drink: { name: "Latte Macchiato", description: "Coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Bruschetta al Pomodoro", description: "Grilled bread topped with fresh tomatoes and basil", price: 3.0 },
              mainCourse: { name: "Lasagna alla Bolognese", description: "Layers of pasta, meat sauce, and cheese", price: 11.0 },
              dessert: { name: "Torta della Nonna", description: "Custard tart topped with pine nuts", price: 3.0 },
              drink: { name: "Negroni", description: "Classic Italian cocktail with gin, vermouth, and Campari", price: 3.0 }
            },
            {
              appetizer: { name: "Calamari Fritti", description: "Fried calamari with lemon and marinara sauce", price: 3.0 },
              mainCourse: {  name: "Risotto ai Funghi", description: "Creamy risotto with wild mushrooms", price: 11.0 },
              dessert: { name: "Tartufo", description: "Chocolate truffle ice cream", price: 3.0 },
              drink: { name: "Cappuccino", description: "Italian coffee with steamed milk", price: 3.0 }
            },
            {
              appetizer: { name: "Olive Ascolane", description: "Fried stuffed olives", price: 3.0 },
              mainCourse: { name: "Agnello al Forno", description: "Oven-roasted lamb with herbs", price: 11.0 },
              dessert: { name: "Cassata Siciliana", description: "Traditional Sicilian sponge cake with ricotta", price: 3.0 },
              drink: { name: "Frascati", description: "White wine from Lazio", price: 3.0 }
            },
            {
              appetizer: { name: "Carpaccio di Manzo", description: "Thinly sliced raw beef with arugula and Parmesan", price: 3.0 },
              mainCourse: { name: "Linguine alle Vongole", description: "Pasta with clams in white wine sauce", price: 11.0 },
              dessert: { name: "Ricotta Cheesecake", description: "Cheesecake made with ricotta cheese", price: 3.0 },
              drink: { name: "Campari Soda", description: "Campari with soda water", price: 3.0 }
            },
            {
              appetizer: { name: "Crostini Toscani", description: "Grilled bread topped with chicken liver pâté", price: 3.0 },
              mainCourse: { name: "Gnocchi al Pesto", description: "Potato dumplings in a basil pesto sauce", price: 11.0 },
              dessert: { name: "Chocolate Soufflé", description: "Rich chocolate dessert with a molten center", price: 3.0 },
              drink: { name: "Espresso", description: "Strong Italian coffee", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  }, 
  {
    basicInfo: {
      businessName: "Le Bistro Parisien",
      businessId: "01/234/56781",
      owner: "Jean-Luc Dupont",
      venueName: "Parisien",
      contact: {
        email: "jeanluc@lebistroparisien.de",
        phoneNumber: "+49 30 12345678"
      },
      address: {
        street: "Unter den Linden 5",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Bistro"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.lebistroparisien.de/photos/restaurant1.jpg", "https://www.lebistroparisien.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/lebistroparisien",
        instagram: "http://www.instagram.com/lebistroparisien"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Croque Monsieur", description: "Grilled ham and cheese sandwich", price: 11.0 },
              dessert: { name: "Profiteroles", description: "Cream puffs with chocolate sauce", price: 3.0 },
              drink: { name: "Citron Presse", description: "Freshly squeezed lemon juice", price: 3.0 }
            },
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "La Maison de Provence",
      businessId: "01/234/56782",
      owner: "Sophie Martin",
      venueName: "Provence",
      contact: {
        email: "sophie@lamaisonprovence.de",
        phoneNumber: "+49 30 98765432"
      },
      address: {
        street: "Kurfürstendamm 22",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10719"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Brasserie"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.lamaisonprovence.de/photos/restaurant2.jpg", "https://www.lamaisonprovence.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/lamaisonprovence",
        instagram: "http://www.instagram.com/lamaisonprovence"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Café de Flore",
      businessId: "02/345/67890",
      owner: "Pierre Lefevre",
      venueName: "Flore Düsseldorf",
      contact: {
        email: "pierre@cafedeflore.de",
        phoneNumber: "+49 211 1234567"
      },
      address: {
        street: "Königsallee 30",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Café"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.cafedeflore.de/photos/restaurant3.jpg", "https://www.cafedeflore.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/cafedeflore",
        instagram: "http://www.instagram.com/cafedeflore"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Brasserie L'Étoile",
      businessId: "02/345/67891",
      owner: "Marie Dubois",
      venueName: "L'Étoile",
      contact: {
        email: "marie@brasserie-etoile.de",
        phoneNumber: "+49 211 7654321"
      },
      address: {
        street: "Schadowstraße 18",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Brasserie"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.brasserie-etoile.de/photos/restaurant4.jpg", "https://www.brasserie-etoile.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/brasserie-etoile",
        instagram: "http://www.instagram.com/brasserie-etoile"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Le Petit Château",
      businessId: "03/456/78901",
      owner: "Alain Girard",
      venueName: "Le Château",
      contact: {
        email: "alain@lepetitchateau.de",
        phoneNumber: "+49 511 1234567"
      },
      address: {
        street: "Georgstraße 20",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Gourmet"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.lepetitchateau.de/photos/restaurant5.jpg", "https://www.lepetitchateau.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/lepetitchateau",
        instagram: "http://www.instagram.com/lepetitchateau"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Chez Marcel",
      businessId: "03/456/78902",
      owner: "Marcel Laurent",
      venueName: "Marcel Hannover",
      contact: {
        email: "marcel@chezmarcel.de",
        phoneNumber: "+49 511 7654321"
      },
      address: {
        street: "Lister Meile 100",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Bistro"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.chezmarcel.de/photos/restaurant6.jpg", "https://www.chezmarcel.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/chezmarcel",
        instagram: "http://www.instagram.com/chezmarcel"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Le Bistro de Lyon",
      businessId: "04/567/89012",
      owner: "Henri Dupont",
      venueName: "Lyon Leipzig",
      contact: {
        email: "henri@lebistrolyon.de",
        phoneNumber: "+49 341 1234567"
      },
      address: {
        street: "Petersstraße 15",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Bistro"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.lebistrolyon.de/photos/restaurant7.jpg", "https://www.lebistrolyon.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/lebistrolyon",
        instagram: "http://www.instagram.com/lebistrolyon"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Boulangerie et Brasserie",
      businessId: "04/567/89013",
      owner: "Jacques Roux",
      venueName: "Boulangerie",
      contact: {
        email: "jacques@boulangeriebrasserie.de",
        phoneNumber: "+49 341 9876543"
      },
      address: {
        street: "Nikolaistraße 5",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["French"],
    restaurantType: ["Brasserie"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Escargots de Bourgogne", description: "Burgundy snails with garlic butter", price: 9.0 },
          { name: "Soupe à l'Oignon", description: "Classic French onion soup", price: 7.5 },
          { name: "Salade Niçoise", description: "Mixed greens with tuna, olives, and eggs", price: 8.5 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Ratatouille", description: "Stewed vegetables with herbs de Provence", price: 7.0 },
          { name: "Terrine de Foie Gras", description: "Duck liver pâté with toast", price: 9.5 },
          { name: "Salade de Chèvre Chaud", description: "Salad with warm goat cheese on toast", price: 8.0 },
          { name: "Tartare de Saumon", description: "Salmon tartare with avocado and dill", price: 10.0 },
          { name: "Gougères", description: "Cheese puffs made with choux pastry", price: 5.0 },
          { name: "Quiche aux Poireaux", description: "Leek quiche with Gruyère cheese", price: 7.5 },
          { name: "Pâté de Campagne", description: "Country-style pork pâté", price: 8.0 },
          { name: "Salade de Lentilles", description: "Lentil salad with Dijon vinaigrette", price: 6.5 },
          { name: "Oeufs Mimosa", description: "Deviled eggs with mayonnaise", price: 5.5 },
          { name: "Escargots à la Bourguignonne", description: "Snails with garlic parsley butter", price: 9.5 },
          { name: "Salade Lyonnaise", description: "Salad with bacon, poached egg, and croutons", price: 8.0 },
          { name: "Rillettes de Canard", description: "Duck rillettes with baguette", price: 7.5 }

        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Coq au Vin", description: "Chicken braised in red wine with mushrooms", price: 16.0 },
          { name: "Boeuf Bourguignon", description: "Beef stew with red wine and vegetables", price: 18.0 },
          { name: "Quiche Lorraine", description: "Savory tart with bacon and cheese", price: 12.0 },
          { name: "Bouillabaisse", description: "Traditional fish stew with rouille sauce", price: 19.0 },
          { name: "Cassoulet", description: "Hearty bean stew with duck and sausage", price: 17.5 },
          { name: "Sole Meunière", description: "Pan-fried sole with lemon butter", price: 18.0 },
          { name: "Steak Tartare", description: "Raw minced beef with capers and onions", price: 15.0 },
          { name: "Magret de Canard", description: "Duck breast with orange sauce", price: 18.5 },
          { name: "Tournedos Rossini", description: "Filet mignon with foie gras and truffle", price: 22.0 },
          { name: "Poulet Rôti", description: "Roast chicken with herbs and potatoes", price: 15.5 },
          { name: "Entrecôte", description: "Grilled ribeye steak with Béarnaise sauce", price: 20.0 },
          { name: "Moules Frites", description: "Mussels with French fries", price: 14.0 },
          { name: "Filet de Boeuf", description: "Beef tenderloin with truffle sauce", price: 22.0 },
          { name: "Gigot d'Agneau", description: "Roast leg of lamb with rosemary", price: 20.0 },
          { name: "Ratatouille", description: "Provençal vegetable stew", price: 12.0 },
          { name: "Blanquette de Veau", description: "Creamy veal stew with vegetables", price: 16.0 },
          { name: "Poulet Basquaise", description: "Chicken braised with peppers and tomatoes", price: 14.5 },
          { name: "Navarin d'Agneau", description: "Lamb stew with spring vegetables", price: 17.0 }

        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 6.5 },
          { name: "Tarte Tatin", description: "Upside-down caramelized apple tart", price: 7.0 },
          { name: "Mousse au Chocolat", description: "Rich chocolate mousse", price: 5.5 },
          { name: "Clafoutis", description: "Baked custard with cherries", price: 6.0 },
          { name: "Éclair au Chocolat", description: "Chocolate-filled pastry", price: 4.5 },
          { name: "Tarte aux Citron", description: "Lemon tart with meringue", price: 5.0 },
          { name: "Crêpes Suzette", description: "Pancakes with orange sauce", "price": 5.5 },
          { name: "Île Flottante", description: "Meringue floating on vanilla custard", "price": 6.0 },
          { name: "Paris-Brest", description: "Choux pastry filled with praline cream", "price": 6.5 },
          { name: "Crème Caramel", description: "Caramel custard dessert", "price": 5.0 },
          { name: "Galette des Rois", description: "Traditional almond cake", "price": 6.0 },
          { name: "Pavlova", description: "Meringue dessert with fruit and cream", "price": 6.5 },
          { name: "Soufflé au Grand Marnier", description: "Fluffy soufflé with Grand Marnier", "price": 7.0 },
          { name: "Tarte Tatin", description: "Caramelized apple tart", "price": 6.5 },
          { name: "Macarons", description: "Assorted French macarons", "price": 5.5 },
          { name: "Gâteau Basque", description: "Basque cake with cream filling", "price": 5.5 },
          { name: "Tarte aux Poires", description: "Pear tart with almond cream", "price": 6.0 },
          { name: "Mille-Feuille", description: "Layered puff pastry with cream", "price": 6.5 }




        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Café au Lait", description: "French coffee with steamed milk", price: 3.0 },
          { name: "Champagne", description: "French sparkling wine", price: 9.0 },
          { name: "Kir Royale", description: "Champagne with crème de cassis", price: 8.0 },
          { name: "Pastis", description: "Anise-flavored aperitif", price: 4.5 },
          { name: "Chablis", description: "Dry white wine from Burgundy", price: 7.0 },
          { name: "Café Crème", description: "French coffee with cream", price: 3.0 },
          { name: "Cognac", description: "French brandy", price: 7.0 },
          { name: "Beaujolais", description: "Young red wine from Beaujolais", price: 6.0 },
          { name: "Chocolat Chaud", description: "Hot chocolate made with dark chocolate", price: 4.5 },
          { name: "Vin Rouge", description: "House red wine", price: 5.0 },
          { name: "Pernod", description: "Anise-flavored spirit", price: 6.0 },
          { name: "Café Noir", description: "Black coffee", price: 2.5 },
          { name: "Château Margaux", description: "Premium red wine from Bordeaux", price: 15.0 },
          { name: "Cognac XO", description: "Extra old French brandy", price: 10.0 },
          { name: "Vin Blanc", description: "House white wine", price: 5.0 },
          { name: "Ricard", description: "Anise-flavored liqueur", price: 4.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.boulangeriebrasserie.de/photos/restaurant8.jpg", "https://www.boulangeriebrasserie.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/boulangeriebrasserie",
        instagram: "http://www.instagram.com/boulangeriebrasserie"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Soupe de Poisson", description: "Fish soup with croutons", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Fondant au Chocolat", description: "Molten chocolate cake", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Madeleines", description: "Buttery French sponge cakes", price: 4.0 },
              mainCourse: { name: "Croissant Jambon Fromage", description: "Ham and cheese croissant", price: 8.0 },
              dessert: { name: "Macarons", description: "Assorted French macarons", price: 5.0 },
              drink: { name: "Thé à la Menthe", description: "Moroccan mint tea", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Gratin Dauphinois", description: "Potato gratin with cream", price: 10.0 },
              dessert: { name: "Tarte Tatin", description: "Caramelized apple tart", price: 3.0 },
              drink: { name: "Kir", description: "White wine with blackcurrant liqueur", price: 4.0 }
            },
            {
              appetizer: { name: "Amuse Bouche", description: "Chef's selection of small bites", price: 3.0 },
              mainCourse: { name: "Chateaubriand", description: "Center-cut of beef tenderloin for one person", price: 11.0 },
              dessert: { name: "Tarte au Chocolat", description: "Rich chocolate tart", price: 3.0 },
              drink: { name: "Champagne", description: "French sparkling wine", price: 3.0 }
            },
            {
              appetizer: { name: "Tartelette aux Tomates", description: "Mini tomato tart with basil", price: 4.0 },
              mainCourse: { name: "Ratatouille", description: "Vegetable stew with herbs", price: 8.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 5.0 },
              drink: { name: "Limonade", description: "Homemade lemonade", price: 3.0 }
            },
            {
              appetizer: { name: "Salade Verte", description: "Fresh green salad with vinaigrette", price: 3.0 },
              mainCourse: { name: "Steak Frites", description: "Grilled steak with French fries", price: 11.0 },
              dessert: { name: "Crème Brûlée", description: "Custard dessert with caramelized sugar", price: 3.0 },
              drink: { name: "Red Wine", description: "House red wine", price: 3.0 }
            },
            {
              appetizer: { name: "Pain Perdu", description: "French toast with berries", price: 3.0 },
              mainCourse: { name: "Omelette au Fromage", description: "Cheese omelette with herbs", price: 11.0 },
              dessert: { name: "Crêpe au Citron", description: "Crepe with lemon and sugar", price: 3.0 },
              drink: { name: "Mimosa", description: "Champagne with orange juice", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Sultan's Feast",
      businessId: "01/234/56783",
      owner: "Ahmet Yildiz",
      venueName: "Sultan Berlin",
      contact: {
        email: "ahmet@sultansfeast.de",
        phoneNumber: "+49 30 23456789"
      },
      address: {
        street: "Kurfürstendamm 50",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10719"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Meze Restaurant"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.sultansfeast.de/photos/restaurant1.jpg", "https://www.sultansfeast.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/sultansfeast",
        instagram: "http://www.instagram.com/sultansfeast"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Istanbul Kitchen",
      businessId: "01/234/56784",
      owner: "Mehmet Karaca",
      venueName: "Istanbul Berlin",
      contact: {
        email: "mehmet@istanbulkitchen.de",
        phoneNumber: "+49 30 34567890"
      },
      address: {
        street: "Unter den Linden 70",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Grill House"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.istanbulkitchen.de/photos/restaurant2.jpg", "https://www.istanbulkitchen.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/istanbulkitchen",
        instagram: "http://www.instagram.com/istanbulkitchen"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Bosporus Grill",
      businessId: "02/345/67892",
      owner: "Murat Demir",
      venueName: "Bosporus Düsseldorf",
      contact: {
        email: "murat@bosporusgrill.de",
        phoneNumber: "+49 211 1234567"
      },
      address: {
        street: "Königsallee 100",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Grill House"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.bosporusgrill.de/photos/restaurant3.jpg", "https://www.bosporusgrill.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/bosporusgrill",
        instagram: "http://www.instagram.com/bosporusgrill"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Anatolian Delights",
      businessId: "02/345/67893",
      owner: "Ayşe Kaya",
      venueName: "Anatolian Düsseldorf",
      contact: {
        email: "ayse@anatoliandelights.de",
        phoneNumber: "+49 211 7654321"
      },
      address: {
        street: "Schadowstraße 50",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.anatoliandelights.de/photos/restaurant4.jpg", "https://www.anatoliandelights.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/anatoliandelights",
        instagram: "http://www.instagram.com/anatoliandelights"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Kapadokya",
      businessId: "03/456/78903",
      owner: "Fatma Çelik",
      venueName: "Kapadokya Hannover",
      contact: {
        email: "fatma@kapadokya.de",
        phoneNumber: "+49 511 1234567"
      },
    address: {
        street: "Lister Meile 200",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.kapadokya.de/photos/restaurant5.jpg", "https://www.kapadokya.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kapadokya",
        instagram: "http://www.instagram.com/kapadokya"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Oriental Palace",
      businessId: "03/456/78904",
      owner: "Hasan Yılmaz",
      venueName: "Oriental Hannover",
      contact: {
        email: "hasan@orientalpalace.de",
        phoneNumber: "+49 511 9876543"
      },
      address: {
        street: "Königstraße 20",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Meze Restaurant"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.orientalpalace.de/photos/restaurant6.jpg", "https://www.orientalpalace.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/orientalpalace",
        instagram: "http://www.instagram.com/orientalpalace"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Antep Sofrası",
      businessId: "04/567/89015",
      owner: "Nesrin Şahin",
      venueName: "Antep Leipzig",
      contact: {
        email: "nesrin@antepsofrasi.de",
        phoneNumber: "+49 341 1234567"
      },
      address: {
        street: "Karl-Liebknecht-Straße 42",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04275"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.antepsofrasi.de/photos/restaurant7.jpg", "https://www.antepsofrasi.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/antepsofrasi",
        instagram: "http://www.instagram.com/antepsofrasi"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Topkapı Restaurant",
      businessId: "04/567/89016",
      owner: "Kemal Demirci",
      venueName: "Topkapı Leipzig",
      contact: {
        email: "kemal@topkapirestaurant.de",
        phoneNumber: "+49 341 9876543"
      },
      address: {
        street: "Petersstraße 20",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.topkapirestaurant.de/photos/restaurant8.jpg", "https://www.topkapirestaurant.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/topkapirestaurant",
        instagram: "http://www.instagram.com/topkapirestaurant"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Pamukkale",
      businessId: "04/567/89017",
      owner: "Ebru Kaya",
      venueName: "Pamukkale Leipzig",
      contact: {
        email: "ebru@pamukkale.de",
        phoneNumber: "+49 341 7654321"
      },
      address: {
        street: "Nikolaistraße 10",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.pamukkale.de/photos/restaurant9.jpg", "https://www.pamukkale.de/photos/dish9.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/pamukkale",
        instagram: "http://www.instagram.com/pamukkale"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Ottoman Palace",
      businessId: "04/567/89018",
      owner: "Selim Özkan",
      venueName: "Ottoman Leipzig",
      contact: {
        email: "selim@ottomanpalace.de",
        phoneNumber: "+49 341 7654322"
      },
      address: {
        street: "Goethestraße 15",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Turkish"],
    restaurantType: ["Gourmet"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Hummus", description: "Chickpea puree with tahini and olive oil", price: 4.5 },
          { name: "Dolma", description: "Stuffed grape leaves with rice", price: 5.0 },
          { name: "Ezme", description: "Spicy tomato and pepper dip", price: 4.0 },
          { name: "Haydari", description: "Garlic yogurt dip with herbs", price: 4.5 },
          { name: "Zeytinyağlı Dolma", description: "Stuffed grape leaves with olive oil", price: 5.5 },
          { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 4.5 },
          { name: "İçli Köfte", description: "Stuffed bulgur balls with meat", price: 6.5 },
          { name: "Çoban Salatası", description: "Shepherd's salad with tomatoes, cucumbers, and peppers", price: 5.0 },
          { name: "Ezogelin Çorbası", description: "Lentil soup with bulgur and spices", price: 4.0 },
          { name: "Mücver", description: "Zucchini fritters with dill and yogurt", price: 5.5 },
          { name: "Tarator", description: "Walnut and yogurt dip with garlic", price: 4.5 },
          { name: "Piyaz", description: "White bean salad with onions and parsley", price: 4.5 },
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 5.0 },
          { name: "Mercimek Köftesi", description: "Lentil patties with herbs", price: 4.5 },
          { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 5.0 },
          { name: "Biber Dolması", description: "Stuffed peppers with rice and pine nuts", price: 5.5 },
          { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 5.5 },
          { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 5.0 },
          { name: "Sigara Böreği", description: "Fried pastry rolls filled with feta cheese", price: 5.5 },
          { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 5.0 },
          { name: "Patlıcan Salatası", description: "Smoky eggplant salad", price: 5.0 },
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Lahmacun", description: "Turkish pizza with minced meat and vegetables", price: 8.0 },
          { name: "Doner Kebab", description: "Rotisserie meat served with pita and salad", price: 11.5 },
          { name: "Manti", description: "Turkish dumplings with yogurt and garlic sauce", price: 11.0 },
          { name: "Imam Bayıldı", description: "Stuffed eggplant with tomatoes and onions", price: 10.0 },
          { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 14.5 },
          { name: "Kuzu Güveç", description: "Lamb stew with vegetables", price: 13.5 },
          { name: "Hünkâr Beğendi", description: "Lamb stew with creamy eggplant puree", price: 14.0 },
          { name: "Patlıcan Musakka", description: "Eggplant casserole with minced meat", price: 12.0 },
          { name: "Ali Nazik", description: "Lamb over smoked eggplant puree", price: 14.0 },
          { name: "Kuzu Şiş", description: "Grilled lamb skewers", price: 13.5 },
          { name: "Tavuk Şiş", description: "Grilled chicken skewers", price: 12.0 },
          { name: "Adana Kebab", description: "Spicy minced lamb kebab", price: 12.5 },
          { name: "Iskender Kebab", description: "Doner kebab served with yogurt and tomato sauce", price: 14.0 },
          { name: "Testi Kebabı", description: "Lamb stew cooked in a clay pot", price: 15.0 },
          { name: "Pide", description: "Turkish flatbread with various toppings", price: 9.0 },
          { name: "Karışık Izgara", description: "Mixed grill platter", price: 16.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Kadayıf", description: "Shredded pastry with nuts and syrup", price: 5.5 },
          { name: "Aşure", description: "Noah's pudding with grains, fruits, and nuts", price: 5.0 },
          { name: "Tulumba", description: "Fried dough soaked in syrup", price: 4.0 },
          { name: "Helva", description: "Semolina dessert with pine nuts", price: 4.5 },
          { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 6.5 },
          { name: "Kazandibi", description: "Caramelized milk pudding", price: 4.5 },
          { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.5 },
          { name: "Sütlaç", description: "Turkish rice pudding", price: 4.5 },
          { name: "Fırın Sütlaç", description: "Oven-baked rice pudding", price: 4.0 },
          { name: "Muhallebi", description: "Milk pudding with rose water", price: 4.5 },
          { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 5.0 },
          { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 }
          
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Salep", description: "Hot milk drink with orchid root", price: 4.0 },
          { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 3.0 },
          { name: "Soda", description: "Sparkling mineral water", price: 2.5 },
          { name: "Şalgam", description: "Fermented turnip juice", price: 3.5 },
          { name: "Boza", description: "Fermented bulgur drink with cinnamon", price: 4.0 },
          { name: "Pomegranate Juice", description: "Freshly squeezed pomegranate juice", price: 3.5 },
          { name: "Turkish Lemonade", description: "Homemade lemonade with mint", price: 3.0 },
          { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 },
          { name: "Turkish Tea", description: "Strong black tea", price: 2.5 },
          { name: "Rakı", description: "Anise-flavored spirit", price: 5.5 },
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.ottomanpalace.de/photos/restaurant10.jpg", "https://www.ottomanpalace.de/photos/dish10.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ottomanpalace",
        instagram: "http://www.instagram.com/ottomanpalace"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Salatası", description: "Smoked eggplant salad", price: 3.5 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Zeytinyağlı Enginar", description: "Artichokes with olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with eggplant puree", price: 11.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Fava", description: "Pureed broad beans with dill", price: 3.5 },
              mainCourse: { name: "Kuzu İncik", description: "Braised lamb shank with vegetables", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Turkish Tea", description: "Strong black tea", price: 2.5 }
            },
            {
              appetizer: { name: "Baba Ghanoush", description: "Smoky eggplant dip", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Sütlaç", description: "Turkish rice pudding", price: 4.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.5 },
              mainCourse: { name: "Köfte", description: "Grilled meatballs with rice", price: 10.0 },
              dessert: { name: "Lokma", description: "Fried dough balls soaked in syrup", price: 4.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 2.5 }
            },
            {
              appetizer: { name: "Çiğ Köfte", description: "Spicy raw meatballs with bulgur", price: 4.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 12.0 },
              dessert: { name: "Baklava", description: "Layered pastry with nuts and syrup", price: 2.0 },
              drink: { name: "Turkish Coffee", description: "Strong, unfiltered coffee", price: 2.0 }
            },
            {
              appetizer: { name: "Mercimek Çorbası", description: "Lentil soup with lemon", price: 3.0 },
              mainCourse: { name: "Beyti Kebab", description: "Minced lamb wrapped in lavash bread", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Patlıcan Ezmesi", description: "Mashed eggplant with garlic and yogurt", price: 3.0 },
              mainCourse: { name: "Kuzu Tandır", description: "Slow-cooked lamb with bulgur pilaf", price: 11.0 },
              dessert: { name: "Revani", description: "Semolina cake soaked in syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            },
            {
              appetizer: { name: "Zeytinyağlı Yaprak Sarma", description: "Stuffed grape leaves with rice and olive oil", price: 3.0 },
              mainCourse: { name: "Hünkar Beğendi", description: "Lamb stew with creamy eggplant puree", price: 11.0 },
              dessert: { name: "Künefe", description: "Sweet cheese pastry with syrup", price: 3.0 },
              drink: { name: "Ayran", description: "Traditional yogurt drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Kyiv Table",
      businessId: "01/234/56785",
      owner: "Olena Ivanova",
      venueName: "Kyiv Berlin",
      contact: {
        email: "olena@kyivtable.de",
        phoneNumber: "+49 30 56789012"
      },
      address: {
        street: "Alexanderplatz 1",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10178"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.kyivtable.de/photos/restaurant1.jpg", "https://www.kyivtable.de/photos/dish1.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/kyivtable",
        instagram: "http://www.instagram.com/kyivtable"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Lviv House",
      businessId: "01/234/56786",
      owner: "Mykola Petrenko",
      venueName: "Lviv Berlin",
      contact: {
        email: "mykola@lvivhouse.de",
        phoneNumber: "+49 30 67890123"
      },
      address: {
        street: "Friedrichstraße 180",
        city: "Berlin",
        state: "Berlin",
        postalCode: "10117"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.lvivhouse.de/photos/restaurant2.jpg", "https://www.lvivhouse.de/photos/dish2.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/lvivhouse",
        instagram: "http://www.instagram.com/lvivhouse"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Odessa Delights",
      businessId: "02/345/67894",
      owner: "Yuriy Shevchenko",
      venueName: "Odessa Düsseldorf",
      contact: {
        email: "yuriy@odessadelights.de",
        phoneNumber: "+49 211 1234567"
      },
      address: {
        street: "Königsallee 60",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.odessadelights.de/photos/restaurant3.jpg", "https://www.odessadelights.de/photos/dish3.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/odessadelights",
        instagram: "http://www.instagram.com/odessadelights"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Chernihiv Cuisine",
      businessId: "02/345/67895",
      owner: "Iryna Bondarenko",
      venueName: "Chernihiv Düsseldorf",
      contact: {
        email: "iryna@chernihivcuisine.de",
        phoneNumber: "+49 211 6789012"
      },
      address: {
        street: "Schadowstraße 20",
        city: "Düsseldorf",
        state: "North Rhine-Westphalia",
        postalCode: "40212"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.chernihivcuisine.de/photos/restaurant4.jpg", "https://www.chernihivcuisine.de/photos/dish4.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/chernihivcuisine",
        instagram: "http://www.instagram.com/chernihivcuisine"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Dnipro Delight",
      businessId: "03/456/78906",
      owner: "Tetiana Kravchenko",
      venueName: "Dnipro Hannover",
      contact: {
        email: "tetiana@dniprodelight.de",
        phoneNumber: "+49 511 1234567"
      },
      address: {
        street: "Lister Meile 120",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30161"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.dniprodelight.de/photos/restaurant5.jpg", "https://www.dniprodelight.de/photos/dish5.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/dniprodelight",
        instagram: "http://www.instagram.com/dniprodelight"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Ukrainian Garden",
      businessId: "03/456/78907",
      owner: "Oleh Hrytsenko",
      venueName: "Ukrainian Hannover",
      contact: {
        email: "oleh@ukrainiangarden.de",
        phoneNumber: "+49 511 6789012"
      },
      address: {
        street: "Königstraße 10",
        city: "Hannover",
        state: "Lower Saxony",
        postalCode: "30159"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.ukrainiangarden.de/photos/restaurant6.jpg", "https://www.ukrainiangarden.de/photos/dish6.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/ukrainiangarden",
        instagram: "http://www.instagram.com/ukrainiangarden"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Zaporizhia Table",
      businessId: "04/567/89019",
      owner: "Ihor Mykhailenko",
      venueName: "Zaporizhia Leipzig",
      contact: {
        email: "ihor@zaporizhiatable.de",
        phoneNumber: "+49 341 1234567"
      },
      address: {
        street: "Karl-Liebknecht-Straße 50",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04275"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.zaporizhiatable.de/photos/restaurant7.jpg", "https://www.zaporizhiatable.de/photos/dish7.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/zaporizhiatable",
        instagram: "http://www.instagram.com/zaporizhiatable"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  },
  {
    basicInfo: {
      businessName: "Carpathian Kitchen",
      businessId: "04/567/89020",
      owner: "Vasyl Popovych",
      venueName: "Carpathian Leipzig",
      contact: {
        email: "vasyl@carpathiankitchen.de",
        phoneNumber: "+49 341 6789012"
      },
      address: {
        street: "Petersstraße 30",
        city: "Leipzig",
        state: "Saxony",
        postalCode: "04109"
      }
    },
    openAndCloseHours: {
      monday: "11:00 AM - 10:00 PM",
      tuesday: "11:00 AM - 10:00 PM",
      wednesday: "11:00 AM - 10:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 11:00 PM",
      saturday: "11:00 AM - 11:00 PM",
      sunday: "11:00 AM - 9:00 PM"
    },
    cuisine: ["Ukrainian"],
    restaurantType: ["Traditional"],
    menu: [
      {
        category: "Appetizers",
        items: [
          { name: "Pampushky", description: "Garlic bread rolls", "price": 5.0 },
          { name: "Pickled Mushrooms", description: "Assorted pickled mushrooms", "price": 5.0 },
          { name: "Borscht", description: "Beetroot soup with sour cream", price: 6.5 },
          { name: "Salo", description: "Cured pork fat with garlic and spices", price: 6.0 },
          { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 4.5 },
          { name: "Buzhenina", description: "Roast pork with garlic and spices", price: 7.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 7.5 },
          { name: "Solonka", description: "Spicy vegetable stew with pork", price: 6.5 },
          { name: "Zucchini Pancakes", description: "Fried zucchini pancakes served with sour cream", price: 5.5 }
        ]
      },
      {
        category: "Main Courses",
        items: [
          { name: "Deruny", description: "Potato pancakes served with sour cream", price: 10.0 },
          { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 12.0 },
          { name: "Banush", description: "Cornmeal porridge with bacon and cheese", price: 12.0 },
          { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 14.0 },
          { name: "Varenyky", description: "Ukrainian dumplings filled with cherries", price: 11.0 },
          { name: "Kovbasa", description: "Homemade sausage with mashed potatoes", price: 13.5 }
        ]
      },
      {
        category: "Desserts",
        items: [
          { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 5.5 },
          { name: "Napoleon Cake", description: "Layered pastry with creamy filling", price: 6.0 },
          { name: "Medovik", description: "Traditional honey cake with layers of sour cream", price: 5.5 },
          { name: "Fruit Compote", description: "Stewed fruit served cold", price: 3.5 },
          { name: "Pampushky", description: "Sweet doughnuts filled with jam", price: 4.5 }
        ]
      },
      {
        category: "Drinks",
        items: [
          { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.5 },
          { name: "Kvass", description: "Fermented rye bread drink", price: 3.5 },
          { name: "Kompot", description: "Fruit drink made from stewed fruit", price: 3.0 },
          { name: "Mors", description: "Berry fruit drink", price: 3.0 },
          { name: "Vodka", description: "Traditional Ukrainian vodka", price: 4.5 },
          { name: "Kefir", description: "Fermented milk drink", price: 3.0 }
        ]
      }
    ],
    digitalPresence: {
      photos: ["https://www.carpathiankitchen.de/photos/restaurant8.jpg", "https://www.carpathiankitchen.de/photos/dish8.jpg"],
      socialMedia: {
        facebook: "http://www.facebook.com/carpathiankitchen",
        instagram: "http://www.instagram.com/carpathiankitchen"
      }
    },
    promotionalInfo: {
      currentOffers: [
        {
          category: "20 menu",
          items: [
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and cheese", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Borscht", description: "Beetroot soup with sour cream", price: 3.0 },
              mainCourse: { name: "Chicken Kyiv", description: "Breaded chicken cutlet filled with garlic butter", price: 11.0 },
              dessert: { name: "Medovik", description: "Honey cake with layers of sour cream", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Varenyky", description: "Ukrainian dumplings filled with potatoes and mushrooms", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            },
            {
              appetizer: { name: "Salo", description: "Cured pork fat with garlic and spices", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Syrnyky", description: "Cottage cheese pancakes with berry sauce", price: 3.0 },
              drink: { name: "Uzvar", description: "Traditional Ukrainian dried fruit compote", price: 3.0 }
            },
            {
              appetizer: { name: "Pickled Vegetables", description: "Assorted pickled vegetables", price: 3.0 },
              mainCourse: { name: "Holubtsi", description: "Stuffed cabbage rolls with rice and meat", price: 11.0 },
              dessert: { name: "Honey Cake", description: "Traditional honey cake with layers", price: 3.0 },
              drink: { name: "Kvass", description: "Fermented rye bread drink", price: 3.0 }
            }
          ]
        }
      ],
      loyaltyPrograms: "Earn 1 point for every €10 spent. Redeem 50 points for a €5 discount."
    }
  }      
];

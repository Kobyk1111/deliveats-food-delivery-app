/* const menuItems = [
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
        {
  "category": "20 menu",
  "items": [
    {
      "appetizer": { "name": "Kelewele", "description": "Spicy fried plantains", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice", "description": "Tomato-based rice dish with vegetables", "price": 11.0 },
      "dessert": { "name": "Choco Milo Cake", "description": "Chocolate cake made with Milo", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Puff Puff", "description": "Deep-fried dough balls", "price": 3.0 },
      "mainCourse": { "name": "Waakye", "description": "Rice and beans with plantains", "price": 11.0 },
      "dessert": { "name": "Bofrot", "description": "Sweet fried dough balls", "price": 3.0 },
      "drink": { "name": "Fresh Pineapple Juice", "description": "Juice made from fresh pineapples", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chibom", "description": "Bread with beans and spices", "price": 3.0 },
      "mainCourse": { "name": "Fufu with Light Soup", "description": "Cassava and plantain dough with spicy soup", "price": 11.0 },
      "dessert": { "name": "Kelewele Cake", "description": "Cake flavored with spicy plantains", "price": 3.0 },
      "drink": { "name": "Palm Wine", "description": "Traditional fermented palm drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Spring Rolls", "description": "Crispy rolls filled with vegetables", "price": 3.0 },
      "mainCourse": { "name": "Banku and Tilapia", "description": "Fermented corn dough with grilled fish", "price": 11.0 },
      "dessert": { "name": "Millets Porridge", "description": "Sweet millet porridge", "price": 3.0 },
      "drink": { "name": "Bissap", "description": "Hibiscus flower drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Jollof Balls", "description": "Fried rice balls with tomato sauce", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fish", "description": "Fermented corn dough with fried fish", "price": 11.0 },
      "dessert": { "name": "Coconut Cake", "description": "Cake made with fresh coconut", "price": 3.0 },
      "drink": { "name": "Tamarind Juice", "description": "Juice made from tamarind", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Akara", "description": "Deep-fried bean cakes", "price": 3.0 },
      "mainCourse": { "name": "Gari Fortor", "description": "Spicy gari dough with vegetables", "price": 11.0 },
      "dessert": { "name": "Sweet Plantain", "description": "Ripe plantains cooked with honey", "price": 3.0 },
      "drink": { "name": "Lemonade", "description": "Freshly squeezed lemonade", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fried Yam", "description": "Crispy fried yam slices", "price": 3.0 },
      "mainCourse": { "name": "Ghanaian Jollof Rice", "description": "Tomato-based rice with vegetables and spices", "price": 11.0 },
      "dessert": { "name": "Peanut Butter Cake", "description": "Cake made with peanut butter", "price": 3.0 },
      "drink": { "name": "Orange Juice", "description": "Freshly squeezed orange juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Plantain Chips", "description": "Crispy fried plantain slices", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice and Chicken", "description": "Tomato rice with grilled chicken", "price": 11.0 },
      "dessert": { "name": "Mango Pudding", "description": "Sweet pudding made with mangoes", "price": 3.0 },
      "drink": { "name": "Apple Juice", "description": "Freshly squeezed apple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Tomato Soup", "description": "Spicy tomato soup with herbs", "price": 3.0 },
      "mainCourse": { "name": "Gari and Beans", "description": "Gari served with spicy beans", "price": 11.0 },
      "dessert": { "name": "Banana Fritters", "description": "Deep-fried banana slices", "price": 3.0 },
      "drink": { "name": "Coconut Water", "description": "Fresh coconut water", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Corn Balls", "description": "Deep-fried corn dough balls", "price": 3.0 },
      "mainCourse": { "name": "Porridge with Sugar", "description": "Sweet corn porridge", "price": 11.0 },
      "dessert": { "name": "Caramel Flan", "description": "Sweet caramel custard", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chicken Kebabs", "description": "Grilled chicken skewers", "price": 3.0 },
      "mainCourse": { "name": "Fried Rice", "description": "Fried rice with vegetables and chicken", "price": 11.0 },
      "dessert": { "name": "Pineapple Upside-Down Cake", "description": "Cake with caramelized pineapples", "price": 3.0 },
      "drink": { "name": "Peach Juice", "description": "Juice made from peaches", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Egg Roll", "description": "Deep-fried egg rolls", "price": 3.0 },
      "mainCourse": { "name": "Beans Cake", "description": "Deep-fried bean cakes", "price": 11.0 },
      "dessert": { "name": "Puff Puff", "description": "Sweet fried dough balls", "price": 3.0 },
      "drink": { "name": "Mint Lemonade", "description": "Lemonade with mint", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Plantain Fritters", "description": "Fried plantain dough", "price": 3.0 },
      "mainCourse": { "name": "Beans Stew", "description": "Stew made with beans and spices", "price": 11.0 },
      "dessert": { "name": "Apple Pie", "description": "Pie filled with sweet apples", "price": 3.0 },
      "drink": { "name": "Fruit Punch", "description": "Mixed fruit juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Yam Porridge", "description": "Porridge made from yam", "price": 3.0 },
      "mainCourse": { "name": "Okra Soup with Banku", "description": "Spicy okra soup with fermented corn dough", "price": 11.0 },
      "dessert": { "name": "Cassava Cake", "description": "Cake made with cassava", "price": 3.0 },
      "drink": { "name": "Passion Fruit Juice", "description": "Juice made from passion fruit", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Vegetable Spring Rolls", "description": "Spring rolls filled with vegetables", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fried Fish", "description": "Fermented corn dough with fried fish", "price": 11.0 },
      "dessert": { "name": "Mango Sorbet", "description": "Frozen mango dessert", "price": 3.0 },
      "drink": { "name": "Tamarind Drink", "description": "Sweet tamarind beverage", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Meat Pies", "description": "Savory pies filled with minced meat", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Plantains", "description": "Tomato rice served with fried plantains", "price": 11.0 },
      "dessert": { "name": "Pineapple Cake", "description": "Cake made with pineapple chunks", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Moi Moi", "description": "Steamed bean pudding", "price": 3.0 },
      "mainCourse": { "name": "Fried Yam with Fish", "description": "Crispy fried yam served with fish", "price": 11.0 },
      "dessert": { "name": "Custard", "description": "Smooth, sweet custard dessert", "price": 3.0 },
      "drink": { "name": "Apple Juice", "description": "Freshly squeezed apple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Spicy Fish Cakes", "description": "Fish cakes with a spicy kick", "price": 3.0 },
      "mainCourse": { "name": "Banku and Okra Stew", "description": "Fermented corn dough with spicy okra stew", "price": 11.0 },
      "dessert": { "name": "Date Cake", "description": "Cake made with dates", "price": 3.0 },
      "drink": { "name": "Mint Juice", "description": "Juice with a hint of mint", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fish Roll", "description": "Pastry roll filled with spiced fish", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Chicken", "description": "Tomato rice served with chicken", "price": 11.0 },
      "dessert": { "name": "Coconut Ice Cream", "description": "Ice cream made with coconut milk", "price": 3.0 },
      "drink": { "name": "Orange Juice", "description": "Freshly squeezed orange juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Vegetable Kebabs", "description": "Grilled vegetable skewers", "price": 3.0 },
      "mainCourse": { "name": "Gari Fortor with Fish", "description": "Spicy gari dough with fried fish", "price": 11.0 },
      "dessert": { "name": "Strawberry Shortcake", "description": "Cake with fresh strawberries", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Akara", "description": "Deep-fried bean cakes", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fish Stew", "description": "Fermented corn dough with fish stew", "price": 11.0 },
      "dessert": { "name": "Mango Cake", "description": "Cake made with ripe mangoes", "price": 3.0 },
      "drink": { "name": "Pineapple Juice", "description": "Fresh pineapple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Plantain and Beans", "description": "Plantains and beans served together", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Beef", "description": "Tomato rice with tender beef", "price": 11.0 },
      "dessert": { "name": "Chia Pudding", "description": "Pudding made with chia seeds", "price": 3.0 },
      "drink": { "name": "Coconut Water", "description": "Fresh coconut water", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Spicy Meatballs", "description": "Meatballs with a spicy sauce", "price": 3.0 },
      "mainCourse": { "name": "Banku and Light Soup", "description": "Fermented corn dough with light soup", "price": 11.0 },
      "dessert": { "name": "Fruit Salad", "description": "Mixed fruit salad", "price": 3.0 },
      "drink": { "name": "Herbal Tea", "description": "Traditional herbal tea", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Pepper Soup", "description": "Spicy soup with peppers", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Goat Meat", "description": "Tomato rice with goat meat", "price": 11.0 },
      "dessert": { "name": "Banana Cake", "description": "Cake made with ripe bananas", "price": 3.0 },
      "drink": { "name": "Mango Juice", "description": "Freshly squeezed mango juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fried Plantains", "description": "Sweet fried plantains", "price": 3.0 },
      "mainCourse": { "name": "Gari and Beans with Stew", "description": "Gari served with beans and stew", "price": 11.0 },
      "dessert": { "name": "Peanut Butter Cookies", "description": "Cookies made with peanut butter", "price": 3.0 },
      "drink": { "name": "Tamarind Juice", "description": "Sweet tamarind juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chin Chin", "description": "Crunchy fried dough", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Shrimp", "description": "Tomato rice with shrimp", "price": 11.0 },
      "dessert": { "name": "Apple Crumble", "description": "Baked apple dessert with a crumb topping", "price": 3.0 },
      "drink": { "name": "Fruit Punch", "description": "Mixed fruit juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Gari Fortor Balls", "description": "Spicy gari dough balls", "price": 3.0 },
      "mainCourse": { "name": "Fufu and Light Soup", "description": "Cassava and plantain dough with light soup", "price": 11.0 },
      "dessert": { "name": "Coconut Pudding", "description": "Sweet coconut pudding", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Beef Kebabs", "description": "Grilled beef skewers", "price": 3.0 },
      "mainCourse": { "name": "Waakye with Fish", "description": "Rice and beans served with fish", "price": 11.0 },
      "dessert": { "name": "Choco Banana Bread", "description": "Bread made with chocolate and bananas", "price": 3.0 },
      "drink": { "name": "Orange Juice", "description": "Freshly squeezed orange juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Pepper Kelewele", "description": "Spicy plantains", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Meat Stew", "description": "Fermented corn dough with meat stew", "price": 11.0 },
      "dessert": { "name": "Caramel Flan", "description": "Sweet caramel custard", "price": 3.0 },
      "drink": { "name": "Pineapple Juice", "description": "Freshly squeezed pineapple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Sweet Potato Fries", "description": "Crispy sweet potato fries", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice and Vegetables", "description": "Tomato rice with mixed vegetables", "price": 11.0 },
      "dessert": { "name": "Peach Cobbler", "description": "Sweet peach dessert", "price": 3.0 },
      "drink": { "name": "Apple Juice", "description": "Freshly squeezed apple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Gari Fortor", "description": "Spicy gari dough with vegetables", "price": 3.0 },
      "mainCourse": { "name": "Fufu and Palm Nut Soup", "description": "Cassava dough with palm nut soup", "price": 11.0 },
      "dessert": { "name": "Strawberry Shortcake", "description": "Cake with fresh strawberries", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Corn on the Cob", "description": "Grilled corn with spices", "price": 3.0 },
      "mainCourse": { "name": "Banku and Okra Soup", "description": "Fermented corn dough with spicy okra soup", "price": 11.0 },
      "dessert": { "name": "Bofrot", "description": "Sweet fried dough balls", "price": 3.0 },
      "drink": { "name": "Mint Lemonade", "description": "Lemonade with a hint of mint", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Peppered Meatballs", "description": "Spicy meatballs", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Chicken", "description": "Tomato rice with grilled chicken", "price": 11.0 },
      "dessert": { "name": "Apple Crumble", "description": "Baked apple dessert with a crumb topping", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Spring Rolls", "description": "Crispy vegetable rolls", "price": 3.0 },
      "mainCourse": { "name": "Waakye with Fish", "description": "Rice and beans served with fried fish", "price": 11.0 },
      "dessert": { "name": "Mango Pudding", "description": "Sweet mango pudding", "price": 3.0 },
      "drink": { "name": "Pineapple Juice", "description": "Fresh pineapple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Plantain Chips", "description": "Crispy plantain slices", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fried Fish", "description": "Fermented corn dough with fried fish", "price": 11.0 },
      "dessert": { "name": "Coconut Cake", "description": "Cake made with coconut", "price": 3.0 },
      "drink": { "name": "Fresh Lime Juice", "description": "Juice made from fresh limes", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chin Chin", "description": "Crunchy fried dough", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Beef", "description": "Tomato rice with tender beef", "price": 11.0 },
      "dessert": { "name": "Date Cake", "description": "Cake made with dates", "price": 3.0 },
      "drink": { "name": "Apple Juice", "description": "Freshly squeezed apple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Corn Fritters", "description": "Deep-fried corn dough", "price": 3.0 },
      "mainCourse": { "name": "Fufu with Light Soup", "description": "Cassava and plantain dough with light soup", "price": 11.0 },
      "dessert": { "name": "Bofrot", "description": "Sweet fried dough balls", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fish Cake", "description": "Crispy fish cakes", "price": 3.0 },
      "mainCourse": { "name": "Gari Fortor with Chicken", "description": "Spicy gari dough with chicken", "price": 11.0 },
      "dessert": { "name": "Coconut Pudding", "description": "Sweet coconut pudding", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Puff Puff", "description": "Sweet fried dough balls", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fish", "description": "Fermented corn dough with fried fish", "price": 11.0 },
      "dessert": { "name": "Peanut Butter Cake", "description": "Cake made with peanut butter", "price": 3.0 },
      "drink": { "name": "Orange Juice", "description": "Freshly squeezed orange juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fried Plantains", "description": "Sweet fried plantains", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Shrimp", "description": "Tomato rice with shrimp", "price": 11.0 },
      "dessert": { "name": "Caramel Flan", "description": "Sweet caramel custard", "price": 3.0 },
      "drink": { "name": "Coconut Water", "description": "Fresh coconut water", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Vegetable Kebabs", "description": "Grilled vegetable skewers", "price": 3.0 },
      "mainCourse": { "name": "Waakye with Fish", "description": "Rice and beans served with fried fish", "price": 11.0 },
      "dessert": { "name": "Mango Sorbet", "description": "Frozen mango dessert", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Plantain Chips", "description": "Crispy plantain slices", "price": 3.0 },
      "mainCourse": { "name": "Banku with Okra Soup", "description": "Fermented corn dough with spicy okra soup", "price": 11.0 },
      "dessert": { "name": "Choco Banana Bread", "description": "Bread made with chocolate and bananas", "price": 3.0 },
      "drink": { "name": "Mint Lemonade", "description": "Lemonade with a hint of mint", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chin Chin", "description": "Crunchy fried dough", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Beef", "description": "Tomato rice with tender beef", "price": 11.0 },
      "dessert": { "name": "Coconut Cake", "description": "Cake made with coconut", "price": 3.0 },
      "drink": { "name": "Fresh Lime Juice", "description": "Juice made from fresh limes", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Sweet Potato Fries", "description": "Crispy sweet potato fries", "price": 3.0 },
      "mainCourse": { "name": "Fufu and Light Soup", "description": "Cassava dough with light soup", "price": 11.0 },
      "dessert": { "name": "Peach Cobbler", "description": "Sweet peach dessert", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Akara", "description": "Deep-fried bean cakes", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Chicken", "description": "Tomato rice with chicken", "price": 11.0 },
      "dessert": { "name": "Date Cake", "description": "Cake made with dates", "price": 3.0 },
      "drink": { "name": "Pineapple Juice", "description": "Fresh pineapple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Gari Fortor Balls", "description": "Spicy gari dough balls", "price": 3.0 },
      "mainCourse": { "name": "Waakye with Fish", "description": "Rice and beans served with fish", "price": 11.0 },
      "dessert": { "name": "Apple Crumble", "description": "Baked apple dessert with a crumb topping", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Fish Roll", "description": "Pastry roll filled with spiced fish", "price": 3.0 },
      "mainCourse": { "name": "Kenkey with Fish Stew", "description": "Fermented corn dough with fish stew", "price": 11.0 },
      "dessert": { "name": "Chia Pudding", "description": "Pudding made with chia seeds", "price": 3.0 },
      "drink": { "name": "Mint Juice", "description": "Juice with a hint of mint", "price": 3.0 }
    }
  ],
  "popularMeals": [
    {
      "appetizer": { "name": "Fried Plantains", "description": "Sweet fried plantains", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Chicken", "description": "Tomato rice with chicken", "price": 11.0 },
      "dessert": { "name": "Date Cake", "description": "Cake made with dates", "price": 3.0 },
      "drink": { "name": "Pineapple Juice", "description": "Fresh pineapple juice", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Kenkey with Fish Stew", "description": "Fermented corn dough with fish stew", "price": 3.0 },
      "mainCourse": { "name": "Jollof Rice with Shrimp", "description": "Tomato rice with shrimp", "price": 11.0 },
      "dessert": { "name": "Mango Sorbet", "description": "Frozen mango dessert", "price": 3.0 },
      "drink": { "name": "Guava Juice", "description": "Juice made from guavas", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Gari Fortor", "description": "Spicy gari dough with vegetables", "price": 3.0 },
      "mainCourse": { "name": "Fufu and Palm Nut Soup", "description": "Cassava dough with palm nut soup", "price": 11.0 },
      "dessert": { "name": "Coconut Pudding", "description": "Sweet coconut pudding", "price": 3.0 },
      "drink": { "name": "Ginger Beer", "description": "Spicy, refreshing ginger drink", "price": 3.0 }
    },
    {
      "appetizer": { "name": "Chin Chin", "description": "Crunchy fried dough", "price": 3.0 },
      "mainCourse": { "name": "Banku with Okra Soup", "description": "Fermented corn dough with spicy okra soup", "price": 11.0 },
      "dessert": { "name": "Peach Cobbler", "description": "Sweet peach dessert", "price": 3.0 },
      "drink": { "name": "Mint Lemonade", "description": "Lemonade with a hint of mint", "price": 3.0 }
    }
  ]
}
*/
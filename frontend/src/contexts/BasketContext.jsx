import  { createContext, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addItemToBasket = (item) => {
    setBasket((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseItemQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItemQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <BasketContext.Provider
      value={{
        basket,
        addItemToBasket,
        removeItemFromBasket,
        increaseItemQuantity,
        decreaseItemQuantity,
        totalSum,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

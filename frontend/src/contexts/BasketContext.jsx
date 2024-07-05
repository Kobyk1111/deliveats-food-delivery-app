import { createContext, useState, useMemo } from "react";

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addItemToBasket = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find(
        (basketItem) => basketItem.id === item.id
      );
      if (existingItem) {
        return prevBasket.map((basketItem) =>
          basketItem.id === item.id
            ? { ...basketItem, quantity: basketItem.quantity + 1 }
            : basketItem
        );
      }
      return [...prevBasket, { ...item, quantity: 1 }];
    });
  };

  const removeItemFromBasket = (itemId) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find((item) => item.id === itemId);
      if (existingItem.quantity > 1) {
        return prevBasket.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevBasket.filter((item) => item.id !== itemId);
    });
  };

  const totalSum = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{ basket, addItemToBasket, removeItemFromBasket, totalSum }}
    >
      {children}
    </BasketContext.Provider>
  );
}

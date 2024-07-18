/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useMemo } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [deliveryOption, setDeliveryOption] = useState("delivery");

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    const savedDeliveryOption = localStorage.getItem("deliveryOption");

    if (savedBasket) {
      const parsedBasket = JSON.parse(savedBasket);
      setBasket(parsedBasket);
      localStorage.removeItem("basket");
      // const newTotalSum = parsedBasket.reduce(
      //   (sum, item) => sum + item.price * item.quantity,
      //   0
      // );
      // setTotalSumSave(newTotalSum);
    }

    if (savedDeliveryOption) {
      setDeliveryOption(savedDeliveryOption);
      localStorage.removeItem("deliveryOption");
    }
  }, []);

  function completePurchase() {
    setPurchasedItems([...basket]);
    setBasket([]);
  }

  // const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const totalSum = useMemo(() => {
    return basket.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [basket]);

  const totalSumPurchasedItems = useMemo(() => {
    return purchasedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [purchasedItems]);

  // to atualize the number of items in the basketICON
  const totalItemCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  const addItemToBasket = (item) => {
    setBasket((prev) => {
      const existingItem = prev.find((i) => i._id === item._id);
      if (existingItem) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item._id !== id));
  };

  const increaseItemQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseItemQuantity = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        deliveryOption,
        setDeliveryOption,
        addItemToBasket,
        removeItemFromBasket,
        increaseItemQuantity,
        decreaseItemQuantity,
        totalSum,
        completePurchase,
        purchasedItems,
        totalSumPurchasedItems,
        totalItemCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;

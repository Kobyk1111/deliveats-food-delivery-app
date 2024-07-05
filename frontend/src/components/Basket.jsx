import { useContext } from "react";
import { BasketContext } from "../contexts/BasketContext";

function Basket() {
  const { basket, removeItemFromBasket, totalSum } = useContext(BasketContext);

  return (
    <div className="basket">
      <h2>Basket</h2>
      {basket.length === 0 ? (
        <p>No items in the basket</p>
      ) : (
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span> ${item.price}</span>
              <span> (x{item.quantity})</span>
              <span>{item.price * item.quantity}</span>

              <button onClick={() => removeItemFromBasket(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalSum.toFixed(2)}</h3>
    </div>
  );
}

export default Basket;

// import { useContext } from "react";
// import { BasketContext } from "../contexts/BasketContext";

// function Basket() {
//   const { basket, removeItemFromBasket, totalSum } = useContext(BasketContext);

//   return (
//     <div className="basket">
//       <h2>Basket</h2>
//       {basket.length === 0 ? (
//         <p>No items in the basket</p>
//       ) : (
//         <ul>
//           {basket.map((item) => (
//             <li key={item.id}>
//               <span>{item.name}</span>
//               <span> ${item.price}</span>
//               <span> (x{item.quantity})</span>
//               <span>{item.price * item.quantity}</span>

//               <button onClick={() => removeItemFromBasket(item.id)}>
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//       <h3>Total: ${totalSum.toFixed(2)}</h3>
//     </div>
//   );
// }

// export default Basket;

import { useContext, useState } from "react";
import { BasketContext } from "../contexts/BasketContext";
// import "./Basket.css"; // Make sure you import the CSS file

function Basket() {
  const {
    basket,
    removeItemFromBasket,
    increaseItemQuantity,
    decreaseItemQuantity,
    totalSum,
  } = useContext(BasketContext);

  return (
    <div className="basket-container">
      <div className="basket">
        <h2>Basket</h2>
        {basket.length === 0 ? (
          <p>No items in the basket</p>
        ) : (
          <ul>
            {basket.map((item) => (
              <li key={item.id} className="basket-item">
                <div className="item-details">
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="item-controls">
                  <div className="item-quantity">
                    <button onClick={() => decreaseItemQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseItemQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <span className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    className="remove-button"
                    onClick={() => removeItemFromBasket(item.id)}
                  >
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ${totalSum.toFixed(2)}</h3>
        <button className="checkout-button">
          Checkout (${totalSum.toFixed(2)})
        </button>
      </div>
    </div>
  );
}

export default Basket;

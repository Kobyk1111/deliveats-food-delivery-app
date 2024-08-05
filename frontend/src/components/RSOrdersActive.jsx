// import { useContext } from "react";
// import "../style/RSOrdersActive.css";
// import { DataContext } from "../contexts/DataContext";

// const orders = [
//   {
//     id: "#1",
//     date: new Date().toLocaleString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       hour12: true,
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     }),
//     customerName: "John Doe",
//     address: "123 Elm Street, Springfield",
//     items: ["2x Pizza Margherita", "2x Coke"],
//     paymentStatus: "Confirmed",
//     deliveryOption: "Delivery",

//     stages: {
//       received: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       preparing: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       ready: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       delivery: {
//         onTheWay: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         atDoor: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       pickup: {
//         readyForPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         canPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       completed: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//     },
//   },
//   {
//     id: "#2",
//     date: new Date().toLocaleString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       hour12: true,
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     }),
//     customerName: "Maria Love",
//     address: "123 Elm Street, Springfield",
//     items: ["2x Pizza Calabresa", "2x Fanta"],
//     paymentStatus: "Confirmed",
//     deliveryOption: "PickUp",

//     stages: {
//       received: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       preparing: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       ready: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       delivery: {
//         onTheWay: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         atDoor: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       pickup: {
//         readyForPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         canPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       completed: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//     },
//   },
//   {
//     id: "#3",
//     date: new Date().toLocaleString("en-US", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//       hour12: true,
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     }),
//     customerName: "David Smith",
//     address: "456 Oak Street, Springfield",
//     items: ["1x Veggie Pizza", "1x Sprite"],
//     paymentStatus: "Pending",
//     deliveryOption: "Delivery",

//     stages: {
//       received: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       preparing: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       ready: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//       delivery: {
//         onTheWay: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         atDoor: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       pickup: {
//         readyForPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//         canPickup: {
//           status: false,
//           time: new Date().toLocaleString("en-US", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           }),
//         },
//       },
//       completed: {
//         status: false,
//         time: new Date().toLocaleString("en-US", {
//           hour: "numeric",
//           minute: "numeric",
//           second: "numeric",
//           hour12: true,
//         }),
//       },
//     },
//   },
// ];
// import { useContext, useEffect, useState } from "react";
// import "../style/RSOrdersActive.css";
// import { DataContext } from "../contexts/DataContext";
// import io from "socket.io-client";

// const socket = io.connect("http://localhost:5002");

// function RSOrdersActive() {
//   const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
//   const [orderStatuses, setOrderStatuses] = useState({});

//   useEffect(() => {
//     if (loggedInRestaurant?._id) {
//       socket.emit("joinRestaurantRoom", loggedInRestaurant._id); // Join the restaurant room

//       socket.on("newOrder", (updatedRestaurant) => {
//         setLoggedInRestaurant(updatedRestaurant); // Update the context with the new order
//       });

//       return () => {
//         socket.off("newOrder");
//       };
//     }
//   }, [loggedInRestaurant._id]);

//   const handleStatusUpdate = async (orderId, status) => {
//     try {
//       const response = await fetch("http://localhost:5002/restaurants/update-order-status", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ orderId, status }),
//       });

//       if (response.ok) {
//         setOrderStatuses((prev) => ({
//           ...prev,
//           [orderId]: status,
//         }));
//         socket.emit("joinOrderRoom", orderId); // Join the order room
//       } else {
//         console.error("Failed to update order status");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <div className="rs-orders-active-container">
//         {loggedInRestaurant.orderHistory.map((eachOrder) => {
//           const date = new Date(eachOrder.date); // Convert to Date object

//           return (
//             <div className="cards" key={eachOrder._id}>
//               <p>
//                 <strong>Order ID:</strong> {eachOrder.order._id}
//               </p>
//               <p>
//                 <strong>Date:</strong>{" "}
//                 {date.toLocaleString("en-US", {
//                   hour: "numeric",
//                   minute: "numeric",
//                   second: "numeric",
//                   hour12: true,
//                   month: "long",
//                   day: "numeric",
//                   year: "numeric",
//                 })}
//               </p>
//               <p>
//                 <strong>Customer:</strong> {eachOrder.customerName}
//               </p>
//               <p>
//                 <strong>Address:</strong> {eachOrder.customerAddress}
//               </p>
//               <p>
//                 <strong>Items:</strong> {eachOrder.order.items?.map((item) => item.itemName).join(", ")}
//               </p>
//               <p>
//                 <strong>Payment:</strong> Confirmed
//               </p>
//               <p>
//                 <strong>Delivery Option:</strong> {eachOrder.order.additionalInfo?.orderType}
//               </p>

//               <div className="progress">
//                 <p>
//                   <strong>Progress Tracker:</strong>
//                 </p>
//                 <ul>
//                   <li>
//                     <input
//                       type="checkbox"
//                       checked={orderStatuses[eachOrder.order._id] === "Order Received by Restaurant"}
//                       onChange={() => handleStatusUpdate(eachOrder.order._id, "Order Received by Restaurant")}
//                     />
//                     Order Received by Restaurant
//                   </li>
//                   <li>
//                     <input
//                       type="checkbox"
//                       checked={orderStatuses[eachOrder.order._id] === "Order sent to the kitchen"}
//                       onChange={() => handleStatusUpdate(eachOrder.order._id, "Order sent to the kitchen")}
//                     />
//                     Order sent to the kitchen
//                   </li>
//                   <li>
//                     <input
//                       type="checkbox"
//                       checked={orderStatuses[eachOrder.order._id] === "Food is Ready to Go"}
//                       onChange={() => handleStatusUpdate(eachOrder.order._id, "Food is Ready to Go")}
//                     />
//                     Food is Ready to Go
//                   </li>
//                   {eachOrder.order.additionalInfo?.orderType === "delivery" && (
//                     <>
//                       <li>
//                         <input
//                           type="checkbox"
//                           checked={orderStatuses[eachOrder.order._id] === "Order is on its way"}
//                           onChange={() => handleStatusUpdate(eachOrder.order._id, "Order is on its way")}
//                         />
//                         Order is on its way
//                       </li>
//                       <li>
//                         <input
//                           type="checkbox"
//                           checked={orderStatuses[eachOrder.order._id] === "Order is at customer door"}
//                           onChange={() => handleStatusUpdate(eachOrder.order._id, "Order is at customer door")}
//                         />
//                         Order is at customer door
//                       </li>
//                     </>
//                   )}
//                   {eachOrder.order.additionalInfo?.orderType === "pickUp" && (
//                     <>
//                       <li>
//                         <input
//                           type="checkbox"
//                           checked={orderStatuses[eachOrder.order._id] === "Order is ready for pickup"}
//                           onChange={() => handleStatusUpdate(eachOrder.order._id, "Order is ready for pickup")}
//                         />
//                         Order is ready for pickup
//                       </li>
//                       <li>
//                         <input
//                           type="checkbox"
//                           checked={
//                             orderStatuses[eachOrder.order._id] ===
//                             "Customer will come to the counter to pick up the order"
//                           }
//                           onChange={() =>
//                             handleStatusUpdate(
//                               eachOrder.order._id,
//                               "Customer will come to the counter to pick up the order"
//                             )
//                           }
//                         />
//                         Customer will come to the counter to pick up the order
//                       </li>
//                     </>
//                   )}
//                   <li>
//                     <input
//                       type="checkbox"
//                       checked={orderStatuses[eachOrder.order._id] === "Delivery Completed"}
//                       onChange={() => handleStatusUpdate(eachOrder.order._id, "Delivery Completed")}
//                     />
//                     Delivery Completed
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default RSOrdersActive;

import { useContext, useEffect, useState } from "react";
import "../style/RSOrdersActive.css";
import { DataContext } from "../contexts/DataContext";
import io from "socket.io-client";

// const socket = io.connect("http://localhost:5002");

const socket = io.connect("http://localhost:5002", {
  transports: ["websocket"],
  upgrade: false,
});

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("connect_error", (err) => {
  console.error("Connection error:", err);
});

function RSOrdersActive() {
  const { loggedInRestaurant, setLoggedInRestaurant } = useContext(DataContext);
  const [orderStatuses, setOrderStatuses] = useState({});

  useEffect(() => {
    if (loggedInRestaurant?._id) {
      socket.emit("joinRestaurantRoom", loggedInRestaurant._id); // Join the restaurant room
      console.log(`Joined restaurant room: ${loggedInRestaurant._id}`);

      socket.on("newOrder", (updatedRestaurant) => {
        setLoggedInRestaurant(updatedRestaurant); // Update the context with the new order
        console.log("Received newOrder update:", updatedRestaurant);
      });

      return () => {
        socket.off("newOrder");
      };
    }
  }, [loggedInRestaurant._id, setLoggedInRestaurant]);

  const handleStatusUpdate = async (orderId, status) => {
    try {
      const response = await fetch("http://localhost:5002/restaurants/update-order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderId, status }),
      });

      if (response.ok) {
        setOrderStatuses((prev) => ({
          ...prev,
          [orderId]: status,
        }));
        socket.emit("joinOrderRoom", orderId); // Join the order room
        console.log(`Updated status for orderId: ${orderId} to status: ${status}`);
      } else {
        console.error("Failed to update order status");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  console.log(loggedInRestaurant);

  return (
    <div className="rs-orders-active-container">
      {loggedInRestaurant.orderHistory.map((eachOrder) => {
        const date = new Date(eachOrder.date); // Convert to Date object

        return (
          <div className="cards" key={eachOrder._id}>
            <p>
              <strong>Order ID:</strong> {eachOrder.order._id}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Customer:</strong> {eachOrder.customerName}
            </p>
            <p>
              <strong>Address:</strong> {eachOrder.customerAddress}
            </p>
            <p>
              <strong>Items:</strong> {eachOrder.order.items?.map((item) => item.itemName).join(", ")}
            </p>
            <p>
              <strong>Payment:</strong> Confirmed
            </p>
            <p>
              <strong>Delivery Option:</strong> {eachOrder.order.additionalInfo?.orderType}
            </p>

            <div className="progress">
              <p>
                <strong>Progress Tracker:</strong>
              </p>
              <ul>
                <li>
                  <button
                    className={
                      orderStatuses[eachOrder.order._id] === "Order received by the restaurant. ✅" ? "active" : ""
                    }
                    onClick={() => handleStatusUpdate(eachOrder.order._id, "Order received by the restaurant. ✅")}
                  >
                    Order received by the restaurant. ✅
                  </button>
                </li>
                <li>
                  <button
                    className={orderStatuses[eachOrder.order._id] === "Food is being prepared. 🧑‍🍳" ? "active" : ""}
                    onClick={() => handleStatusUpdate(eachOrder.order._id, "Food is being prepared. 🧑‍🍳")}
                  >
                    Food is being prepared. 🧑‍🍳
                  </button>
                </li>
                <li>
                  <button
                    className={orderStatuses[eachOrder.order._id] === "Food is ready to go! 🍽" ? "active" : ""}
                    onClick={() => handleStatusUpdate(eachOrder.order._id, "Food is ready to go! 🍽")}
                  >
                    Food is ready to go! 🍽
                  </button>
                </li>
                {eachOrder.order.additionalInfo?.orderType === "delivery" && (
                  <>
                    <li>
                      <button
                        className={
                          orderStatuses[eachOrder.order._id] === "Your order is on its way. 🚗" ? "active" : ""
                        }
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Your order is on its way. 🚗")}
                      >
                        Your order is on its way. 🚗
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          orderStatuses[eachOrder.order._id] === "Knock, knock! Your order is at the door. 🛎"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          handleStatusUpdate(eachOrder.order._id, "Knock, knock! Your order is at the door. 🛎")
                        }
                      >
                        Knock, knock! Your order is at the door. 🛎
                      </button>
                    </li>
                  </>
                )}
                {eachOrder.order.additionalInfo?.orderType === "pickup" && (
                  <>
                    <li>
                      <button
                        className={
                          orderStatuses[eachOrder.order._id] === "Your order is ready for pickup! 🛍️" ? "active" : ""
                        }
                        onClick={() => handleStatusUpdate(eachOrder.order._id, "Your order is ready for pickup! 🛍️")}
                      >
                        Your order is ready for pickup! 🛍️
                      </button>
                    </li>
                    <li>
                      <button
                        className={
                          orderStatuses[eachOrder.order._id] === "You can now pick up your order at the counter 🏃"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          handleStatusUpdate(eachOrder.order._id, "You can now pick up your order at the counter 🏃")
                        }
                      >
                        You can now pick up your order at the counter 🏃
                      </button>
                    </li>
                  </>
                )}
                <li>
                  <button
                    className={orderStatuses[eachOrder.order._id] === "Delivery Completed" ? "active" : ""}
                    onClick={() => handleStatusUpdate(eachOrder.order._id, "Delivery Completed")}
                  >
                    Delivery Completed
                  </button>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RSOrdersActive;

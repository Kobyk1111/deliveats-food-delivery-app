import React from "react";
import "../style/RSOrdersActive.css";

const orders = [
  {
    id: "#1",
    date: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    customerName: "John Doe",
    address: "123 Elm Street, Springfield",
    items: ["2x Pizza Margherita", "2x Coke"],
    paymentStatus: "Confirmed",
    deliveryOption: "Delivery",

    stages: {
      received: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      preparing: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      ready: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      delivery: {
        onTheWay: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        atDoor: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      pickup: {
        readyForPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        canPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      completed: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
    },
  },
  {
    id: "#2",
    date: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    customerName: "Maria Love",
    address: "123 Elm Street, Springfield",
    items: ["2x Pizza Calabresa", "2x Fanta"],
    paymentStatus: "Confirmed",
    deliveryOption: "PickUp",

    stages: {
      received: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      preparing: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      ready: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      delivery: {
        onTheWay: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        atDoor: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      pickup: {
        readyForPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        canPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      completed: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
    },
  },
  {
    id: "#3",
    date: new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    customerName: "David Smith",
    address: "456 Oak Street, Springfield",
    items: ["1x Veggie Pizza", "1x Sprite"],
    paymentStatus: "Pending",
    deliveryOption: "Delivery",

    stages: {
      received: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      preparing: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      ready: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
      delivery: {
        onTheWay: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        atDoor: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      pickup: {
        readyForPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
        canPickup: {
          status: false,
          time: new Date().toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        },
      },
      completed: {
        status: false,
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        }),
      },
    },
  },
];

function RSOrdersActive() {
  return (
    <>
      <div className="rs-orders-active-container">
        {orders.map((order) => (
          <div className="cards" key={order.id}>
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Date:</strong> {order.date}
            </p>
            <p>
              <strong>Customer:</strong> {order.customerName}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Items:</strong> {order.items.join(", ")}
            </p>
            <p>
              <strong>Payment:</strong> {order.paymentStatus}
            </p>
            <p>
              <strong>Delivery Option:</strong> {order.deliveryOption}
            </p>

            <div className="progress">
              <p>
                <strong>Progress Tracker:</strong>
              </p>
              <ul>
                <li>Order Received by Restaurant</li>
                <li>Order sent to the kitchen</li>
                <li>Food is Ready to Go</li>
                {order.deliveryOption === "Delivery" && (
                  <>
                    <li>Order is on its way</li>
                    <li>Order is at customer door</li>
                  </>
                )}
                {order.deliveryOption === "PickUp" && (
                  <>
                    <li>Order is ready for pickup</li>
                    <li>
                      Customer will come to the counter to pick up the order
                    </li>
                  </>
                )}
                <li>Delivery Completed</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default RSOrdersActive;

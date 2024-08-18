/* eslint-disable react/no-unescaped-entities */
import "../style/Section.css";

function Section() {
  return (
    <>
      <section className="user-section">
        <h3 className="love">Why Choose DelivEats Delivery?</h3>
        <div className="images">
          <div className="image-block">
            <img
              src="https://images.deliveryhero.io/image/fd-no/LH/li0l-listing.jpg"
              alt="Fast Delivery"
              className="food-image"
            />
            <p className="image-description">
              At DelivEats, we prioritize speed without compromising quality. Our rapid delivery service ensures your
              food arrives hot and fresh, no matter where you are in the city.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://pics.craiyon.com/2023-10-28/a8ea30daa44748ff9ab2391675b5eb9d.webp"
              alt="Quality Food"
              className="food-image"
            />
            <p className="image-description">
              Our wide selection of partner restaurants guarantees that you'll always find exactly what you're craving.
              From gourmet meals to comfort food, we've got it all, delivered right to your door.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://storage.needpix.com/rsynced_images/food-3245765_1280.jpg"
              alt="Special Offers"
              className="food-image"
            />
            <p className="image-description">
              Don't miss out on our exclusive deals and discounts. DelivEats offers special promotions daily, making it
              easier than ever to enjoy your favorite meals at unbeatable prices.
            </p>
          </div>
        </div>

        <div className="img-text">
          <p className="text1">
            DelivEats is committed to delivering exceptional service, ensuring that every order is handled with care.
            From lightning-fast delivery to mouth-watering meals, we bring convenience and flavor to your doorstep. Join
            thousands of satisfied customers and experience the DelivEats difference today!
          </p>
          <img
            src="https://images.unsplash.com/photo-1700625915031-d2c7d472ea7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Customer Satisfaction"
            className="footer-image"
          />
        </div>
      </section>
    </>
  );
}

export default Section;

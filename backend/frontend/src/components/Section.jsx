import "../style/Section.css";

function Section() {
  return (
    <>
      <section className="user-section">
        <h3 className="love">DelivEats Delivery</h3>
        <div className="images">
          <div className="image-block">
            <img
              src="https://images.deliveryhero.io/image/fd-no/LH/li0l-listing.jpg"
              alt="Fast Delivery"
              className="food-image"
            />
            <p className="image-description">
              At DelivEats, we prioritize speed without compromising quality. Our rapid delivery service ensures your food arrives hot and fresh, no matter where you are in the city.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://pics.craiyon.com/2023-10-28/a8ea30daa44748ff9ab2391675b5eb9d.webp"
              alt="Quality Food"
              className="food-image"
            />
            <p className="image-description">
              Our wide selection of partner restaurants guarantees that you'll always find exactly what you're craving. From gourmet meals to comfort food, we've got it all, delivered right to your door.
            </p>
          </div>
          <div className="image-block">
            <img
              src="https://as1.ftcdn.net/v2/jpg/00/92/28/08/1000_F_92280824_MCDYLmFXd3XUDohvnLhkQNw2KVeTNgTa.jpg"
              alt="Special Offers"
              className="food-image"
            />
            <p className="image-description">
              Don't miss out on our exclusive deals and discounts. DelivEats offers special promotions daily, making it easier than ever to enjoy your favorite meals at unbeatable prices.
            </p>
          </div>
        </div>

        <div className="img-text">
          <p className="text1">
            DelivEats is committed to delivering exceptional service, ensuring that every order is handled with care. From lightning-fast delivery to mouth-watering meals, we bring convenience and flavor to your doorstep. Join thousands of satisfied customers and experience the DelivEats difference today!
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt="Customer Satisfaction"
            className="footer-image"
          />
        </div>
      </section>
    </>
  );
}

export default Section;

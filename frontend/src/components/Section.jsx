import "../style/Section.css";

function Section() {
  return (
    <>
      <section className="user-section">
        <h3 className="love">DelivEats Delivery</h3>
        <div className="images">
          <img src="https://images.deliveryhero.io/image/fd-no/LH/li0l-listing.jpg" alt="" width={300} />
          <img src="https://pics.craiyon.com/2023-10-28/a8ea30daa44748ff9ab2391675b5eb9d.webp" alt="" width={300} />
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/92/28/08/1000_F_92280824_MCDYLmFXd3XUDohvnLhkQNw2KVeTNgTa.jpg"
            alt=""
            width={300}
          />
        </div>

        <div className="img-text">
          <p className="text1">
            DelivEats is your go-to app for fast, reliable food delivery from your favorite restaurants. Savor the
            flavors of the city from the comfort of your home!
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt=""
            width={300}
          />
        </div>
      </section>
    </>
  );
}

export default Section;

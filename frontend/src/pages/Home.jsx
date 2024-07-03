import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";

function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />

      <section>
        <h3 className="love">why we love</h3>
        <div className="images">
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/92/28/08/1000_F_92280824_MCDYLmFXd3XUDohvnLhkQNw2KVeTNgTa.jpg"
            alt=""
            width={200}
          />
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/92/28/08/1000_F_92280824_MCDYLmFXd3XUDohvnLhkQNw2KVeTNgTa.jpg"
            alt=""
            width={200}
          />
          <img
            src="https://as1.ftcdn.net/v2/jpg/00/92/28/08/1000_F_92280824_MCDYLmFXd3XUDohvnLhkQNw2KVeTNgTa.jpg"
            alt=""
            width={200}
          />
        </div>

        <div className="img-text">
          <p className="text1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cumque, laboriosam officia quas quae rem
            corporis, dignissimos, expedita quasi est eaque ea amet nulla! Officia corporis quo nemo facilis cupiditate?
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt=""
            width={300}
          />
        </div>
      </section>
      <footer>
        <p>copyright@2024</p>
      </footer>
    </>
  );
}

export default Home;

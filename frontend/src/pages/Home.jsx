import React from "react";
import test from "../assets/test.png";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import ModalTest from "../components/CustomModal";

function Home() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <ModalTest />

      <section>
        <h3>why we love</h3>
        <img src={test} alt="" width={200} />
        <img src={test} alt="" width={200} />
        <img src={test} alt="" width={200} />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cumque,
          laboriosam officia quas quae rem corporis, dignissimos, expedita quasi
          est eaque ea amet nulla! Officia corporis quo nemo facilis cupiditate?
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/300px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
          alt=""
          width={300}
        />
      </section>
      <footer>
        <p>copyright@2024</p>
      </footer>
    </>
  );
}

export default Home;

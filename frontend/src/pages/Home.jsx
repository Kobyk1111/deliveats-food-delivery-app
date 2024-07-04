import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import Section from "../components/Section";

function Home() {
  return (
    <>
      <Navbar />
      <Searchbar className="home-searchbar" />
      <Section />
      <Footer />
    </>
  );
}

export default Home;

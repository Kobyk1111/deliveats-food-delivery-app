import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import RegisterAndLogin from "../components/RegisterAndLogin";

function Home() {
  const { toggleRegisterOrLoginUser } = useContext(DataContext);
  return (
    <>
      <Navbar />
      {toggleRegisterOrLoginUser ? (
        <RegisterAndLogin />
      ) : (
        <>
          <Searchbar className="home-searchbar" />
          <Section />
        </>
      )}

      <Footer />
    </>
  );
}

export default Home;

import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Collaboration from "./components/Collaborations";
import Features from "../../shared/src/Features";
import Navbar from "../../shared/src/Navbar";
import Footer from "../../shared/src/Footer";
import Popular from "./components/Popular";
import Replace from "./components/Replace";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="flex flex-col space-y-20">
      <Navbar></Navbar>
      <Banner></Banner>
      <Collaboration></Collaboration>
      <Popular></Popular>
      <Features></Features>
      <Search></Search>
      <Cards></Cards>
      <Replace></Replace>
      <Footer></Footer>
    </div>
  );
};

export default App;

import Features from "../../shared/src/Features";
import Footer from "../../shared/src/Footer";
import Navbar from "../../shared/src/Navbar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Support from "./components/Support";
import Trial from "./components/Trial";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar></Navbar>
      <Banner></Banner>
      <Cards></Cards>
      <Trial></Trial>
      <Features></Features>
      <Support></Support>
      <Footer></Footer>
    </div>
  );
};

export default App;

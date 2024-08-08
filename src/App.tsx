import Navbar from "./components/navbar/Navbar";
import Header from "./views/header";
import { Footer, Navbar } from "./components/index";
import { CardsFeatures, Carousel } from "./views/index";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
       <Carousel />
      <CardsFeatures />
      <Footer />
    </div>
  );
}

export default App;







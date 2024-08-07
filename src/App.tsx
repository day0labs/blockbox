import { Footer, Navbar } from "./components/index";
import { CardsFeatures, Carousel } from "./views/index";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <CardsFeatures />
      <Footer />
    </div>
  );
}

export default App;

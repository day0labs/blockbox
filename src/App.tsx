import { Footer, Navbar } from "./components/index";
import { CardsFeatures, Carousel, Header } from "./views/index";
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

import { FloatingSvgHero } from "../components/floatingSvgHero";
import { SpotlightPreview } from "../components/spotlightPreview";
import { Footer, Navbar } from "../components/index";
import { CardsFeatures, Carousel } from "./index";

const Header = () => {
  return (
    <div>
      <div className="h-screen w-screen items-center justify-center">
        <Navbar />
        <FloatingSvgHero />
        <SpotlightPreview />
        <CardsFeatures />
        <Carousel />
        <Footer />
      </div>
    </div>
  );
};

export default Header;

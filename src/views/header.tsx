import { FloatingSvgHero } from "../components/floatingSvgHero/floatingSvgHero";
import { SpotlightPreview } from "../components/spotlightPreview/spotlightPreview";

const Header = () => {
  return (
    <div className="h-screen w-screen flex justify-start items-center relative overflow-hidden">
      <SpotlightPreview />
      <FloatingSvgHero />
    </div>
  );
};

export default Header;

import { Spotlight } from "../ui/spotlight";
import { FlipWords } from "../ui/flip-words";
import { GridBackgroundDemo } from "../gridBackgroundDemo/GridBackgroundDemo";

export function SpotlightPreview() {
  const words = [
    "Potencia tu Desarrollo",
    "Mejora tu Crecimiento",
    "Impulsa tu Progreso",
    "Optimiza tu Productividad",
  ];

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <GridBackgroundDemo />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col items-center justify-center lg:flex lg:items-baseline lg:justify-baseline">
        <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-50 to-neutral-400 bg-opacity-50">
          <FlipWords
            words={words}
            className="max-w-md lg:text-7xl md:text-6xl sm:text-5xl sm:text-center lg:text-left text-[#baff66b7]"
          />
        </h1>
        <p className="mt-4 font-normal lg:text-4xl md:text-3xl sm:text-2xl text-neutral-500 max-w-md text-center lg:text-left">
          Genera aplicaciones con arquitectura completa. Unificamos frontend y
          backend para maximizar tu productividad.
        </p>
      </div>
    </div>
  );
}

const brands = [
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012426/Dise%C3%B1o_sin_t%C3%ADtulo_7_fihu7p.png",
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012426/Dise%C3%B1o_sin_t%C3%ADtulo_6_xze80k.png",
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012426/Dise%C3%B1o_sin_t%C3%ADtulo_5_spho7x.png",
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012426/Dise%C3%B1o_sin_t%C3%ADtulo_4_rwd1vy.png",
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012426/Dise%C3%B1o_sin_t%C3%ADtulo_3_yjqmeh.png",
  "https://res.cloudinary.com/dkpotpaaf/image/upload/v1723012509/Dise%C3%B1o_sin_t%C3%ADtulo_2_upf1bj.png",
];

const Carousel = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Carrusel para desktop */}
      <div className="hidden md:block w-full">
        <div className="flex w-full animate-scroll">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-40 p-8 mx-8">
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carrusel para mobile */}
      <div className="md:hidden w-full relative overflow-hidden">
        <div className="absolute inset-0 flex animate-scroll-mobile">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="inline-block w-40 p-8 mx-8">
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex animate-scroll-mobile-reverse">
          {brands.concat(brands).map((brand, index) => (
            <div key={index} className="inline-block w-40 p-8 mx-8">
              <img
                src={brand}
                alt={`Brand ${index}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

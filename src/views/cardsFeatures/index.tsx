import { CardFeature } from "../../components/index";

const CardsFeatures = () => {
  const features = [
    {
      title: "Alta eficiencia<br /> y rendimiento",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973539/tokyo-magnifier-web-search-with-elements_f1rmyj.png",
      redirect: "https://example.com/feature1",
      bgColor: "bg-[#F3F3F3]",
      textBox: "bg-[#B9FF66]",
      textColor: "text-black",
      titleColor: "bg-[#191A23]",
    },
    {
      title: "Generación automatizada<br /> de estructura",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973539/tokyo-selecting-a-value-in-the-browser-window_veydqa.png",
      redirect: "https://example.com/feature2",
      bgColor: "bg-[#B9FF66]",
      textBox: "bg-[#F3F3F3]",
      textColor: "text-black",
      titleColor: "bg-[#191A23]",
    },
    {
      title: "Configuración<br /> simplificada",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973540/tokyo-browser-window-with-emoticon-likes-and-stars-around_lnaosx.png",
      redirect: "https://example.com/feature3",
      bgColor: "bg-[#191A23]",
      textBox: "bg-[#F3F3F3]",
      textColor: "text-[#F3F3F3]",
      titleColor: "bg-[#191A23]",
    },
    {
      title: "Integración fluida<br /> Front/Back",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973541/tokyo-sending-messages-from-one-place-to-another_spzm5u.png",
      redirect: "https://example.com/feature4",
      bgColor: "bg-[#F3F3F3]",
      textBox: "bg-[#B9FF66]",
      textColor: "text-black",
      titleColor: "bg-[#191A23]",
    },
    {
      title: "Soporte<br /> para TypeScript",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973540/tokyo-many-browser-windows-with-different-information_zyndmj.png",
      redirect: "https://example.com/feature5",
      bgColor: "bg-[#B9FF66]",
      textBox: "bg-[#F3F3F3]",
      textColor: "text-black",
      titleColor: "bg-[#191A23]",
    },
    {
      title: "Flexibilidad<br /> y personalización",
      image:
        "https://res.cloudinary.com/dkpotpaaf/image/upload/v1722973538/tokyo-volumetric-analytics-of-different-types-in-web-browsers_l4lbn4_wpawca.png",
      redirect: "https://example.com/feature6",
      bgColor: "bg-[#191A23]",
      textBox: "bg-[#B9FF66]",
      textColor: "text-[#F3F3F3]",
      titleColor: "bg-[#191A23]",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg my-4 p-4 w-full md:w-1/2 mb-8 flex flex-col md:flex-row items-center md:justify-between">
        <h1 className="w-64 p-2 bg-[#B9FF66] rounded-lg text-2xl font-bold mb-4 md:mb-0 text-center">
          Modo de uso
        </h1>
        <p className="text-md text-gray-700 md:ml-4">
          Seguí el paso a paso a través de nuestro CLI, instala las dependencias
          y listo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-3/4 text-center">
        {features.map((feature, index) => (
          <CardFeature key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default CardsFeatures;

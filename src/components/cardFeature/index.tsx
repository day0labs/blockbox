import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

type CardFeatureProps = {
  title: string;
  image: string;
  redirect: string;
  bgColor: string;
  textBox: string;
  textColor: string;
  titleColor: string;
};

const CardFeature = ({
  title,
  image,
  redirect,
  bgColor,
  textBox,
  textColor,
  titleColor,
}: CardFeatureProps) => {
  const titleLines = title.split("<br />");

  return (
    <div
      className={`flex flex-col rounded-[40px] border border-black border-b-4 shadow-lg p-4 m-2 cursor-pointer ${bgColor}`}
      onClick={() => (window.location.href = redirect)}
    >
      <div className="pt-4 ps-4 flex justify-between items-start mb-2">
        <h2
          className={`inline-block p-2 ${textBox} ${titleColor} font-semibold text-2xl text-start rounded-md`}
        >
          {titleLines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </div>
      <div className="flex flex-1 items-end justify-end pe-8">
        <img src={image} alt={title} className="object-contain max-h-48" />
      </div>
      <div className="flex items-center mt-2">
        <BsArrowUpRightCircleFill
          className={`ml-4 mr-2 ${textColor} text-3xl`}
        />
        <span className={`${textColor} font-semibold`}>Leer más</span>
      </div>
    </div>
  );
};

export default CardFeature;

import React from "react";
import Image from "next/image";

const containerStyles = {
  backgroundColor: "#1a0f30",
  border: "8px solid",
  borderImage: "linear-gradient(0deg, #c471ed, #4b2999) 1",
};

const FloorPriceCard: React.FC<{
  title: string;
  iconImg: string;
  floorPrice: string;
  currency: string;
  img?: string;
  name?: string;
  footer: string;
  footerUrl: string;
}> = ({
  title,
  iconImg,
  floorPrice,
  currency,
  img,
  name,
  footer,
  footerUrl,
}) => {
  return (
    <div
      style={containerStyles}
      className="text-center m-4 p-4 w-4/5 md:w-1/2 h-60 md:h-80"
    >
      <div className="flex justify-center">
        <Image src={iconImg} alt={title} width="42px" height="42px" />
      </div>

      <div className="flex justify-center text-xs md:text-base p-4">
        {title}
      </div>

      <p className="my-4 xl:my-8">
        <span className="text-xl md:text-2xl 2xl:text-4xl">{floorPrice}</span>{" "}
        {currency}
      </p>
      <a
        className={
          footerUrl ? "underline text-xs md:text-base" : "text-xs md:text-base"
        }
        href={footerUrl}
        target="_blank"
        rel="noreferrer"
      >
        {footer}
      </a>
    </div>
  );
};

export default FloorPriceCard;

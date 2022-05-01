import React from "react";
import Image from "next/image";

const containerStyles = {
  backgroundColor: "#1a0f30",
  border: "8px solid",
  borderImage: "linear-gradient(0deg, #c471ed, #4b2999) 1",
};

const FloorPriceCard: React.FC<{
  title: string;
  img: string;
  floorPrice: string;
  currency: string;
  footer: string;
  footerUrl: string;
}> = ({ title, img, floorPrice, currency, footer, footerUrl }) => {
  return (
    <div
      style={containerStyles}
      className="text-center m-4 p-4 w-4/5 md:w-1/2 h-60 md:h-80"
    >
      <div className="flex justify-center">
        <Image src={img} alt={title} width="32px" height="32px" />
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

export { FloorPriceCard };

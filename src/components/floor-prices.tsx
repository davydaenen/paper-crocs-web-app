import React, { useState } from "react";
import FloorPriceCard from "./floor-price-card";

const FloorPrices = () => {
  const [floorPrice, setFloorPrice] = useState("-");

  return (
    <div>
      <div className="flex flex-col justify-center items-center md:flex-row w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto">
        <FloorPriceCard
          img="data:image/gif;base64,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"
          title="Floor Unclaimed Paper"
          floorPrice={floorPrice}
          currency="ETH"
          footer="OpenSea"
          footerUrl="https://opensea.io/collection/acrocalypse?search[sortAscending]=true&search[sortBy]=PRICE&search[toggles][0]=BUY_NOW"
        />
      </div>
    </div>
  );
};

export default FloorPrices;

import allowCors from "@/utils/allow-cors";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { ethers } from "ethers";
import { z } from "zod";

const ACROC_PAPERCLAIMS_CONTRACT_ADDRESS =
  "0x28B702A9f771bfC04fA95cA57AD4a29fF4b39207";
const GEM_XYZ_ASSETS_URL = "https://gem-api-3.herokuapp.com/assets";
const request = {
  filters: {
    traits: {},
    traitsRange: {},
    slug: "acrocalypse",
    rankRange: {},
    price: {},
  },
  sort: {
    currentEthPrice: "asc",
  },
  fields: {
    id: 1,
    name: 1,
    address: 1,
    collectionName: 1,
    collectionSymbol: 1,
    externalLink: 1,
    imageUrl: 1,
    smallImageUrl: 1,
    animationUrl: 1,
    standard: 1,
    market: 1,
    currentBasePrice: 1,
    paymentToken: 1,
    marketUrl: 1,
    marketplace: 1,
    tokenId: 1,
    priceInfo: 1,
    tokenReserves: 1,
    ethReserves: 1,
    sellOrders: 1,
    startingPrice: 1,
    rarityScore: 1,
  },
  offset: 0,
  limit: 10000,
  markets: ["opensea", "rarible", "looksrare", "x2y2"],
  status: ["buy_now"],
};

export const appRouter = trpc.router().query("get-paper-crocs", {
  async resolve({}) {
    let crocsWithPaper: any[] = [];

    const gemXYZresponse = await fetch(GEM_XYZ_ASSETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://www.gem.xyz",
        "x-api-key": "iMHRYlpIXs3zfcBY1r3iKLdqS2YUuOUs"
      },
      body: JSON.stringify(request),
    });

    const gemXYZData = await gemXYZresponse.json();

    if (gemXYZData && gemXYZData.total > 0) {
      const provider = ethers.getDefaultProvider();

      const paperClaimContract = new ethers.Contract(
        ACROC_PAPERCLAIMS_CONTRACT_ADDRESS,
        ["function checkTokensStatus(uint256[]) public view returns (bool[])"],
        provider
      );

      const results: boolean[] = await paperClaimContract.checkTokensStatus(
        gemXYZData.data.map((listing: { id: any }) => listing.id)
      );

      if (results) {
        results.forEach((claimed, index) => {
          if (!claimed) {
            crocsWithPaper.push(gemXYZData.data[index]);
          }
        });
      }
    }

    return {
      crocsWithPaper,
    };
  },
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
const handler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
export default allowCors(handler);

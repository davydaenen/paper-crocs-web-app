import type { NextPage } from "next";
import "@fontsource/press-start-2p";
import { trpc } from "@/utils/trpc";

import FloorPrices from "@/components/floor-prices";
import Layout from "@/components/layout";
import Banner from "@/components/banner";

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["hello", { text: "paper crocs" }]);

  return (
    <Layout pageTitle="!CHOMP">
      <Banner></Banner>

      <div className="text-center">
        <h1 className="mt-10 mb-4 text-3xl">!CHOMP</h1>
        <p className="mb-4 mx-4">
          A dashboard to track who is paper crocin&apos;
        </p>
        <h1 className="text-6xl mb-8">🐊🧻</h1>
      </div>

      <FloorPrices></FloorPrices>

      <div className="text-center">
        {isLoading ? "Loading..." : data?.greeting}
      </div>
    </Layout>
  );
};

export default Home;

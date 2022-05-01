import type { NextPage } from "next";

import { Layout } from "../components/layout";
import { Banner } from "../components/banner";

import "@fontsource/press-start-2p";

const Home: NextPage = () => {
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
      <div></div>
    </Layout>
  );
};

export default Home;

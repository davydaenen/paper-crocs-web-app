import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "@fontsource/press-start-2p";

const Home: NextPage = () => {
  return (
    <div className="text-center">
      <h1 className="mt-10 mb-4 text-3xl">!CHOMP</h1>
      <p className="mb-4 mx-4">A dashboard to track who is paper crocin&apos;</p>
      <h1 className="text-6xl mb-8">🐊🧻</h1>
    </div>
  );
};

export default Home;

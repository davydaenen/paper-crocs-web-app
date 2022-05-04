import type { NextPage } from "next";
import "@fontsource/press-start-2p";
import { trpc } from "@/utils/trpc";
import { useEffect, useState } from "react";
import { WaveSpinner } from "react-spinners-kit";
import Layout from "@/components/layout";
import Banner from "@/components/banner";
import FloorPriceCard from "@/components/floor-price-card";
import { ethers } from "ethers";
import { Grid } from "gridjs-react";
import { html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Home: NextPage = () => {
  const [paperCrocs, setPaperCrocs] = useState<any[]>([]);
  const { data, isLoading } = trpc.useQuery(["get-paper-crocs"]);

  useEffect(() => {
    console.log(data?.crocsWithPaper);
    if (data?.crocsWithPaper && data?.crocsWithPaper?.length) {
      const newPaperCrocs = data?.crocsWithPaper?.map((croc) => {
        return {
          id: croc?.id,
          croc: croc?.imageUrl,
          name: croc?.name,
          marketplace: croc?.marketplace,
          link: croc?.url,
          currency: croc?.paymentToken?.symbol,
          price: ethers.utils.formatEther(croc?.priceInfo?.price),
        };
      });

      const sortedCrocs = newPaperCrocs?.sort((a, b) =>
        a?.price.localeCompare(b?.price)
      );

      setPaperCrocs(sortedCrocs);
      console.log("cheapest croc", sortedCrocs[0], newPaperCrocs[0]);
    }
  }, [data]);

  return (
    <Layout pageTitle="!CHOMP">
      <Banner></Banner>

      <div className="text-center">
        <h1 className="mt-10 mb-4 text-3xl">Paper Crocs</h1>
        <p className="mb-4 mx-4">
          Dashboard for tracking them paper crocs&apos;
        </p>
        <h1 className="text-6xl mb-8">🐊🧻</h1>
      </div>

      <div className="text-center">
        {isLoading ? (
          <div
            style={{
              position: "fixed",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <WaveSpinner
              size={100}
              color="#4b2999"
              loading={true}
            ></WaveSpinner>
          </div>
        ) : paperCrocs && paperCrocs.length ? (
          <>
            <div className="flex flex-col justify-center items-center md:flex-row w-full md:w-4/5 xl:w-3/5 2xl:w-1/2 m-auto">
              <FloorPriceCard
                iconImg="data:image/gif;base64,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"
                title="Floor Unclaimed Paper"
                floorPrice={paperCrocs[0]?.price}
                currency={paperCrocs[0]?.currency ?? "UNKNOWN"}
                img={paperCrocs[0]?.croc}
                name={paperCrocs[0]?.name}
                footer={paperCrocs[0]?.marketplace ?? ""}
                footerUrl={paperCrocs[0]?.link ?? ""}
              />
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row w-full md:w-4/5 xl:w-4/5 2xl:w-4/5 m-auto">
              <div className="text-center m-4 p-4 w-4/5 md:w-14/5 h-auto md:h-auto">
                <h1
                  className="flex justify-center mt-10 mb-4 text-3xl pb-5"
                  style={{ borderBottom: "2px solid #4b229c" }}
                >
                  !CHOMP
                </h1>
                <Grid
                  data={paperCrocs}
                  columns={[
                    "ID",
                    {
                      name: "Croc",
                      formatter: (cell, row) =>
                        html(
                          `<a target="_blank" rel="noreferrer" style="text-decoration: underline;" href='${row.cells[3].data}'><img src=${cell} alt='croc pic' width="60px" height="85px" /></a>`
                        ),
                    },
                    {
                      name: "Price",
                      formatter: (_, row) => {
                        return html(
                          `${row.cells[2].data} (${
                            paperCrocs.find((x) => x.id == row.cells[0].data)
                              ?.currency
                          })`
                        );
                      },
                    },
                    {
                      name: "Link",
                      formatter: (_, row) => {
                        return html(
                          `<a target="_blank" rel="noreferrer" style="text-decoration: underline;" href='${
                            row.cells[3].data
                          }'>↗️&nbsp;${
                            paperCrocs.find((x) => x.id == row.cells[0].data)
                              ?.marketplace
                          }</a>`
                        );
                      },
                    },
                  ]}
                  search={true}
                  sort={true}
                  resizable={true}
                  pagination={{
                    enabled: true,
                    limit: 25,
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </Layout>
  );
};

export default Home;

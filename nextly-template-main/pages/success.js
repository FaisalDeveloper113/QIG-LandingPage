import Head from "next/head";
import React from "react";
import Image from "next/image";
import img from "../public/img/happyimg.png";
import happy from "../public/img/happy.png";

const success = () => {
  return (
    <>
      <Head>
        <title>Success</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Algo Trading Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="success-container"
        style={{ backgroundColor: "white", height: "100vh" }}
      >
        <div style={{display:"flex", justifyContent:'flex-start', alignContent:'flex-start'}}>
          <Image
            width="350"
            height="350"
            src={happy}
            style={{
              mixBlendMode: "multiply",
            }}
          ></Image>
        </div>
        <hr
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            borderColor: "aqua",
            backgroundColor: "aqua",
          }}
        />
      </div>
    </>
  );
};

export default success;

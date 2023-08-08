import Head from "next/head";
import React from "react";
import Image from "next/image";
import errimg from "../public/img/errorPic.jpg";
import { Button } from "@mui/material";

const Error404 = () => {
  const handleGoToHomepage = () => {
    // Redirect to the homepage using window.location
    window.location.href = "https://qig-landing-page.vercel.app/product"; // Add the actual URL of your homepage
  };

  return (
    <>
      <Head>
        <title>Error 404</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Algo Trading Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="error-container"
        style={{
          backgroundColor: "beige",
          height: "100vh",
          justifyContent:'center'
        }}
      >
        <Image
          width="500"
          height="500"
          src={errimg}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            mixBlendMode: "multiply",
          }}
        ></Image>
        <hr
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-30px",
            borderColor: "brown",
            backgroundColor: "brown",
          }}
        />
        <section style={{ marginLeft: "auto", marginRight: "auto" }}>
          <p
            style={{
              textAlign: "center",
              marginTop: "1em",
              fontFamily: "serif",
              fontSize: "1.4em",
            }}
          >
            The page you are looking for might have been removed,
            <br /> had its name changed or is temporarily unavailaible.
          </p>
          <div style={{ textAlign: "center", marginTop: "2em" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGoToHomepage}
              style={{
                display: "inline-block",
                width: "fit-content",
                backgroundColor: "#1976D2",
                color: "white",
              }}
            >
              Go to Homepage
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error404;

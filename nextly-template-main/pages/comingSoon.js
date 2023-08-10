import React, { useState } from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import banner from "../public/img/web-banner.jpg";
import { useRouter } from "next/router";

const comingSoon = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = (event) => {
    event.preventDefault();
    // Here you can use the 'email' and 'password' state values
    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "hiqbal955@gmail.com" && password === "Haris123") {
      localStorage.setItem("isLoggedIn", true);
      router.push("/");
    } else localStorage.setItem("isLoggedIn", false);
  };

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Algo Trading Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="w-screen h-screen bg-cover bg-no-repeat bg-[url('/img/web-banner.jpg')] bg-[right] "
        style={{ position: "relative" }}
      >
        <div
          style={{
            position: "absolute",
            color: "beige",
            fontSize: "4em",
            fontWeight: "bold",
            top: "10%",
            left: "20%",
          }}
        >
          <h1>Coming Soon!</h1>
          <section
            style={{ maxWidth: "50%", fontSize: "20px", marginTop: "2em" }}
          >
            {/*<Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "15ch" },
                color:'white'
              }}
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>*/}
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ color: "black", borderRadius: "5px", padding: "5px" }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ color: "black", borderRadius: "5px", padding: "5px" }}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <button
                type="button"
                onClick={handleSignIn}
                style={{
                  backgroundColor: "#1877F2",
                  width: "5rem",
                  borderRadius: "5px",
                  fontSize: "1em",
                  padding: "5px",
                }}
              >
                Sign In
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default comingSoon;

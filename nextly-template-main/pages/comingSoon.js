import React, { useState } from "react";
import Head from "next/head";
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

    if (email === "admin@quantinvestmentsgroup.com" && password === "SecuretheBag7@") {
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
            color: "#333333",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(to bottom, #E9D66B, #D4B04E)",
            boxShadow: "5px 5px 40px rgba(0, 0, 0, 1)",
            padding: "20px",
            height: "auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "70px",
              marginTop: "-20px",
              lineHeight: "1.2",
              animation: "slideInFromLeft 1s ease-in-out forwards",
            }}
          >
            Coming Soon!
          </h1>
          <style>
            {`
    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
          </style>
          <hr
            style={{
              backgroundColor: "#333333",
              borderColor: "#000000",
              marginTop: "5px",
            }}
          />
          <div
            style={{
              fontSize: "1em",
              marginTop: "0.7em",
              animation: "fadeIn 3s ease-in-out forwards",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
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
              <div>
                <label htmlFor="email">Email:</label>
              </div>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  color: "black",
                  borderRadius: "5px",
                  padding: "5px",
                  width: "15em",
                  backgroundColor: "white",
                }}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <div>
                <label htmlFor="password">Password:</label>
              </div>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  color: "black",
                  borderRadius: "5px",
                  padding: "5px",
                  width: "15em",
                  backgroundColor: "white",
                }}
              />
            </div>
            <div style={{ marginTop: "15px" }}>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 rounded w-60 h-8"
                type="button"
                onClick={handleSignIn}
                
              >
                Sign In
              </button>
              <style>
                {`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default comingSoon;

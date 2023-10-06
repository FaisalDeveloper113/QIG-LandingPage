import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RecipeReviewCard from "../components/products";
const axios = require("axios");
import dotenv from "dotenv";
import path from "path";
import { useRouter } from "next/router";
import AddToCartModal from "../components/AddToCartModal";
import { Link } from "@mui/material";




const envFilePath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envFilePath });
const backend_url = "https://qig-dashboard.vercel.app"; //process.env.NE4XT_PUBLIC_backend_url;
const client_id =
  "AVF0lq4-CN4iyl3fDSey9OC-OPrQt-PEHHqt5S2L_4JZcV14kh5CKduRl9CXe8rx5KwgQEC-x3DVptIn"; //process.env.NEXT_PUBLIC_client_id;



const Product = () => {


  const [ref, inView] = useInView();
  const controls = useAnimation();
  const [ref1, inView1] = useInView();
  const controls1 = useAnimation();
  const [ref2, inView2] = useInView();
  const controls2 = useAnimation();
  const [ref3, inView3] = useInView();
  const controls3 = useAnimation();
  const [ref4, inView4] = useInView();
  const controls4 = useAnimation();
  const [ref5, inView5] = useInView();
  const controls5 = useAnimation();

  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardBuyClick = (productInfo) => {
    setIsModalOpen(true);
    setSelectedProductInfo(productInfo);
    //console.log(productInfo);
    handleAddToCart(productInfo);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProductInfo({});
  };

  const [isAddCartOpen, setIsAddCartOpen] = useState(false);

  const handleOpenCartModal = (productInfo) => {
    //console.log("open");
    setIsAddCartOpen(true);
    setSelectedProductInfo(productInfo);
  };

  const handleCloseCartModal = () => {
    setIsAddCartOpen(false);
    setSelectedProductInfo({});

  };

  useEffect(() => {
    const loadPayPalSDK = async () => {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}`;
      script.async = true;

      const loadScript = new Promise((resolve) => {
        script.onload = resolve;
      });
      document.body.appendChild(script);
      await loadScript;
    };

    loadPayPalSDK();
  }, []);

  const createOrder = async (productInfo) => {
    const url = `${backend_url}/create-paypal-order`; // Replace with your desired endpoint
    console.log("URL : ", url);
    const data = {
      id: productInfo.brand.id,
      name: productInfo.brand.name,
      price: productInfo.price,
      // Add more data as needed for your API endpoint
    };
    //console.log("Create paypal order json: ",productInfo);
    try {
      const response = await axios.post(url, data);
      console.log(
        "Post request successful create-paypal-order:",
        response.data.id
      );
      //setShowPayPalButtons(true);
      return response.data.id;
      // Do something with the response data
    } catch (error) {
      console.error("Error making POST create-paypal-order::", error.message);
      console.log("URL : ", url);
      // Handle the error
    }
  };

  const onApprove = (data, actions) => {
    // Handle the approved payment here, e.g., show a success message
    console.log("Payment approved:", data);
  };

  const onCancel = (data) => {
    // Handle the payment cancellation here, e.g., show a cancellation message
    console.log("Payment cancelled:", data);
  };

  const onError = (err) => {
    // Handle payment errors here, e.g., show an error message
    console.error("Payment error:", err);
  };

  useEffect(() => {
    if (isModalOpen) {
      // Apply styles to the body element to prevent scrolling on the main window
      document.body.style.overflow = "hidden";
      document.body.style.position = "";
      document.body.style.width = "100%";
    } else {
      // Reset the styles on the body element when the modal is closed
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }
  }, [isModalOpen]);
  const handleAddToCart = (productInfo) => {
    createOrder(productInfo).then((orderId) => {
      if (window.paypal) {
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return orderId;
            },
            onApprove: onApprove,
            onCancel: onCancel,
            onError: onError,
          })
          .render("#paypal-button-container");
      }
    });
  };

  const productInfo1 = {
    image: "https://s3.tradingview.com/c/c8ydw2Xb_mid.png",
    brand: {
      id: 1,
      name: "Apex Mean Reversion Algo",
    },
    price: 899,
    gold: 129,
    formattedPrice: "$899",
    description:
      "The Apex Mean Reversion Algo expertly executes trades by capitalizing on temporary price distortions. It offers an intuitive user interface, perfectly blending simplicity and sophistication, tailored for both beginners and experienced traders.",
  };

  const productInfo2 = {
    image: "https://s3.tradingview.com/5/5Th1xKZZ_mid.png",
    brand: {
      id: 2,
      name: "Momentum EMA Crossover",
    },
    price: 899,
    gold: 129,
    formattedPrice: "$899",
    description:
      "Unveiling Trend Flip - Unleash Profits with Momentum EMA Crossover Expert Advisor! Are you tired of missing out on those trend-reversal opportunities that can lead to substantial profits? ",
  };

  const productInfo3 = {
    image:
      "data:image/png;base64,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",
    brand: {
      id: 3,
      name: "Algorithmic Risk Management",
    },
    price: 499,
    gold: 129,
    formattedPrice: "$499",
    description:
      "Fortress Risk Management Algo, an exceptional MT4-based trading software designed to safeguard your investments with uncompromising precision.",
  };

  const productInfo5 = {
    image:
      "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686148202600-IFL1VG8JMMF5YRR9J3LH/Screenshot+2023-06-06+183103.png?format=750w",
    brand: {
      id: 5,
      name: "Liquidity Indicator",
    },
    price: 299,
    gold: 129,
    formattedPrice: "$299",
    description:
      "The Polaris Trend Indicator goes beyond the traditional confines of standard trend indicators. With its core engine powered by customizable moving averages. The indicator is intuitively designed to dynamically adjust to your selected moving average parameters, whether you're focusing on short-term trading opportunities or long-term investment strategies. This means you can fine-tune the tool to suit your unique trading style and goals, ensuring maximum relevance to your analysis.",
  };

  const productInfo6 = {
    image:
      "https://s3.tradingview.com/c/c8ydw2Xb_mid.png",
    brand: {
      id: 6,
      name: "Alpha Algo Suite ",
    },
    price: 1499,
    gold: 129,
    formattedPrice: "$1499",
    description:
      "Experience the full power of algorithmic trading with our Alpha Algo Suite – an all-encompassing, dynamic package for the MT4 platform that brings together the Accelerator Momentum Algo, Fortress Algo, Polaris Trend Indicator, and the game-changing Order Management System. This suite is a masterfully curated collection of our most sophisticated tools, designed to seamlessly integrate and elevate your trading journey.",
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);
  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);
  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);
  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0.5 },
  };

  return (
    <>
      <Head>
        <title>Quant Farming</title>
        <meta name="description" content="Algo Trading Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar isAddCartOpen={isAddCartOpen} />
      <Container>
        <h1
          style={{ marginTop: "150px", marginBottom: "150px" }}
          className="z-20 relative text-center lg:px-10 text-4xl font-bold leading-snug tracking-tight  lg:text-8xl lg:leading-tight xl:text-8xl xl:leading-tight text-white"
        >
          Algorithms
        </h1>
      </Container>
      <Container>
        <div
          className="flex flex-col items-center"
          style={{ marginTop: '-150px' }}
        // style={{
        //     display: 'flex',
        //     flexDirection: ['column', 'row'],
        //     gap: '3rem',
        //     marginLeft: '5rem',
        //     marginRight: '5rem',
        // }}
        >
          {isModalOpen && (
            <div
              className="paypal-modal"
              id="paypal-button-container"
              style={{
                display: "flex",
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "9999",
                width: "70%",
                maxWidth: "800px",
                backgroundColor: "white",
                color: "black",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "40px",
                placeItems: "center",
              }}
            >

              <span
                className="absolute right-3 top-3 cursor-pointer font-weight-bold"
                onClick={handleModalClose}
              >
                <CloseIcon />
              </span>
            </div>
          )}
          <AddToCartModal productInfo={selectedProductInfo} open={isAddCartOpen} onClose={handleCloseCartModal} />
          {/*
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <div className="flex-1 transition-transform transform hover:scale-105 duration-500">
              <RecipeReviewCard
                {...productInfo1}
                onBuyClick={() => handleOpenCartModal(productInfo1)}
              />
            </div>
          </motion.div>

          <motion.div
            ref={ref1}
            animate={controls1}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <div className="flex-1 transition-transform transform hover:scale-105 duration-500">
              <RecipeReviewCard
                {...productInfo2}
                onBuyClick={() => handleOpenCartModal(productInfo2)}
              />
            </div>
          </motion.div>
        */}

          <motion.div
            ref={ref4}
            animate={controls4}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <div className="flex-1 transition-transform transform hover:scale-105 duration-500">
              <RecipeReviewCard
                {...productInfo5}
                onBuyClick={() => handleOpenCartModal(productInfo5)}
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref2}
            animate={controls2}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <div className="flex-1 transition-transform transform hover:scale-105 duration-500">
              <RecipeReviewCard
                {...productInfo3}
                onBuyClick={() => handleOpenCartModal(productInfo3)}
              />
            </div>
          </motion.div>
          <motion.div
            ref={ref5}
            animate={controls5}
            initial="hidden"
            variants={squareVariants}
            className="square"
          >
            <div className="flex-1 transition-transform transform hover:scale-105 duration-500">
              <RecipeReviewCard
                {...productInfo6}
                onBuyClick={() => handleOpenCartModal(productInfo6)}
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Product;

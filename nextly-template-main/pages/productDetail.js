import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { useRouter } from 'next/router';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddToCartModal from "../components/AddToCartModal";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
const axios = require("axios");
import dotenv from "dotenv";
import path from "path";


const envFilePath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envFilePath });
const backend_url = "https://qig-dashboard.vercel.app"; //process.env.NE4XT_PUBLIC_backend_url;
const client_id =
  "AVF0lq4-CN4iyl3fDSey9OC-OPrQt-PEHHqt5S2L_4JZcV14kh5CKduRl9CXe8rx5KwgQEC-x3DVptIn"; //process.env.NEXT_PUBLIC_client_id;

const productDetail = () => {
  
  const router = useRouter();
  const { name, id } = router.query;

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
    //console.log("URL Product Details : ", url);
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
  
  };

  const productInfo3 = {
    image:
      "data:image/png;base64,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",
    brand: {
      id: 3,
      name: "Fortress Risk Management ",
    },
    price: 499,
    gold: 129,
    formattedPrice: "$499",
    };

  const productInfo5 = {
    image:
      "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686148202600-IFL1VG8JMMF5YRR9J3LH/Screenshot+2023-06-06+183103.png?format=750w",
    brand: {
      id: 5,
      name: "Trend Indicator",
    },
    price: 499,
    gold: 129,
    formattedPrice: "$499",
     };

  const productInfo6 = {
    image:
      "https://images.theconversation.com/files/527509/original/file-20230522-25-fn6rwh.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
    brand: {
      id: 6,
      name: "Alpha Algo Suite ",
    },
    price: 1499,
    gold: 129,
    formattedPrice: "$1499",
      };

  const products = [
    {
      id: '1',
      brand: {
        
        name: "Apex Mean Reversion Algo",
      },
      price: 899,
      description:
        'The Apex Mean Reversion Algo, your next-generation MT4-based trading software.' +
        'Drawing from the potency of artificial intelligence and machine learning, it condenses' +
        'the complexities of market dynamics into a robust mean reversion system. Crafted from' +
        'meticulous statistical analysis, this tool identifies potential price retracements to the' +
        'mean, transforming market chaos into profitable, actionable decisions.' +
        'The Apex Mean Reversion Algo expertly executes trades by capitalizing on temporary' +
        'price distortions. It offers an intuitive user interface, perfectly blending simplicity and' +
        'sophistication, tailored for both beginners and experienced traders. Enjoy access to' +
        'real-time analytics, straightforward buy and sell signals, and customizable trading' +
        'parameters that sync seamlessly with your unique risk tolerance and investment goals.' +
        'Security is paramount in our software. We have employed advanced encryption and' +
        'layered cybersecurity protocols, safeguarding your privacy. The Apex Mean Reversion' +
        'Algo is more than just a strategy - it is a revolution in trading technology. With Apex, trade' +
        'with the accuracy and confidence of a seasoned market veteran.',
      basic:
        '<br><Strong><u>GOLD - APEX MEAN REVERSION EA</u></Strong> <br>(COMES WITH OPTIMIZED INPUTS FOR ONE' +
        'TICKER, US30, XAUUSD, NAS100, or USOIL)<br> <Strong><u>Monthly $129 Charge</u></Strong>' +
        '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>' +
        '<br>3 pre-determineTP’s' +
        '<br>2 trailing SL’s' +
        '<br>Regular SL or Optional “Risk Management Hedging” SL' +
        '<br>% orders closed per trade' +
        '<br>Time Filter' +
        '<br>Volume Filter',
      // Add the image URL property
      image: 'https://s3.tradingview.com/c/c8ydw2Xb_mid.png'
    },
    {
      id: '2',
      brand: {
        
        name: "Momentum EMA Crossover",
      },
      price: 899,
      description: "The Accelerator Momentum Algo, an MT4-based trading software that is designed to take your " +
        "trading to new levels of precision and profitability. This revolutionary program leverages the " +
        "time-tested strategy of moving average crossover and infuses it with advanced AI and machine " +
        "learning capabilities. Built to capture the powerful undercurrents of market trends, this software " +
        "expertly identifies key crossover points between short-term and long-term moving averages, " +
        "offering potential entry and exit points for your trades. " +
        "Its user-friendly interface ensures seamless navigation, real-time analytics, and effortless " +
        "visualization of moving average crossovers. The software's customization options allow you to " +
        "adjust your moving average parameters, aligning perfectly with your unique trading style, risk " +
        "tolerance, and investment goals. With a sophisticated filtering system, it skillfully differentiates " +
        "between significant market signals and mere noise, empowering you with high-quality trade " +
        "opportunities. " +
        "We value your security as much as your success. The Accelerator Momentum Algo is fortified " +
        "with state-of-the-art encryption protocols and multiple layers of cybersecurity measures, " +
        "ensuring the utmost safety of your investments and personal data. Propel your trading journey " +
        "with the Accelerator Momentum Algo, as it navigates the market's momentum with precision " +
        "and speed.",
      basic:
        '<br><Strong><u>GOLD - MOMENTUM EMA CROSS</u></Strong> <br>(COMES WITH OPTIMIZED INPUTS FOR ONE' +
        'TICKER, US30, XAUUSD, NAS100, or USOIL)<br> <Strong><u>Monthly $129 Charge</u></Strong>' +
        '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>' +
        '<br>3 pre-determineTP’s' +
        '<br>2 trailing SL’s' +
        '<br>Regular SL or Optional “Risk Management Hedging” SL' +
        '<br>% orders closed per trade' +
        '<br>Time Filter' +
        '<br>Volume Filter',

      image: 'https://s3.tradingview.com/5/5Th1xKZZ_mid.png'
    },
    {
      id: '5',
      brand: {
        
        name: "Trend Indicator",
      },
      price: 499,
      description: "The ACT Trend Indicator, a state-of-the-art tool for MT4 and TradingView platforms. This " +
        "cutting-edge solution harnesses the power of customizable moving averages, offering you the " +
        "perfect compass to guide your trading decisions in ever-shifting markets. " +
        "The ACT Trend Indicator goes beyond the traditional confines of standard trend indicators. With " +
        "its core engine powered by customizable moving averages, it offers you an unparalleled degree " +
        "of flexibility in tailoring your trend analysis. The indicators also use customizable relative " +
        "strength inputs, that help find liquidity zones and reversions. This means you can fine-tune the " +
        "tool to suit your unique trading style and goals, ensuring maximum relevance to your analysis. " +
        "User-friendliness is the hallmark of the ACT Trend Indicator. Regardless of your experience level, " +
        "you'll find the tool intuitive to use on both MT4 and TradingView. It offers clear, easy-to-interpret " +
        "visuals that help you quickly identify prevailing trends and potential reversals. Underneath the " +
        "simple interface, advanced algorithms work tirelessly, ensuring the accuracy and reliability of " +
        "the trend data. Step into a new realm of trend analysis with the ACT Trend Indicator, where " +
        "market trends are no longer elusive but a clear path to successful trades."
      ,
      basic:

        '<br><Strong><u>GOLD - TREND INDICATOR</u></Strong> <br>(COMES WITH OPTIMIZED INPUTS FOR ONE' +
        'TICKER, US30, XAUUSD, NAS100, or USOIL)<br> <Strong><u>Monthly $129 Charge</u></Strong>'
      ,
      image: 'https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686148202600-IFL1VG8JMMF5YRR9J3LH/Screenshot+2023-06-06+183103.png?format=750w'
    },
    {
      id: '6',
      brand: {
       
        name: "Alpha Algo Suite ",
      },
      price: 1499,
      description: "Experience the full power of algorithmic trading with our Alpha Algo Suite – an " +
        "all-encompassing, dynamic package for the MT4 platform that brings together the Apex " +
        "Mean Reversion Algo, with the Accelerator Momentum Algo, the Fortress Risk " +
        "Management algo, with inclusion of the ACT TradingView Indicator. This suite is a " +
        "masterfully curated collection of our most sophisticated tools, designed to seamlessly " +
        "integrate and elevate your trading journey. " +
        "The combination of these tools provide for a fully automated, sophisticated trading " +
        "system designed to maximize returns hands-free. With full transparency of the system, " +
        "you’ll know exactly how it runs with video descriptions and walkthroughs. The algo is " +
        "yours to run, with full setup on your own virtual private server, where you can make " +
        "adjustments to adapt the algo to market conditions, in addition to being connected with " +
        "a community of traders all running the algo. " +
        "Whether you're a seasoned trader or new to the field, our program ensures a seamless, " +
        "collaborative, and secure experience that aligns with your trading goals. Revolutionize " +
        "your trading journey by harnessing the power of AI, risk management, and personalized " +
        "algorithms, and watch as your trading ideas evolve into automated strategies that " +
        "resonate with your individual style and preferences.",
      basic:
        '',
      image: 'https://images.theconversation.com/files/527509/original/file-20230522-25-fn6rwh.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'

    },
    {
      id: '3',
      brand: {
        
        name: "Fortress Risk Management ",
      },
      price: 499,
      description: "The Accelerator Momentum Algo, an MT4-based trading software that is designed to take your " +
        "trading to new levels of precision and profitability. This revolutionary program leverages the " +
        "time-tested strategy of moving average crossover and infuses it with advanced AI and machine " +
        "learning capabilities. Built to capture the powerful undercurrents of market trends, this software " +
        "expertly identifies key crossover points between short-term and long-term moving averages, " +
        "offering potential entry and exit points for your trades. " +
        "Its user-friendly interface ensures seamless navigation, real-time analytics, and effortless " +
        "visualization of moving average crossovers. The software's customization options allow you to " +
        "adjust your moving average parameters, aligning perfectly with your unique trading style, risk " +
        "tolerance, and investment goals. With a sophisticated filtering system, it skillfully differentiates " +
        "between significant market signals and mere noise, empowering you with high-quality trade " +
        "opportunities. " +
        "We value your security as much as your success. The Accelerator Momentum Algo is fortified " +
        "with state-of-the-art encryption protocols and multiple layers of cybersecurity measures, " +
        "ensuring the utmost safety of your investments and personal data. Propel your trading journey " +
        "with the Accelerator Momentum Algo, as it navigates the market's momentum with precision " +
        "and speed.",
      basic:
        '<br><Strong><u>GOLD - EXPERT ORDER MANAGEMENT</u></Strong> <br>(COMES WITH OPTIMIZED INPUTS FOR ONE' +
        'TICKER, US30, XAUUSD, NAS100, or USOIL) <br><Strong><u>Monthly $129 Charge  per ticker </u></Strong>' +
        '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>' +
        '<br>3 pre-determineTP’s' +
        '<br>2 trailing SL’s' +
        '<br>Regular SL or Optional “Risk Management Hedging” SL' +
        '<br>% orders closed per trade' +
        '<br>Time Filter' +
        '<br>Volume Filter',
      image: "data:image/png;base64,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"
    },


    // Add more products here
  ];
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }


  return (
    <>
      <Head>
        <title>Quant Farming</title>
        <meta
          name="description"
          content="Algo Trading Experts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <AddToCartModal productInfo = {selectedProductInfo}  open={isAddCartOpen} onClose={handleCloseCartModal} />
      <div  >
        <h1 style={{ marginTop: '150px' }} className="font-mono z-index relative mt-100 text-center text-4xl font-bold leading-snug tracking-tight lg:text-6xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">

          {name}
          <br /><br />
          <img
            src={product.image} // Use the image URL from the JSON data
            alt="Product Image"
            style={{ display: 'block', margin: '0 auto', width: '500px', height: '300px' }}// Set the image's maximum width
          />
        </h1>


        <div style={{ marginTop: '10px' }} className="font-mono w-full relative text-lg p-8 lg:p-14 xl:p-14 bg-white dark:bg-trueGray-800">
          <div style={{ textAlign: 'justify', marginLeft: '5%', marginRight: '5%' }}>
            <p className="z-index relative text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: product.description }}></p>

            <p className="text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: product.basic }}></p>
          </div>
        </div>
        <div className="bg-white dark:bg-trueGray-800 text-right p-8 lg:px-24 xl:px-24">
        <button onClick={() => handleOpenCartModal(product)} className= " bg-blue-500 text-white py-2 px-4 rounded-3xl relative left-0"><ShoppingBasketIcon className="mr-2" />  Add to cart</button>

        </div>
        


      </div>
      <Footer />
    </>
  );
}

export default productDetail;
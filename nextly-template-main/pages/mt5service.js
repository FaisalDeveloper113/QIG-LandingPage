import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import React, { useState } from 'react';
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Feature from "../components/services";
import { Divider } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import stockImg from '../images/stock-market-analyst-looking-at-computer-trading-online-analyzing-data.jpg'
import { motion } from "framer-motion";

const mt5Service = () => {
    const [isHovered2, setIsHovered2] = useState(false);
    const cardStyle2 = {
        maxWidth: 400,
        minWidth: 400,
        minHeight: 500,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        marginRight: '1em',
        transition: 'transform 0.3s',
        transform: isHovered2 ? 'scale(1.05)' : 'scale(1)',
        textAlign: 'left'
    };
    const headerStyle2 = {
        backgroundImage: 'url(https://www.forextraders.com/wp-content/uploads/2016/11/How-to-use-the-MetaTrader-4-forex-trading-platform-scaled.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    };
    const slideUpVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    const slideRightVariants = {
        initial: { x: 150, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };
    const slideLeftVariants = {
        initial: { x: -150, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };
    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };
    return (
        <>
            <Head>
                <title>Quant Investments Group</title>
                <meta
                    name="description"
                    content="Algo Trading Experts"
                />
            </Head>

            <Navbar />
            <div className=" dark:bg-trueGray-800" style={{ background: '', textAlign: '-webkit-center' }}>
                <div className=" darks:bg-trueGray-800" style={{ background: 'white', maxWidth: '1300px' }}>
                    <div className="grid grid-cols-3 gap-4 text-center  dark:bg-trueGray-800" >
                        
                            <div className="p-4 col-span-3  dark:bg-trueGray-800">
                            <motion.div
                            initial="initial"
                            animate="animate"
                            variants={slideUpVariants}
                            transition={{ duration: 0.8 }}>
                                <h2 className="text-2xl font-bold">Benefits of Our Breakout Trading Bot:</h2>
                                <p>Our Breakout Trading Bot offers a wide range of benefits for traders of all levels. </p>
                                </motion.div>
                            </div>
                        

                    </div>
                    <div className=" p-4 flex flex-col md:flex-row  dark:bg-trueGray-800">
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={slideLeftVariants}
                            transition={{ duration: 0.8 }}>
                            <div className="flex-1 p-4">
                                <Card
                                    className="dark:bg-black"
                                    sx={cardStyle2}
                                    variant='outlined'
                                    onMouseEnter={handleMouseEnter2}
                                    onMouseLeave={handleMouseLeave2}
                                >
                                    <Box sx={headerStyle2}>

                                    </Box>
                                    <CardContent>

                                        <Typography className=" dark:text-white" variant="h4" component="div" color="text.primary">
                                            MetaTrader 5
                                        </Typography>
                                        <Divider></Divider>
                                        <br />

                                        <Typography className=" dark:text-white" variant="h8" color="text.secondary">
                                            <ul>
                                                <li><CheckCircleIcon color="primary" />  Automated Trading</li>
                                                <li><CheckCircleIcon color="primary" />  Backtesting</li>
                                                <li><CheckCircleIcon color="primary" />  Increased Speed and Accuracy</li>
                                                <li><CheckCircleIcon color="primary" />  Diversification</li>
                                                <li><CheckCircleIcon color="primary" />  Licensing System</li>
                                                <li><CheckCircleIcon color="primary" />  Expert Advisor & Indicator</li>
                                            </ul>
                                        </Typography>
                                        <div className="absolute bottom-0 right-0 z-[-1]">
                                            <svg
                                                width="179"
                                                height="158"
                                                viewBox="0 0 179 158"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    opacity="0.5"
                                                    d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                                                    fill="url(#paint0_linear_70:153)"
                                                />
                                                <path
                                                    opacity="0.3"
                                                    d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                                                    fill="url(#paint1_linear_70:153)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_70:153"
                                                        x1="69.6694"
                                                        y1="29.9033"
                                                        x2="196.108"
                                                        y2="83.2919"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient
                                                        id="paint1_linear_70:153"
                                                        x1="165.348"
                                                        y1="-75.4466"
                                                        x2="-3.75136"
                                                        y2="103.645"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={slideRightVariants}
                            transition={{ duration: 0.8 }}>
                            <div className="flex-1 p-4">
                                <div className="flex-1 p-4 flex flex-row text-left">
                                    <img style={{ marginRight: '20px' }} width='66' height='66' src="https://yourrobotrader.com/wp-content/uploads/2023/04/YourRoboTrading-Icons-FIX_1-Breakout-Maximize-Profit.png"></img>
                                    <p>Maximizes your profits by identifying and capturing breakout opportunities automatically</p>
                                </div>
                                <div className="flex-1 p-4 flex flex-row text-left">
                                    <img style={{ marginRight: '20px' }} width='66' height='66' src="https://yourrobotrader.com/wp-content/uploads/2023/04/YourRoboTrading-Icons-FIX_2-Simplify-Trading-Strategy.png"></img>
                                    <p>Simplifies your trading strategy by providing automated trading signals based on technical indicators</p>
                                </div>
                                <div className="flex-1 p-4 flex flex-row text-left">
                                    <img style={{ marginRight: '20px' }} width='66' height='66' src="https://yourrobotrader.com/wp-content/uploads/2023/04/YourRoboTrading-Icons-FIX_3-Minimize-Risk-1.png"></img>
                                    <p>Minimizes your risk by incorporating stop-loss orders to limit potential losses</p>
                                </div>
                                <div className="flex-1 p-4 flex flex-row text-left">
                                    <img style={{ marginRight: '20px' }} width='66' height='66' src="https://yourrobotrader.com/wp-content/uploads/2023/04/YourRoboTrading-Icons-FIX_4-Breakout-Save-Your-Time-1.png"></img>
                                    <p>Saves you time and effort by automating your trading strategy, allowing you to focus on other aspects of your trading approach</p>
                                </div>
                                <div className="flex-1 p-4 flex flex-row text-left">
                                    <img style={{ marginRight: '20px' }} width='66' height='66' src="https://yourrobotrader.com/wp-content/uploads/2023/04/YourRoboTrading-Icons-FIX_5-Breakout-Ahead-of-the-competition.png"></img>
                                    <p>Provides you with advanced trading technology that puts you ahead of the competition</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className=" dark:bg-trueGray-800" style={{ background: '', textAlign: '-webkit-center' }}>
                <div className=" dark:bg-trueGray-800" style={{ background: 'white', maxWidth: '1300px' }}>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 dark:bg-trueGray-800 p-4"><img src="https://yourrobotrader.com/wp-content/uploads/2023/03/stock-market-analyst-looking-at-computer-trading-online-analyzing-data-.jpg"></img></div>
                        <div className="flex-1 dark:bg-trueGray-800 p-6">
                            <div className="flex-1 p-4 flex flex-row text-left">
                                <CheckCircleOutlineIcon style={{ color: '#06CA8C', marginRight: '20px' }} />
                                <p>Uses technical indicators such as the ADX and RSI to identify potential entry points for the grid bot</p>
                            </div>

                            <div className="flex-1 p-4 flex flex-row text-left">
                                <CheckCircleOutlineIcon style={{ color: '#06CA8C', marginRight: '20px' }} />
                                <p>Incorporates advanced money management capabilities to recover losing positions and avoid account blow up</p>
                            </div>

                            <div className="flex-1 p-4 flex flex-row text-left">
                                <CheckCircleOutlineIcon style={{ color: '#06CA8C', marginRight: '20px' }} />
                                <p>Offers a range of grid trading options, from simple to complex, to suit your individual trading needs</p>
                            </div>


                            <div className="flex-1 p-4 flex flex-row text-left">
                                <CheckCircleOutlineIcon style={{ color: '#06CA8C', marginRight: '20px' }} />
                                <p>Provides real-time market analysis and updates to help you make informed trading decisions</p>
                            </div>


                            <div className="flex-1 p-4 flex flex-row text-left">
                                <CheckCircleOutlineIcon style={{ color: '#06CA8C', marginRight: '20px' }} />
                                <p>Executes trades quickly and efficiently, maximizing your profit potential</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <br></br>
            <Cta />
            <Footer />
            {/* <PopupWidget /> */}
        </>
    );
}

export default mt5Service;
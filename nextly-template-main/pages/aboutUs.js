import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { motion } from "framer-motion";
import img1 from '../public/img/senior-businessman-talking-at-meeting.jpg';
import RecipeReviewCard from "../components/products";
import Image from "next/image";
const aboutUs = () => {

    const slideUpVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
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
            <Container  >
                <h1 style = {{marginTop:'150px'}} className="z-index relative mt-100 text-center text-6xl font-bold leading-snug tracking-tight lg:text-8xl lg:leading-tight xl:text-8xl xl:leading-tight text-white">
                    About Us
                </h1>
            </Container>

            <div className=" z-20 dark:bg-trueGray-800 py-8 px-8" style={{ paddingBottom: '', textAlign: '-webkit-center' }}>
                <div className=" dark:bg-trueGray-800" style={{ background: 'white', maxWidth: '1300px', marginTop: '250px' }}>
                    <div className="grid grid-cols-3 gap-4 text-center  dark:bg-trueGray-800" >
                        <div className="z-20 p-4 col-span-3 text-left dark:bg-trueGray-800">
                            <motion.div
                                initial="initial"
                                animate="animate"
                                variants={slideUpVariants}
                                transition={{ duration: 0.8 }}>
                                <h2 className="text-4xl font-bold m-4">We help you automate your trading</h2>

                                <p className="m-4 text-gray-500 dark:text-gray-400">Combining the expertise of professional programmers, analysts, and traders to create advanced custom-made trading bot software that will automate your trading</p>
                                <p className="m-4 text-gray-500 dark:text-gray-400">YourRoboTrader is a trading bot software developer. We create custom trading bots to help you automate your trading. We strive to provide our customers with the best trading experience, we do this by focusing on what matters most – our customer’s needs.</p>
                                <p className="m-4 text-gray-500 dark:text-gray-400">We’re proud to say that after years of developing trading bots, we’ve helped thousands of traders all over the world save time and make money from their trading activities. Our top priority is to help you maximize your trading profit while minimizing your effort by automating your trading activities with our customized trading bot.</p>
                                <p className="m-4 text-gray-500 dark:text-gray-400">We understand that time is money, so we designed our bots to be user friendly, allowing you to get started quickly and easily. Our goal is to make the process of creating a trading bot as simple as possible so that you can concentrate on what really matters – your trades!</p>
                                <p className="m-4 text-gray-500 dark:text-gray-400">When it comes to customer support, we take pride in providing fast response times and providing solutions to any issues that may arise with your bot. Our team of experts will work tirelessly to ensure that you have an enjoyable experience with us every step of the way!</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
            <div className=" dark:bg-trueGray-800" style={{ background: '', textAlign: '-webkit-center' }}>
                <div className=" dark:bg-trueGray-800 bg-gray-100" style={{ background: '', maxWidth: '1300px' }}>
                </div>
                <div className=" dark:bg-trueGray-800 bg-gray-100" style={{ background: '', maxWidth: '1300px' }}>
                    <div className="flex flex-col md:flex-row  dark:bg-trueGray-800">
                        <div className="flex-1 text-left dark:bg-trueGray-800 p-4">
                            <h2 className="text-4xl font-bold m-4">Meet The Team</h2>
                            <p className="m-4 text-gray-500 dark:text-gray-400">Our development team is composed of individuals with a strong passion for the stock market and banking, and the experience they have gained in those fields. We use this expertise to create trading systems that can be tailored to your specifications.</p>
                        </div>
                        <div className="flex-1 dark:bg-trueGray-800 p-4">
                            <Image width='500' height='500' src={img1}></Image>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
            {/* <PopupWidget /> */}
        </>
    );
}

export default aboutUs;
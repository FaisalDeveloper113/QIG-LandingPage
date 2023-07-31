import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

import RecipeReviewCard from "../components/products";
const Product = () => {
    const productInfo = {
        image:
            "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686148202600-IFL1VG8JMMF5YRR9J3LH/Screenshot+2023-06-06+183103.png?format=750w",
        brand: {
            id: 1,
            name: "QUANTFARMING ULTIMATE TRADING INDICATOR"
        },
        price: 499,
        formattedPrice: "$499",
        description: "Saves you time and effort by automating your trading strategy, allowing you to focus on other aspects of your trading approach"
    };
    const productInfo2 = {
        image:
            "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686147656602-TBLPVN9YQ3P6BFBXIXTO/Screenshot+2023-06-07+071932.png?format=750w",
        brand: {
            id: 2,
            name: "Momemtum (EMA Crossover)"
        },
        price: 799,
        formattedPrice: "$799"
    };
    const productInfo3 = {
        image:
            "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686147656602-TBLPVN9YQ3P6BFBXIXTO/Screenshot+2023-06-07+071932.png?format=750w",
        brand: {
            id: 2,
            name: "Mean Reversion (Rsi Cross below and above)"
        },
        price: 1499,
        formattedPrice: "$1499"
    };
    const productInfo4 = {
        image:
            "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686147656602-TBLPVN9YQ3P6BFBXIXTO/Screenshot+2023-06-07+071932.png?format=750w",
        brand: {
            id: 2,
            name: "Risk Management"
        },
        price: 1299,
        formattedPrice: "$1299"
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
            <Container>
                <h1 className="z-20 relative text-4xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
                    Our Products
                </h1>
            </Container>
            <Container>
                <div className="flex flex-col"
                // style={{
                //     display: 'flex',
                //     flexDirection: ['column', 'row'],
                //     gap: '3rem',
                //     marginLeft: '5rem',
                //     marginRight: '5rem',
                // }}
                >
                    <div className="flex-1" ><RecipeReviewCard  {...productInfo} /></div>
                    <div className="flex-1"><RecipeReviewCard  {...productInfo2} /></div>
                    <div className="flex-1"><RecipeReviewCard  {...productInfo3} /></div>
                    <div className="flex-1"><RecipeReviewCard  {...productInfo4} /></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-80 bg-trueGray-100 dark:bg-trueGray-800 shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Monthly Subscription</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Feature 1</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Feature 2</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Feature 3</span>
                            </li>
                        </ul>
                        <h2 className="text-4xl font-semibold m-4 text-center text-green-500">$90</h2>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-3xl w-full">Subscribe</button>
                    </div>
                </div>
            </Container>


            <Footer />
            {/* <PopupWidget /> */}
        </>
    );
}

export default Product;
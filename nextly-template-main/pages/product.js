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
        price: 795,
        formattedPrice: "$795"
    };
    const productInfo2 = {
        image:
            "https://images.squarespace-cdn.com/content/v1/644b3fec2f86f819f40064b7/1686147656602-TBLPVN9YQ3P6BFBXIXTO/Screenshot+2023-06-07+071932.png?format=750w",
        brand: {
            id: 2,
            name: "MT4 RISK MANAGEMENT"
        },
        price: 795,
        formattedPrice: "$795"
    };
    return (
        <>
            <Head>
                <title>Quant Investments Group</title>
                <meta
                    name="description"
                    content="Nextly is a free landing page template built with next.js & Tailwind CSS"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <Container>
                <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                    Our Products
                </h1>
            </Container>
            <Container>
            <div
                style={{
                    display: 'flex',
                    flexDirection: ['column', 'row'],
                    gap: '3rem',
                    marginLeft: '5rem',
                    marginRight: '5rem',
                }}
            >
                <RecipeReviewCard {...productInfo} />
                <RecipeReviewCard {...productInfo2} />
                <RecipeReviewCard {...productInfo2} />
            </div>
            </Container>
           

            <Footer />
            {/* <PopupWidget /> */}
        </>
    );
}

export default Product;
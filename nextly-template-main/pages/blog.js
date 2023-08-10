import fs from 'fs';
import path from 'path';
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const blog = ({ blogs }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dotsClass: 'slick-dots',
        draggable: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 700, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };
    return (
        <>
            <Head>
                <title>Quant Farming</title>
                <meta
                    name="description"
                    content="Algo Trading Experts"
                />
            </Head>

            <Navbar />
            <Container  >
                <h1 style={{ marginTop: '150px' }} className="z-index relative mt-100 text-center text-6xl font-bold leading-snug tracking-tigh lg:text-8xl lg:leading-tight xl:text-8xl xl:leading-tight text-white">
                    Blogs
                </h1>
            </Container>
            <div className="flex justify-center items-center bg-white dark:bg-trueGray-800 pb-20">
                <main className=" top-44 bg-white dark:bg-trueGray-800 py-8 ">
                    <div className="container mx-auto md:max-w-4xl max-w-xs">

                        <Slider {...settings}>
                            {blogs.map((blog, index) => (
                                <div key={index} className=" border-2 border-solid border-yellow-400  bg-gradient-to-r from-gray-900 via-sky-950 to-sky-950 dark:bg-trueGray-800 shadow-4xl  rounded-lg p-6 max-w-6xl bg-opacity-0">
                                    <h2 className="text-xl font-semibold text-white mb-4">{blog.title}</h2>
                                    <p className="text-gray-400 text-justify">{blog.content}</p>
                                    <a href="#" className="mt-4 block text-yellow-400">Read More</a>
                                </div>
                            ))}
                        </Slider>



                    </div>
                </main>

            </div>
            <Footer />
        </>

    );
}
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'pages/data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const blogs = JSON.parse(jsonData);


    return {
        props: {
            blogs,
        },
    };
}
export default blog;
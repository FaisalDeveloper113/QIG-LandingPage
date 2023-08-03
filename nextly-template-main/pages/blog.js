import fs from 'fs';
import path from 'path';
import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
const blog = ({ blogs }) => {

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
                <main className="relative top-44 bg-white dark:bg-trueGray-800 min-h-screen py-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid gap-4 md:grid-cols-3">
                            {blogs.map((blog, index) => (
                                <div key={index} className="  bg-gradient-to-r from-gray-900 via-sky-950 to-sky-950 dark:bg-trueGray-800 shadow-lg rounded-lg p-6 max-w-6xl bg-opacity-0">
                                    <h2 className="text-xl font-semibold text-white mb-4">{blog.title}</h2>
                                    <p className="text-gray-400 text-justify">{blog.content}</p>
                                    <a href="#" className="mt-4 block text-yellow-500">Read More</a>
                                </div>
                            ))}
                        </div>


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
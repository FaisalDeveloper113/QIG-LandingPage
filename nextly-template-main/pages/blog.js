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
                <title>Quant Investments Group</title>
                <meta
                    name="description"
                    content="Algo Trading Experts"
                />
            </Head>

            <Navbar />
            <Container  >
                <h1 style={{ marginTop: '150px' }} className="z-index relative mt-100 text-center text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-8xl lg:leading-tight xl:text-8xl xl:leading-tight dark:text-white">
                    Blogs
                </h1>
            </Container>
            <div  className="flex justify-center items-center">
            <main className="relative scontainer mx-auto mt-8">
           
                {blogs.map((blog, index) => (
                    
                        <div key={index} className="bg-trueGray-800 shadow-lg rounded-lg p-6 m-2 max-w-6xl">
                            <h2 className="text-xl font-semibold mb-4">{blog.title}</h2>
                            <p className="text-gray-600">{blog.content}</p>
                            <a href="#" className="mt-4 block text-blue-500">Read More</a>
                        </div>
                    
                ))}
              
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
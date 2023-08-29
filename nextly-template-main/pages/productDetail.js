import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { useRouter } from 'next/router';

const productDetail = () => {
    const router = useRouter();
  const { name } = router.query;
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
                {name}
            </h1>
        </Container>
        </>
     );
}
 
export default productDetail;
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Feature from "../components/services";
const Service = () => {

    return (
        <>
            <Head>
                <title>Quant Investments Group</title>
                <meta
                    name="description"
                    content="Algo Trading Experts"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />
            <SectionTitle className = "z-20"  title="Contact Us !">
                Get in touch and let us know how we can help.
            </SectionTitle>
            {/* <Faq /> */}
            <Cta className = "z-20"/>
            <Footer />
            {/* <PopupWidget /> */}
        </>
    );
}

export default Service;
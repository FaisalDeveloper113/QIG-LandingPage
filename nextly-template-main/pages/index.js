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
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const checkLoggedIn = () => {
  return new Promise((resolve) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      resolve(false);
    } else {
      resolve(true);
    }
  });
};

const Home = () => {
  ////////////////
  const router = useRouter();

  useEffect(() => {
    checkLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        router.push("/comingSoon");
      }
    });
  }, [router]);
  ///////////////

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const slideUpVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -250 },
  };
  const slideRightVariants = {
    visible: { opacity: 1, x: 150, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 0 },
  };
  const slideLeftVariants = {
    visible: { opacity: 1, x: -100, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 0 },
  };
  return (
    <>
      <Head>
        <title>Quant Farming</title>
        <meta name="description" content="Algo Trading Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/*
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square"
      >
        <Video /></motion.div>
        */}
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={slideUpVariants}
        className="square"
      >
        <Testimonials />
      </motion.div>
      {/* <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;

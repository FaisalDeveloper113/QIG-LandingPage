import Image from "next/image";
import React from "react";
import Container from "./container";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Benefits = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
  const slideUpVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 0 }
  };
  const slideRightVariants = {
    visible: { opacity: 1, x: 150, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 0 }
  };
  const slideLeftVariants = {
    visible: { opacity: 1, x: -100, transition: { duration: 1 } },
    hidden: { opacity: 0, x: 0 }
  };
  const { data } = props;
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mt-20 pt-20">

        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
          <div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
              className="square"
            >
              <Image
                src={data.image}
                width="521"
                height="auto"
                alt="Benefits"
                className={"object-cover"}
                placeholder="blur"
                blurDataURL={data.image.src}
              />
            </motion.div>

          </div>


        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${data.imgPos === "right" ? "lg:justify-end" : ""
            }`}>

          <div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={slideUpVariants}
              className="square"
            >
              <div className="flex flex-col w-full mt-4">
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {data.title}
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {data.desc}
                </p>
              </div>

              <div className="w-full mt-5">
                {data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc}
                  </Benefit>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

      </Container>
    </>
  );
};

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-indigo-50",
          })}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  );
}

export default Benefits;

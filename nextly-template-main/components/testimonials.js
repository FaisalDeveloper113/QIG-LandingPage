import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 xl:px-10">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-12 rounded-2xl dark:bg-trueGray-800">
            <p className="md:text-2xl sm:text-sm leading-normal ">
            Among the various automated trading platforms I've explored, none can rival the unmatched quality of Quant Farming. The user-friendly interface, superb customer support, and consistently profitable outcomes make it the ultimate choice for any serious trader.</p>

            <Avatar
              image={userOneImg}
              name="Faisal Iqbal"
              title="Software Engineer"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 rounded-2xl p-12 dark:bg-trueGray-800">
            <p className="md:text-2xl sm:text-sm leading-normal ">
            Through this remarkable auto trading system, I've finally discovered a passive income stream from trading. It demands minimal effort while consistently delivering extraordinary results. It's truly a marvel.
            </p>

            <Avatar
              image={userTwoImg}
              name="Alexander Accoyle"
              title="Banking"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 p-12 rounded-2xl dark:bg-trueGray-800">
            <p className="md:text-2xl sm:text-sm leading-normal ">
            The transparency and accuracy exhibited by Quant Farming  have left me astounded. Their performance reports align flawlessly with my own results, and their unwavering commitment to honesty and ethical practices is highly commendable.
            </p>

            <Avatar
              image={userThreeImg}
              name="Sawyer Oliphant"
              title="Algo Trader"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
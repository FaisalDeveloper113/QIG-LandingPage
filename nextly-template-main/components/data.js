import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Tailored Solutions to Meet Your Needs",
  desc: "QIG guarantees prompt and efficient trade execution, capitalizing on favorable market conditions and minimizing delays for optimal entry and exit points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automated Trading",
      desc: "Empower your trading strategies with our MQL4 and MQL5 expertise. From custom indicators to automated trading bots, we deliver tailored coding solutions to optimize your trading performance and achieve your financial goals.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Smart Contracts",
      desc: "Unlock the potential of blockchain technology with our expert smart contract code solutions. Streamline transactions, enhance security, and automate processes with our cutting-edge development expertise.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Decentralized Finance ",
      desc: "Experience the future of finance with our decentralized finance (DeFi) solutions. Seamlessly navigate the world of blockchain-based financial applications, leverage decentralized exchanges, yield farming, and liquidity provision to unlock new opportunities and take control of your financial destiny.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Your Complete Web Solution",
      desc: "Elevate your online presence with our comprehensive MERN (MongoDB, Express.js, React.js, Node.js) stack web development solutions. From captivating front-end design to robust back-end functionality, we deliver dynamic and scalable websites tailored to meet your business needs.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Discover the Advantages of Choosing QIG",
  desc: "Using QIG as your partner in this journey allows you to experience numerous advantages. Our trading system involves the automation of trade order generation, placement, and execution, eliminating the need for manual intervention. A few more reasons why to choose us:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "High Execution",
      desc: "QIG guarantees prompt and efficient trade execution, capitalizing on favorable market conditions and minimizing delays for optimal entry and exit points.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Error-free Code",
      desc: "With our efficiently automated trading systems that are built upon thoroughly tested and error-free code, experience minimized chances of human errors. It ensures accurate and reliable trade execution.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Customer support",
      desc: "QIG provides personalized customer support, offering guidance, assistance, and prompt resolution of queries to ensure a smooth and satisfying trading experience for users.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };

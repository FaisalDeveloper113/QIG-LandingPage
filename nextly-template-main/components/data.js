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
  title: "Empower Your Trades with Quant Farming",
  desc: "Quant Farming guarantees prompt and efficient trade execution, capitalizing on favorable market conditions and minimizing delays for optimal entry and exit points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Automated Trading",
      desc: "Empower your trading strategies with our MQL4 and MQL5 expertise. From custom indicators to automated trading bots, we deliver tailored coding solutions to optimize your trading performance and achieve your financial goals.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Expert Advisors",
      desc: "Our Expert Advisors are intelligent and automated allies designed to enhance your trading experience. Powered by advanced algorithms, they analyze market trends, execute trades, and manage risks efficiently, eliminating human emotions from the equation.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Indicators ",
      desc: "We specialize in crafting cutting-edge solutions for Indicators, empowering traders and investors with data-driven insights for smarter decision-making. Harness the power of our expertise to optimize your strategies and stay ahead in the dynamic financial landscape.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "Account Management",
      desc: "Trust your financial success to our expert Account Management services. With a focus on risk management and tailored strategies, we diligently oversee and grow your investment portfolio. Our seasoned professionals navigate the markets, making informed decisions to optimize returns while preserving capital. ",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Discover the Advantages of Choosing Quant Farming",
  desc: "Using Quant Farming as your partner in this journey allows you to experience numerous advantages. Our trading system involves the automation of trade order generation, placement, and execution, eliminating the need for manual intervention. A few more reasons why to choose us:",
  image: benefitTwoImg,
  bullets: [
    {
      title: "High Execution",
      desc: "Quant Farming guarantees prompt and efficient trade execution, capitalizing on favorable market conditions and minimizing delays for optimal entry and exit points.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Error-free Code",
      desc: "With our efficiently automated trading systems that are built upon thoroughly tested and error-free code, experience minimized chances of human errors. It ensures accurate and reliable trade execution.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Customer support",
      desc: "Quant Farming provides personalized customer support, offering guidance, assistance, and prompt resolution of queries to ensure a smooth and satisfying trading experience for users.",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };

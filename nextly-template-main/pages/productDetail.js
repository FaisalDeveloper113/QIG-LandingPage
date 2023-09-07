import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";
import { useRouter } from 'next/router';

const productDetail = () => {
    const router = useRouter();
  const { name,id } = router.query;

  const products = [
    {
      id: '1',
      description: 'The Apex Mean Reversion Algo, your next-generation MT4-based trading software.'+
      'Drawing from the potency of artificial intelligence and machine learning, it condenses'+
      'the complexities of market dynamics into a robust mean reversion system. Crafted from'+
      'meticulous statistical analysis, this tool identifies potential price retracements to the'+
      'mean, transforming market chaos into profitable, actionable decisions.'+
      'The Apex Mean Reversion Algo expertly executes trades by capitalizing on temporary'+
      'price distortions. It offers an intuitive user interface, perfectly blending simplicity and'+
      'sophistication, tailored for both beginners and experienced traders. Enjoy access to'+
      'real-time analytics, straightforward buy and sell signals, and customizable trading'+
      'parameters that sync seamlessly with your unique risk tolerance and investment goals.'+
      'Security is paramount in our software. We have employed advanced encryption and'+
      'layered cybersecurity protocols, safeguarding your privacy. The Apex Mean Reversion'+
      'Algo is more than just a strategy - it is a revolution in trading technology. With Apex, trade'+
      'with the accuracy and confidence of a seasoned market veteran.',
      basic:
      '<br><br><Strong>BASIC - Features:</Strong>'+
      '<br>RSI based Strategy, Cross below value, cross above value'+
      '<br>TP @ Value'+
      '<br>SL @ Value'+
      '<br><Strong><u>GOLD - EXPERT ORDER MANAGEMENT</u></Strong> (COMES WITH OPTIMIZED INPUTS FOR ONE'+
      'TICKER, US30, XAUUSD, NAS100, or USOIL) <Strong><u>EXTRA $129 Charge</u></Strong>'+
      '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>'+
      '<br>3 pre-determineTP’s'+
      '<br>2 trailing SL’s'+
      '<br>Regular SL or Optional “Risk Management Hedging” SL'+
      '<br>% orders closed per trade'+
      '<br>Time Filter'+
      '<br>Volume Filter',
    },
    {
      id: '2',
      description: "The Accelerator Momentum Algo, an MT4-based trading software that is designed to take your " +
      "trading to new levels of precision and profitability. This revolutionary program leverages the " +
      "time-tested strategy of moving average crossover and infuses it with advanced AI and machine " +
      "learning capabilities. Built to capture the powerful undercurrents of market trends, this software " +
      "expertly identifies key crossover points between short-term and long-term moving averages, " +
      "offering potential entry and exit points for your trades. " +
      "Its user-friendly interface ensures seamless navigation, real-time analytics, and effortless " +
      "visualization of moving average crossovers. The software's customization options allow you to " +
      "adjust your moving average parameters, aligning perfectly with your unique trading style, risk " +
      "tolerance, and investment goals. With a sophisticated filtering system, it skillfully differentiates " +
      "between significant market signals and mere noise, empowering you with high-quality trade " +
      "opportunities. " +
      "We value your security as much as your success. The Accelerator Momentum Algo is fortified " +
      "with state-of-the-art encryption protocols and multiple layers of cybersecurity measures, " +
      "ensuring the utmost safety of your investments and personal data. Propel your trading journey " +
      "with the Accelerator Momentum Algo, as it navigates the market's momentum with precision " +
      "and speed.",
      basic:
      '<br><br><Strong>BASIC - Features:</Strong>'+
      '<br>RSI based Strategy, Cross below value, cross above value'+
      '<br>TP @ Value'+
      '<br>SL @ Value'+
      '<br><Strong><u>GOLD - EXPERT ORDER MANAGEMENT</u></Strong> (COMES WITH OPTIMIZED INPUTS FOR ONE'+
      'TICKER, US30, XAUUSD, NAS100, or USOIL) <Strong><u>EXTRA $129 Charge</u></Strong>'+
      '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>'+
      '<br>3 pre-determineTP’s'+
      '<br>2 trailing SL’s'+
      '<br>Regular SL or Optional “Risk Management Hedging” SL'+
      '<br>% orders closed per trade'+
      '<br>Time Filter'+
      '<br>Volume Filter',
    },
    {
      id: '5',
      description: "The ACT Trend Indicator, a state-of-the-art tool for MT4 and TradingView platforms. This " +
      "cutting-edge solution harnesses the power of customizable moving averages, offering you the " +
      "perfect compass to guide your trading decisions in ever-shifting markets. " +
      "The ACT Trend Indicator goes beyond the traditional confines of standard trend indicators. With " +
      "its core engine powered by customizable moving averages, it offers you an unparalleled degree " +
      "of flexibility in tailoring your trend analysis. The indicators also use customizable relative " +
      "strength inputs, that help find liquidity zones and reversions. This means you can fine-tune the " +
      "tool to suit your unique trading style and goals, ensuring maximum relevance to your analysis. " +
      "User-friendliness is the hallmark of the ACT Trend Indicator. Regardless of your experience level, " +
      "you'll find the tool intuitive to use on both MT4 and TradingView. It offers clear, easy-to-interpret " +
      "visuals that help you quickly identify prevailing trends and potential reversals. Underneath the " +
      "simple interface, advanced algorithms work tirelessly, ensuring the accuracy and reliability of " +
      "the trend data. Step into a new realm of trend analysis with the ACT Trend Indicator, where " +
      "market trends are no longer elusive but a clear path to successful trades."
    ,
      basic:
      '<br><br>BASIC - Default Settings'+
     
      '<br><Strong><u>GOLD - EXPERT ORDER MANAGEMENT</u></Strong> (COMES WITH OPTIMIZED INPUTS FOR ONE'+
      'TICKER, US30, XAUUSD, NAS100, or USOIL) <Strong><u>EXTRA $129 Charge</u></Strong>'
      ,
    },
    {
        id: '3',
        description: "Experience the full power of algorithmic trading with our Alpha Algo Suite – an " +
        "all-encompassing, dynamic package for the MT4 platform that brings together the Apex " +
        "Mean Reversion Algo, with the Accelerator Momentum Algo, the Fortress Risk " +
        "Management algo, with inclusion of the ACT TradingView Indicator. This suite is a " +
        "masterfully curated collection of our most sophisticated tools, designed to seamlessly " +
        "integrate and elevate your trading journey. " +
        "The combination of these tools provide for a fully automated, sophisticated trading " +
        "system designed to maximize returns hands-free. With full transparency of the system, " +
        "you’ll know exactly how it runs with video descriptions and walkthroughs. The algo is " +
        "yours to run, with full setup on your own virtual private server, where you can make " +
        "adjustments to adapt the algo to market conditions, in addition to being connected with " +
        "a community of traders all running the algo. " +
        "Whether you're a seasoned trader or new to the field, our program ensures a seamless, " +
        "collaborative, and secure experience that aligns with your trading goals. Revolutionize " +
        "your trading journey by harnessing the power of AI, risk management, and personalized " +
        "algorithms, and watch as your trading ideas evolve into automated strategies that " +
        "resonate with your individual style and preferences.",
        basic:
        ''
        
      },
    {
        id: '6',
        description: "The Accelerator Momentum Algo, an MT4-based trading software that is designed to take your " +
        "trading to new levels of precision and profitability. This revolutionary program leverages the " +
        "time-tested strategy of moving average crossover and infuses it with advanced AI and machine " +
        "learning capabilities. Built to capture the powerful undercurrents of market trends, this software " +
        "expertly identifies key crossover points between short-term and long-term moving averages, " +
        "offering potential entry and exit points for your trades. " +
        "Its user-friendly interface ensures seamless navigation, real-time analytics, and effortless " +
        "visualization of moving average crossovers. The software's customization options allow you to " +
        "adjust your moving average parameters, aligning perfectly with your unique trading style, risk " +
        "tolerance, and investment goals. With a sophisticated filtering system, it skillfully differentiates " +
        "between significant market signals and mere noise, empowering you with high-quality trade " +
        "opportunities. " +
        "We value your security as much as your success. The Accelerator Momentum Algo is fortified " +
        "with state-of-the-art encryption protocols and multiple layers of cybersecurity measures, " +
        "ensuring the utmost safety of your investments and personal data. Propel your trading journey " +
        "with the Accelerator Momentum Algo, as it navigates the market's momentum with precision " +
        "and speed.",
        basic:
        '<br><br><Strong>BASIC - Features:</Strong>'+
        '<br>RSI based Strategy, Cross below value, cross above value'+
        '<br>TP @ Value'+
        '<br>SL @ Value'+
        '<br><Strong><u>GOLD - EXPERT ORDER MANAGEMENT</u></Strong> (COMES WITH OPTIMIZED INPUTS FOR ONE'+
        'TICKER, US30, XAUUSD, NAS100, or USOIL) <Strong><u>EXTRA $129 Charge  per ticker </u></Strong>'+
        '<br><Strong>FORTRESS RISK MANAGEMENT COMBINED - % BASED LOSS and Auto Lot Scaling</Strong>'+
        '<br>3 pre-determineTP’s'+
        '<br>2 trailing SL’s'+
        '<br>Regular SL or Optional “Risk Management Hedging” SL'+
        '<br>% orders closed per trade'+
        '<br>Time Filter'+
        '<br>Volume Filter',
      },
    // Add more products here
  ];
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }
  

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
        <div  >
            <h1 style = {{marginTop:'150px'}} className="font-mono z-index relative mt-100 text-center text-4xl font-bold leading-snug tracking-tight lg:text-6xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
                
                {name}
            </h1>
           
           <div style = {{marginTop:'150px'}} className="  font-mono w-full relative text-lg p-8 lg:p-14 xl:p-14 bg-white dark:bg-trueGray-800">
            <p className="z-index relative text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: product.description }}></p>
            <p  className="text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: product.basic }}></p>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default productDetail;
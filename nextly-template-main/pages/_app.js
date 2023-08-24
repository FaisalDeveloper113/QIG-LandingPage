import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      
      <Component {...pageProps} />
     <ToastContainer />
    </ThemeProvider>
  );
}

export default MyApp;

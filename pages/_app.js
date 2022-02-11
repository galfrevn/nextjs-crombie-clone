import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-black">
      <Navbar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
}

export default MyApp;

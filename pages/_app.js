import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import BottomOverlay from '../components/BottomOverlay'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <NextNProgress height={1} color="#FFF" options={{ showSpinner: false }} />
      <div className="bg-black">
        <Navbar />
        <AnimatePresence>
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
        </AnimatePresence>
        <BottomOverlay />
      </div>
    </>
  );
}

export default MyApp;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { motion, AnimatePresence } from "framer-motion";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

function BrandsCarousel() {
  const [brand, setBrand] = useState("Software");

  return (
    <div className="px-8 pb-1 transition-all duration-1000">
      <Carousel
        autoPlay={true}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={true}
        arrows={false}
      >
        <button onClick={() => setBrand("Software")}>
          <p
            className={`${
              brand === "Software"
                ? "text-[12px] text-white "
                : "text-[12px] text-[#666] "
            }`}
          >
            Software Devs Firms:
          </p>
        </button>
        <button onClick={() => setBrand("Digital")}>
          <p
            className={`${
              brand === "Digital"
                ? "text-[12px] text-white "
                : "text-[12px] text-[#666] "
            }`}
          >
            Digital Companies:
          </p>
        </button>
        <button onClick={() => setBrand("Marketing")}>
          <p
            className={`${
              brand === "Marketing"
                ? "text-[12px] text-white "
                : "text-[12px] text-[#666] "
            }`}
          >
            Marketing & Advertising:{" "}
          </p>
        </button>
      </Carousel>

      {brand === "Software" && (
        <div className="grid grid-rows-1 grid-cols-3 py-6">
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand1"
                src="https://crombie.dev/_nuxt/img/dd9d34b.png"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-12 h-12"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand2"
                src="https://crombie.dev/_nuxt/img/2970907.png"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-14 h-6"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand3"
                src="https://crombie.dev/_nuxt/img/79380e0.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-12 h-12"
              />
            </AnimatePresence>
          </div>
        </div>
      )}
      {brand === "Digital" && (
        <div className="grid grid-rows-1 grid-cols-3 py-6">
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand4"
                src="https://crombie.dev/_nuxt/img/8b142e9.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-12 h-8"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand5"
                src="https://crombie.dev/_nuxt/img/7baf41d.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-14 h-12"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand6"
                src="https://crombie.dev/_nuxt/img/5b4454a.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-14 h-7"
              />
            </AnimatePresence>
          </div>
        </div>
      )}
      {brand === "Marketing" && (
        <div className="grid grid-rows-1 grid-cols-3 py-6">
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand7"
                src="https://crombie.dev/_nuxt/img/3dba537.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-12 h-5"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand8"
                src="https://crombie.dev/_nuxt/img/2d5f1bd.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-12 h-12"
              />
            </AnimatePresence>
          </div>
          <div className="flex justify-center items-center">
            <AnimatePresence>
              <motion.img
                key="brand3"
                src="https://crombie.dev/_nuxt/img/aa1ac7b.png"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="w-14 h-3"
              />
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrandsCarousel;

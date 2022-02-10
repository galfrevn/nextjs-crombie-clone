/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

function PageHeader({ page }) {
  return (
    <>
      {page === "home" && (
        <div className="pt-[70px] ">
          <div className="px-8 text-white">
            <div className="font-extrabold text-3xl mb-4">
              <h1 className="text-[#777]">hello_world</h1>
              <h1>we are</h1>
              <h1>Crombie</h1>
            </div>

            <p className="text-[7px] ">
              We build digital products through <br />
              technology, brains, and dedication.
            </p>
          </div>

          <div className="my-7">
            <Image
              layout="responsive"
              width="100%"
              height="46px"
              src="https://crombie.dev/_nuxt/img/b703e84.png"
              alt=""
            />
          </div>
        </div>
      )}
      {page === "culture" && (
        <div className="bg-black" >
          <div className="h-screen relative">
            <img
              src="https://crombie.dev/_nuxt/img/2af008d.png"
              className="h-screen w-[2000px] object-cover "
              alt="Background"
            />
            <h1 className="font-extrabold text-xl absolute left-8 top-[40%] ">
              An experienced team of innovators that understand what digital
              business need
            </h1>
          </div>
          <div className="px-8 text-xs font-bold leading-4" >
            <p className="text-[#f36] " >Effort, dedication, and professionalism</p>
            <p>
              are the main cells you will find in our DNA. We expect people here
              to give their best and each accomplished goal will not go
              unnoticed.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default PageHeader;

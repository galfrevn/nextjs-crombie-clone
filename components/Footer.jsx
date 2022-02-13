import Image from "next/image";
import React from "react";
import BlackButton from "../components/ui/BlackButton";

function Footer() {
  return (
    <div className="relative">
      <div className="pl-8 pr-32 pb-20 ">
        <h1 className="font-extrabold text-xl mb-4">
          Now that you know what we can do, let&apos;s do it for you.
        </h1>
        <p className="text-[11px] ">
          Whether from scratch or in advanced stages, we can make it happen.
        </p>
        <BlackButton text="Get it touch" />
      </div>

      <div className="absolute right-0 top-0 space-y-7">
        <div className="bg-[#80319b] w-16 h-10 "></div>
        <div className="bg-[#ee326c] w-16 h-10 "></div>
        <div className="bg-[#ffb12a] w-16 h-10 "></div>
        <div className="bg-[#1bb55f] w-16 h-10 "></div>
      </div>

      <div className="absolute left-8 bottom-4 ">
        <div className="flex items-center">
          <p className="text-[9px] text-[#666] ">Find us on</p>
          <div className="w-9 ml-1 mb-1">
            <Image
              src="https://crombie.dev/_nuxt/img/ed5f716.svg"
              alt=""
              layout="responsive"
              width="100%"
              height="38px"
            />
          </div>
        </div>

        <p className="text-[9px] text-[#666] ">
          Copyright © 2022. Made by Valentín Galfré
        </p>
      </div>
    </div>
  );
}

export default Footer;

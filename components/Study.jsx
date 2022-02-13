import Image from "next/image";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import BlackButton from "../components/ui/BlackButton"


const handleClick = () => {
  console.log("Boton");
}

function Study() {
  return (
    <div className="pt-[90px] bg-black ">
      <div className="px-8 text-white">
        <p className="text-[11px] text-[#777777] ">
          We love developing projects that will take our clients to the next
          level
        </p>
      </div>

      <div className="my-2 relative w-full">
        <div>
          <Image
            layout="responsive"
            objectFit="cover"
            width="100%"
            height="90%"
            src="https://crombie.dev/_nuxt/img/68768bd.png"
            alt=""
          />
        </div>
        <div className="absolute px-8 left-0 top-24">
          <div className="flex space-x-2 items-center text-[#777777] mb-6">
            <button onClick={handleClick}>
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <p className="text-[10px] ">
              <a href="#" className="text-white font-bold">
                1
              </a>{" "}
              / 2
            </p>
            <button onClick={handleClick} >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          <h1 className="font-extrabold text-3xl mb-4">Flopster</h1>
          <p className="text-[7px] ">
            We developed this mobile application to connect pet lovers in Dubai.
            The goal was to build a community of users who can babysit each
            other&apos;s pets on demand.
          </p>
          
          <BlackButton text="View case study" />
        </div>
      </div>
    </div>
  );
}

export default Study;

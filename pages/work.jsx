/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import BlackButton from "../components/ui/BlackButton";

export default function Work() {
  const [work, setWork] = useState("Flopster");
  const [info, setInfo] = useState({});

  useEffect(() => {
    switch (work) {
      case "Flopster":
        setInfo({
          title: "Flopster: UX/UI Design, Mobile & Back-End Development",
          desc: "A central platform that helps build and grow a community of local pet lovers, right on your door step.",
          src: "_nuxt/img/93aa32b.png",
        });
        break;
      case "Lazo":
        setInfo({
          title: "Lazo: UX/UI Design, Mobile & Back-End Development",
          desc: "An app made to encourage neighbours to participate and collaborate with the community.",
          src: "_nuxt/img/e4e90c8.png",
        });
        break;
      case "GP":
        setInfo({
          title: "GP Stats: UX/UI Design, Mobile & Back-End Development",
          desc: "Mobile App for golfers that tracks their game with data and stats to improve their performance.",
          src: "_nuxt/img/6d23605.png",
        });
        break;
      default:
        setInfo({
          title: "Error",
          desc: "In fetching data",
          src: "_nuxt/img/3f56fa0.png",
        });
        break;
    }
  }, [work]);

  return (
    <div className="relative w-screen h-screen">
      <div className="px-8 pt-24">
        <p className="text-[#666] w-2/4 relative z-20 text-[10px] ">
          Take a look at some of the experiences we <br /> created for
          real-world users.
        </p>

        <div className="mt-10 flex flex-col items-start ">
          <button onClick={() => setWork("Flopster")}>
            <h1
              className={`${
                work === "Flopster" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              Flopster
            </h1>
          </button>
          <button onClick={() => setWork("Lazo")}>
            <h1
              className={`${
                work === "Lazo" ? "text-white" : "text-[#181816]"
              } relative z-10 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              Lazo
            </h1>
          </button>
          <button onClick={() => setWork("GP")}>
            <h1
              className={`${
                work === "GP" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              GP <br /> Stats
            </h1>
          </button>
          <button onClick={() => setWork("Proode")}>
            <h1
              className={`${
                work === "Proode" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              Proode
            </h1>
          </button>
          <button onClick={() => setWork("Serenisima")}>
            <h1
              className={`${
                work === "Serenisima" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              La <br /> Serenisima
            </h1>
          </button>
          <button onClick={() => setWork("Hand")}>
            <h1
              className={`${
                work === "Hand" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              The <br /> Hand <br /> Project
            </h1>
          </button>
          <button onClick={() => setWork("Link")}>
            <h1
              className={`${
                work === "Link" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              New <br /> Link
            </h1>
          </button>
          <button onClick={() => setWork("Travel")}>
            <h1
              className={`${
                work === "Travel" ? "text-white" : "text-[#181816]"
              } relative z-20transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              Assist <br /> Travel
            </h1>
          </button>
          <button onClick={() => setWork("Recreo")}>
            <h1
              className={`${
                work === "Recreo" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              ReCreo
            </h1>
          </button>
          <button onClick={() => setWork("SWC")}>
            <h1
              className={`${
                work === "SWC" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              SWC
            </h1>
          </button>
          <button onClick={() => setWork("EliPro")}>
            <h1
              className={`${
                work === "EliPro" ? "text-white" : "text-[#181816]"
              } relative z-20 transition-all duration-700 text-left font-extrabold text-4xl mb-4 `}
            >
              EliPro
            </h1>
          </button>
        </div>

        <ImageComp source={info.src} />

        <div className="fixed right-10 w-36 bottom-40 z-20 text-white">
          <p className="text-[11px] text-[#666] mb-2 ">{info.title} </p>
          <p className="text-[9px] ">{info.desc} </p>
          <BlackButton text="View case study" />
        </div>
      </div>
    </div>
  );
}

export function ImageComp({ source }) {
  return (
    <div>
      <img
        src={`https://crombie.dev/${source}`}
        alt=""
        className="absolute top-0 w-92 right-0"
      />
    </div>
  );
}

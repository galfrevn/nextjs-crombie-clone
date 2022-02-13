import Image from "next/image";
import React from "react";
import BlackButton from "../components/ui/BlackButton"

function Services() {
  return (
    <div className="pt-[90px] bg-black">
      <div className="px-8 text-white">
        <div className="font-extrabold text-3xl mb-4">
          <h1>Born digital, live digital.</h1>
        </div>

        <p className="text-[11px] ">
          As a digital partner, we are dedicated to providing custom software
          services. Web and Mobile projects focusing on quality standards,
          end-to-end.
        </p>

        <BlackButton text="Check our services" />

      </div>

      <div>
        <Image
          layout="responsive"
          width="100%"
          height="80%"
          src="https://crombie.dev/_nuxt/img/b0671cb.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Services;

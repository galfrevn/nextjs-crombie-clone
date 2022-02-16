import Image from "next/image";
import React from "react";

function ErrorHeader() {
  return (
    <div className="pt-[70px] ">
      <div className="px-8 text-white">
        <div className="font-extrabold text-3xl mb-4">
          <h1 className="text-[#777]">Error in line 404</h1>
          <h1>we are</h1>
          <h1>Crombie</h1>
        </div>

        <p className="text-[7px] ">
          We couldn&apos;t find this page :/ <br />
          Try going to the homepage! and follow the correct path
        </p>
      </div>

      <div className="my-7">
        <Image
          layout="responsive"
          width="100%"
          height="46px"
          src="https://crombie.dev/_nuxt/img/b703e84.png"
          alt=""
          placeholder="blur"
          blurDataURL="https://crombie.dev/_nuxt/img/b703e84.png"
        />
      </div>
    </div>
  );
}

export default ErrorHeader;

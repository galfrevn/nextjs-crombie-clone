import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function TesimonialCarousel({ type }) {
  return (
    <div>
      {type === "testimonial" && (
        <Carousel
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
        >
          <div className="relative w-screen h-60">
            <div className="absolute top-0 left-8 z-50 w-20 h-20 ">
              <Image
                src="https://crombie.dev/_nuxt/img/4b1b68d.png"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
                className="rounded-full"
              />
            </div>
            <div className="absolute top-10 z-20 left-32 w-7 h-7">
              <Image
                src="https://crombie.dev/_nuxt/img/c3c5b18.svg"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-full absolute left-0 top-14 flex px-8 flex-col leading-4 text-left pb-4 pt-10 bg-[#f36] ">
              <p className="text-[8px] ">
                Crombie is the result of constant trial and error in my
                professional life, my way to learn day by day. What drives me is
                to create a business that is good for people, good for personal
                development and achievement. Anyone that has ever worked at
                Crombie, will be a better professional and someone’s new friend.
                Crombie is the 2.0 version of a changing company, transforming
                and configuring itself each day
              </p>
              <p className="font-bold text-[8px] mt-2 mb-4">
                Mariano Di Maggio - CEO Crombie
              </p>
            </div>
          </div>

          <div className="relative w-screen h-60">
            <div className="absolute top-0 left-8 z-50 w-20 h-20 ">
              <Image
                src="https://crombie.dev/_nuxt/img/613bd2f.png"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
                className="rounded-full"
              />
            </div>
            <div className="absolute top-10 z-20 left-32 w-7 h-7">
              <Image
                src="https://crombie.dev/_nuxt/img/c3c5b18.svg"
                alt=""
                layout="responsive"
                width="100%"
                height="100%"
              />
            </div>
            <div className="w-full absolute left-0 top-14 flex px-8 flex-col leading-4 text-left pb-4 pt-10 bg-[#f36] ">
              <p className="text-[8px] ">
                Working with Crombie means the discovery of great solutions for
                business and people’s daily lives. It is a combination of
                creativity and hard work to achieve challenging goals. <br />
                Behind every development is an enthusiastic team focused on
                doing their best and that’s always a fantastic starting point.
                Hope you enjoy the same way as us!
              </p>
              <p className="font-bold text-[8px] mt-2 mb-4">
                Laura Mo - PM Crombie
              </p>
            </div>
          </div>
        </Carousel>
      )}
      {type === "brands" && (

        <p>Brands</p>

      )}
    </div>
  );
}

export default TesimonialCarousel;

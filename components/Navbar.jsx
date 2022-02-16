import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const handleNav = () => {
  const menu = document.getElementById("side");
  menu.classList.toggle("-left-96");
  menu.classList.toggle("left-0");
};

function Navbar() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, [scroll]);

  return (
    <nav className="relative Z-60">
      <div
        className={`${
          !scroll || router.pathname === "/work"
            ? "bg-transparent"
            : "bg-[rgba(0,0,0,.75)]"
        } " w-screen transition-all duration-500 px-8 z-30 fixed top-0 left-0 py-4 flex justify-between "`}
      >
        <div className="w-[74px]">
          <Link href="/" passHref>
            <div>
              <Image
                layout="responsive"
                width="100%"
                height="30px"
                src="https://crombie.dev/_nuxt/img/b3434f4.svg"
                alt=""
                priority
              />
            </div>
          </Link>
        </div>

        <button onClick={handleNav}>
          <MenuIcon className="w-4 h-4 text-white" />
        </button>
      </div>

      <div
        id="side"
        className="fixed bg-white w-4/5 h-screen -left-96 top-0 transition-all duration-1000 z-40"
      >
        <div className="text-black px-7 pt-5">
          <p className="text-[7px] text-gray-600">Menu</p>
          <ul className="flex-col flex items-start space-y-0.5 mt-3">
            <Link passHref href="/culture">
              <button onClick={handleNav}>
                <li className="text-[1.3rem] font-extrabold">Culture</li>
              </button>
            </Link>
            <Link passHref href="/services">
              <button onClick={handleNav}>
                <li className="text-[1.3rem] font-extrabold">Services</li>
              </button>
            </Link>
            <Link passHref href="/work">
              <button onClick={handleNav}>
                <li className="text-[1.3rem] font-extrabold">Work</li>
              </button>
            </Link>
          </ul>
          <p className="text-xs font-medium mt-3 mb-2 ">Work With Us</p>
          <Link passHref href="/contact/step-one">
            <button onClick={handleNav}>
              <p className="text-xs cursor-pointer font-medium">
                Let&apos;s talk
              </p>
            </button>
          </Link>

          <p className="text-[7px] my-4 text-gray-600">
            Find us on <strong>Clutch</strong>{" "}
          </p>
        </div>
        <Image
          layout="responsive"
          width="100%"
          height="32px"
          src="https://crombie.dev/_nuxt/img/18a97ff.png"
          alt=""
          className="transform -translate-x-9"
          priority
        />
        <div className="text-gray-600 px-7 pt-5">
          <div className="flex space-x-3 ">
            <FaFacebookF className="w-3 h-3" />
            <FaInstagram className="w-3 h-3" />
            <FaLinkedinIn className="w-3 h-3" />
          </div>
          <p className="text-[7px] mt-4">Copyright © 2022</p>
          <p className="text-[7px] ">Made by Valentín Galfré</p>
        </div>

        <button
          className="absolute right-5 top-5 text-gray-600"
          onClick={handleNav}
        >
          <XIcon className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

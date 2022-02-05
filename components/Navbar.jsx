import React from "react";
import { MenuIcon } from '@heroicons/react/outline'
import Image from "next/image";

function Navbar() {

  return (
    <navbar >
      <div className="w-screen px-8 bg-[rgba(0,0,0,.75)] z-10 fixed top-0 left-0 py-4 flex justify-between" >
        <div className="w-[74px]">
          <Image layout="responsive" width="100%" height="30px" src="https://crombie.dev/_nuxt/img/b3434f4.svg" alt="" />
        </div>
        <div>
          <MenuIcon className="w-4 h-4 text-white" />
        </div>
      </div>
    </navbar>
  );
}

export default Navbar;

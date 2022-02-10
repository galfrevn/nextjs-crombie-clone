import { ArrowCircleDownIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";

function BottomOverlay() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, [scroll]);

  return (
    <div
      className={scroll ? "fixed -bottom-20 transition-all duration-1000 left-0 bg-[rgba(0,0,0,.75)] py-2.5 w-full px-8" : "fixed transition-all duration-1000 bottom-0 left-0 bg-[rgba(0,0,0,.75)] py-2.5 w-full px-8" }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <ArrowCircleDownIcon className="w-5 h-5 text-[#383838] " />
          <p className="text-[10px] ml-2 text-[#5f5f5f]">Scroll</p>
        </div>
        <h3 className="text-[11px] font-bold">Let&apos;s talk</h3>
      </div>
    </div>
  );
}

export default BottomOverlay;

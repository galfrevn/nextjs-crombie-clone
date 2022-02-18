import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";

function StepsRow({ step }) {
  const convert = (step) => {
    return step === 1
      ? "w-[20%]"
      : step === 2
      ? "w-[40%]"
      : step === 3
      ? "w-[60%] "
      : step === 4
      ? "w-[80%] "
      : step === 5
      ? "w-[full]"
      : "w-full";
  };

  return (
    <div className="w-screen">
      <div className="text-white flex flex-col items-start  w-3/4">
        {step === 5 ? (
          <div className="flex justify-between w-full items-center mb-1" >
            <p className="text-[9px] ">Let&apos;s do it</p>
            <CheckCircleIcon className="w-4 h-4" />
          </div>
        ) : (
          <div className="flex text-[8px] space-x-1 mb-1">
            <p> {step} </p>
            <p className="text-[#777] ">/</p>
            <p className="text-[#777] "> 5</p>
          </div>
        )}

        <div className="w-full bg-[#979797] h-[1px] transition-all duration-500 ">
          <div
            className={`transition-all duration-500 bg-white h-[1px] ${convert(
              step
            )} `}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default StepsRow;

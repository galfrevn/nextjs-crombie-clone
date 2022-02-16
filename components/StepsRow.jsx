import React from "react";

function StepsRow({ step }) {
  const convert = (step) => {
    return step === 1
      ? "w-[16.66%]"
      : step === 2
      ? "w-[33.33%]"
      : step === 3
      ? "w-1/2 "
      : step === 4
      ? "w-[66.66%] "
      : step === 5
      ? "w-[83.33%]"
      : "w-full";
  };

  return (
    <div className="w-screen">
      <div className="text-white flex flex-col items-start  w-3/4">
        <div className="flex text-[8px] space-x-1 mb-1">
          <p> {step} </p>
          <p className="text-[#777] ">/</p>
          <p className="text-[#777] "> 6</p>
        </div>

        <div className="w-full bg-[#979797] h-[1px] transition-all duration-500 ">
          <div className={`transition-all duration-500 bg-white h-[1px] ${convert(step)} `}></div>
        </div>
      </div>
    </div>
  );
}

export default StepsRow;

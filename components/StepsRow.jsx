import React from "react";

function StepsRow({ step }) {
  return (
    <div className="w-screen" >
      <div className="text-white flex flex-col items-start  w-3/4">
        <div className="flex text-[8px] space-x-1 mb-1">
          <p> {step} </p>
          <p className="text-[#777] ">/</p>
          <p className="text-[#777] "> 6</p>
        </div>

        <div className="w-full bg-[#979797] h-[1px] ">
          <div className="bg-white h-[1px] w-1/6"></div>
        </div>
      </div>
    </div>
  );
}

export default StepsRow;

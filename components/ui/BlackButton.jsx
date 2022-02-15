import React from "react";

function BlackButton({ text, type }) {
  return (
    <button className={`${
      type === "white" ? "text-white mt-0" : "text-[#777] mt-6"
    } bg-transparent text-[8px] px-9 py-1.5 border rounded-full transition-all duration-500 border-[rgba(255,255,255,.3)] hover:bg-white hover:text-black `}
>

      {text}
      </button>
  );
}

export default BlackButton;

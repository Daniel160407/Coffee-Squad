import React from "react";

const MarginLayout = () => {
  return (
    <>
      <div className="flex flex-wrap w-auto h-auto bg-[#8383da] screen-center justify-around">
        <div className="w-2/5 rounded-2xl h-[300px] bg-[#303058] mt-30"></div>
        <div className="w-2/4 rounded-2xl h-[300px] bg-[#303058] mt-30"></div>
        <div className="w-2/4 rounded-2xl h-[300px] bg-[#303058] mt-30"></div>
        <div className="w-2/5 rounded-2xl h-[300px] bg-[#303058] mt-30 mb-10"></div>
      </div>
    </>
  );
};

export default MarginLayout;

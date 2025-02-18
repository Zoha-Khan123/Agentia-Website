import { poweredData } from "@/app/data/powred-data";
import React from "react";

const PoweredCards = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 text-transparent bg-clip-text ">
          Powered by Advanced AI
        </h1>
        <p className="text-sm sm:text-xl">
          Built on cutting edge neural architectures
        </p>
      </div>

      {/* Cards */}
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[1000px] mx-auto md:p-5 lg:p-10 my-10">
          {poweredData.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] flex flex-col md:flex-row justify-between items-center mx-5 gap-10 sm:gap-5 px-5 py-7 rounded-xl relative overflow-hidden transition duration-300 hover:scale-105"
              >
                {/* Right-Side Border */}
                <div className="absolute top-0 right-0 h-full w-1 bg-gradient-to-b from-orange-500 to-yellow-500"></div>

                {/* Left Section: Text Content */}
                <div className="z-10">
                  <h1 className="text-2xl font-bold text-white">
                    {item.heading}
                  </h1>
                  <p className="text-[#a3a3a3]">{item.para}</p>
                </div>

                {/* Right Section: Icon */}
                <div className="w-[150px] h-[100px] sm:w-[200px] sm:h-[150px] bg-orange-500 rounded-2xl flex justify-center items-center z-10">
                  <item.icon className="w-[50px] h-[50px] text-white" />
                </div>

                {/* {/* Hover Shadow Effect */}
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-orange-500/50 to-transparent scale-x-0 transition-transform duration-300 hover:scale-x-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PoweredCards;

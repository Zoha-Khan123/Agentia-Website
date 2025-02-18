import { Bot, ChevronRight } from "lucide-react";
import React from "react";
import AutoText from "../auto-text/auto-text";

const Hero = () => {
  return (
    <div className="h-screen pt-10  bg-gradient-to-b from-black via-black to-yellow-500/20 flex flex-col justify-center items-center space-y-6">
      {/* Powered */}
      <div className="flex justify-center items-center bg-[#191919] text-[#ece826] px-4 py-2 rounded-full gap-2">
        <div className="w-2 h-2 bg-[#ece826] rounded-full mr-2l"></div>
        <div className="text-sm">POWERED BY PANAVERSITY</div>
      </div>

      {/* Heading */}
      <div>
        <h1 className="text-3xl sm:text-6xl flex flex-col justify-center items-center font-bold space-y-3">
          <span className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 text-transparent bg-clip-text">
            Enterprise AI Agents
          </span>
          <span>for the Future</span>
        </h1>
      </div>

      {/* Auto Text */}
      <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-center items-center bg-[#191919] max-w-2xl mx-auto bg-white/5 rounded-xl p-4 sm:p-6 mb-12 border border-yellow-500/20">
        {/* Logo */}
        <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-600 rounded-full p-3 flex-shrink-0">
          <Bot />
        </div>

        {/* Auto text boxes */}
        <div className="ml-4 flex-grow relative">
          <div className="bg-white/5 w-[250px] sm:w-[500px] h-15 rounded-md border border-yellow-500/20">
            <div className="w-full h-full text-sm text-gray-400 whitespace-nowrap text-wrap p-4">
              <AutoText />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 ">
        <div className="flex justify-center items-center bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-bold py-3 px-6 rounded-md shadow-md transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,165,0,0.5)]">
          <button className="borer-none outline-none">
            Deploy Your AI Agent
          </button>
          <ChevronRight />
        </div>
        <button className="text-white font-bold py-3 px-6 rounded-md shadow-md border border-orange-500 hover:opacity-90 hover:shadow-[0_8px_20px_rgba(255,165,0,0.5)] transition-all duration-300 ease-in-out">
          Watch Demo
        </button>
      </div>
    </div>
  );
};

export default Hero;

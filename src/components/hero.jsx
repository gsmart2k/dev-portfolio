/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import smart from "../res/smart.png";

function Hero(props) {
  return (
    <div className="flex flex-col justify-center items-center font-ivy md:flex-row md:justify-around lg:mb-40">
      <div className="flex flex-col  justify-center items-start px-10">
        <div className="relative top-7 z-10 right-7">
          <FontAwesomeIcon
            className=""
            color="#ff6600"
            size="3x"
            icon={faCircle}
          />
        </div>
        <div className="breathe flex flex-col justify-center space-y-4 items-start z-10 md:text-6xl">
          <span className="text-4xl lg:text-7xl">Hi,</span>
          <span className="text-3xl lg:text-7xl">My name is Gbolahan</span>
          <span className="text-[10px] text-slate-500 font-bold md:text-[15px] lg:text-[20px]">
            I am a Full Stack Developer
          </span>
        </div>
      </div>
      <div className="flex flex-row mt-20">
        <div className="bg-primary rounded-t-[60px] rounded-b-[-20px] w-60 h-60 md:h-72 lg:h-96 lg:w-80"></div>
        <div>
          <img
            className="animate w-80 absolute right-0 lg:w-[450px]"
            src={smart}
            alt="Smart"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

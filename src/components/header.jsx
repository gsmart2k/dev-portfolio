/** @format */

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  const [hamOpen, setHamOpen] = useState(false);

  const handleHam = () => {
    hamOpen ? setHamOpen(false) : setHamOpen(true);
  };
  return (
    <div className="flex flex-col justify-end items-end p-5 md:justify-start md:items-start w-100">
      <FontAwesomeIcon
        className="text-primary md:hidden"
        size="1x"
        icon={faBars}
        onClick={handleHam}
      />
      {/* Nav for big screen here */}
      <div className="hidden md:flex md:flex-row md:w-80 md:justify-start md:space-x-5 md:text-[10px] font-bold">
        <nav className="relative top-[-6px]">
          <a href=".">Portfolio</a>
        </nav>
        <nav className="relative top-[-6px]">
          <a href=".">Download My Resume</a>
        </nav>
        <nav className="rounded-b-lg bg-primary p-3 relative top-[-20px] text-white">
          <a href=".">Contact Me</a>
        </nav>
      </div>
      {/* Nav for big screen ends here */}
      {/* Nav for small screens */}
      <div
        className={
          hamOpen
             ? "flex flex-col absolute top-10 left-5 right-5 z-30 justify-center items-center p-5 bg-black opacity-100 w-80 m-auto text-white space-y-5 text-sm md:hidden"
            : "hidden"
        }
      > 
        <nav className="">
          <a href=".">Portfolio</a>
        </nav>
        <nav className="">
          <a href=".">Download My Resume</a>
        </nav>
        <nav className="bg-primary p-3">
          <a href=".">Contact Me</a>
        </nav>
      </div>
      {/* Nav for small screen ends here */}
    </div>
  );
}

export default Header;

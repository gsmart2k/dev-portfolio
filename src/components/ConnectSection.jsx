/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function ConnectSection(props) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-5 my-5">
        <h3 className="text-xl">Contact Me</h3>
        <div className="bg-primary w-10 h-2 relative right-10"></div>
      </div>
      {/*  */}
      <div className="flex flex-row flex-wrap justify-center items-center ">
        <div className="flex flex-col w-40 justify-center items-center shadow-lg mx-1 my-3">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          <div className="flex flex-row justify-between items-center p-5 space-x-10">
            <h3 className="text-sm font-bold">Github</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col w-40 justify-center items-center shadow-lg mx-1 my-3">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <div className="flex flex-row justify-between items-center p-5 space-x-10">
            <h3 className="text-sm font-bold">Linked In</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        <div className="flex flex-col w-40 justify-center items-center shadow-lg mx-1 my-3">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
          <div className="flex flex-row justify-between items-center p-5 space-x-10">
            <h3 className="text-sm font-bold">Whatsapp</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        <div className="flex flex-col w-40 justify-center items-center shadow-lg mx-1 my-3">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          <div className="flex flex-row justify-between items-center p-5 space-x-10">
            <h3 className="text-sm font-bold">Linked In</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default ConnectSection;

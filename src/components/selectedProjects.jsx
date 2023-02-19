/** @format */

import React from "react";
import Jafstar from "../res/jafstar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

function SelectedProjects(props) {
  return (
    <div className="flex flex-col wrap justify-center ">
      <div className="flex flex-col justify-center items-center my-10">
        <h3 className="text-xl">Selected Projects</h3>
        <div className="bg-primary w-10 h-2 relative left-20"></div>
      </div>
      <div className="flex flex-row flex-wrap space-x-2 items-center justify-center p-3">
        {/* Each Project Card */}
        <div className="flex flex-col w-40">
          <div className="w-100">
            <img src={Jafstar} alt="Jafstar" />
          </div>
          <div className="flex flex-row justify-between items-center space-x-3 p-3">
            <h3 className="text-sm font-bold">A Photography Website</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        {/* End */}
        {/* Each Project Card */}
        <div className="flex flex-col w-40">
          <div className="w-100">
            <img src={Jafstar} alt="Jafstar" />
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <h3 className="text-sm font-bold">A Photography Website</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        {/* End */}
        {/* Each Project Card */}
        <div className="flex flex-col w-40">
          <div className="w-100">
            <img src={Jafstar} alt="Jafstar" />
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <h3 className="text-sm font-bold">A Photography Website</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        {/* End */}
        {/* Each Project Card */}
        <div className="flex flex-col w-40">
          <div className="w-100">
            <img src={Jafstar} alt="Jafstar" />
          </div>
          <div className="flex flex-row justify-between items-center p-3">
            <h3 className="text-sm font-bold">A Photography Website</h3>
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
        {/* End */}
      </div>
    </div>
  );
}

export default SelectedProjects;

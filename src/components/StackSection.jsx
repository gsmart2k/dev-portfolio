/** @format */

import React from "react";

function StackSection(props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center p-5">
        <h3 className="text-xl">Stack Section</h3>
        <div className="bg-primary w-10 h-2 relative left-16"></div>
      </div>
      <div className="flex flex-col ">
        {/*  */}
        <div className="flex flex-col p-5 space-y-3 justify-center items-center">
          <h3 className="font-bold">Front End</h3>
          <div className="flex flex-row justify-start items-center space-x-2 text-sm">
            <div className="shadow-lg p-5">HTML</div>
            <div className="shadow-lg p-5">CSS</div>
            <div className="shadow-lg p-5">JavaScript (React JS)</div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex flex-col p-5 space-y-3 justify-center items-center">
          <h3 className="font-bold">Back End</h3>
          <div className="flex flex-row space-x-2 justify-start items-center text-sm">
            <div className="shadow-lg p-5">Node JS (Express)</div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="flex flex-col p-5 space-y-3 justify-center items-center">
          <h3 className="font-bold">Database</h3>
          <div className="flex flex-row space-x-2 justify-start items-center text-sm">
            <div className="shadow-lg p-5">Mongo DB</div>
            <div className="shadow-lg p-5">Postgress ()</div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default StackSection;

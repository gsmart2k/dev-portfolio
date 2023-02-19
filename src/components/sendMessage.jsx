/** @format */

import React from "react";

function SendMessage(props) {
  return (
    <div className="flex flex-col justify-center items-center bg-black w-100 py-5 px-3">
      <div className="flex flex-col justify-center items-center p-5">
        <h3 className="text-xl text-white">Send Me a Message !</h3>
        <div className="bg-primary w-10 h-2 relative right-20"></div>
      </div>
      <form
        className="flex flex-col justify-center items-center space-y-5 w-100 p-3 lg:w-6/12"
        action=""
      >
        <input
          placeholder="Name"
          className="font-tt p-1 rounded w-full"
          type="text"
        />
        <input
          placeholder="Text"
          className="font-tt p-1 rounded w-full"
          type="text"
        />
        <button className="p-2 bg-primary w-full">Send</button>
      </form>
    </div>
  );
}

export default SendMessage;

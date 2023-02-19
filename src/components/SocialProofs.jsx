/** @format */

import React, { useState, useEffect } from "react";

function SocialProofs(props) {
  let [proofCount, setProofCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (proofCount >= 4) {
        setProofCount(0);
      } else {
        setProofCount(proofCount++);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  });
  const Proofs = [
    {
      author: "Kevin. R",
      testimony:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipiscisunt quisquam quae minima deserunt",
    },
    {
      author: "Tara.O",
      testimony:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipiscisunt quisquam quae minima deserunt",
    },
    {
      author: "Joshua. F",
      testimony:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipiscisunt quisquam quae minima deserunt",
    },
    {
      author: "Jibola. O",
      testimony:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipiscisunt quisquam quae minima deserunt",
    },
  ];
  return (
    <div className="container m-auto max-w-xl">
      <div className="flex flex-col justify-center items-center my-5">
        <h3 className="text-xl">Social Proofs</h3>
        <div className="bg-primary w-10 h-2 relative left-20"></div>
      </div>
      <div className="flex flex-col justify-start items-start p-5">
        <>
          <p className="bg-black p-5 text-white font-tt p-10">
            {Proofs[proofCount].testimony}
          </p>
          <div className="p-5">
            <b>{Proofs[proofCount].author}</b>
          </div>
        </>
      </div>
    </div>
  );
}

export default SocialProofs;

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
        "Gbolahan is an awesome developer. He pays attention to details.",
    },
    {
      author: "Tara.O",
      testimony:
        "I met him on a freelance platform and since then, we've been working so closely together with very little or no issues.",
    },
    {
      author: "Joshua. F",
      testimony:
        "He handled my website and I was so impressed. I had given the gig to a former dev and he messaed up the whole thing until I met Gbolahan !.",
    },
    {
      author: "Jibola. O",
      testimony:
        "He helped with my school assignment. I had a bug in my code and i couldn't fix it. I never knew Gbolahan would fix it so quick !",
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

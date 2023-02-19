/** @format */

import React from "react";

function ExperienceSection(props) {
  return (
    <div className="flex flex-col text-center bg-primary px-5 py-10">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-xl">My Experience</h3>
        <div className="bg-white w-10 h-2 relative left-10"></div>
      </div>
      <p className="m-10 text-white lg:px-40">
        I have always looked forward to my days of employment as a developer.
        But before then, I have just always tried to improve my tech skill to
        make me (at least) more suitable for roles. I might be interested in an
        entry-level position. I am looking forward to opportunities that will
        provide me with a platform that will let me build a professional
        foundation and set my feet up!
      </p>
    </div>
  );
}
export default ExperienceSection;

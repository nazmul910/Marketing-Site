import React from "react";
import Video from "./Video";

function HomeTopText() {
  return (
    <div className="font-[font1] mt-72 lg:mt-0 pt-5 text-center text-white">
      <div className="lg:text-[7.5vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center">L'étincelle </div>
      <div className="lg:text-[7.5vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center">
        qui{" "}
        <div className="h-[8vw] w-[16vw] -mt-3 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[7.5vw] text-[10vw] uppercase lg:leading-[8vw] leading-[10vw] flex justify-center items-center">la créativité</div>
    </div>
  );
}

export default HomeTopText;

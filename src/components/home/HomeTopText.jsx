import React from "react";
import Video from "./Video";

function HomeTopText() {
  return (
    <div className="font-[font1] pt-5 text-center text-white">
      <div className="text-[7.5vw] uppercase leading-[8vw] flex justify-center items-center">L'étincelle </div>
      <div className="text-[7.5vw] uppercase leading-[8vw] flex justify-center items-center">
        qui{" "}
        <div className="h-[8vw] w-[16vw] -mt-3 rounded-full overflow-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="text-[7.5vw] uppercase leading-[8vw] flex justify-center items-center">la créativité</div>
    </div>
  );
}

export default HomeTopText;

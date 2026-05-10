import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center text-white justify-center gap-2 ">
      <div className="border-3 hover:border-[#D3FD50] md:h-16 hover:text-[#D3FD50] lg:h-20 xl:h-32 flex items-center px-10 md:px-20 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] md:h-16 hover:text-[#D3FD50] lg:h-20 xl:h-32 flex items-center px-10 md:px-20 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/agency">
          Agency
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;

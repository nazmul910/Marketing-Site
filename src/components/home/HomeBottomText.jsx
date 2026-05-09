import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center text-white justify-center gap-2 ">
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-32 flex items-center px-20 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-32 flex items-center px-20 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/agency">
          Agency
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;

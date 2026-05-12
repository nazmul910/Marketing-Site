import React from "react";
import { Link } from "react-router-dom";

function HomeBottomText() {
  return (
    <div className="font-[font2] flex items-center text-white justify-center gap-2 ">
      <p className=" absolute text-[3.2vw] w-[60vw] md:w-[50vw] lg:w-[17vw] right-2 md:right-10 lg:right-20 bottom-24 md:bottom-32 lg:bottom-72 xl:bottom-32 lg:text-xl xl:text-[0.8vw] font-[font1] leading-relaxed">
        &nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
      </p>
      <div className="border-2 lg:border-3 hover:border-[#D3FD50] md:h-12 hover:text-[#D3FD50] lg:h-20 xl:h-32 flex items-center pt-1 px-5 md:px-5 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/projects">
          Projects
        </Link>
      </div>
      <div className="border-2 lg:border-3 hover:border-[#D3FD50] md:h-12 hover:text-[#D3FD50] lg:h-20 xl:h-32 flex items-center pt-1 px-5 md:px-5 border-white rounded-full uppercase">
        <Link className="text-[4vw] " to="/agency">
          Agency
        </Link>
      </div>
    </div>
  );
}

export default HomeBottomText;

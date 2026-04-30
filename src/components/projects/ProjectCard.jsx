import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div className="w-1/2 relative h-full hover:rounded-4xl overflow-hidden transition-all duration-300 ">
        <img
          className="h-full w-full object-cover"
          src={props?.image1}
          alt=""
        />
        <div className=" absolute group top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase group-hover:opacity-100 transition-all duration-300 opacity-0 text-4xl font-[font1] border-2 text-white border-white px-5 pt-2 rounded-full ">
            Voir le projet
          </h2>
        </div>
      </div>
      <div className="w-1/2 relative h-full hover:rounded-4xl overflow-hidden transition-all duration-300">
        <img
          className="h-full w-full object-cover"
          src={props?.image2}
          alt=""
        />
        <div className=" absolute group top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase group-hover:opacity-100 transition-all duration-300 opacity-0 text-4xl font-[font1] border-2 text-white border-white px-5 pt-2 rounded-full ">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;

import React from "react";
import Video from "../components/home/Video";
import HeroTopText from "../components/home/HomeTopText";
import HeroBottomText from "../components/home/HomeBottomText";

function Home() {
  return (
    <>
      <div className="h-screen w-screen fixed top-0 left-0 right-0">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HeroTopText />
        <HeroBottomText />
      </div>
    </>
  );
}

export default Home;

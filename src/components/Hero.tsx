import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

// import beachVid from "../assets/beachVid.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={require("../assets/beachVid.mp4")}
        // src={require("../assets/video_ff.mp4")}
        autoPlay
        loop
        muted
      />
      <div className="absolute h-full w-full left-0 top-0 bg-gray-900/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Location WorldWide</h2>
        <form
          action=""
          className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90"
        >
          <div>
            <input
              className="bg-transparent w-full focus:outline-none sm:w-[400px] font-[Poppins]"
              type="text"
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import heroVideo from "../assets/heroVideo.mp4";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden  bg-black/65">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={heroVideo}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        <div className="ml-8 mt-[200px]">
          <div className="relative z-10 flex flex-col items-start justify-center h-full text-center text-7xl text-white">
            <h1 className="text-4xl md:text-6xl font-semi-bold">
              Serving You Fresh Style,
            </h1>
            <h1 className="text-4xl md:text-6xl font-semi-bold mt-3">
              Hype Kicks & Tech That Slaps
            </h1>
          </div>

          <div className="relative w-full max-w-4xl mt-[50px]">
            <input
              type="text"
              placeholder="Search by category, price..."
              className="w-full px-4 py-4 pr-14 rounded-xl bg-white text-gray-800 outline-none"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded p-2 hover:bg-gray-800 cursor-pointer">
              <IoIosSearch className="text-white text-lg" />
            </div>
          </div>
          <div className="flex flex-row justify-start gap-x-10 items-center rounded-[10px] p-4 ml-[-15px] mt-[15px]">
            <button className="border border-white text-white p-3 py-2 px-14 rounded-xl bg-[#2223208e] flex gap-x-2 items-center ">
              Fashion <FaArrowRight />
            </button>
            <button className="border border-white text-white p-3 py-2 px-14 rounded-xl bg-[#2223208e] flex gap-x-2 items-center ">
              FootWear <FaArrowRight />
            </button>
            <button className="border border-white text-white p-3 py-2 px-14 rounded-xl bg-[#2223208e] flex gap-x-2 items-center ">
              Fragrance <FaArrowRight />
            </button>
            <button className="border border-white text-white p-3 py-2 px-14 rounded-xl bg-[#2223208e] flex gap-x-2 items-center ">
              Tech <FaArrowRight />
            </button>
          </div>
        </div>
        <div>
          <ul className=" flex flex-row justify-start gap-x-10 items-center rounded-[10px] p-4 ml-[18px] mt-[20px] text-white text-[18px] font-semi-bold font-sans">
            <li>Trusted by:</li>
            <li>MEST</li>
            <li>Generation Gh</li>
            <li>BTL</li>
            <li>PayPal</li>
            <li>MTN MoMo</li>
            <li>GCB</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className='hero'>Hero</div>
//   )
// }

// export default Hero

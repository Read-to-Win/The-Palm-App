import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroVideo from "../assets/heroVideo.mp4";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const partners = [
    { name: "MEST", hoverColor: "hover:text-[#00BFA6]" },
    { name: "Generation Gh", hoverColor: "hover:text-[#3B82F6]" },
    { name: "BTL", hoverColor: "hover:text-[#22C55E]" },
    { name: "PayPal", hoverColor: "hover:text-[#00457C]" },
    { name: "MTN MoMo", hoverColor: "hover:text-[#FFD700]" },
    { name: "GCB", hoverColor: "hover:text-[#F87171]" },
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden bg-black/65">
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

          {/* Search Input */}
          <div className="relative w-full max-w-4xl mt-[50px]">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search by category, price..."
              className="w-full px-4 py-4 pr-14 rounded-xl bg-white text-gray-800 outline-none"
            />
            <div
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded p-2 hover:bg-gray-800 cursor-pointer"
            >
              <IoIosSearch className="text-white text-lg" />
            </div>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-x-6 items-center p-4 ml-[-15px] mt-[15px]">
            {["Fashion", "FootWear", "Fragrance", "Tech"].map((label) => (
              <button
                key={label}
                onClick={() => navigate(`/products?search=${label}`)}
                className="border border-white text-white p-3 py-2 px-10 rounded-xl bg-[#2223208e] flex gap-x-2 items-center hover:bg-white hover:text-black transition duration-300"
              >
                {label} <FaArrowRight />
              </button>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="flex flex-wrap items-center gap-x-6 text-white mt-[20px] font-medium text-lg">
            <span className="text-white">Trusted by:</span>
            {partners.map(({ name, hoverColor }) => (
              <span
                key={name}
                className={`cursor-pointer transition duration-300 ${hoverColor}`}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import meetTeamPic from "../assets/Me.jpg";
import meetTeamPic1 from "../assets/Precious.jpg";
import meetTeamPic2 from "../assets/Abigail.jpg";

const MeetTheTeam = () => {
  return (
    <section className="bg-gradient-to-br from-[#BAC166] via-[#A69D98] to-[#A82A5B] py-16 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest mb-2">Our Squad</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold">Meet the Team</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-[#f3f3f3]">
          A powerful team of creatives and coders driving Palm forward — backend brains and frontend finesse.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Joseph */}
        <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <div className="w-32 h-32 mb-4">
            <img
              src={meetTeamPic}
              alt="Joseph"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Joseph</h3>
          <p className="text-sm text-[#e5e5e5]">Backend Developer</p>
        </div>

        {/* Abigail */}
        <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <div className="w-32 h-32 mb-4">
            <img
              src={meetTeamPic2}
              alt="Abigail"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Abigail</h3>
          <p className="text-sm text-[#e5e5e5]">Backend Developer</p>
        </div>

        {/* Precious */}
        <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <div className="w-32 h-32 mb-4">
            <img
              src={meetTeamPic1}
              alt="Precious"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Precious</h3>
          <p className="text-sm text-[#e5e5e5]">Frontend Developer</p>
        </div>

        {/* Patience */}
        <div className="flex flex-col items-center text-center bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md">
          <div className="w-32 h-32 mb-4">
            <img
              src={meetTeamPic}
              alt="Patience"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow"
            />
          </div>
          <h3 className="text-xl font-bold text-white">Patience</h3>
          <p className="text-sm text-[#e5e5e5]">Frontend Developer</p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

import aboutImg from "../assets/aboutUsImg.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-[#BAC166]/20 via-[#A69D98]/20 to-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-[#1a1a1a]">
          <h2 className="text-sm uppercase font-semibold tracking-widest text-[#A82A5B]">
            how it started
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight">
            From an Idea <br /> to a Movement
          </h1>
          <p className="text-[17px] leading-relaxed text-[#444]">
            <span className="text-[#A69D98] font-semibold">Palm</span> was born out of a need for convenience.
            What started as a chill side project to deliver stuff faster is now a growing home for local vendors,
            young creatives, and shoppers who live for <span className="text-[#A82A5B] font-semibold">speed</span>,
            <span className="text-[#BAC166] font-semibold"> trust</span>, and clean style.
          </p>
          <p className="text-[17px] leading-relaxed text-[#444]">
            We connect fashion, footwear, fragrance, and tech — all curated with intention,
            delivered with speed, and backed by a bold, growing community.
          </p>
          <p className="text-lg font-semibold text-[#A82A5B]">
            This isn’t just a store. It’s <span className="text-black font-bold">Palm</span> — where style meets instant delivery.
          </p>
        </div>

        <div className="w-full h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden rounded-3xl shadow-2xl border-[6px] border-white">
          <img
            src={aboutImg}
            alt="Palm startup journey"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

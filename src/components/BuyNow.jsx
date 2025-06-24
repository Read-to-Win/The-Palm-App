import buyNowVideo from "../assets/add.mp4";

const BuyNow = () => {
  return (
    <div className="buyName grid grid-cols-2 text-white m-7 rounded-2xl ">
      <div className="m-3">
        <h2 className="font-bold text-[#F8240F] text-xl mb-5">Palm_Go.</h2>
        <h1 className="text-4xl">Quality Products.</h1>
        <h1 className="text-4xl mb-5">Instant Delivery </h1>
        <p className="">
          Discover the perfect blend of quality and speed. Our carefully
          selected products are made to meet your highest standards, </p>
          <p className="">and with
          our instant delivery service, you'll have them in your hands in no
          time. Whether you're shopping for essentials or something special,
          we have got you covered—fast, reliable, and hassle-free.
        </p>
        <button
  className="bg-[#F8240F] text-white px-6 py-1 rounded-xl font-semibold mt-5 shadow-lg animate-bounce"
>
  Buy Now
</button>

      </div>
      <div>
       <video className=""
                 autoPlay
                 muted
                 loop
                 playsInline
                 src={buyNowVideo}
                 
        /> 
      </div>
    </div>
  );
};

export default BuyNow;

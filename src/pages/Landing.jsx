import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import LandingProducts from "../components/LandingProducts";
import BuyNow from "../components/BuyNow";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <PopularProducts/>
      <BuyNow/>
      <LandingProducts/>
      <Footer/>
    </div>
  );
};

export default Landing;

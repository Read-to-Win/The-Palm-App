import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <PopularProducts/>
      <Footer/>
    </div>
  );
};

export default Landing;

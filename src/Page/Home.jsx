import BgImg from "../assets/shopping-bags.avif";
import HerroSection from "../Layout/HerroSection";
import Product from "../Layout/Product";

const Home = () => {
  return (
    <>
      <section className="hero-section bg-[#fff] flex item-center justify-center h-[90vh]"
                style={{
                  backgroundImage: `url(${BgImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
        <div className="container mx-auto flex justify-center items-center px-5">
          <HerroSection/>
        </div>
      </section>
      <section className="py-14 bg-[#f1f1f1]">
        <Product/>
      </section>
    </>
  );
};

export default Home;

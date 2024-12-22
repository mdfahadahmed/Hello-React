import BgImg from "../assets/colorful.jpg"
import BookingButton from "../Components/BookingButton";
import ProductOne from "../assets/pngtree-mock-up.png"
const Home = () => {
  return (
    <>
      <section className="hero-section bg-[#fff] justify-center py-14 h-screen"
                style={{
                  backgroundImage: `url(${BgImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
        <div className="container">
        <div className="flex justify-between items-center align-middle mx-auto max-w-[1140px] gap-5">
          <div className="bg-red-800 w-1/2 mx-auto items-center justify-center">
            <h3 className="text-black text-6xl font-bold">Style Meets Savings</h3>
            <p className="mb-5">Elevate your wardrobe with our latest trends and must-haves, all at prices you'll love. Whether you're shopping for casual looks, workwear, or accessories, we’ve got everything you need to stay stylish and save big!</p>
            <BookingButton/>
          </div>
          <div className="mx-auto w-1/2 items-center justify-center text-center align-middle">
            <img src={ProductOne} alt="ProductOne" 
            style={{
               width: `400px`,
               height: `400px`,
            }}/>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

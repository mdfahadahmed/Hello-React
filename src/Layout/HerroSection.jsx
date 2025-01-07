import BookingButton from "../Components/BookingButton";
import ProductOne from "../assets/pngtree-mock-up.png";

const HerroSection = () => {
  return (
    <div>
              <div className="flex justify-between items-center align-middle gap-5">
          <div className="w-1/2 mx-auto items-center justify-center">
            <h3 className="text-black text-6xl font-bold">Style Meets Savings</h3>
            <p className="mt-5 mb-5">Elevate your wardrobe with our latest trends and must-haves, all at prices you'll love. Whether you're shopping for casual looks, workwear, or accessories, we’ve got everything you need to stay stylish and save big!</p>
            <BookingButton/>
          </div>
          <div className="mx-auto w-1/2 flex items-center justify-center align-middle">
            <img src={ProductOne} alt="ProductOne" className="justify-center align-middle"
            style={{
               width: `400px`,
               height: `400px`,
            }}/>
          </div>
          </div>
    </div>
  )
}

export default HerroSection;

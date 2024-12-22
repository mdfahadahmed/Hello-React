import Logo from "../assets/site-logos.png";
import { NavLink } from "react-router-dom";
import Social from "../Components/socialIcon";
import InputButton from "../Components/inputButton";

const Footer = () => {
  return (
    <div className="bg-[#e6f2f2] py-8 items-center">
      <div className="container  max-w-[1140px] mx-auto">
      <div className=" flex justify-between pb-8">
        <div className="logo w-2/5">
          <img src={Logo} alt="logo" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, nobis! Suscipit accusantium quas totam ipsum omnis, quia dolorem aliquid beatae dolore cumque dicta aspernatur est, </p>
        </div>
        <div className="services w-1/8">
          <h4 className="font-bold text-2xl text-black ">Our services</h4>
            <ul className="gap-x-1">
              <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/">Home</NavLink></li>
              <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="Services">Services</NavLink></li>
              <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/About">About</NavLink></li>
              <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/blog">Blog</NavLink></li>
              <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        <div className="social w-[30%]">
          <h4 className="font-bold text-2xl text-black">social link</h4>
          <div className="flex mt-5 gap-2">
            <input className="px-2 rounded" type="text" placeholder="Name"/>
            <button><InputButton/> </button>
          </div>
          <div className="mt-5">
            <Social/>
          </div>
        </div>
      </div>
      <div className="h-px bg-white w-full max-w-[100%]"></div>
      <div className="copy-right items-center text-center py-5">
        <h6>copyright © 2024 all rights reserved</h6>
      </div>
      </div>
    </div>
  )
}

export default Footer

import { NavLink } from "react-router-dom"

const BookingButton = () => {
  return (
    <div>
     <button className="bg-black hover:bg-[#ee6850] text-white py-3 px-5 rounded-2xl " >
      <NavLink to="/About">Order Now</NavLink>
     </button>
    </div>
  )
}

export default BookingButton

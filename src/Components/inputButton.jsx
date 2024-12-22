import { NavLink } from "react-router-dom"

const inputButton = () => {
  return (
    <div>
      <button className="bg-black hover:bg-[#ee6850] text-white py-2 px-5 rounded-2xl">
        <NavLink to="/">Send</NavLink>
      </button>
    </div>
  )
}

export default inputButton

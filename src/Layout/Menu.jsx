import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav className="hidden lg:block">
    <ul className="flex gap-8">
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/">Home</NavLink></li>
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/ProductPage">Products</NavLink></li>
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/categorys">Categorys</NavLink></li>
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="Services">Services</NavLink></li>
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/blog">Blog</NavLink></li>
        <li className="text-black font-bold hover:text-[#ee6850]"><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  </nav>
  )
}

export default Menu

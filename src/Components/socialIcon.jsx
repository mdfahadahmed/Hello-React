import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom"


const socialIcon = () => {
  return (
    <>
    <div className="flex gap-3 mt-3">
        <NavLink to="https://www.facebook.com/" className="text-[#ee6850] hover:text-blue-800 text-xl">
        <FaFacebook /></NavLink>
        <NavLink to="https://www.twitter.com/" className="text-[#ee6850] hover:text-blue-800 text-xl"> 
        <FaTwitter /></NavLink>
        <NavLink to="https://www.instagram.com/" className="text-[#ee6850] hover:text-blue-800 text-xl"> 
        <FaInstagram /></NavLink>
        <NavLink to="https://www.linkedin.com/" className="text-[#ee6850] hover:text-blue-800 text-xl"> 
        <FaLinkedin /></NavLink>
    </div>
    </>

  )
}

export default socialIcon

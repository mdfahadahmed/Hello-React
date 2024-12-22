import Logo from "../assets/site-logos.png";
import Menu from "../Layout/Menu";
import { NavLink } from "react-router-dom"


const Header = () => {
  return (
    <header className="header bg-[#e6f2f2] py-3">
      <nav className="container max-w-[1140px] mx-auto flex justify-between items-center">
         <a href="/"><img src={Logo} alt="logo" /></a>
         <div className="flex gap-7 items-center justify-center">
         <Menu/>
         <button className="block lg:hidden">Menu</button> 
         <button className="bg-black hover:bg-[#ee6850] text-white py-3 px-5 rounded-2xl " >
          <NavLink to="/">Sing up</NavLink></button>
         </div>
      </nav>
    </header>
  )
}

export default Header;





// const Header = () => {
//   return (
//     <div className="bg-[#f1f1f1] pt-10 pb-5 w-full">
//       <div className='max-w-[1140px] mx-auto flex justify-between items-center'>
//         <div className="logo">
//           <a href="#">
//             <h2>hello</h2>
//             {/* <img src={logo} alt="logo" className="h-8"/> */}
//           </a>
//         </div>
//         <div className="">
//           {/* <Navmenu /> */}
//         </div>
//         <div className="button">
//           <button className='bg-green-500 text-white hover:text-green-500 hover:bg-white border border-green-500 font-medium py-2 px-4 rounded capitalize'> All Product</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
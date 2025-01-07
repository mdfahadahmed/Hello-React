import { Route, Routes } from "react-router-dom";

import ProductPage from "../Page/ProductPage";
import Home from "../Page/Home";
import Services from "../Page/Services";
import Blog from "../Page/Blog";
import Contact from "../Page/Contact";
import Categorys from "../Page/Categorys";
export const WebRouter = ( ) =>{

    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/categorys" element={<Categorys/>} />
            <Route path="/ProductPage" element={<ProductPage/>} />
            <Route path='/services' element={<Services/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
          </>
    )

}




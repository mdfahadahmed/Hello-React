import { Route, Routes } from "react-router-dom";

import About from "../Page/About";
import Home from "../Page/Home";

export const WebRouter = ( ) =>{

    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/about" element={<About />} /> 
        </Routes>
          </>
    )

}




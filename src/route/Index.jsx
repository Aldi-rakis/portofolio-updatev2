import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Index'

const RouteIndex = () => {
  return (
    <Routes>

            
             <Route path="/" element={<Home />} />

             

             


             {/* <Route path="*" element={<NotFound />} /> */}


        </Routes>
  )
}

export default RouteIndex
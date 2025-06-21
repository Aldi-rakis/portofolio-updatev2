import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Index'
import Project from '../pages/project/Index'

const RouteIndex = () => {
  return (
    <Routes>

     
          
              <Route path="/about" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/blog" element={<Home />} />

             

            


             {/* <Route path="*" element={<NotFound />} /> */}


        </Routes>
  )
}

export default RouteIndex
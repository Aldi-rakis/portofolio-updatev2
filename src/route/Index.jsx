import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Index'
import Project from '../pages/project/Index'
import TiptapEditor from '../pages/text_editor/TiptapEditor.jsx';
import SimpleEditor from '../pages/text_editor/simpleeditor.jsx';
import ProjectDetail from '../pages/project/projectDetail.jsx';
import UpdateProject from '../pages/project/UpdateProject.jsx';
const RouteIndex = () => {
  return (
    <Routes>

              
          
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/blog" element={<Home />} />

              <Route path="/editor" element={<TiptapEditor />} />
              <Route path="/editor2" element={<SimpleEditor />} />

              <Route path="/projects/:id" element={<ProjectDetail />} />

              <Route path="/updateproject/:id" element={<UpdateProject />} />

           


             

        
             {/* <Route path="*" element={<NotFound />} /> */}


        </Routes>
  )
}

export default RouteIndex
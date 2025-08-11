import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Index'
import Project from '../pages/project/Index'
import TiptapEditor from '../pages/text_editor/TiptapEditor.jsx';
import ProjectDetail from '../pages/project/projectDetail.jsx';
import UpdateProject from '../pages/project/UpdateProject.jsx';
import CreateProjectPage from '../pages/text_editor/CreateProjectPage.jsx';
import About from '../pages/about/about.jsx';
const RouteIndex = () => {
  return (
    <Routes>

              
          
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/blog" element={<Home />} />

              <Route path="/editor" element={<TiptapEditor />} />
              <Route path="/createproject" element={<CreateProjectPage />} />

              <Route path="/projects/:id" element={<ProjectDetail />} />

              <Route path="/updateproject/:id" element={<UpdateProject />} />

           


             

        
             {/* <Route path="*" element={<NotFound />} /> */}


        </Routes>
  )
}

export default RouteIndex
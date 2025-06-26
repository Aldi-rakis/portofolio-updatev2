import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TiltedCard from "../../component/ui/title3d-card.jsx";
import projectData from "../../data/project.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/projectslice';
import { BiLinkExternal } from "react-icons/bi";
const Index = () => {
  const categories = ["All", "Development", "Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  // Dummy data project (harus diisi sesuai kebutuhan)
  // const projects = [
  //   {
  //     id: 1,
  //     title: "AORA",
  //     category: "Development",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "Fullstack Developer",
  //     link: "#",
  //   },
  //   {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   },
  //    {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   },
  //    {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   }, {
  //     id: 2,
  //     title: "Design Sample",
  //     category: "Design",
  //     imageSrc: "https://via.placeholder.com/400x200",
  //     captionText: "UI/UX Design",
  //     link: "#",
  //   },
  // ];

  const dispatch = useDispatch();
  const { list: projects, status } = useSelector((state) => state.projects);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);


  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((projects) => projects.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="dark:bg-[#f6f4e5] bg-[#0b0b0d] ">
      <div className="max-w-7xl min-h-screen py-40    mx-auto px-6 flex flex-col ">
        {/* Header */}
        <div className="text-white pr-10 md:pr-12 lg:pr-140   dark:text-black">
          <p className="text-4xl font-clash text-[#FF5D20] mb-2">✦ MY WORK</p>
          <h1 className="md:text-6xl text-3xl font-bold font-clash mb-6 leading-tight">
            Creating next level digital  products
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-start lg:justify-end">
          <div className="flex space-x-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm md:text-base rounded-xl md:rounded-full transition hover:bg-gray-700 hover:text-white ${activeCategory === category
                    ? "bg-gray-700 text-white"
                    : "bg-gray-900 text-gray-300"
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="z-10 relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10  py-10 text-center">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.projectID || index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
              className="cursor-pointer rounded-2xl"
             
            >
              {/* Card content */}
              <div 
              //  onClick={() => window.open(`/projects/${project.projectID}`, "_blank")}
              
              className="w-full px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-black to-gray-800 dark:from-yellow-200 dark:to-red-200 rounded-2xl shadow-md">
                <TiltedCard
                  imageSrc={project.image}
                  altText={project.altText}
                  captionText={project.ProjectName}
                  rotateAmplitude={18}
                  scaleOnHover={1.3}
                  rotateOnHover={true}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
              </div>

              {/* Text info */}
              <div className="font-dosis text-white dark:text-black text-3xl font-semibold text-start mt-4">
                <div className="flex justify-between mb-2">
                  <p className="hover:underline">{project.ProjectName}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                    <BiLinkExternal className="demo ml-2 inline-block" />
                  </a>
                </div>


                <div className="flex justify-between text-sm font-normal mt-1">
                  <p className="text-sm">{project.role.join(', ')}</p>
                  <p className="text-sm">{project.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Index;

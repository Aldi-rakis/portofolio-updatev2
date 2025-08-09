import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import TiltedCard from "../../component/ui/title3d-card.jsx";
import { cn } from "../../lib/utils";
import { Spotlight } from "../../component/ui/spotlight.jsx";
import rakisMac from "../../assets/img/rakis-mac.png";
import { useNavigate } from "react-router-dom";
import projectData from "../../data/project.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/projectslice';
import { BiLinkExternal } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { div } from "framer-motion/client";
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

  const navigate = useNavigate();

  const handleDetailsClick = (projectID) => {
    // Handle the click event for project details
    navigate(`/projects/${projectID}`);
  };

  return (

    <> 
    <section className="dark:bg-[#f6f4e5] bg-[#0b0b0d] h-min-screen">
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
                onClick={() => handleDetailsClick(project.projectID)}
                className="w-full px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-black to-gray-800 dark:from-yellow-200 dark:to-red-200 rounded-2xl shadow-md"
              >
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

     <section>
            <div className="relative flex h-[20rem] w-full overflow-hidden rounded-md bg-black/[0.96] dark:bg-[#f6f4e5] antialiased md:items-center md:justify-center">
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
                  "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#f6f4e5_1px,transparent_1px),linear-gradient(to_bottom,#f6f4e5_1px,transparent_1px)]"
                )}
              />
    
              <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
              />
              <motion.div
                className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.h1
                  className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-800 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Get in <span className="text-[#ff5d20]"> touch </span> <br />
                  <motion.span
                    className="text-3xl lg:text-5xl"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.02, delay: 0.5 }}
                  >
                    lets build something great together.
                  </motion.span>
                </motion.h1>
    
                <motion.p
                  className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300 dark:text-black md:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  I'm open to new projects, collaborations, or just a friendly chat. Feel free to reach out anytime!. Whether you have questions or want to discuss an idea, I’m here to help.
                </motion.p>
              </motion.div>
            </div>
          </section>
    
          <section id="footer" className="bg-[#0b0b0d] dark:bg-[#f6f4e5]   py-20 text-white dark:text-black">
            <div className="max-w-6xl mx-auto px-4 flex flex-col">
              <div className="bg-gradient-to-b from-white/10 to-white/5 dark:bg-gradient-to-b dark:from-yellow/10 dark:to-white/80 rounded-xl p-6 lg:p-10 flex flex-col lg:flex-col items-center lg:items-start justify-between gap-10 text-center lg:text-left border border-white/10 dark:border-black/20">
                <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 w-full px-2 md:px-6">
                  {/* <div className='absolute w-full -bottom-10 h-1.5 bg-white/10'></div> */}
    
                  <div className="w-full lg:w-1/2 justify-center flex">
                    <img
                      className="w-100 lg:absolute -top-39"
                      src={rakisMac}
                      alt=""
                    />
                  </div>
    
                  <div className="w-1/2 flex flex-row gap-10 md:gap-10  md:justify-center items-center text-start md:text-end">
                    <div>
                      <h3 className="font-clash font-semibold text-2xl md:text-3xl mb-4">
                        Professional Links
                      </h3>
                      <ul className="space-y-2 text-2xl font-thin text-white/80 dark:text-black">
                        <li>
                          <a href="#">LinkedIn</a>
                        </li>
                        <li>
                          <a href="#">Behance</a>
                        </li>
                        <li>
                          <a href="#">Dribbble</a>
                        </li>
                        <li>
                          <a href="#">Figma</a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-clash font-semibold text-2xl md:text-3xl mb-4">
                        Quick Menu
                      </h3>
                      <ul className="space-y-2 text-2xl font-thin text-white/80 dark:text-black">
                        <li>
                          <a href="#">Home</a>
                        </li>
                        <li>
                          <a href="#">About</a>
                        </li>
                        <li>
                          <a href="#">Work</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
    
                {/* Copyright & Social */}
                <div className=" w-full flex flex-col lg:flex-row justify-between items-center border-t-4 border-white/10 dark:border-black/80 pt-6 text-sm text-white/50 dark:text-black/50 gap-4">
                  <p>© 2025 Aldhi Raqiswandri All Rights Reserved</p>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">
                    <FaInstagramSquare />
                    </a>
                    <a href="#" className="hover:text-white">
                    <FaGithub />
                    </a>
                    <a href="#" className="hover:text-white">
                    <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

 
     </>
  );
};

export default Index;

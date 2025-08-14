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
        window.scrollTo({ top: 0, behavior: 'smooth' });

    if (status === 'idle') {
      dispatch(fetchProjects());
    }
  }, [status, dispatch]);

  const [limit, setLimit] = useState(6);

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

   const handleMore = () => {
  if (limit < filteredProjects.length) {
    setLimit(limit + 6); // tampilkan semua
  } else {
    setLimit(6); // kembali tampilkan 3 item pertama
    // Scroll to projects section instead of top of page
    document.querySelector('.projects-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
  });
  }
};

  return (

    <> 
    <section className="dark:bg-[#f6f4e5] bg-[#0b0b0d] h-min-screen">
      <div className="projects-section max-w-7xl min-h-screen py-40    mx-auto px-6 flex flex-col ">
        {/* Header */}
        <div className="text-white pr-10 md:pr-12 lg:pr-140   dark:text-black">
          <p className="text-4xl font-clash text-[#FF5D20] mb-2">✦ MY WORK</p>
          <h1 className="md:text-6xl text-3xl font-bold font-clash mb-6 leading-tight">
            Creating next level digital  products
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-start lg:justify-end">
          {/* <div className="flex space-x-4 mb-6">
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
          </div> */}
        </div>

        {/* Project Cards */}
        <div className="z-10  relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10  py-10 text-center">
          {filteredProjects.slice(0, limit).map((project, index) => (
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
        {/* Load More Button */}
        {filteredProjects.length > 6 && (
          <div className="flex justify-center">
            <button
              onClick={handleMore}
              className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded-md hover:bg-gray-700"
            >
              {limit >= filteredProjects.length ? "Hide" : "Show More"}
            </button>
          </div>
        )}
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
                I'm open to new projects, collaborations, or just a friendly chat. Feel free to reach out anytime!. Whether you have questions or want to discuss an idea, I'm here to help.
              </motion.p>
            </motion.div>
          </div>
        </section>

       

 
     </>
  );
};

export default Index;

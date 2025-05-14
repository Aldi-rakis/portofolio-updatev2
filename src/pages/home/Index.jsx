import React from "react";
import { useEffect, useState } from "react";

import ModelViewer from "../../component/ModelViewer.jsx";
import avatar from "../../assets/img/avatar.png";
import avatarrakis from "../../assets/img/avatar-rakis.png";
import rakisMac from "../../assets/img/rakis-mac.png";
import { motion } from "motion/react";

import AbstractLineBackground from "../../component/ui/AbstractLineBackground.jsx";
import star from "../../assets/icon/star.png";

import TiltedCard from "../../component/ui/title3d-card.jsx";
import bgShape from "../../assets/bg/shape-line-bg.png";

import tasicon from "../../assets/icon/tas.png";
import { InfiniteRibbon } from "../../component/ui/infinite-ribbon.jsx";
import Card from "../../component/Card.jsx";
const Index = () => {
  const projects = [
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      link: "https://devrajchatribin.com/projects/aora",
    },
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      link: "https://devrajchatribin.com/projects/aora",
    },
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      link: "https://devrajchatribin.com/projects/aora",
    },
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=1200&q=100",
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      link: "https://devrajchatribin.com/projects/aora",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulasi loading selama 2 detik, kamu bisa ganti sesuai event model ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <section className="  bg-[#000000]">
        <div className="absolute z-0 w-full h-[100vh]">
          <img
            src={bgShape}
            className="w-full opacity-10 h-full object-cover"
            alt="bg-shape"
          />
        </div>

        <div className="h-[110vh] gap-10 mx-auto  justify-center items-center flex-col-reverse md:flex-row flex">
          <div className="absolute z-40">
            <AbstractLineBackground />
            {/* Konten halaman di sini */}
          </div>
          <div className="absolute rounded-full blur-[100px] bg-[#E33030] h-[400px] w-[400px] opacity-65 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute rounded-full blur-[200px] bg-[#FF5D20] h-[300px] w-[600px] opacity-65 right-0 transform translate-y-1/4"></div>

          <div className="w-full lg:w-1/2 px-5 mx-10 lg:mx-20 justify-center items-center text-center lg:text-start  gap-10 flex flex-col">
            <div className="gap-5 lg:gap-10 flex flex-col">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="font-bangers relative lg:leading-22 text-6xl lg:text-[120px] text-white"
              >
                Aldhi Raqiswandri
                <span className="hidden md:block font-beauty font-semibold -left-8 top-0 absolute text-5xl text-[#FFA620] ">
                  I'M
                </span>
                <span className="md:hidden font-beauty font-semibold -left-32 right-0 top-0 absolute text-2xl text-[#FFA620]">
                  I'M
                </span>
              </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                
                    transition={
                        {duration: 1 }
                    }
                className="font-farsan  text-3xl text-[#ffff]">
                    An aspiring Fullstack Developer. Who brings ideas to life
                    through code, building seamless experiences from backend logic
                    to frontend finesse.
                </motion.p>
            </div>

            <div className="w-full">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative px-10 py-3 font-semibold text-white bg-red-500 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400
                             before:absolute before:inset-0 before:rounded-lg  before:bg-red-600 hover:scale-105 before:opacity-20 before:animate-pulse"
              >
                Hire Me
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute -top-5 right-0 w-10 "
                  src={tasicon}
                  alt="sss"
                />
              </motion.button>
            </div>
          </div>

          <div className="w-full items-center justify-center  lg:w-1/2">
            <div className=" justify-center  flex">
              <img className="md:hidden w-50" src={avatarrakis} alt="" />
            </div>

            <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" hidden md:flex h-55 md:h-100  "
            >
              <ModelViewer />
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b w-full from-[#000000] to-[#1C1C1C]    mx-auto  ">
        {/* <div className="absolute  blur-[200px] bg-[#E33030] h-[200px] w-[400px] top-0 transform right-0"></div> */}

        <div className=" items-center -mt-5 flex-col justify-center gap-10 overflow-hidden h-[20px] md:h-[200px] w-full">
          <InfiniteRibbon
            rotation={5}
            reverse={true}
            className="absolute bg-[#1C1C1C] shadow-[12px_-6px_14px_8px_#7b3306]"
            separator="✦"
          >
            Web Developer ✦ Fullstack Developer ✦ Software Engineer
          </InfiniteRibbon>
          <InfiniteRibbon
            rotation={-5}
            className="absolute bg-[#1C1C1C] shadow-2xl shadow-amber-900"
            separator="✦"
          >
            Web Developer ✦ Fullstack Developer ✦ Software Engineer
          </InfiniteRibbon>
        </div>
        <div></div>
      </section>

      <section id="about">
        <div className="bg-[#1C1C1C] flex-col flex  md:flex-row w-full gap-10 px-10 lg:px-30 py-10 justify-center text-center items-center">
          <div className="w-full md:w-1/3 relative ">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
             className="text-white text-4xl font-semibold text-center pb-2">
              AboutMe
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
             className="relative">
              <img
                className="absolute top-0 right-54  transform -translate-x-1/2 w-10"
                src={star}
                alt=""
              />
              <img
                className="absolute -top-2 left-56  transform -translate-x-1/2 w-10"
                src={star}
                alt=""
              />
            </motion.div>
            <div className="w-40 h-1 bg-white m-auto mb-4"></div>{" "}
            {/* Garis di bawah AboutMe */}
            <img
              className="md:w-80 w-50 rounded-full m-auto"
              src={avatar}
              alt=""
            />
          </div>

          <div className="w-full md:w-2/3">
            <p className="font-dosis text-white text-xl lg:text-3xl md:leading-12 text-justify md:text-justify">
              I'm a Fullstack Developer with 2+ years of experience in software
              development. I specialize in system architecture, API development,
              server management, and problem-solving. I also handle project
              planning, implementation, and deployment with a focus on building
              efficient and user-centric digital solutions
            </p>
          </div>
        </div>

        <div className="bg-[#1C1C1C] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-row md:flex-row justify-around items-center gap-10 md:gap-0">
            {[
              { value: "5+", text: "Years of\nDesign Experience" },
              { value: "50+", text: "Overall Global\nCustomers" },
              { value: "90+", text: "Projects I Have\nWorked on" },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <div className="group text-center hover:scale-105 transition-transform duration-300">
                  <h2 className="shine-effect text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,100,200,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(255,120,200,0.8)]">
                    {item.value}
                  </h2>
                  <p className="text-sm md:text-xl mt-3 leading-tight whitespace-pre-line text-gray-300">
                    {item.text}
                  </p>
                </div>

                {index < 2 && (
                  <div className="hidden md:block h-24 border-l border-gray-700"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="project" className="bg-[#1C1C1C] py-6">
        <div className=" justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-4 lg:px-45 py-10 text-center">
          {projects.slice(0, 4).map((project, index) => (
            <div key={index}>
              <div
                onClick={() => window.open(project.link, "_blank")}
                className="w-full px-20 bg-white rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-300"
              >
                <TiltedCard
                  imageSrc={project.imageSrc}
                  altText={project.altText}
                  captionText={project.captionText}
                  rotateAmplitude={18}
                  scaleOnHover={1.3}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                />
              </div>
              <div className="text-white text-3xl font-semibold text-start mt-4">
                <p>{project.title}</p>
                <div className="flex justify-between">
                  <p className="text-sm">{project.role}</p>
                  <p className="text-sm">{project.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <button className="text-white text-lg font-semibold bg-[rgba(244,181,181,0.37)]  px-6 py-2 rounded-full shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Show more
          </button>
        </div>
      </section>

      <section id="footer" className="bg-[#1C1C1C] py-20 text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col">
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-6 lg:p-10 flex flex-col lg:flex-col items-center lg:items-start justify-between gap-10 text-center lg:text-left border border-white/10">
            <div className="relative flex flex-col md:flex-row gap-8 md:gap-4 w-full px-6">
              {/* <div className='absolute w-full -bottom-10 h-1.5 bg-white/10'></div> */}

              <div className="w-full lg:w-1/2 justify-center flex">
                <img
                  className="w-100 lg:absolute -top-39"
                  src={rakisMac}
                  alt=""
                />
              </div>

              <div className="w-1/2 flex flex-row gap-4 md:gap-10  md:justify-center items-center text-start md:text-end">
                <div>
                  <h3 className="font-clash font-semibold text-3xl mb-4">
                    Professional Links
                  </h3>
                  <ul className="space-y-2 text-2xl font-thin text-white/80">
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
                  <h3 className="font-clash font-semibold text-3xl mb-4">
                    Quick Menu
                  </h3>
                  <ul className="space-y-2 text-2xl font-thin text-white/80">
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
            <div className=" w-full flex flex-col lg:flex-row justify-between items-center border-t-4 border-white/10 pt-6 text-sm text-white/50 gap-4">
              <p>© 2024 Shaun Murphy All Rights Reserved</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  a
                </a>
                <a href="#" className="hover:text-white">
                  b
                </a>
                <a href="#" className="hover:text-white">
                  c
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

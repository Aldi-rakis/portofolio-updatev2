import React from "react";
import { useEffect, useState } from "react";

import ModelViewer from "../../component/ModelViewer.jsx";
import avatar from "../../assets/img/avatar.png";
import avatarrakis from "../../assets/img/avatar-rakis.png";
import rakisMac from "../../assets/img/rakis-mac.png";
import { motion, AnimatePresence } from "motion/react";

import AbstractLineBackground from "../../component/ui/AbstractLineBackground.jsx";
import star from "../../assets/icon/star.png";
import starColor from "../../assets/icon/star-color.png";
import bgRing from "../../assets/icon/bgRing-avatar.png";

import TiltedCard from "../../component/ui/title3d-card.jsx";
import bgShape from "../../assets/bg/shape-line-bg.png";
import wave from "../../assets/bg/wave2.svg";
import project1 from "../../assets/img/project/project-1.png";
import project2 from "../../assets/img/project/project-2.png";
import adhivasindo1 from "../../assets/img/journey/adhivasindo-1.png";
import sieben1 from "../../assets/img/journey/sieben-1.webp";
import sieben2 from "../../assets/img/journey/sieben-2.png";
import sieben3 from "../../assets/img/journey/sieben-3.webp";



import tasicon from "../../assets/icon/tas.png";
import { InfiniteRibbon } from "../../component/ui/infinite-ribbon.jsx";
import { cn } from "../../lib/utils";
// import SpotlightPreview from "../../component/SpotlightPreview.jsx";
import { Spotlight } from "../../component/ui/spotlight.jsx";

import { InfiniteRibbonImage } from "../../component/ui/infinite-ribbon-image.jsx";
import Card from "../../component/Card.jsx";
import { delay } from "motion";
import projectData from "../../data/project.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/projectslice.jsx';
import { useNavigate, Link } from 'react-router-dom';

import StackIcons from '../../assets/stack/Index.jsx';

import API from "../../assets/service/API.png"
import BEC from "../../assets/service/development.jpg"
import UIUX from "../../assets/service/ui-ux.webp";
import arsitektur from "../../assets/service/arsitektur.jpg";
import { BiLinkExternal } from "react-icons/bi";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql,
  SiMongodb, SiLaravel, SiGithub, SiDocker,
  SiRedux, SiFigma, SiPhp, SiJavascript,
  SiAngular, SiGo, SiAmazonwebservices,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";
import { a } from "framer-motion/client";
const Index = () => {
  const projectss = [
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc: project1,
      altText: "Kendrick Lamar - GNX Album Cover",
      captionText: "Kendrick Lamar - GNX",
      link: "https://devrajchatribin.com/projects/aora",
    },
    {
      title: "AORA",
      role: "Fullstack Developer",
      year: "2023",
      imageSrc: project2,
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

  const stackItems = [
    { label: "React.js",    icon: <SiReact />,      color: "#61DAFB" },
    { label: "Next.js",     icon: <SiNextdotjs />,   color: "#ffffff" },
    { label: "Angular JS",  icon: <SiAngular />,       color: "#764ABC" },
    { label: "Node.js",     icon: <SiNodedotjs />,   color: "#339933" },
    { label: "Laravel",     icon: <SiLaravel />,     color: "#FF2D20" },
    { label: "Express.js",  icon: <SiExpress />,     color: "#ffffff" },
    { label: "TypeScript",  icon: <SiTypescript />,  color: "#3178C6" },
    { label: "JavaScript",  icon: <SiJavascript />,  color: "#F7DF1E" },
    { label: "PHP",         icon: <SiPhp />,         color: "#777BB4" },
    { label: "Tailwind CSS",icon: <SiTailwindcss />, color: "#06B6D4" },
    { label: "PostgreSQL",  icon: <SiPostgresql />,  color: "#336791" },
    { label: "MySQL",       icon: <SiMysql />,       color: "#4479A1" },
    { label: "MongoDB",     icon: <SiMongodb />,     color: "#47A248" },
    { label: "REST API",    icon: <FaServer />,      color: "#FF6B35" },
    { label: "Git & GitHub",icon: <SiGithub />,      color: "#ffffff" },
    { label: "AWS",         icon: <SiAmazonwebservices />,         color: "#F24E1E" },
    { label: "Docker",      icon: <SiDocker />,      color: "#2496ED" },
    { label: "Redux",       icon: <SiRedux />,       color: "#764ABC" },
    { label: "Figma",       icon: <SiFigma />,       color: "#F24E1E" },
  ];

  const navigate = useNavigate();

  const handleDetailsClick = (projectID) => {
    navigate(`/projects/${projectID}`);
  };

  // Sieben carousel
  const siebenImages = [sieben1, sieben2, sieben3];
  const [siebenSlide, setSiebenSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSiebenSlide(prev => (prev + 1) % siebenImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [siebenImages.length]);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const { list: projects, status, error } = useSelector((state) => state.projects);

  useEffect(() => {
    // Simulasi loading selama 2 detik, kamu bisa ganti sesuai event model ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (status === 'idle') {
      dispatch(fetchProjects());
    }

    return () => clearTimeout(timer);
  }, [status, dispatch]);

  const tabs = [
    {
      title: "Development",
      description:
        "Building responsive websites and applications. Providing users with an enriching experience that adapts to any device and screen size.",
      image:
        BEC,
    },
    {
      title: "System Architecture",
      description:
        "Designing scalable and maintainable systems tailored to business needs and long-term growth.",
      image:
        arsitektur,
    },
    {
      title: "UI/UX Implementation",
      description:
        "Creating clean, modern interfaces with a focus on usability and user engagement.",
      image:
      UIUX,
    },
    {
      title: "API Development",
      description:
        "Developing secure and efficient RESTful APIs for smooth and reliable data communication between systems.",
      image:
        API
    },
  ];

  const [activeTab, setActiveTab] = useState(null);
  const [lastActiveTab, setLastActiveTab] = useState(0);

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
    <div className="">
      <div className="pointer-events-none absolute inset-0 bg-white/10 dark:bg-black/20 backdrop-blur-sm opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100" />

      <section className=" dark:bg-[#f6f4e5] bg-[#0b0b0d]">
        <div className="absolute z-0 w-full h-[100vh]">
          <img
            src={wave}
            className="w-full opacity-20 h-[110vh] object-cover"
            alt="bg-shape"
          />
        </div>

        <div className="h-[110vh] gap-10 mx-auto relative  justify-center items-center flex-col-reverse md:flex-row flex">
          <div className="absolute z-40">
            <AbstractLineBackground />
            {/* Konten halaman di sini */}
          </div>
          <div className="absolute rounded-full blur-[100px] bg-[#E33030] h-[400px] md:w-[400px] opacity-5 left-1/2 transform -translate-x-1/2"></div>
          <div className="absolute rounded-full blur-[100px] bg-[#FF5D20] h-[200px] w-[300px] opacity-65 right-0 transform translate-y-1/4"></div>

          <div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}

            className=" absolute -bottom-45 hidden md:block  z-0 w-full h-full bg-"
          >
            <ModelViewer />
          </div>
          <div className="w-full lg:w-1/2 px-8 mx-10 lg:mx-20 justify-center items-center text-start  gap-10 flex flex-col">
            <div className="gap-5 lg:gap-10 flex flex-col">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="font-bangers relative lg:leading-22 text-6xl lg:text-[120px] text-white dark:text-black"
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
                transition={{ duration: 1 }}
                className="font-clash z-10 text-2xl text-[#ffff] dark:text-black"
              >
                I am a Fullstack Web Developer specializing in <br /> end-to-end web
                application development. From system architecture to deployment,
                I deliver tailored solutions that meet your business goals.
              </motion.p>
            </div>

            <div className="w-full gap-8 flex">
              <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://www.linkedin.com/in/aldirakis/', '_blank');
                }}
                className="relative px-10 py-3 font-clash font-semibold text-white bg-gradient-to-b from-orange-500 to-red-700 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400
                             before:absolute before:inset-0 before:rounded-lg   hover:scale-105 before:opacity-10 before:animate-pulse"
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

              {/* <motion.button
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative px-10 py-3 font-clash font-semibold text-white bg-gradient-to-b from-orange-500 to-red-700 rounded-lg shadow-lg transition duration-300 ease-in-out hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400
                             before:absolute before:inset-0 before:rounded-lg   hover:scale-105 before:opacity-10 before:animate-pulse"
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
              </motion.button> */}
            </div>
          </div>

          <div className="w-full items-center justify-center hidden lg:flex  lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" justify-center items-center  flex"
            >
              <img
                className="z-10 mb-0 md:mb-14 w-50 lg:w-70"
                src={avatarrakis}
                alt=""
              />
            </motion.div>

            {/* <div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className=" hidden md:flex h-55 md:h-100  "
            >
              <ModelViewer />
            </div> */}
          </div>
        </div>
      </section>

      <section className="relative  bg-[#0b0b0d]  dark:bg-[#f6f4e5]  mx-auto  ">
        {/* <div className="absolute  blur-[200px] bg-[#E33030] h-[200px] w-[400px] top-0 transform right-0"></div> */}

        <div className="border-y-[0.1px] border-[#dbdbda15] flex items-center  flex-col justify-center gap-10 overflow-hidden  w-full">
          {/* <InfiniteRibbon
            items={[
              { src: "https://devrajchatribin.com/skills/React.js.svg", label: "Brand A" },
              { src: "https://devrajchatribin.com/skills/Node.js.svg", label: "Brand B" },
              { src: "https://devrajchatribin.com/skills/Next.js.svg", label: "Brand C" },
            ]}
            repeat={6}
            duration={20}
          // backgroundImage="/images/bg.jpg"
          /> */}

          <InfiniteRibbon rotation={0} className="" separator="✦">
            Web Developer ✦ Fullstack Developer ✦ Software Engineer ✦ Project
          </InfiniteRibbon>
        </div>
        <div></div>
      </section>

      <section id="about">
        <div className="bg-[#0b0b0d] dark:bg-[#f6f4e5] flex-col flex  md:flex-row w-full gap-10 px-10 lg:px-30 py-10 justify-center text-center items-center">
          <div className="w-full md:w-1/3 relative ">
            <motion.h1
              className="text-white dark:text-black font-clash text-4xl font-semibold text-center pb-2"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {"AboutMe".split("").map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  style={{ display: "inline-block", marginRight: "1px" }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeInOut" }}
              className="relative"
            >
              <img
                className="absolute -top-16 left-28  transform -translate-x-1/2 w-10"
                src={starColor}
                alt=""
              />
              <img
                className="absolute -top-6 right-16  transform -translate-x-1/2 w-10"
                src={star}
                alt=""
              />
              <img
                className="absolute -top-10 right-16  transform -translate-x-1/2 w-6"
                src={star}
                alt=""
              />
            </motion.div>
            <div className="w-40 h-1 bg-white m-auto mb-4"></div>{" "}
            {/* Garis di bawah AboutMe */}
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-20 right-0 z-0"
              src={bgRing}
              alt=""
            />
            <motion.img
              initial={{ opacity: 8, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="md:w-80 w-50 z-10 relative rounded-full m-auto"
              src={avatar}
              alt=""
            />
          </div>

          <div className="w-full md:w-2/3">
          <div>
              <motion.p
              className="font-dosis text-white dark:text-black text-xl lg:text-xl xl:text-2xl md:leading-12 text-center md:text-justify"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.06,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {"I'm a Fullstack-Developer with over 2 years of experience in Software Development handle both front-end and back-end development. I specialize in system architecture, API development, and problem-solving. I also handle project planning, implementation, and deployment, with a focus on building efficient, user-centric digital solutions, supported by modern and responsive front-end design."
                .split(" ")
                .map((word, i) => {
                  const isTarget =
                    word === "Fullstack-Developer" || word === "Developer";
                  return (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      style={{ display: "inline-block", marginRight: "5px" }}
                    >
                      {isTarget ? (
                        <span
                          style={{ backgroundColor: "rgba(255,93,32,1)" }}
                          className="text-white px-1 font-bold rounded-sm"
                        >
                          {word}
                        </span>
                      ) : (
                        word
                      )}
                    </motion.span>
                  );
                })}
            </motion.p>
          </div>

          {/* Tech Stack Cards */}
          <motion.div
            className="mt-2 flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.07 },
              },
            }}
          >
            {stackItems.map((tech, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 dark:bg-black/10 dark:border-black/20 backdrop-blur-sm text-white dark:text-black font-dosis font-semibold hover:border-orange-500/60 hover:bg-orange-500/10 dark:hover:border-orange-500/60 transition-all duration-300 cursor-default select-none"
              >
                <span className="text-lg" style={{ color: tech.color }}>{tech.icon}</span>
                <span className="uppercase text-xs tracking-widest">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>

          </div>

        </div>

        <div className="bg-[#0b0b0d] dark:bg-[#f6f4e5] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-row md:flex-row justify-around items-center gap-10 md:gap-0">
            {[
              { value: "2+", text: "Years Experience" },
              { value: "15+", text: "Overall Clients" },
              { value: "20+", text: "Projects Implemented" },
            ].map((item, index) => {
              // Tentukan arah animasi berdasarkan index
              const direction =
                index === 0 ? 250 : index === 1 ? 0 : index === 2 ? -250 : 0;

              return (
                <React.Fragment key={index}>
                  <div className="group text-center hover:scale-105 transition-transform duration-300">
                    <motion.h2
                      initial={{ opacity: 0, x: direction }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeIn" }}
                      className="shine-effect text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,100,200,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(255,120,200,0.8)]"
                    >
                      {item.value}
                    </motion.h2>

                    <p className="text-sm md:text-xl mt-3 leading-tight whitespace-pre-line text-gray-300  dark:font-extrabold dark:bg-gradient-to-t dark:from-yellow-400 dark:to-white-600 dark:bg-clip-text dark:text-transparent">
                      {item.text}
                    </p>
                  </div>

                  {index < 2 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: 96 }} // h-24 = 96px
                      transition={{
                        duration: 1.7,
                        delay: 0.8,
                        ease: "easeOut",
                      }}
                      className="hidden md:block h-24 border-2 border-orange-500"
                    ></motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───── Currently Working ───── */}
      <section className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-20 px-4 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 dark:text-gray-600 mb-3 font-dosis">
            Currently Working
          </p>
          <h2 className="font-clash text-4xl md:text-5xl font-bold text-white dark:text-black">
            Current{" "}
            <span className="italic font-light bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              work
            </span>
          </h2>
        </motion.div>

        {/* Card Row */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-stretch">

          {/* LEFT — Gradient Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative lg:w-1/2 rounded-2xl overflow-hidden min-h-[420px] bg-gradient-to-br from-[#1a0a2e] via-[#6e6eb1] to-[#db6f44] dark:bg-gradient-to-br dark:from-[#f1f0f1] dark:via-red-200 dark:to-yellow-200 px-8 py-6 flex flex-col justify-between group"
          >
            {/* Glow overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none z-10" />

            {/* Live badge */}
            <div className="relative z-20 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-xs text-white/80 dark:text-black/80 font-dosis uppercase tracking-widest"> 2025 — Present</span>
            </div>
             <div className="relative z-20 mt-1">
              <h3 className="font-clash text-2xl md:text-xl font-bold text-white dark:text-black leading-snug">
                Fullstack Developer —{" "}
                <span className="text-orange-400 dark:text-amber-600">Sieben Technology</span>
              </h3>
              
            </div>

            {/* Floating screenshot image — auto slide */}
            <motion.div
              className="relative z-10 mt-6 rounded-xl overflow-hidden shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Browser bar mock */}
              <div className="flex items-center gap-1.5 bg-[#1e1e2e] px-3 py-2 rounded-t-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                <div className="ml-3 flex-1 bg-white/10 rounded-full h-4 text-[9px] text-white/40 font-mono flex items-center px-2">
                  ayosrc.sampoerna.com
                </div>
              </div>

              {/* Carousel */}
              <div className="relative overflow-hidden w-full max-h-[440px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={siebenSlide}
                    src={siebenImages[siebenSlide]}
                    alt={`AYO SRC - HMS Sampoerna ${siebenSlide + 1}`}
                    className="w-full object-cover object-top max-h-[440px]"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Dot indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {siebenImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSiebenSlide(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        i === siebenSlide ? "bg-white w-4" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main heading text */}
           

            {/* Arrow */}
            <Link to="/about" className="relative z-20 self-end mt-3 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white/20 hover:bg-white/20 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* RIGHT — Details */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-between gap-6"
          >
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-orange-500" />
              <h3 className="font-clash text-xl md:text-2xl font-bold text-white dark:text-black">
                Sieben Technology · IT consulting
              </h3>
            </div>

            {/* Description */}
            <p className="font-dosis text-gray-300 dark:text-gray-700 text-sm md:text-base leading-relaxed">
              Developed and maintained fullstack applications for PT HM Sampoerna under the{" "}
              <span className="text-orange-400 font-semibold">AYO SRC</span> ecosystem, supporting principals,
              wholesalers, retailers, and sales operations across multiple digital platforms.
            </p>

            {/* Bullet points */}
            <ul className="space-y-3">
              {[
                "Developed and enhanced 4 apps within AYO SRC ecosystem: AYO Principal, AYO Mitra/WS, AYO Retailer, and AYO Mitra Order.",
                "Worked across frontend and backend using Angular, React.js, React Native, Golang, and AWS to deliver new features.",
                "Handled feature development, bug fixing, troubleshooting, and system improvements based on business & user needs.",
              ].map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex items-start gap-3 text-sm text-gray-300 dark:text-gray-700 font-dosis"
                >
                  <span className="mt-1 text-orange-400 text-base leading-none flex-shrink-0">✦</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tech stack pills */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
              }}
            >
              {[
                { label: "Angular",      icon: <SiAngular />,    color: "#DD0031" },
                { label: "React.js",     icon: <SiReact />,      color: "#61DAFB" },
                { label: "React Native", icon: <SiReact />,      color: "#61DAFB" },
                { label: "Golang",       icon: <SiGo />,         color: "#00ACD7" },
                { label: "AWS",          icon: <SiAmazonwebservices />,  color: "#FF9900" },
                { label: "TypeScript",   icon: <SiTypescript />, color: "#3178C6" },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 dark:bg-black/10 dark:border-black/20 text-white dark:text-black text-xs font-dosis font-semibold uppercase tracking-wider hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200"
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  <span>{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="project" className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-6">
        <div className="z-10 relative justify-center items-center gap-10 px-4 lg:px-65 py- ">
          <h2 className="text-start font-clash text-3xl font-bold text-white dark:text-black">My Projects</h2>
          <p className="text-start font-dosis text-xl font-thin text-white dark:text-black">- Showcase project -</p>
        </div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#FFB000] h-[200px] w-[1000px] opacity-15 right-0 transform translate-y-1/4"></div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#FF589C] h-[200px] w-[200px] opacity-15 left-0 transform translate-y-1/4"></div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#0041BE] h-[200px] w-[200px] opacity-15 left-0 transform translate-y-1"></div>

        <div className="z-10 relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-4 lg:px-45 xl:px-65 py-10 text-center">
          {status === 'loading' ? (
            // Loading skeleton untuk projects
            Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                className="cursor-pointer rounded-2xl"
              >
                <div className="w-full px-20 bg-gradient-to-b from-black to-gray-800 dark:bg-gradient-to-b dark:from-yellow-200 dark:to-red-200 rounded-2xl shadow-md">
                  <div className="aspect-square bg-gray-700 dark:bg-gray-300 rounded-2xl animate-pulse"></div>
                </div>
                <div className="font-dosis text-white dark:text-black text-3xl font-semibold text-start mt-4">
                  <div className="flex justify-between mb-2">
                    <div className="h-6 bg-gray-700 dark:bg-gray-300 rounded animate-pulse w-3/4"></div>
                    <div className="h-6 bg-gray-700 dark:bg-gray-300 rounded animate-pulse w-6"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-700 dark:bg-gray-300 rounded animate-pulse w-1/2"></div>
                    <div className="h-4 bg-gray-700 dark:bg-gray-300 rounded animate-pulse w-1/4"></div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : status === 'failed' ? (
            // Error state
            <div className="col-span-full text-center py-20">
              <div className="text-red-500 text-xl mb-4">Failed to load projects</div>
              <button 
                onClick={() => dispatch(fetchProjects())}
                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : (
            // Actual projects
            projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.projectID}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.3 }}
                className="cursor-pointer rounded-2xl"
              >
                <div className="w-full px-20 bg-gradient-to-b from-[#1a0a2e] to-[#c46a4734] dark:bg-gradient-to-b dark:from-yellow-200 dark:to-red-200 rounded-2xl shadow-md"
                  onClick={() => handleDetailsClick(project.projectID)}
                >
                  <TiltedCard
                    imageSrc={project.image[0]}
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
                <div className="font-dosis text-white dark:text-black text-3xl font-semibold text-start mt-4">
                  <div className="flex justify-between mb-2">
                    <p className="hover:underline">{project.ProjectName}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                      <BiLinkExternal className="demo ml-2 inline-block" />
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm">{project.role.join(', ')}</p>
                    <p className="text-sm">{project.date}</p>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={() => navigate('/projects')}
            className="text-white dark:text-black text-lg font-semibold border-2 border-amber-500 px-6 py-2 rounded-full shadow-lg hover:bg-amber-500 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Show More
          </button>
        </div>
      </section>

      <section id="contact" className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-2">
        <div className="relative z-0">
          <h1 className="font-clash px-4 lg:px-65 py-2 text-3xl font-semibold text-start text-white dark:text-black">
            What I Do
          </h1>

        </div>
        <div className=" relative text-white dark:text-black z-10 p-8 px-4 lg:px-45 xl:px-65 flex flex-col md:flex-row gap-8 transition-all duration-500">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            {tabs.map((tab, index) => (
              <div key={index} className="overflow-hidden">
                <motion.div
                  onClick={() => {
                    if (activeTab === index) {
                      setActiveTab(null); // hide content
                    } else {
                      setActiveTab(index);
                      setLastActiveTab(index); // simpan tab terakhir yang aktif
                    }
                  }}
                  className={`p-4 rounded-lg border border-gray-700 cursor-pointer transition ease-in-out duration-300 ${activeTab === index ? "bg-gray-950 dark:bg-[#f4f3e5]" : ""
                    }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <h2 className="text-lg font-clash font-semibold flex items-center gap-2">
                    {tab.title}
                  </h2>

                  {/* CONTENT WITH SMOOTH ANIMATION */}
                  <AnimatePresence initial={false}>
                    {activeTab === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          marginTop: 0,
                          transition: {
                            opacity: { duration: 0.2 },
                            height: { duration: 0.3 },
                          },
                        }}
                        transition={{
                          duration: 0.4,
                          opacity: { duration: 0.3 },
                          height: { duration: 0.4 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-lg font-dosis text-gray-300 dark:text-gray-600">
                          {tab.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 flex relative">
            <AnimatePresence mode="wait">
              {lastActiveTab !== null && tabs[lastActiveTab] && (
                <motion.img
                  key={tabs[lastActiveTab].image}
                  src={tabs[lastActiveTab].image}
                  alt={tabs[lastActiveTab].title}
                  initial={{ opacity: 0, x: 20, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="rounded-xl max-h-80 w-full object-cover shadow-xl"
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0d] dark:bg-[#f6f4e5] relative overflow-hidden py-10">
        <div className="relative lg:px-20">
          <InfiniteRibbonImage
            items={[
              { src: StackIcons.ReactJS, label: 'React JS' },
              { src: StackIcons.NodeJS, label: 'Node JS' },
              { src: StackIcons.NextJS, label: 'Next JS' },
              { src: StackIcons.JavaScript, label: 'JavaScript' },
              { src: StackIcons.TailwindCSS, label: 'Tailwind CSS' },
              { src: StackIcons.MongoDB, label: 'MongoDB' },
              { src: StackIcons.PostgreSQL, label: 'PostgreSQL' },
              { src: StackIcons.MySQL, label: 'MySQL' },
              { src: StackIcons.Redux, label: 'Redux' },
              { src: StackIcons.GIT, label: 'Git' },
              { src: StackIcons.FramerMotion, label: 'Framer Motion' },
            ]}
            repeat={6}
            duration={20}
          />

          {/* LEFT GRADIENT */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-5 lg:w-200 bg-gradient-to-r from-[#0b0b0d] dark:from-[#f6f4e5] to-transparent z-10" />

          {/* RIGHT GRADIENT */}
          <div className="pointer-events-none absolute top-0 right-0 h-full  w-50 lg:w-300 bg-gradient-to-l from-[#0b0b0d] dark:from-[#f6f4e5] to-transparent z-10" />
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

     
    </div>
  );
};

export default Index;

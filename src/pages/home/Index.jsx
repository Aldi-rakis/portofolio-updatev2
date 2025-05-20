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

import tasicon from "../../assets/icon/tas.png";
import { InfiniteRibbon } from "../../component/ui/infinite-ribbon.jsx";
import { cn } from "../../lib/utils";
// import SpotlightPreview from "../../component/SpotlightPreview.jsx";
import { Spotlight } from "../../component/ui/spotlight.jsx";

import { InfiniteRibbonImage } from "../../component/ui/infinite-ribbon-image.jsx";
import Card from "../../component/Card.jsx";
import { delay } from "motion";
const Index = () => {
  const projects = [
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

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulasi loading selama 2 detik, kamu bisa ganti sesuai event model ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    {
      title: "Development",
      description:
        "Building responsive websites and applications. Providing users with an enriching experience that adapts to any device and screen size.",
      image:
        "https://devrajchatribin.com/_next/image?url=%2Fimages%2Fbranding.avif&w=1200&q=100", // ganti sesuai path kamu
    },
    {
      title: "System Architecture",
      description:
        "Designing scalable and maintainable systems tailored to business needs and long-term growth.",
      image:
        "https://cdn.pixabay.com/photo/2024/03/09/14/58/laptop-8622746_1280.png",
    },
    {
      title: "UI/UX Implementation",
      description:
        "Creating clean, modern interfaces with a focus on usability and user engagement.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_1280.jpg",
    },
    {
      title: "API Development",
      description:
        "Developing secure and efficient RESTful APIs for smooth and reliable data communication between systems.",
      image:
        "https://devrajchatribin.com/_next/image?url=%2Fimages%2Fbranding.avif&w=1200&q=100", // ganti sesuai path kamu
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
            className=" absolute -bottom-45  z-0 w-full h-full bg-"
          >
            <ModelViewer />
          </div>
          <div className="w-full lg:w-1/2 px-5 mx-10 lg:mx-20 justify-center items-center text-center lg:text-start  gap-10 flex flex-col">
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

               <motion.button
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
              </motion.button>
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
            <motion.p
              className="font-dosis text-white dark:text-black text-xl lg:text-3xl md:leading-12 text-center md:text-justify"
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
              {"I'm a Fullstack-Developer with over 2 years of experience in software development. I specialize in system architecture, API development, and problem-solving. I also handle project planning, implementation, and deployment, with a focus on building efficient, user-centric digital solutions, supported by modern and responsive front-end design."
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
        </div>

        <div className="bg-[#0b0b0d] dark:bg-[#f6f4e5] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 flex flex-row md:flex-row justify-around items-center gap-10 md:gap-0">
            {[
              { value: "2+", text: "Years Experience" },
              { value: "10+", text: "Overall Global Customers" },
              { value: "15+", text: "Projects Implemented" },
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

      <section id="project" className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-6">
       <div className="z-10 relative justify-center items-center gap-10 px-4 lg:px-45 py- ">
           <h2 className="text-start font-clash text-3xl font-bold text-white dark:text-black">My Projects</h2>
           <p className="text-start font-dosis text-xl font-bold text-white dark:text-black">- Showcase project -</p>
        </div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#FFB000] h-[200px] w-[1000px] opacity-15 right-0 transform translate-y-1/4"></div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#FF589C] h-[200px] w-[200px] opacity-15 left-0 transform translate-y-1/4"></div>
        <div className="absolute z-0 rounded-full blur-[100px] bg-[#0041BE] h-[200px] w-[200px] opacity-15 left-0 transform translate-y-1"></div>
           
       <div className="z-10 relative justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 px-4 lg:px-45 py-10 text-center">
      {projects.slice(0, 4).map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: index * 0.3 }}  // delay manual per card
          className="cursor-pointer rounded-2xl"
       
          onClick={() => window.open(project.link, "_blank")}
        >
          <div className="w-full px-20 bg-gradient-to-b from-black to-gray-800 dark:bg-gradient-to-b dark:from-yellow-200 dark:to-red-200 rounded-2xl shadow-md">
            <TiltedCard
              imageSrc={project.imageSrc}
              altText={project.altText}
              captionText={project.captionText}
              rotateAmplitude={18}
              scaleOnHover={1.3}
              rotateOnHover={true}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
          <div className="font-dosis text-white dark:text-black text-3xl font-semibold text-start mt-4">
            <p>{project.title}</p>
            <div className="flex justify-between">
              <p className="text-sm">{project.role}</p>
              <p className="text-sm">{project.year}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

        <div className="flex justify-center items-center">
          <button className="text-white dark:text-black text-lg font-semibold border-2 border-amber-500 px-6 py-2 rounded-full shadow-lg hover:bg-amber-500 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105">
            Show more
          </button>
        </div>
      </section>

      <section id="contact" className="bg-[#0b0b0d] dark:bg-[#f6f4e5] py-2">
        <div className="relative z-0">
          <h1 className="font-clash px-4 lg:px-45 py-2 text-3xl font-semibold text-start text-white dark:text-black">
            What I Do
          </h1>

        </div>
        <div className=" relative text-white dark:text-black z-10 p-8 px-4 lg:px-45 flex flex-col md:flex-row gap-8 transition-all duration-500">
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
                  className={`p-4 rounded-lg border border-gray-700 cursor-pointer transition ease-in-out duration-300 ${
                    activeTab === index ? "bg-gray-950 dark:bg-[#f4f3e5]" : ""
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
              {
                src: "https://devrajchatribin.com/skills/React.js.svg",
                label: "Brand A",
              },
              {
                src: "https://devrajchatribin.com/skills/Node.js.svg",
                label: "Brand B",
              },
              {
                src: "https://devrajchatribin.com/skills/Next.js.svg",
                label: "Brand C",
              },
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

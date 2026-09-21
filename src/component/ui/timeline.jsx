"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMysql,
  SiMongodb, SiLaravel, SiGithub, SiDocker,
  SiRedux, SiFigma, SiPhp, SiJavascript,
  SiAngular, SiGo, SiAmazonwebservices,
} from "react-icons/si";
import { FaServer } from "react-icons/fa";

// Icon map — tambah sesuai kebutuhan
const ICON_MAP = {
  "Angular":       { icon: <SiAngular />,           color: "#DD0031" },
  "React.js":      { icon: <SiReact />,              color: "#61DAFB" },
  "React Native":  { icon: <SiReact />,              color: "#61DAFB" },
  "Next.js":       { icon: <SiNextdotjs />,           color: "#ffffff" },
  "TypeScript":    { icon: <SiTypescript />,          color: "#3178C6" },
  "JavaScript":    { icon: <SiJavascript />,          color: "#F7DF1E" },
  "Tailwind CSS":  { icon: <SiTailwindcss />,         color: "#06B6D4" },
  "Node.js":       { icon: <SiNodedotjs />,           color: "#339933" },
  "Express.js":    { icon: <SiExpress />,             color: "#ffffff" },
  "PostgreSQL":    { icon: <SiPostgresql />,          color: "#336791" },
  "MySQL":         { icon: <SiMysql />,               color: "#4479A1" },
  "MongoDB":       { icon: <SiMongodb />,             color: "#47A248" },
  "REST API":      { icon: <FaServer />,              color: "#FF6B35" },
  "Laravel":       { icon: <SiLaravel />,             color: "#FF2D20" },
  "PHP":           { icon: <SiPhp />,                 color: "#777BB4" },
  "Git & GitHub":  { icon: <SiGithub />,              color: "#ffffff" },
  "Docker":        { icon: <SiDocker />,              color: "#2496ED" },
  "Redux":         { icon: <SiRedux />,               color: "#764ABC" },
  "Figma":         { icon: <SiFigma />,               color: "#F24E1E" },
  "Golang":        { icon: <SiGo />,                  color: "#00ACD7" },
  "AWS":           { icon: <SiAmazonwebservices />,   color: "#FF9900" },
};

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [limit, setLimit] = useState(3);
  const [prevLimit, setPrevLimit] = useState(3);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [limit, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const itemRefs = useRef(data.map(() => React.createRef()));

  const scrollYs = itemRefs.current.map(ref =>
    useScroll({ target: ref, offset: ["start 80%", "end 30%"] })
  );

  const opacities = scrollYs.map(s =>
    useTransform(s.scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 1, 0])
  );

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const handleMore = () => {
    if (limit < data.length) {
      setLimit(data.length);
      setPrevLimit(limit);
    } else {
      setLimit(3);
    }
  };

  return (
    <div
      className="w-full bg-[#0b0c10] dark:bg-[#f6f4e5] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-3 font-dosis">
          Experience
        </p>
        {/* Title */}
        <h2 className="font-clash font-bold text-4xl md:text-6xl mb-1 max-w-4xl leading-tight text-orange-500">
          My Journey
        </h2>
        <div className="w-16 h-1 bg-orange-500 rounded-full mt-3" />
      </div>

      <div className="relative max-w-7xl mx-auto pb-4">
        {data.slice(0, limit).map((item, index) => {
          const isNewItem = index >= prevLimit;

          return (
            <motion.div
              key={index}
              className="flex justify-start pt-2 md:pt-2 md:gap-10"
              ref={itemRefs.current[index]}
              style={{ opacity: opacities[index] }}
              initial={isNewItem ? { opacity: 0, y: 30 } : false}
              animate={isNewItem ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Sticky title */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                {/* Dot */}
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-orange-500/30 border-2 border-orange-500 p-2 shadow-[0_0_8px_2px_rgba(249,115,22,0.4)]" />
                </div>

                {/* Desktop title */}
                <div className="hidden md:block md:pl-20">
                  <h3 className="font-clash font-bold text-xl md:text-2xl text-orange-500 leading-tight">
                    {item.title}
                  </h3>
                  {item.period && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-dosis mt-1 uppercase tracking-widest">
                      {item.period}
                    </p>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full pb-10">
                {/* Mobile title */}
                <div className="md:hidden block mb-4">
                  <h3 className="font-clash text-2xl font-bold text-orange-500 leading-tight">
                    {item.title}
                  </h3>
                  {item.period && (
                    <p className="text-xs text-gray-500 dark:text-black font-dosis mt-1 uppercase tracking-widest">
                      {item.period}
                    </p>
                  )}
                </div>

                {/* Main content */}
                {item.content}

                {/* Stack Pills */}
                {item.stacks && item.stacks.length > 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.06 },
                      },
                    }}
                  >
                    {item.stacks.map((label, i) => {
                      const tech = ICON_MAP[label];
                      return (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 8 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 dark:bg-black/10 dark:border-black/20 text-white dark:text-black font-dosis font-semibold hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200 cursor-default select-none"
                        >
                          {tech && (
                            <span className="text-sm leading-none" style={{ color: tech.color }}>
                              {tech.icon}
                            </span>
                          )}
                          <span className="uppercase text-[10px] tracking-widest">{label}</span>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Timeline vertical line */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]
            bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))]
            from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-red-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {/* More / Close button */}
        {data.length > 3 && (
          <div className="w-full flex justify-center items-center mt-6">
            <button
              className="text-sm font-dosis font-semibold border-2 border-orange-500 px-10 py-2.5 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
              onClick={handleMore}
            >
              {limit < data.length ? "Show More" : "Show Less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

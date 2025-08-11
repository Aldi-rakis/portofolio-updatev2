"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [limit, setLimit] = useState(3); // awalnya tampil 3 item
  const [prevLimit, setPrevLimit] = useState(3); // untuk deteksi item baru

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [limit, data]);


  // Scroll progress untuk garis timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  // Buat refs untuk semua item
  const itemRefs = useRef(data.map(() => React.createRef()));

  // Buat scrollY & opacity untuk tiap item
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
    setLimit(data.length); // tampilkan semua
    setPrevLimit(limit);
  } else {
    setLimit(3); // kembali tampilkan 3 item pertama
  }
};

  return (
    <div
      className="w-full bg-[#0b0c10] dark:bg-[#f6f4e5] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
        <h2 className="font-clash font-bold text-lg md:text-4xl mb-4 text-orange-500 max-w-4xl">
          My Journsey
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20">
       {data.slice(0, limit).map((item, index) => {
          const isNewItem = index >= prevLimit; // item yang baru muncul

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
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-orange-500">
                  {item.title}
                </h3>
              </div>

              {/* Content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-white dark:text-black">
                  {item.title}
                </h3>
                {item.content}
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

         {/* More button */}
        {data.length > 3 && (
        <div className="w-full flex justify-center items-center mt-4">
            <button
            className="text-sm font-semibold border-2 px-8 py-2 rounded-full text-orange-500 hover:underline"
            onClick={handleMore}
            >
            {limit < data.length ? "More" : "Close"}
            </button>
        </div>
        )}

      </div>
    </div>
  );
};

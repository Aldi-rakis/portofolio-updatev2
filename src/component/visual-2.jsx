"use client";
 
import * as React from "react";
import { useState, useEffect } from "react";
 
export function Visual2({
  mainColor = "#8b5cf6",
  secondaryColor = "#fbbf24",
  gridColor = "#80808015",
}) {
  const [hovered, setHovered] = useState(false);
 
  return (
    <>
      <div
        className="inset-0 absolute z-20"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          "--color": mainColor,
          "--secondary-color": secondaryColor,
        }}
      />
      <div className="w-[356px] h-[180px] rounded-t-lg relative overflow-hidden">
        <Layer1
          hovered={hovered}
          color={mainColor}
          secondaryColor={secondaryColor}
        />
        <Layer2 color={mainColor} />
        <Layer3 color={mainColor} />
        <Layer4
          color={mainColor}
          secondaryColor={secondaryColor}
          hovered={hovered}
        />
        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
      </div>
    </>
  );
}
 
const EllipseGradient = ({ color }) => {
  return (
    <div className="w-full h-full z-[5] absolute inset-0 flex items-center justify-center">
      <svg
        width="356"
        height="196"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="356" height="180" fill="url(#paint0_radial_12_207)" />
        <defs>
          <radialGradient
            id="paint0_radial_12_207"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(178 98) rotate(90) scale(98 178)"
          >
            <stop stopColor={color} stopOpacity="0.25" />
            <stop offset="0.34" stopColor={color} stopOpacity="0.15" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
 
const GridLayer = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color }}
      className="absolute z-[4] inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none bg-center [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-70"
    />
  );
};
 
const Layer1 = ({ hovered, color, secondaryColor }) => {
  const [mainProgress, setMainProgress] = useState(12.5);
  const [secondaryProgress, setSecondaryProgress] = useState(0);
 
  useEffect(() => {
    let timeout;
 
    if (hovered) {
      timeout = setTimeout(() => {
        setMainProgress(66);
        setSecondaryProgress(100);
      }, 200);
    } else {
      setMainProgress(12.5);
      setSecondaryProgress(0);
    }
 
    return () => {
      clearTimeout(timeout);
    };
  }, [hovered]);
 
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const mainDashoffset = circumference - (mainProgress / 100) * circumference;
  const secondaryDashoffset =
    circumference - (secondaryProgress / 100) * circumference;
 
  return (
    <div className="w-[356px] h-[360px] absolute top-0 left-0 transition-transform duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] transform group-hover/animated-card:-translate-y-[90px] z-[7] flex items-center justify-center group-hover/animated-card:scale-110">
      <div className="relative w-[120px] h-[120px] flex items-center justify-center dark:text-white text-[#00000050]">
        <div className="donut-chart-container relative">
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="10"
              fill="transparent"
              opacity={0.2}
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke={secondaryColor}
              strokeWidth="14"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={secondaryDashoffset}
              transform="rotate(-90 50 50)"
              style={{
                transition:
                  "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)",
              }}
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke={color}
              strokeWidth="14"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={mainDashoffset}
              transform="rotate(-90 50 50)"
              style={{
                transition:
                  "stroke-dashoffset 0.5s cubic-bezier(0.6, 0.6, 0, 1)",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl dark:text-white text-black font-gilroy">
              {hovered
                ? secondaryProgress > 66
                  ? secondaryProgress
                  : mainProgress
                : mainProgress}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
 
const Layer2 = ({ color }) => {
  return (
    <div
      className="relative w-[356px] h-full"
      style={{ "--color": color }}
    >
      <div className="bg-transparent absolute inset-0 w-[356px] translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] group-hover/animated-card:translate-y-full z-[6] flex p-4 items-start justify-center">
        <div className="border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1.5 backdrop-blur-sm opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] group-hover/animated-card:opacity-0 dark:bg-black/25 bg-white/25">
          <div className="flex gap-2 items-center">
            <div className="h-2 w-2 bg-[var(--color)] rounded-full shrink-0" />
            <p className="dark:text-white text-black text-xs">
              Random Data wwww
            </p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-1">
            Displaying some interesting stats.
          </p>
        </div>
      </div>
    </div>
  );
};
 
const Layer3 = ({ color }) => {
  return (
    <div className="inset-0 absolute z-[6] translate-y-full opacity-0 group-hover/animated-card:translate-y-0 group-hover/animated-card:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] flex items-center justify-center">
      <svg
        width="356"
        height="180"
        viewBox="0 0 356 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="356" height="180" fill="url(#paint0_linear_29_3)" />
        <defs>
          <linearGradient
            id="paint0_linear_29_3"
            x1="178"
            y1="0"
            x2="178"
            y2="180"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.35" stopColor={color} stopOpacity="0" />
            <stop offset="1" stopColor={color} stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
 
const Layer4 = ({ color, secondaryColor, hovered }) => {
  const items = [
    { id: 1, translateX: "100", translateY: "50", text: "ReactJS" },
    { id: 2, translateX: "100", translateY: "-50", text: "MongoDB" },
    { id: 3, translateX: "125", translateY: "0", text: "Prisma" },
    { id: 4, translateX: "-125", translateY: "0", text: "NextJs" },
    { id: 5, translateX: "-100", translateY: "50", text: "Auth.js" },
    { id: 6, translateX: "-100", translateY: "-50", text: "Stripe" },
  ];
 
  return (
    <div className="inset-0 absolute z-[7] opacity-0 group-hover/animated-card:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] flex items-center justify-center">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="rounded-full absolute transition-all duration-500 ease-[cubic-bezier(0.6, 0.6, 0, 1)] flex items-center justify-center gap-1 backdrop-blur-sm border dark:border-zinc-800 border-zinc-200 py-0.5 px-1.5 bg-white/70 dark:bg-black/70"
          style={{
            transform: hovered
              ? `translate(${item.translateX}px, ${item.translateY}px)`
              : "translate(0px, 0px)",
          }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: index < 3 ? color : secondaryColor }}
          />
          <span className="text-[10px] ml-1 dark:text-white text-black">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};
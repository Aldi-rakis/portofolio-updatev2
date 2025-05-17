import * as React from "react";
import { cn } from "../../lib/utils";

export function InfiniteRibbon({
  items = [],           // [{ src: "...", label: "..." }]
  repeat = 50,
  duration = 15,
  reverse = false,
  rotation = 0,
  backgroundImage = "",
  className = "",
}) {
  const animationClass = reverse
    ? "animate-infinite-ribbon-reverse"
    : "animate-infinite-ribbon";

  return (
    <div
      className={cn("overflow-hidden max-w-full py-4 md:py-8", className)}
      style={{
        transform: `rotate(${rotation}deg)`,
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundColor: "#ffff",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={cn("whitespace-nowrap flex items-center gap-10", animationClass)}
        style={{ "--ribbon-duration": `${duration}s` }}
      >
        {Array.from({ length: repeat }).flatMap((_, i) =>
          items.map((item, index) => (
            <div
              key={`${i}-${index}`}
              className="flex justify-center items-center w-auto gap-2 bg-[#dedcdc1c] transform px-8 py-2 rounded-full shadow-md"
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-8 w-8 object-cover rounded-full"
              />
              <p className="text-white font-clash font-medium text-base md:text-sm">
                {item.label}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

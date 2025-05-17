import * as React from "react";
import { cn } from "../../lib/utils";
 
export function InfiniteRibbon({
  repeat = 5,
  duration = 15,
  reverse = false,
  rotation = 0,
  children,
  className,
  separator = "✦",
}) {
  const animationClass = reverse
    ? "animate-infinite-ribbon-reverse"
    : "animate-infinite-ribbon";
 
  return (
    <div
      className={cn(
        "overflow-hidden font-clash max-w-full text-[#27272e] py-2 md:py-6 text-xl md:text-4xl font-black uppercase ",
        className
      )}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div
        className={cn("whitespace-nowrap flex", animationClass)}
        style={{ "--ribbon-duration": `${duration}s` }}
      >
         {Array.from({ length: repeat }, (_, index) => (
          <span key={index} className="select-none inline-block items-center">
            {children} <span className="mx-6">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
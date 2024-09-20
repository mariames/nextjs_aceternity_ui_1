"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    companyName: string;
    caseStudyLink: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }

    function getDirection() {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty("--animation-direction", "forwards");
        } else {
          containerRef.current.style.setProperty("--animation-direction", "reverse");
        }
      }
    }

    function getSpeed() {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    }

    addAnimation();
  }, [direction, speed]); // Include direction and speed as dependencies

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[30vw] max-w-full flex-shrink-0 rounded-2xl border border-b-0 border-slate-800 p-5 md:p-16 md:w-[60vw]"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            key={item.name}
          >
            <div className="me-3">
              <Image
                src={item.companyName}
                alt="profile"
                className="w-28 h-12 mb-7"
                width={50}
                height={25} 
              />
            </div>
            <div className="flex items-start">
              <blockquote className="flex-grow">
                <span className="relative z-20 text-sm md:text-lg leading-[1.6] text-white font-normal">
                  {item.quote}
                </span>
              </blockquote>
            </div>
            <div className="relative mt-6 flex flex-col">
              <div className="flex flex-col mb-4">
                <span className="text-xl font-bold leading-[1.6] text-white">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-white-200 font-normal">
                  {item.title}
                </span>
                <a
                  href={item.caseStudyLink}
                  className="w-40 bg-gradient-to-r from-cyan-600 to-teal-500 text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-600 font-semibold py-2 px-4 rounded-lg text-sm inline-block transition-all duration-300 text-center mt-7"
                >
                  Read Case Study
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

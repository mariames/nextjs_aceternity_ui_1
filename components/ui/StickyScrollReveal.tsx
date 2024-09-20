"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = useMemo(() => [
    "var(--slate-900)",
    "var(--sky-900)",
    "var(--teal-600)",
  ], []);

  const linearGradients = useMemo(() => [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ], []);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative w-full flex justify-center max-md:flex-col-reverse items-start py-24 "
      ref={ref}
    >
      <div className="flex-grow flex flex-col items-start pl-12 max-w-2xl">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-5">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-slate-100 mb-10"
              >
                {item.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.5 }}
                className="text-lg text-slate-300 max-w-lg mb-16 pb-20"
              >
                {item.description}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        key={activeCard}
        style={{ background: backgroundGradient }}
        className={cn(
          "lg:block sticky top-32 xl:w-2/5 max-md:max-w-96 max-md:mx-8 h-fit rounded-md bg-white overflow-hidden flex justify-center items-center",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </motion.div>
    </motion.div>
  );
};

"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { logos } from "@/data";
import Image from "next/image";

export function CardDemo() {
  return (
    <Card>
      <CardTitle>Trusted by</CardTitle>
      <CardDescription> </CardDescription>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = () => {
  // Define the static values directly within useMemo
  //const scale = [1, 1.1, 1];
  //const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];



  useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];

    // Animating each circle individually
    animate(".circle-1", { scale, transform }, { duration: 0.8, repeat: Infinity, repeatDelay: 1 });
    animate(".circle-2", { scale, transform }, { duration: 0.8, repeat: Infinity, repeatDelay: 1 });
    animate(".circle-3", { scale, transform }, { duration: 0.8, repeat: Infinity, repeatDelay: 1 });
    // Add more animations as needed
  }, []); // Empty dependency array to run once

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="circle-1">
          <Image
            src={'/Influitive-Logo-Full-white.svg'}
            alt={"Influitive"}
            width={90}
            height={90}
            className="h-full w-full"
          />
        </Container>
        <Container className="circle-2">
          <Image
            src={'/LegalZoom-Logo-Full-white.svg'}
            alt={"LegalZoom"}
            width={90}
            height={90}
            className="h-full w-full"
          />
        </Container>
        <Container className="circle-3">
          <Image
            src={'/BetMGM-full-white-1.svg'}
            alt={"BetMGM"}
            width={150}
            height={150}
            className="h-full w-full"
          />
        </Container>
        {/** 
        <Container className="circle-4">
          <Image
            src={'/Podium-Logo-white.png'}
            alt={""}
            width={20}
            height={20}
            className="h-full w-full"
          />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <Image
            src={'/BetMGM-full-white-1.svg'}
            alt={""}
            width={90}
            height={90}
            className="h-full w-full"
          />
        </Container>
        */}
      </div>
      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full rounded-xl bg-slate-900 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-3xl font-normal text-slate-100 relative top-12 text-left",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-sm z-40",
        className,
        showGradient && "bg-slate-900"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-24 w-24 p-1 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
        className
      )}
    >
      {children}
    </div>
  );
};

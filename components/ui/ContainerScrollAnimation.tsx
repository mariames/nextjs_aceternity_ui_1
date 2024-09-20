"use client";
import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [navbarHeight, setNavbarHeight] = useState<number>(70);  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.9, 0.85] : [1.05, 1];
  };
  
  //const navbarHeight = 70; // Adjust based on your actual navbar height
  //const completionPoint = navbarHeight / window.innerHeight;
  const completionPoint = typeof window !== "undefined" ? navbarHeight / window.innerHeight : 0;
  const rotate = useTransform(scrollYProgress, [0, completionPoint], [10, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[50rem] md:h-[70rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "700px",
        }}
      >
        {/** 
        <Header translate={translate} titleComponent={titleComponent} />
        */}
        <Card rotate={rotate} translate={translate} scale={scale} isMobile={isMobile} >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  isMobile,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  isMobile: boolean;
  children: React.ReactNode;

}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        padding:"24px"
      }}
      
      className={`max-w-5xl mx-auto py-0 w-full border-1 border-[#ffffff] bg-[#fffff] shadow-md rounded-lg flex items-center justify-center select-none`}

    >
      <div className=" h-full w-full rounded-2xl md:rounded-2xl ">
        {children}
      </div>
      <p>{' '}</p>
    </motion.div>
  );
};

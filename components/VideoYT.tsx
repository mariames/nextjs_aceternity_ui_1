"use client";
import React from "react";
import { ContainerScroll } from "./ui/ContainerScrollAnimation";

export function VideoYT() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={<div className="select-none">&nbsp;</div>}
      >
<div className="relative w-full aspect-[16/9] md:aspect-[16/9] xs:aspect-[16/9]">
    <iframe
        className="absolute left-0 w-full h-full border-none rounded-lg"
        src="https://www.youtube.com/embed/-XC9NWMMzDc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
</div>

      </ContainerScroll>
    </div>
  );
}

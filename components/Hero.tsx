import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { VideoYT } from "./VideoYT";

const Hero = () => {
    return (
        <div className="pt-24">
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
                    flex flex-col items-center justify-center">
                    <h2 className="uppercase tracking-widest text-xs 
                        text-center text-black-100 opacity-0 animate-fade-in select-none">
                        Competitive intelligence automation software
                    </h2>
                    <TextGenerateEffect 
                        className="text-center text-[40px] md:text-5xl lg:text-6xl select-none" 
                        words="Win More Deals with Competitive Inteligence" />
                        <p className="text-center md:tracking-wider mb-4  text-sm md:text-lg lg:text-2xl opacity-0 animate-fade-in select-none">
                            Close even the most difficult of deals with always up-to-date Battlecards that live where your sales teams work.
                        </p>
                        <a href="#about" className="opacity-0 animate-fade-in">
                            <MagicButton title="Get a Demo"
                                otherClasses="font-semibold tracking-wide text-xl bg-white text-slate-800"
                                icon={<FaLocationArrow />}
                                position="right" />
                        </a>
                </div>
            </div>
        <VideoYT />
    </div>
    );
}

export default Hero;
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import BackgroundText from "./BackgroundText";

const Footer = () => {
    return (
        <footer className="w-full pt-20  bg-slate-900" id="contact">
        <div className="flex mt-16 flex-row max-md:flex-col justify-center items-center bg-slate-950 text-gray-100 bottom-0 py-8">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Marijana Vujovic
          </p>
          <span className="max-md:hidden"> &nbsp;|&nbsp; </span>
          <a href="terms">Terms</a>
          <span className="max-md:hidden"> &nbsp;|&nbsp; </span>
          <a href="privacy police">Privacy Police</a>
          <span className="max-md:hidden"> &nbsp;|&nbsp; </span>
          <a href="vs">Kompyte vs Klue | Kompyte vs Crayon</a>
        </div>
      </footer>
    )
}

export default Footer;
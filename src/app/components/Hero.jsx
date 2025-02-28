import React from "react";
import { hero, icon } from "../assets/assets.js";
import Image from "next/image";
import Titlecards from "./Titlecards.jsx";
const Hero = () => {
  return (
    <div>
      <div className="relative  bg-black w-full ">
        <Image
          src={hero[0].banner}
          alt="hero-banner"
          className=" bg-custom w-full"
        />
        <section className="px-9 w-[50%] absolute bottom-70">
          <Image src={hero[0].title} alt="banner" className="w-[80%]" />
          <article className="text-md font-medium p-3 text-white">
            {hero[0].description}
          </article>
          <div className=" flex p-3 gap-7 h-auto ">
            <button className="bg-white text-lg font-semibold gap-2 flex justify-center items-center px-4 py-2.5 rounded-xl">
              <Image src={icon.play} alt="play" className="size-[30px]" />
              Play
            </button>
            <button className="transparent   flex justify-center items-center text-white   gap-2 px-4 py-1">
              <Image src={icon.info} alt="info" className=" size-[30px] " />
              <p className="text-md">More Info</p>
            </button>
          </div>
        </section>
        <section className="absolute  bottom-5 w-90 flex items-center">
          <Titlecards />
        </section>
      </div>
      <section className="bg-black py-9  ">
        <Titlecards category="hottest shows" />
        <Titlecards category="Hollywood" />
        <Titlecards category="Nollywood" />
      </section>
    </div>
  );
};

export default Hero;

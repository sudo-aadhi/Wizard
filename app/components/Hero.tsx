"use client";
import React from "react";
import Header from "@/app/components/Header";
import HeroContent from "@/app/components/HeroContent";

/**
 * Hero Component
 *
 * The Hero component serves as a visually impactful section at the top of the page.
 * It incorporates a structured layout featuring a header, and hero content.
 * Designed with precision, it ensures alignment with modern UI principles and
 * responsiveness across various screen sizes.
 */
const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-[900px]">
      <div className="flex items-center justify-center w-full h-[53px]">
        <div className="flex items-center justify-center w-[1335px] h-full border-2 border-l-[#16181A] border-t-0 border-b-0 border-r-[#16181A]">
          <Header />
        </div>
      </div>
      <div className="flex w-full h-[40px] border-2 border-l-0 border-t-[#16181A] border-b-[#16181A] border-r-0"></div>
      <div className="flex items-center justify-center w-[1335px] h-[790px] border-2 border-l-[#16181A] border-t-0 border-b-[#16181A] border-r-[#16181A]">
        <div className="flex items-center justify-evenly w-[1250px] h-[790px] border-2 border-l-[#16181A] border-t-0 border-b-[#16181A] border-r-[#16181A]">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};

export default Hero;

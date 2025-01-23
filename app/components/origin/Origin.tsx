"use client";
import React from "react";
import LightRays from "@/app/components/rays/LightRays";
import Badge from "@/app/components/badge/Badge";
import Hero from "@/app/components/hero/Hero";
import Keyboard from "../keyboard/Keyboard";
import Brands from "../brands/Brands";

const Origin = () => {
  return (
    <div className="flex flex-col items-center w-full h-[7981px] bg-[#040313]">
      <LightRays stagger={true} />
      <Badge />
      <Hero />
      <Brands />
    </div>
  );
};

export default Origin;

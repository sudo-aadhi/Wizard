"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const NavigationBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { name: "Our solutions", hoverEffect: true },
    { name: "Components" },
    { name: "Pricing" },
  ];

  const listVariants = {
    hidden: { opacity: 0, y: -10, filter: "blur(20px)" },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const wordVariants = {
    hidden: { opacity: 0, filter: "blur(15px)" },
    visible: (wordIndex: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: wordIndex * 0.05,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="flex items-center justify-center w-[353.69px] h-full bg-[#0F1112] border-2 border-l-0 border-t-0 border-b-0 border-r-[#16181A]"></div>
  );
};

export default NavigationBar;

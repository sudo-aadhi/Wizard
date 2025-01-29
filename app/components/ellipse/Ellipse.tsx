"use client";
import { motion } from "motion/react";
import React from "react";

const Ellipse = () => {
  return (
    <div className="flex items-center justify-center w-full h-[1895px] overflow-hidden">
      <div
        className="flex items-center justify-center w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#262238] via-[#040313] to-[#040313] relative top-[400px] scale-[5] overflow-hidden shadow-md"
        style={{ boxShadow: "0 0 12px 10px #0A032C" }}
      >
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{
            rotate: -50,
            opacity: 0,
          }}
          animate={{
            rotate: 50,
            opacity: 1,
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0.5,
          }}
        >
          <div className="absolute w-[50px] h-[800px] bg-gradient-to-r from-transparent to-white rounded-l-full"></div>
        </motion.div>
        <div className="flex bg-gradient-to-b from-[#080021] via-[#040313] to-[#040313] w-[500px] h-[500px] rounded-t-full relative top-[0.5px] scale-[1.0015] shadow-md"></div>
      </div>
    </div>
  );
};

export default Ellipse;

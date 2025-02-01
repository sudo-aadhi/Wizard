"use client";
import React, { useCallback, useState, useEffect } from "react";
import { Sparkles, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const Propcontrol = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className="flex items-center justify-center w-[366px] h-full rounded-xl border border-[#2A264B] shadow-md overflow-hidden bg-gradient-to-t from-[#0a0218] to-[#11022b]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col items-center justify-evenly w-[333px] h-[446px]">
        <div className="flex flex-col items-start w-full h-auto p-4 gap-2">
          <div className="flex items-start w-full">
            <Sparkles size={20} />
          </div>
          <h3 className="font-aeonic text-[19px]">
            Control everything through props.
          </h3>
          <p className="font-inter text-[13px] opacity-50">
            Effortlessly control every component with props as flexible,
            customisation, efficient, and dynamic.
          </p>
        </div>
        {/* The main animated section wrapper */}
        <div className="flex flex-col items-center w-full h-[330px] gap-3">
          <div className="flex justify-center items-center w-[320px] h-[40px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#2A264B] drop-shadow-md shadow-md">
            <p className="text-[10px] text-[#928EB3] text-ellipsis font-inter">
              className=flex justify-center items-center w-[320px] h-[40px]
            </p>
          </div>
          {/* The prop flex-box wrapper */}
          <div className="flex w-full h-auto items-center justify-center">
            {/* The title prop box */}
            <div className="flex items-center justify-center p-1 px-3 shadow-md rounded-lg gap-1 border border-[#2A264B]">
              <CircleCheck size={15} color="#B377DB" />
              <p className="text-[12px] font-inter">Title</p>
            </div>
            {/* The circuit flow line wrapper */}
            <div className="flex items-start w-[25px] h-[1px] bg-[#B377DB]  overflow-hidden"></div>
            {/* The description prop box */}
            <div className="flex items-center justify-center p-1 px-3 shadow-md rounded-lg gap-1 border border-[#2A264B] ">
              <CircleCheck size={15} color="#B377DB" />
              <p className="text-[12px] font-inter">Description</p>
            </div>
            {/* The circuit flow line wrapper */}
            <div className="flex items-start w-[25px] h-[2px] bg-white/5 overflow-hidden"></div>
            {/* the features prop box */}
            <div className="flex items-center justify-center p-1 px-3 shadow-md rounded-lg gap-1 border border-[#2A264B] ">
              <CircleCheck size={15} color="#B377DB" />
              <p className="text-[12px] font-inter">Features</p>
            </div>
          </div>
          <motion.div
            className="flex items-center justify-center w-[315px] h-[215px] bg-gradient-to-b from-[#3e1d76] to-[#0A0219] rounded-t-[10px] shadow-md cursor-default"
            style={{
              boxShadow: "0px 0px 505px 15px #190344",
            }}
            initial={{
              y: 75,
            }}
            animate={{
              y: isHovered ? 25 : 75,
            }}
            transition={{
              duration: 1.2, // Slightly longer for smoother transition
              ease: [0.25, 0.8, 0.25, 1], // Ease-in-out for smoother animation
              stiffness: 100, // Reduce stiffness for softer easing
            }}
          >
            <div className="flex flex-col items-center w-[314px] h-[213px] bg-gradient-to-b from-[#151434] to-[#0A0219] rounded-t-[10px] overflow-hidden">
              <div className="flex items-center  justify-center gap-3 w-full h-[95px] relative top-3">
                {/* The image frame */}
                <div className="flex items-center justify-center w-[100px] h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#2A264B] drop-shadow-md shadow-md">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="3.5"
                      fill="#191933"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="39"
                      height="39"
                      rx="3.5"
                      stroke="#2A2A46"
                    />
                    <path
                      d="M31.9994 26.9951H8.17992C7.3691 26.9951 6.89537 26.0808 7.36295 25.4184L11.6292 19.3745C11.9644 18.8997 12.634 18.8066 13.0997 19.1544C14.4566 20.1674 17.125 21.9916 18.75 21.9951C20.3905 21.9987 23.2273 17.217 24.6436 14.6264C25.0238 13.9311 26.031 13.9045 26.4335 14.5871L32.8608 25.4872C33.2539 26.1538 32.7733 26.9951 31.9994 26.9951Z"
                      fill="#12122A"
                      stroke="#2B2B45"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-[175px] h-full gap-1">
                  <h4 className="font-inter text-[13px]">
                    Unlimited customization nothing is ever limited.
                  </h4>
                  <ul className="flex flex-col items-start">
                    <li className="text-[11px] opacity-50">
                      • Collab both classnames
                    </li>
                    <li className="text-[11px] opacity-40">
                      • High end design
                    </li>
                    <li className="text-[11px] opacity-30">
                      • Manipulate whole component
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full h-[1px] items-center justify-center bg-[#353655] relative top-[35px]">
                <div className="flex items-center justify-center absolute w-[85px] h-[20px] bg-[#1F1D39] rounded-[7px] border border-[#353655]">
                  <p className="text-[10px] font-inter opacity-50">
                    Performance
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-[295px] h-[50px] relative top-[55px]">
                {/* First dotted box  */}
                <div className="flex flex-col items-center justify-center w-[90px] h-full border border-dashed border-[#b777f757] rounded-[7px] bg-gradient-to-tr from-[#121022] to-[#2F2350] shadow-md">
                  <div className="flex items-center justify-center">
                    {"238".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[#B877F7] font-semibold"
                          style={{
                            textShadow: `0 0 1px #B877F7, 0 0 2px #B877F7, 0 0 1px #B877F7, 0 0 2px #B877F7`,
                          }}
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    {"keywords".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[8px] text-[#B877F7] font-semibold"
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                </div>
                {/* Second dotted  */}
                <div className="flex flex-col items-center justify-center w-[90px] h-full border border-dashed border-[#b777f757] rounded-[7px] bg-gradient-to-tr from-[#121022] to-[#2F2350] shadow-md">
                  <div className="flex items-center justify-center">
                    {"53200".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[#B877F7] font-semibold"
                          style={{
                            textShadow: `0 0 1px #B877F7, 0 0 2px #B877F7, 0 0 2px #B877F7, 0 0 2px #B877F7`,
                          }}
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    {"Volume".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[8px] text-[#B877F7] font-semibold"
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                </div>
                {/* Third dotted  */}
                <div className="flex flex-col items-center justify-center w-[90px] h-full border border-dashed border-[#b777f757] rounded-[7px] bg-gradient-to-tr from-[#121022] to-[#2F2350] shadow-md">
                  <div className="flex items-center justify-center">
                    {"99.5/100".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[#B877F7] font-semibold"
                          style={{
                            textShadow: `0 0 1px #B877F7, 0 0 2px #B877F7, 0 0 1px #B877F7, 0 0 2px #B877F7`,
                          }}
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-center">
                    {"Designing".split("").map((digit, idx) => {
                      return (
                        <motion.p
                          className="font-inter text-[8px] text-[#B877F7] font-semibold"
                          key={idx}
                          initial={{
                            opacity: 0,
                            filter: "blur(5px)",
                          }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.6, // Longer duration for smoothness
                            delay: 0.1 * idx, // Stagger delay slightly
                          }}
                          viewport={{ once: true }} // Ensures it animates only once when it comes into view
                        >
                          {digit}
                        </motion.p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Propcontrol;

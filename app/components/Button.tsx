"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Button component renders a stylized button with hover animations and optional icon.
 *
 * @component
 * @example
 * // Usage of Button component
 * <Button variant="primary" text="Click Me" onClick={() => alert("Button clicked")} />
 */

// Interface defining the Button component's props
interface ButtonProps {
  // Button variant determines the style
  variant: "primary" | "secondary";
  // Text displayed on the button
  text: string;
  // Option to display an icon next to the text
  icon?: boolean;
  // Custom icon component to render (optional)
  iconRef?: React.ReactNode;
  // Callback function for button click event (optional)
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, text, iconRef, onClick }) => {
  // State hook to manage hover state
  const [isHovered, setIsHovered] = useState(false);
  // State hook to manage button width for dynamic animation adjustments
  const [buttonWidth, setButtonWidth] = useState(0);
  // Ref to the button element for measuring width
  const buttonRef = useRef<HTMLDivElement>(null);

  /**
   * Effect hook to calculate the button's width on mount and on window resize.
   */
  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (buttonRef.current) {
        setButtonWidth(buttonRef.current.offsetWidth);
      }
    };

    // Adding resize event listener
    window.addEventListener("resize", handleResize);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Callback to handle mouse enter event for hover state
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Callback to handle mouse leave event for hover state
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  // Transition settings for animations
  const transitionSettings = {
    duration: 0.3,
    ease: "easeInOut",
  };

  return (
    <motion.div
      ref={buttonRef}
      className="flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2C2E30] to-[#2c2e3015] rounded-md pl-[1px] pr-[1.5px] cursor-pointer relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{
        y: -2.3, // Moves the button slightly on hover
      }}
      transition={{
        ease: "easeInOut", // Smooth transition easing
      }}
    >
      {/* 
        Shimmer effect animation triggered on hover:
        This element moves across the button to create a glowing effect.
      */}
      <motion.div
        className="absolute top-0 left-0 w-[15px] h-full bg-white z-10 opacity-10"
        key={isHovered ? "shimmer" : ""}
        initial={{ x: -95, rotate: "15deg" }}
        animate={{
          x: isHovered ? buttonWidth * 1.2 : -95, // Adjust position on hover
          rotate: "15deg",
          opacity: isHovered ? 0.07 : 0.1, // Fade in and out for shimmer effect
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut", // Smooth easing for shimmer movement
        }}
      ></motion.div>

      {/* 
        Button content: 
        This div holds the button text and optionally an icon. Styles adjust based on the 'variant' prop.
      */}
      <div
        className={twMerge(
          clsx(
            "bg-[#181A1C] flex items-center justify-center w-auto h-auto px-4 py-2 rounded-md relative top-[1.5px] gap-2",
            variant === "secondary" &&
              "bg-white text-[#3e3e3e] w-auto h-auto px-2 py-2 rounded-md"
          )
        )}
      >
        {/* Button text */}
        <motion.p
          className={twMerge(
            clsx(
              "text-base",
              variant === "primary" ? "text-[#9EA0A2]" : "text-[#3e3e3e]"
            )
          )}
          animate={{ opacity: isHovered ? 0.8 : 1 }} // Fade effect on hover
          transition={transitionSettings}
        >
          {text}
        </motion.p>

        {/* Icon rendering (if provided) */}
        {iconRef && (
          <motion.div
            className="flex items-center justify-center"
            animate={{
              x: isHovered ? 2 : 0, // Slight movement on hover
              opacity: isHovered ? 1 : 0.6, // Fade effect for icon
            }}
            transition={transitionSettings}
          >
            {iconRef}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Button;

"use client";
import React from "react";
import NavigationBar from "@/app/components/animated/NavigationBar";
import Image from "next/image";
import twitter from "@/public/header/twitter.svg";
import telegram from "@/public/header/telegram.svg";
import discord from "@/public/header/discord.svg";

/**
 * Hero Component
 *
 * The Hero component serves as a visually impactful section at the top of the page.
 * It incorporates a structured layout featuring a navigation bar, a logo container,
 * and placeholders for social media handles. Designed with precision, it ensures
 * alignment with modern UI principles and responsiveness across various screen sizes.
 */
const Hero = () => {
  return (
    /**
     * Root container for the Hero section.
     * Utilizes flexbox for vertical alignment and spans the full width and height specified.
     */
    <div className="flex flex-col items-center w-full h-[900px]">
      {/**
       * Header container.
       * This section serves as the primary wrapper for the central content of the Hero component.
       */}
      <div className="flex items-center justify-center w-full h-[53px]">
        {/**
         * Centralized border container.
         * Encloses the main content, providing structural integrity and visual separation.
         */}
        <div className="flex items-center justify-center w-[1335px] h-full border-2 border-l-[#16181A] border-t-0 border-b-[#16181A] border-r-[#16181A]">
          {/**
           * Inner content container.
           * Hosts the primary layout sections for the Hero component, ensuring proper alignment
           * and spacing between left and right subsections.
           */}
          <div className="flex items-center justify-between w-[1250px] h-full border-2 border-l-[#16181A] border-t-0 border-b-0 border-r-[#16181A]">
            {/**
             * Left section: Navigation and branding.
             * Contains the Wizard Logo and the NavigationBar component, aligned to the left.
             */}
            <div className="flex items-center justify-center w-[508px] h-full">
              {/**
               * Wizard Logo Container.
               * A dedicated placeholder styled with a background color and borders to house branding assets.
               */}
              <div className="flex w-[153.6px] h-full bg-[#0F1112] border-2 border-l-0 border-t-0 border-b-0 border-r-[#16181A]"></div>
              {/**
               * NavigationBar Component.
               * A reusable component responsible for rendering the navigation menu.
               */}
              <NavigationBar />
            </div>

            {/**
             * Right section: Social media and additional elements.
             * Strategically positioned to align to the right, serving as a container for social media handles
             * and other placeholder elements for future extension.
             */}
            <div className="flex items-center justify-center w-[415px] h-full border-2 border-l-[#16181A] border-t-0 border-b-0 border-r-0">
              {/**
               * Social Media Handles Container.
               * Styled with borders and a background color, this container will host icons or links
               * to social media platforms.
               */}
              <div className="flex items-center justify-center w-[153px] h-full border-2 border-l-0 border-t-0 border-b-0 border-r-[#16181A] bg-[#0F1112]"></div>
              {/**
               * Placeholder for additional content.
               * A flexible container for future enhancements or integrations, maintaining visual consistency.
               */}
              <div className="flex w-[260px] h-full border-2 border-l-0 border-t-0 border-b-0 border-r-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import NavigationBar from "@/app/components/NavigationBar";
import SocialMediaHandles from "@/app/components/SocialMediaHandles";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-[1250px] h-full border-2 border-l-[#16181A] border-t-0 border-b-0 border-r-[#16181A]">
      <div className="flex items-center justify-center w-[508px] h-full">
        <div className="flex w-[153.6px] h-full bg-[#0F1112] border-2 border-l-0 border-t-0 border-b-0 border-r-[#16181A]"></div>
        <NavigationBar />
      </div>
      <div className="flex items-center justify-center w-[415px] h-full border-2 border-l-[#16181A] border-t-0 border-b-0 border-r-0">
        <SocialMediaHandles />
        <div className="flex w-[260px] h-full border-2 border-l-0 border-t-0 border-b-0 border-r-0"></div>
      </div>
    </div>
  );
};

export default Header;

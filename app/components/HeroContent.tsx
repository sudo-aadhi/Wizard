import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="flex flex-col items-center justify-evenly w-[525px] h-[420px] gap-6">
      <div className="flex w-full">
        <div className="w-[525px] h-[35px]"></div>
      </div>
      <div className="flex flex-col flex-wrap font-aeonic w-full gap-2">
        <h1 className="text-[52px] text-[#E4E8EB] opacity-75">
          Craft Breathtaking Animated Websites Without, The Hassle
        </h1>
        <h3 className="text-[17px] text-[#545758]">
          Bring your vision to life with stunning, interactive, and dynamic
          animated websites, effortlessly crafted for creators of all levels.
        </h3>
      </div>
      <div className="flex w-full text-[17px] text-[#545758] opacity-75">
        <Button
          variant="primary"
          text="Start Free Trial"
          iconRef={<ArrowRight color="#9EA0A2" size={15} />}
        />
      </div>
    </div>
  );
};

export default HeroContent;

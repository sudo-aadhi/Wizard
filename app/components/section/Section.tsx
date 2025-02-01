import React from "react";
import Ellipse from "../ellipse/Ellipse";
import Bentogrid from "../bentogrid/Bentogrid";

const Section = () => {
  return (
    <div className="flex flex-col items-center w-full h-[2594px] absolute top-[1622px]">
      <Ellipse />
      <Bentogrid />
    </div>
  );
};

export default Section;

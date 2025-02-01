import React from "react";
import Propcontrol from "@/app/components/bentogrid/grids/Propcontrol";

const Bentogrid = () => {
  return (
    <div className="flex items-center justify-center w-[1155px] h-[1030px] absolute top-[1020px]">
      <div className="flex flex-col items-center justify-between w-[980px] h-[865px]">
        {/* The first flex-box  */}
        <div className="flex justify-between w-full h-[490px]">
          <Propcontrol />
          {/* The second flex child */}
          <div className="flex flex-col items-center w-[600px] h-full rounded-xl border"></div>
        </div>
        {/* The second flex-box  */}
        <div className="flex w-full h-[362px] border"></div>
      </div>
    </div>
  );
};

export default Bentogrid;

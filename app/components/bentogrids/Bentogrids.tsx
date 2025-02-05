import React from "react";
import Comments from "./grids/comments/Comments";

const Bentogrids = () => {
  return (
    <div className="flex flex-col items-center justify-between w-[1128px] h-[1252px] absolute top-[2000px] border">
      <div className="flex items-center justify-between w-full h-[594px] border">
        <Comments />
      </div>
    </div>
  );
};

export default Bentogrids;

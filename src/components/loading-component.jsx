import React from "react";
import loader from "../assets/svgs/ripple-loader.svg";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loader} alt="Loading" className="" />
    </div>
  );
};

export default Loading;

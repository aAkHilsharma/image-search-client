import React from "react";
import mountain from "../assets/svgs/mountains.jpg";

import SearchField from "./search-field-component";

const JumboTron = () => {
  return (
    <div className="relative w-full h-auto py-10 px-2 md:h-64 flex items-center justify-center">
      <div>
        <img
          src={mountain}
          className="absolute top-0 h-full z-1 object-cover left-0 right-0 bottom-0 w-full"
        />
      </div>
      <div className="text-white flex flex-col gap-2 z-20 max-w-xlg text-center">
        <h1 className="text-base md:text-2xl font-bold">
          Search High Quality Images by creators
        </h1>
        <p className="text-[11px] md:text-sm mb-2">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <SearchField />
      </div>
    </div>
  );
};

export default JumboTron;

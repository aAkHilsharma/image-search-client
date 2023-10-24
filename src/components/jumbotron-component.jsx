import React from "react";

import SearchField from "./search-field-component";

const JumboTron = () => {
  return (
    <div className="w-full bg-black h-auto py-10 px-2 md:h-64 flex items-center justify-center">
      <div className="text-white flex flex-col gap-2 max-w-xlg text-center">
        <h1 className="text-lg md:text-2xl font-bold">
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

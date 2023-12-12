import React, { useEffect, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import useDebounce from "../hooks/use-debounce";
import useAxios from "../hooks/use-axios";

const SearchField = () => {
  const [query, setQuery] = useState("");
  const { fetchImages } = useAxios();
  const debouncedSearch = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedSearch)
      fetchImages(
        `/search/photos?per_page=20&query=${debouncedSearch}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
  }, [debouncedSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center text-xs md:text-sm bg-[#f6f6f6] text-gray-400 px-2 py-1 md:px-4 md:py-2 gap-2 shadow-lg rounded-full">
      <HiMagnifyingGlass size={20} />
      <input
        data-test="search-field-input"
        value={query}
        onChange={handleChange}
        className="bg-transparent flex-1 focus:outline-none"
        placeholder="Search Images here"
      />
    </div>
  );
};

export default SearchField;

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
        `/search/photos?page=1&query=${debouncedSearch}&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
      );
  }, [debouncedSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center text-xs md:text-sm bg-[#f6f6f6] border-2 px-2 py-1 md:px-4 md:py-2 gap-2 text-gray-600 border-gray-200 rounded-md">
      <HiMagnifyingGlass size={20} />
      <input
        value={query}
        onChange={handleChange}
        className="bg-transparent flex-1 focus:outline-none"
        placeholder="Search Images here"
      />
    </div>
  );
};

export default SearchField;

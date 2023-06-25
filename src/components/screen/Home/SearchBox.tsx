"use client";

import { useState } from "react";

const SearchBox = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Performing search with:", searchText);
  };
  return (
    <div className="flex ml-auto">
      <form onSubmit={handleFormSubmit} className="flex items-center">
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Cari Berita"
          className="w-[150px] lg:w-[300px] p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          className="px-2 lg:px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
        >
          Cari
        </button>
      </form>
    </div>
  );
};

export default SearchBox;

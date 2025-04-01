import React, { useState } from "react";

function SearchFilter({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="🔍 Search profiles..."
        className="p-3 rounded-2xl w-1/2 text-white bg-gray-800/70 shadow-lg outline-none border border-gray-600 transition-all focus:bg-gray-800/90 focus:border-blue-500"
      />
    </div>
  );
}

export default SearchFilter;

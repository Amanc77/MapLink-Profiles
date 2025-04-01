import React from "react";

function SearchFilter({ searchTerm, onSearchChange }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search profiles..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-2xl"
      />
    </div>
  );
}

export default SearchFilter;

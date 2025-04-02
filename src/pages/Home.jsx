import React, { useState } from "react";
import ProfileList from "../components/ProfileList";
import GoogleMap from "../components/GoogleMap";
import SearchFilter from "../components/SearchFilter";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen p-6">
      <SearchFilter onSearch={handleSearch} />
      <div className="flex w-full  gap-6">
        <div className="relative bg-gray-700 p-4 rounded-xl shadow-md basis-2/6 h-[600px] overflow-y-auto no-scrollbar">
          <h2 className=" flex items-center  justify-center bg-gray-700 text-lg font-semibold text-white ">
            Profiles
          </h2>
          <ProfileList
            searchQuery={searchQuery}
            onSelectLocation={handleSelectLocation}
          />
        </div>

        <div className="bg-gray-800 p-3 rounded-xl shadow-md h-[600px] w-[800px] text-white font-semibold basis-4/6">
          <GoogleMap selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  );
}

export default Home;

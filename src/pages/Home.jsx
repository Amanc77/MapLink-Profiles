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
      <div className="flex w-full mt-6 gap-6">
        <div className="bg-gray-700 p-4 rounded-xl shadow-md basis-2/5">
          <h2 className="text-lg font-semibold text-white mb-4 flex justify-center">
            Profiles
          </h2>
          <ProfileList
            searchQuery={searchQuery}
            onSelectLocation={handleSelectLocation}
          />
        </div>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md h-[600px] md:h-[600px] basis-3/5 text-white font-semibold text-1.8">
          <GoogleMap selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  );
}

export default Home;

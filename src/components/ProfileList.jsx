import React, { useState } from "react";
import useProfiles from "../hooks/userProfiles";
import ProfileCard from "./ProfileCard";
import SearchFilter from "./SearchFilter";

function ProfileList() {
  const { profiles } = useProfiles();
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);

  const handleSearch = (query) => {
    const filtered = profiles.filter(
      (profile) =>
        profile.name.toLowerCase().includes(query.toLowerCase()) ||
        profile.description.toLowerCase().includes(query.toLowerCase()) ||
        profile.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div>
      <SearchFilter onSearch={handleSearch} />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 ">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;

import React from "react";
import useProfiles from "../hooks/userProfiles";
import ProfileCard from "./ProfileCard";

function ProfileList({ searchQuery }) {
  const { profiles } = useProfiles();

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-w-full">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;

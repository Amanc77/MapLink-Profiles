import React from "react";
import userProfiles from "../hooks/userProfiles";
import ProfileCard from "./ProfileCard";

function ProfileList({ searchQuery, onSelectLocation }) {
  const { profiles } = userProfiles();

  if (!profiles || profiles.length === 0) {
    return <div>Loading profiles...</div>;
  }

  // Filter profiles based on searchQuery
  const filteredProfiles = searchQuery
    ? profiles.filter((profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : profiles;

  return (
    <div className="min-w-full">
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-10">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSelectLocation={onSelectLocation} // Pass the prop to ProfileCard
          />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;

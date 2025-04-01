import React from "react";
import ProfileCard from "./ProfileCard";

function ProfileList({ profiles, onViewDetails }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default ProfileList;

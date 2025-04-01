import React from "react";
import { useParams } from "react-router-dom";
import useProfiles from "../hooks/userProfiles";

function ProfileDetails() {
  const { id } = useParams();
  const { profiles } = useProfiles();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl">Profile not found!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
          />
          <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>
          <p className="text-gray-400 mt-2">{profile.description}</p>
          <p className="text-gray-500 mt-2">{profile.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;

import React from "react";

function ProfileCard({ profile, onViewDetails }) {
  return (
    <div
      className="bg-white shadow-md rounded-2xl p-4 mb-4 cursor-pointer"
      onClick={() => onViewDetails(profile.id)}
    >
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-full h-48 object-cover rounded-2xl"
      />
      <h2 className="text-xl font-bold mt-2">{profile.name}</h2>
      <p className="text-gray-600 mt-1">{profile.description}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-2xl">
        Summary
      </button>
    </div>
  );
}

export default ProfileCard;

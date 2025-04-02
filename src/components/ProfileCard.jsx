import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function ProfileCard({ profile, onSelectLocation }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg hover:scale-105 transition-transform border border-gray-700">
      <div className="flex justify-center">
        <Link to={`/profile/${profile.id}`}>
          <img
            src={profile.image}
            alt={profile.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-gray-600"
          />
        </Link>
      </div>
      <div className="text-center mt-3">
        <h2 className="text-xl font-semibold">{profile.name}</h2>
        <p className="text-gray-400 text-sm">{profile.description}</p>
        <div className="flex items-center justify-center mt-2 text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1 text-orange-400" />
          <p>{profile.address}</p>
        </div>
        <button
          onClick={() => onSelectLocation(profile.location)} // Call onSelectLocation with location
          className="mt-3 bg-orange-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Summary
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;

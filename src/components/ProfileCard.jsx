import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

function ProfileCard({ profile, onSelectLocation }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg hover:scale-105 transition-transform duration-300 border border-gray-700 flex items-center overflow-y-auto">
      {/* Image Section */}
      <div className="mr-4">
        <Link to={`/profile/${profile.id}`}>
          <img
            src={profile.image}
            alt={profile.name}
            className="w-16 h-16 object-cover rounded-full border-2 border-gray-600"
          />
        </Link>
      </div>

      {/* Text and Button Section */}
      <div className="flex-1 flex flex-col">
        <div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="text-gray-400 text-sm mb-3">{profile.description}</p>
        </div>
        <div className=" flex flex-row justify-between">
          <div className=" flex justify-center items-center">
            <MapPin className="w-4 h-4 mr-1 text-orange-400" />
            <p className="">{profile.address}</p>
          </div>
          <div>
            <button
              onClick={() => onSelectLocation(profile.location)}
              className="bg-orange-500 text-white font-bold px-4 py-1 rounded-lg hover:bg-orange-600 transition-colors self-start"
            >
              Summary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

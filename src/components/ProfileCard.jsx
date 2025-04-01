import React from "react";
import { Link } from "react-router-dom";

function ProfileCard({ profile }) {
  return (
    <div className="flex justify-center items-center  bg-gray-900 rounded-md ">
      <div className="bg-gray-800 text-white rounded-lg p-4 w-80  hover:scale-105 ">
        <div className="flex justify-center">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-gray-600"
          />
        </div>
        <div className="text-center mt-3">
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-400">{profile.description}</p>
          <p className="mt-1 text-gray-500">{profile.address}</p>
          <Link to={`/profile/${profile.id}`}>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

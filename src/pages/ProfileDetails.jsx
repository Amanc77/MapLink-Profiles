// src/pages/ProfileDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProfiles from "../hooks/userProfiles";

function ProfileDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles } = useProfiles();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white">
          <p className="text-2xl font-semibold">Profile not found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden relative">
        <div className="bg-gradient-to-r from-blue-300 to-indigo-600 p-6">
          <div className="flex items-center space-x-6">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-white">{profile.name}</h1>
              <p className="text-blue-200 text-lg">{profile.description}</p>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Contact</h2>
              <p className="text-gray-300">Email: {profile.email}</p>
              <p className="text-gray-300">Phone: {profile.phone}</p>
              <p className="text-gray-300">Address: {profile.address}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Social</h2>
              <div className="space-y-2">
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors block"
                  >
                    LinkedIn
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors block"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            onClick={() => navigate(`/edit-profile/${profile.id}`)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => navigate("/add-profile")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add
          </button>
          <button
            onClick={() => navigate(`/delete-profile/${profile.id}`)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetails;

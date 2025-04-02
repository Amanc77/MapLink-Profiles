// src/pages/DeleteProfile.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProfiles from "../hooks/userProfiles";

function DeleteProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles, deleteProfile } = useProfiles();
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

  const handleDelete = () => {
    deleteProfile(parseInt(id));
    alert("Profile deleted successfully!");
    navigate("/");
  };

  const handleCancel = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Delete Profile</h1>
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">
                {profile.name}
              </h2>
              <p className="text-gray-300">{profile.description}</p>
            </div>
          </div>
          <p className="text-red-400 text-lg">
            Are you sure you want to delete this profile? This action cannot be
            undone.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProfile;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProfiles } from "../context/ProfileContext";
function EditProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { profiles, updateProfile } = useProfiles();
  const profile = profiles.find((p) => p.id === parseInt(id));

  const [formData, setFormData] = useState({ ...profile } || {});

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl text-white">
          <p className="text-2xl font-semibold">Profile not found!</p>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = updateProfile(parseInt(id), formData);
    if (result.success) {
      alert("Profile updated successfully!");
      navigate(`/profile/${id}`);
    } else {
      alert(`Error updating profile: ${result.error}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLinks.")) {
      const socialKey = name.split(".")[1];
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [socialKey]: value },
      });
    } else if (name.includes("location.")) {
      const locationKey = name.split(".")[1];
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [locationKey]: parseFloat(value) || 0,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="socialLinks.linkedin"
            value={formData.socialLinks.linkedin}
            onChange={handleChange}
            placeholder="LinkedIn URL"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="socialLinks.twitter"
            value={formData.socialLinks.twitter}
            onChange={handleChange}
            placeholder="Twitter URL"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="location.latitude"
            value={formData.location.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            type="number"
            step="any"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <input
            name="location.longitude"
            value={formData.location.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            type="number"
            step="any"
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;

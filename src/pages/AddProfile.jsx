import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProfiles from "../hooks/userProfiles";

function AddProfile() {
  const navigate = useNavigate();
  const { addProfile } = useProfiles();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    address: "",
    email: "",
    phone: "",
    interests: [],
    socialLinks: { linkedin: "", twitter: "" },
    location: { latitude: 0, longitude: 0 }, // Added to match existing data structure
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(formData);
    alert("Profile added successfully!");
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("socialLinks.")) {
      const socialKey = name.split(".")[1];
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [socialKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-white mb-6">Add New Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-700 text-white"
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
            className="w-full p-2 rounded bg-gray-700 text-white"
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
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg w-full"
          >
            Add Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProfile;

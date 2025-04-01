import React from "react";
import ProfileList from "../components/ProfileList";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl text-white mb-6 text-center">Profile List</h1>
      <ProfileList />
    </div>
  );
}

export default Home;

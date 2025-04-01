import React from "react";
import ProfileList from "../components/ProfileList";
import SearchFilter from "../components/SearchFilter";

function Home() {
  return (
    <div className="p-4">
      <SearchFilter />
      <ProfileList profiles={[]} onViewDetails={() => {}} />
    </div>
  );
}

export default Home;

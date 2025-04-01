import { useState, useEffect } from "react";

function useProfiles() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Mock data
    const data = [
      {
        id: 1,
        name: "John Doe",
        photo: "https://via.placeholder.com/150",
        description: "Software Engineer",
      },
      {
        id: 2,
        name: "Jane Smith",
        photo: "https://via.placeholder.com/150",
        description: "UI/UX Designer",
      },
    ];
    setProfiles(data);
  }, []);

  return { profiles, setProfiles };
}

export default useProfiles;

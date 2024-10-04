import React, { useState, useEffect } from "react";

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null); // Asegúrate de no estar reasignando `setUser`

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        const userData = await response.json();
        setUser(userData); // Esto debe ser correcto
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    }

    fetchUserData();
  }, [userId]);

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;

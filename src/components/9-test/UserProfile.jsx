import React from "react";
import { useUser } from "./UserContext";

const userProfile = () => {
  const [user, setUser] = useState();

  return (
    <div>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Nouser logged in</p>
      )}
    </div>
  );
};

export default userProfile;

import React, { useState, useEffect } from "react";

function UserProfile({ username }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
    console.log(userData);
  }, [username]);

  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="Profile" />
      <p>{userData.bio}</p>
      <p>Followers: {userData.followers}</p>
      <p>Following: {userData.following}</p>
    </div>
  );
}

export default UserProfile;

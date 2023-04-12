import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function Results() {
  const { userName } = useParams();
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${userName}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userName]);

  if (!userData) {
    return <Loading />;
  }

  return (
    <div>
      <Outlet />
      <h1>{userData.login}</h1>
      <h1>{userData.bio}</h1>
      <h1>{userData.twitter_username}</h1>
      <img src={userData.avatar_url} alt="User Avatar" />d
    </div>
  );
}

export default Results;

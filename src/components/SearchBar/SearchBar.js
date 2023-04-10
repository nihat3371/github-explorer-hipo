import React, { useState, useMemo } from "react";
import styles from "./SearchBar.module.css";
import Loading from "../Loading/Loading";

function Hahh() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = (username) => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setIsLoading(false);
        setCache((prevCache) => ({ ...prevCache, [username]: data }));
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  const cachedData = useMemo(() => {
    if (cache[username]) {
      return cache[username];
    } else {
      return null;
    }
  }, [cache, username]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username) {
      if (cache[username]) {
        setUserData(cache[username]);
      } else {
        fetchData(username);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a GitHub username"
          className={styles.SearchInput}
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button className={styles.SearchButton} type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loading />}
      {cachedData && (
        <div className={styles.ResultContainer}>
          <h2>User Data</h2>
          <p>Name: {cachedData.name}</p>
          <p>Public Repos: {cachedData.public_repos}</p>
        </div>
      )}
      {userData && !cachedData && (
        <div className={styles.ResultContainer}>
          {" "}
          <h2>User Data</h2>
          <p>Name: {userData.name}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Hahh;

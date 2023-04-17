import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

function Hahh() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cache, setCache] = useState({});
  const navigate = useNavigate();

  const fetchData = (username) => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          navigate(`NotFound`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.id === 0) {
          navigate(`*`);
        }
        setUserData(data);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/${username}`);
    if (username) {
      if (cache[username]) {
        setUserData(cache[username]);
      } else {
        fetchData(username);
      }
    } else {
      navigate(`NotFound`);
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
    </div>
  );
}

export default Hahh;

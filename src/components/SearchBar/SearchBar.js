import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = username.trim();
    if (!name) {
      return;
    }
    navigate("/" + encodeURIComponent(name));
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

export default SearchBar;

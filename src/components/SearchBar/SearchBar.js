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
    <div className={styles.SearchBar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <input
          placeholder="Enter a GitHub username"
          className={styles.SearchInput}
          type="text"
          aria-label="GitHub username"
          autoFocus
          autoComplete="off"
          spellCheck={false}
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          className={styles.SearchButton}
          type="submit"
          disabled={!username.trim()}
        >
          Search
        </button>
      </form>
      <p className={styles.Hint}>Press Enter to search</p>
    </div>
  );
}

export default SearchBar;

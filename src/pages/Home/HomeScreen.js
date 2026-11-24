import React from "react";
import styles from "./HomeScreen.module.css";
import Logo from "../../assets/Hipo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomeScreen = () => {
  return (
    <div className={styles.HomeScreen}>
      <div className={styles.ExplorerContainer}>
        <img className={styles.Logo} src={Logo} alt="Hipo" />
        <h1 className={styles.Title}>GitHub Profile Explorer</h1>
        <p className={styles.Subtitle}>
          Search a username to see their profile and repositories.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default HomeScreen;

import React from "react";
import styles from "./HomeScreen.module.css";
import Logo from "../../assets/Hipo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomeScreen = () => {
  return (
    <>
      <div className={styles.HomeScreen}>
        <div className={styles.ExplorerContainer}>
          <img className={styles.Logo} src={Logo} alt="/"></img>
          <div className={styles.ExplorerText}>GitHub Profile Explorer</div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

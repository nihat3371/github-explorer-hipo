import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={`${styles.bar} ${styles.barTopBack}`}></div>
        <div className={`${styles.bar} ${styles.barTopLink}`}></div>
      </div>

      <div className={styles.header}>
        <div className={`${styles.bar} ${styles.circle}`}></div>
        <div className={styles.headerText}>
          <div className={`${styles.bar} ${styles.barName}`}></div>
          <div className={`${styles.bar} ${styles.barLogin}`}></div>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={`${styles.bar} ${styles.stat}`}></div>
        <div className={`${styles.bar} ${styles.stat}`}></div>
        <div className={`${styles.bar} ${styles.stat}`}></div>
      </div>

      <div className={styles.repoList}>
        {[0, 1, 2].map((index) => (
          <div key={index} className={styles.repoRow}>
            <div className={`${styles.bar} ${styles.barRepoName}`}></div>
            <div className={`${styles.bar} ${styles.barRepoDesc}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;

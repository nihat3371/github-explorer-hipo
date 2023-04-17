import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ type }) => {
  return (
    <div className={styles.Loading}>
      <div className={styles.LoadingSkeletonCard}>
        <div className={styles.LoadingSkeletonInfo}>
          <div className={styles.SkeletonText}></div>
          <div className={styles.SkeletonTextSm}></div>
          <div className={styles.SkeletonImg}></div>
        </div>
        <div className={styles.SkeletonBar}></div>
        <div className={styles.RepoSkeleton}>
          <div className={styles.RepoSkeletonText}></div>
          <div className={styles.RepoSkeletonTextSm}></div>
        </div>
        <div className={styles.RepoSkeleton}>
          <div className={styles.RepoSkeletonText}></div>
          <div className={styles.RepoSkeletonTextSm}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

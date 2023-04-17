import React from "react";
import styles from "./NotFound.module.css";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Hipo from "../../assets/Hipo.svg";

const NotFound = () => {
  return (
    <div className={styles.Loading}>
      <div className={styles.LoadingSkeletonCard}>
        <div className={styles.NotFound}>
          <img src={Hipo} alt="Hipo Logo" />
          Hey! You picked the wrong h(ip)ouse! Just joking, there is no result
          that I can show you unfortunately... Here, click this awesome button
          to go back!
        </div>
        <Link to={"/"} className={styles.NotFoundButton}>
          <img src={backArrow} alt="Back Arrow" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

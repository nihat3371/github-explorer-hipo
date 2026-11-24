import React from "react";
import styles from "./NotFound.module.css";
import backArrow from "../../assets/BackArrow.svg";
import { Link } from "react-router-dom";
import Hipo from "../../assets/Hipo.svg";

const NotFound = () => {
  return (
    <div className={styles.NotFoundPage}>
      <img className={styles.HipoImg} src={Hipo} alt="Hipo Logo" />
      <p className={styles.NotFound}>
        Hey! You picked the wrong h(ip)ouse! Just joking, there is no result
        that I can show you unfortunately... Here, click this awesome button to
        go back!
      </p>
      <Link to={"/"} className={styles.BackLink}>
        <img className={styles.BackArrow} src={backArrow} alt="Back Arrow" />
        <span>Back to search</span>
      </Link>
    </div>
  );
};

export default NotFound;

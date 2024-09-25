import React from "react";
import styles from "./titleContainer.module.css";

const TitleContainer = () => {
  return (
    <>
      <div className={styles.titleContainer}>
        <img
          className={styles.logo}
          src="/assets/Images/logo_transparent.png"
          alt="Logo"
        />
        <h2>The Zoo</h2>
      </div>
    </>
  );
};

export default TitleContainer;

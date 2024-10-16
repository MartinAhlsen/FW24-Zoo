import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; The Zoo</p>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.copy}>&copy; Darth Vader & Co 2024</p>
    </footer>
  );
};

export default Footer;

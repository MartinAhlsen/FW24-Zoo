import React from "react";
import Nav from "../Nav";
import styles from "./header.module.css";
import TitleContainer from "../TitleContainer";

const Header = ({ setPage, page }) => {
  return (
    <>
      <header className={styles.header}>
        <TitleContainer />
        <Nav />
      </header>
    </>
  );
};

export default Header;

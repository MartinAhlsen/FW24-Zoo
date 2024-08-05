import React from "react";
import Nav from "../Nav";
import styles from "./header.module.css";
// import TitleContainer from "../TitleContainer";

const Header = ({ setPage, page }) => {
  return (
    <>
      <header className={styles.header}>
        <div>The Zoo</div>
        {/* <TitleContainer /> */}
        {/* <Nav setPage={setPage} page={page} /> */}
        <Nav />
      </header>
    </>
  );
};

export default Header;

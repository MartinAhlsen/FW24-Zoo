import { NavLink, useLocation } from "react-router-dom";
import styles from "./CategoryPage.module.css";

const CategoryPage = ({ contentObject }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === contentObject.link && (
        <>
          <h1>{contentObject.name}</h1>
          <p>{contentObject.p1}</p>
          <p>{contentObject.p2}</p>
          <NavLink to="/home" className={styles.backToHome}>
            Back to Home
          </NavLink>
        </>
      )}
    </div>
  );
};

export default CategoryPage;

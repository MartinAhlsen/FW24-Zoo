import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.NavUl}>
        <li className={styles.NavLi}>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.NavLi}>
          <NavLink
            to="/birds"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Birds
          </NavLink>
        </li>
        <li className={styles.NavLi}>
          <NavLink
            to="/mammals"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Mammals
          </NavLink>
        </li>
        <li className={styles.NavLi}>
          <NavLink
            to="/reptiles"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Reptiles
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

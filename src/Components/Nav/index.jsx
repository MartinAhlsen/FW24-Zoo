import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/birds"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Birds
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/mammals"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Mammals
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/reptiles"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            Reptiles
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            to="/asdfasdf"
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
          >
            404
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

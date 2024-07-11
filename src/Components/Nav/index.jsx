import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/birds"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Birds
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mammals"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Mammals
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reptiles"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Reptiles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/asdfasdf"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            404
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

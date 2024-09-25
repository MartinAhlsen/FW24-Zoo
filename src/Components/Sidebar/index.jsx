import { NavLink } from "react-router-dom/dist";
import styles from "./sidebar.module.css";

const Sidebar = ({ data }) => {
  return (
    <sidebar className={styles.sidebar}>
      {console.log(data)}
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </sidebar>
  );
};

export default Sidebar;

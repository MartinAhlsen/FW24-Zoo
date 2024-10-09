import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import PropTypes from "prop-types";

const Sidebar = ({ location, isHome, data, animalsData }) => {
  const navigate = useNavigate();

  const handleClick = (e, isActive, parentRoute) => {
    if (isActive) {
      e.preventDefault();
      navigate(parentRoute);
    }
  };

  return (
    <>
      {data && (
        <section className={styles.sidebar}>
          <ul>
            {data.map((category, index) => {
              const parentRoute = `/${location.pathname.split("/")[1]}`;
              let currentAnimal = category.name.toLowerCase();

              return (
                <li className={styles.listItem} key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? styles.active : styles.inactive
                    }
                    to={category.link}
                    onClick={(e) =>
                      handleClick(
                        e,
                        location.pathname.includes(category.link),
                        parentRoute
                      )
                    }
                  >
                    {category.name}
                  </NavLink>
                  <ul>
                    {category.name === "Birds" && (
                      <ul className={styles.submenu}>
                        <li className={styles.sublink}>
                          <NavLink to="/birds/cassowary">Cassowary</NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/birds/kookaburra">Kookaburra</NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/birds/cockatoo">Cockatoo</NavLink>
                        </li>
                      </ul>
                    )}
                    {category.name === "Mammals" && (
                      <ul className={styles.submenu}>
                        <li className={styles.sublink}>
                          <NavLink to="/mammals/echidna">Echidna</NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/mammals/tasmanian_devil">
                            Tasmanian Devil
                          </NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/mammals/quokka">Quokka</NavLink>
                        </li>
                      </ul>
                    )}
                    {category.name === "Reptiles" && (
                      <ul className={styles.submenu}>
                        <li className={styles.sublink}>
                          <NavLink to="/reptiles/frill_necked_lizard">
                            Frill-necked Lizard
                          </NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/reptiles/hawksbill_turtle">
                            Hawksbill Turtle
                          </NavLink>
                        </li>
                        <li className={styles.sublink}>
                          <NavLink to="/reptiles/perentie">Perentie</NavLink>
                        </li>
                      </ul>
                    )}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
};

export default Sidebar;

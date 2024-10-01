import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
import { object } from "prop-types";

const Sidebar = ({ location, isHome, data, animalsData }) => {
  const navigate = useNavigate();

  const handleClick = (e, isActive, parentRoute) => {
    if (isActive) {
      e.preventDefault();
      navigate(parentRoute);
    }
  };

  console.log(data);

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

                  {isHome && (
                    <ul className="sublist">
                      {animalsData[currentAnimal].map((animal, index) => (
                        <li className={styles.listItem}>
                          <NavLink
                            className={({ isActive }) =>
                              isActive ? styles.active : styles.inactive
                            }
                            // to={`${currentAnimal}/${animal}`}
                            to="/birds"
                            onClick={(e) =>
                              handleClick(
                                e,
                                location.pathname.includes(category.link),
                                parentRoute
                              )
                            }
                          >
                            {animal.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
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

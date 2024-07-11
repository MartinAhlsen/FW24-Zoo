import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/birds">Birds</NavLink>
        </li>
        <li>
          <NavLink to="/mammals">Mammals</NavLink>
        </li>
        <li>
          <NavLink to="/reptiles">Reptiles</NavLink>
        </li>
        <li>
          <NavLink to="/asdfasdf">404</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

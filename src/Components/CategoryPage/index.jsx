import { NavLink } from "react-router-dom/dist";

const CategoryPage = ({ contentObject }) => {
  return (
    <div>
      <h1>{contentObject.name}</h1>
      <p>{contentObject.p1}</p>
      <p>{contentObject.p2}</p>
      <NavLink to="/home">Back to Home</NavLink>
    </div>
  );
};

export default CategoryPage;

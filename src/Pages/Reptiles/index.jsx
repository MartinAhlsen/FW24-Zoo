import { Outlet } from "react-router-dom";
import CategoryPage from "../../Components/CategoryPage";

const Reptiles = ({ data, contentObject }) => {
  return (
    <div>
      <CategoryPage contentObject={contentObject} />
      <Outlet />
    </div>
  );
};

export default Reptiles;

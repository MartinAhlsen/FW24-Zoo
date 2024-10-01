import { Outlet } from "react-router-dom";
import CategoryPage from "../../Components/CategoryPage";

const Mammals = ({ data, contentObject }) => {
  return (
    <div>
      <CategoryPage contentObject={contentObject} />
      <Outlet />
    </div>
  );
};

export default Mammals;

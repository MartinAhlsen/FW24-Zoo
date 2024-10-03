import { Outlet } from "react-router-dom";
import CategoryPage from "../../Components/CategoryPage";

const Birds = ({ data, contentObject }) => {
  return (
    <div>
      <CategoryPage contentObject={contentObject} />
      <Outlet />
    </div>
  );
};

export default Birds;

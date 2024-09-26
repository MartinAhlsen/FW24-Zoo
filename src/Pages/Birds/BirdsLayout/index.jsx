import { Outlet } from "react-router-dom";
const BirdsLayout = () => {
  return (
    <>
      <h1>Birds are awsome</h1>
      <Outlet />
    </>
  );
};

export default BirdsLayout;

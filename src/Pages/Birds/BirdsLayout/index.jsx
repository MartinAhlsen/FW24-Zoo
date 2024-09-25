import { Outlet } from "react-router-dom";
const MarsLayout = () => {
  return (
    <>
      <h1>Birds are awsome</h1>
      <Outlet />
    </>
  );
};

export default MarsLayout;

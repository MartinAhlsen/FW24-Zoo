import { Outlet } from "react-router-dom";

const Birds = ({ data }) => {
  return (
    <>
      <h1>Birds</h1>;
      <Outlet data={data} />
    </>
  );
};

export default Birds;

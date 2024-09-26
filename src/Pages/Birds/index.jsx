import { Outlet } from "react-router-dom";

const Birds = ({ data }) => {
  return (
    <>
      <Outlet data={data} />
    </>
  );
};

export default Birds;

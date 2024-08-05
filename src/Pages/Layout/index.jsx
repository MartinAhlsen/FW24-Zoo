import { NavLink, Outlet } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="routes-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

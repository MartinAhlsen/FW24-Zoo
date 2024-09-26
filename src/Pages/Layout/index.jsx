import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const Layout = ({ PageData }) => {
  return (
    <>
      <Header />
      <div className="mainWrapper">
        <main>
          <Sidebar data={PageData} />
          <div className="routes-container">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

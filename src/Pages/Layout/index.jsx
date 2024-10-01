import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";

const Layout = ({ location, PageData, animalsData }) => {
  const isHome = location.pathname === "/home" ? true : false;
  return (
    <>
      <Header />
      <div className="mainWrapper">
        <main>
          <Sidebar
            location={location}
            isHome={isHome}
            data={PageData}
            animalsData={animalsData}
          />
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

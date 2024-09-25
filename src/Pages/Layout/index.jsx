import { NavLink, Outlet, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";
import {
  birds,
  reptiles,
  mammals,
  categories,
} from "../../../public/assets/Data/data";

const Layout = () => {
  const location = useLocation();
  const [PageData, setPageData] = useState(categories);
  useEffect(() => {
    switch (true) {
      case location.pathname.includes("birds"):
        console.log("birds");
        setPageData(birds);
        break;
      case location.pathname.includes("mammals"):
        console.log("mammals");
        setPageData(mammals);
        break;
      case location.pathname.includes("reptiles"):
        console.log("reptiles");
        setPageData(reptiles);
        break;
      default:
        console.log("home");
        setPageData(categories);
        console.log(categories);
        break;
    }
  }, [location.pathname]);

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

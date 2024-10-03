import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  birds,
  reptiles,
  mammals,
  categories,
  animals,
} from "../public/assets/Data/data";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Birds from "./Pages/Birds";
import Mammals from "./Pages/Mammals";
import Reptiles from "./Pages/Reptiles";
import Error404 from "./Pages/Error404";
import Cassowary from "./Pages/Birds/Cassowary";
import Kookaburra from "./Pages/Birds/Kookaburra";
import YellowTailedBlackCockatoo from "./Pages/Birds/YellowTailedBlackCockatoo";
import Echidna from "./Pages/Mammals/Echidna";
import TasmanianDevil from "./Pages/Mammals/TasmanianDevil";
import Quokka from "./Pages/Mammals/Quokka";
import FrillNeckedLizard from "./Pages/Reptiles/FrillNeckedLizard";
import HawksbillTurtle from "./Pages/Reptiles/HawksbillTurtle";
import Perentie from "./Pages/Reptiles/Perentie";

const App = () => {
  const location = useLocation();
  const [PageData, setPageData] = useState(categories);
  const [AnimalData, setAnimalData] = useState(reptiles);

  useEffect(() => {
    switch (true) {
      case location.pathname.includes("birds"):
        setPageData(birds);
        switch (true) {
          case location.pathname.includes("cassowary"):
            setAnimalData(birds[0]);
            break;
          case location.pathname.includes("kookaburra"):
            setAnimalData(birds[1]);
            break;
          case location.pathname.includes("cockatoo"):
            setAnimalData(birds[2]);
            break;
        }
        break;
      case location.pathname.includes("mammals"):
        setPageData(mammals);
        switch (true) {
          case location.pathname.includes("echidna"):
            setAnimalData(mammals[0]);
            break;
          case location.pathname.includes("tasmanian_devil"):
            setAnimalData(mammals[1]);
            break;
          case location.pathname.includes("quokka"):
            setAnimalData(mammals[2]);
            break;
        }
        break;
      case location.pathname.includes("reptiles"):
        setPageData(reptiles);
        switch (true) {
          case location.pathname.includes("frill_necked_lizard"):
            setAnimalData(reptiles[0]);
            break;
          case location.pathname.includes("hawksbill_turtle"):
            setAnimalData(reptiles[1]);
            break;
          case location.pathname.includes("perentie"):
            setAnimalData(reptiles[2]);
            break;
        }
        break;
      default:
        setPageData(categories);
        break;
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        element={
          <Layout
            location={location}
            PageData={PageData}
            animalsData={animals}
          />
        }
      >
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/home"
          element={<Home pageTitle={"Welcome to the Zoo!"} />}
        />
        <Route
          path="/birds"
          element={<Birds contentObject={categories[0]} data={PageData} />}
        >
          <Route path="cassowary" element={<Cassowary data={AnimalData} />} />
          <Route path="kookaburra" element={<Kookaburra data={AnimalData} />} />
          <Route
            path="cockatoo"
            element={<YellowTailedBlackCockatoo data={AnimalData} />}
          />
        </Route>
        <Route
          path="/mammals"
          element={<Mammals contentObject={categories[1]} data={PageData} />}
        >
          <Route path="echidna" element={<Echidna data={AnimalData} />} />
          <Route
            path="tasmanian_devil"
            element={<TasmanianDevil data={AnimalData} />}
          />
          <Route path="quokka" element={<Quokka data={AnimalData} />} />
        </Route>
        <Route
          path="/reptiles"
          element={<Reptiles contentObject={categories[2]} data={PageData} />}
        >
          <Route
            path="frill_necked_lizard"
            element={<FrillNeckedLizard data={AnimalData} />}
          />
          <Route
            path="hawksbill_turtle"
            element={<HawksbillTurtle data={AnimalData} />}
          />
          <Route path="perentie" element={<Perentie data={AnimalData} />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;

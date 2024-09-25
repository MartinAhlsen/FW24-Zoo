import { Routes, Route } from "react-router-dom";
import { birds, reptiles, mammals } from "../public/assets/Data/data";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Birds from "./Pages/Birds";
import Mammals from "./Pages/Mammals";
import Reptiles from "./Pages/Reptiles";
import Error404 from "./Pages/Error404";
import Cassowary from "./Pages/Birds/Cassowary";
import Kookaburra from "./Pages/Birds/Kookaburra";
import YellowTailedBlackCockatoo from "./Pages/Birds";
import Echidna from "./Pages/Mammals/Echidna";
import TasmanianDevil from "./Pages/Mammals/TasmanianDevil";
import Quokka from "./Pages/Mammals/Quokka";
import FrillNeckedLizard from "./Pages/Reptiles/FrillNeckedLizard";
import HawksbillTurtle from "./Pages/Reptiles/HawksbillTurtle";
import Perentie from "./Pages/Reptiles/Perentie";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home pageTitle={"Home"} />} />
        <Route path="/birds" element={<Birds data={birds} />}>
          <Route path="cassowary" element={<Cassowary />} />
          <Route path="kookaburra" element={<Kookaburra />} />
          <Route path="cockatoo" element={<YellowTailedBlackCockatoo />} />
        </Route>
        <Route path="/mammals" element={<Mammals data={mammals} />}>
          <Route path="echidna" element={<Echidna />} />
          <Route path="tasmanian_devil" element={<TasmanianDevil />} />
          <Route path="quokka" element={<Quokka />} />
        </Route>
        <Route path="/reptiles" element={<Reptiles data={reptiles} />}>
          <Route path="frill_necked_lizard" element={<FrillNeckedLizard />} />
          <Route path="hawksbill_turtle" element={<HawksbillTurtle />} />
          <Route path="perentie" element={<Perentie />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Birds from "./Pages/Birds";
import Mammals from "./Pages/Mammals";
import Reptiles from "./Pages/Reptiles";
import Error404 from "./Pages/Error404";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home pageTitle={"Home"} />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/mammals" element={<Mammals />} />
          <Route path="/reptiles" element={<Reptiles />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

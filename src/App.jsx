import { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Birds from "./Pages/Birds";
import Mammals from "./Pages/Mammals";
import Reptiles from "./Pages/Reptiles";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Nav from "./Components/Nav";
import Data from "./assets/Data/data";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    // Ladda in all data
    //skicka in datan som props
  }, []);

  return (
    <>
      <h1>Hello world</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/birds"
          element={<Birds data={loadedData["birds"]} />}
        ></Route>
        <Route path="/mammals" element={<Mammals />}></Route>
        <Route path="/reptiles" element={<Reptiles />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

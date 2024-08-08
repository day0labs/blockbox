import { Routes, Route } from "react-router-dom";
import Documentacion from "./views/documentacion";
import Ejemplos from "./views/ejemplos";
import Motor from "./views/motor";
import Precios from "./views/precios";

import "./index.css";
import { Header } from "./views";
import { Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/documentacion" element={<Documentacion />} />
        <Route path="/ejemplos" element={<Ejemplos />} />
        <Route path="/motor" element={<Motor />} />
        <Route path="/precios" element={<Precios />} />
      </Routes>

    </div>
  );
}

export default App;

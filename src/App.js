import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/home";
import Productos from "./Components/pages/productos";
import Reportes from "./Components/pages/reportes";
import Historial from "./Components/pages/historial";
import Soporte from "./Components/pages/soporte";
import LeftSectionNV from "./Components/LeftSectionNV";
import Perfil from "./Components/perfil";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <LeftSectionNV />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/soporte" element={<Soporte />} />
          </Routes>
        </div>
        <Perfil></Perfil>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { Link } from "react-router-dom";
import Home from "./pages/home";

const LeftSectionNV = () => {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="left-seccion">
        <div className="sidebar">
          <h2>Inventario</h2>
          <Link to="/" className="item">
            <i className="ri-apps-line"></i>
            <h3>Dashboard</h3>
          </Link>
          <Link to="/productos" className="item">
            <i className="ri-shopping-bag-3-line"></i>
            <h3>Productos</h3>
          </Link>
          <Link to="/reportes" className="item">
            <i className="ri-survey-line"></i>
            <h3>Reportes</h3>
          </Link>
          <Link to="/historial" className="item">
            <i className="ri-history-line"></i>
            <h3>Historial</h3>
          </Link>
          <Link to="/soporte" className="item">
            <i className="ri-questionnaire-line"></i>
            <h3>Soporte</h3>
          </Link>
          <div className="item">
            <i className="ri-settings-3-line"></i>
            <h3>Ajustes</h3>
          </div>
        </div>
        <div className="sign-out">
          <i className="ri-logout-box-r-line"></i>
          <h3>Salir</h3>
        </div>
      </div>
    </div>
    
  );
};

export default LeftSectionNV;

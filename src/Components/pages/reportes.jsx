import React from "react";

const Reportes = () => {
    return (
      <div className="main">
      <div className="header">
        <div className="search">
          <button><i className="ri-search-2-line"></i></button>
          <input type="text" placeholder="Buscar" />
          <i className="ri-equalizer-line"></i>
        </div>
        <div className="icon-btns">
          <i className="ri-notification-line"></i>
          <i className="ri-message-3-line"></i>
          <i className="ri-menu-line" id="menu-btn"></i>
        </div>
      </div>
      <h3 className="separator">Quick Access</h3>
      </div>
      
    );
}

export default Reportes;
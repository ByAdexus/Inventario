import React from "react";

const Productos = () => {
    return (
        <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      {/* Main Section */}
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

        <div className="quick-access">
          <div className="item">
            <i className="ri-image-fill"></i>
            <h5>Pictures</h5>
            <p>437/500 files</p>
          </div>
          <div className="item">
            <i className="ri-file-3-line"></i>
            <h5>Documents</h5>
            <p>210/500 files</p>
          </div>
          <div className="item">
            <i className="ri-music-2-fill"></i>
            <h5>Sounds</h5>
            <p>90/1000 files</p>
          </div>
          <div className="item">
            <i className="ri-video-on-fill"></i>
            <h5>Videos</h5>
            <p>540/800 files</p>
          </div>
        </div>
        </div>
        </div>
    );
}

export default Productos;
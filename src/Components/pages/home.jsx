// src/Components/pages/Home.js
import React from "react";


const Home = () => {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
          integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <div className="left-seccion">
        <div className="sidebar">
          <h2>My docs</h2>
        </div>
        <div className="item">
          <i class="ri-apps-line"></i>
          <h3>Dashboard</h3>
        </div>
        <div className="item">
          <i class="ri-folder-line"></i>
          <h3>Your files</h3>
        </div>
        <div className="item">
        <i class="ri-hard-drive-3-line"></i>
          <h3>Your Disks</h3>
        </div>
        <div className="item">
        <i class="ri-folder-lock-line"></i>
          <h3>Protected</h3>
        </div>
        <div className="item">
        <i class="ri-heart-line"></i>
          <h3>Favorites</h3>
        </div>
        <div className="item">
        <i class="ri-settings-3-line"></i>
          <h3>Settings</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;

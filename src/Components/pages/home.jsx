// src/Components/pages/Home.js
import React from "react";
import "../../App.css";

const Home = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      {/* Left Section */}
      <div className="left-seccion">
        <div className="sidebar">
          <h2>My Docs</h2>
          <div className="item active">
            <i className="ri-apps-line"></i>
            <h3>Dashboard</h3>
          </div>
          <div className="item">
            <i className="ri-folder-line"></i>
            <h3>Your Files</h3>
          </div>
          <div className="item">
            <i className="ri-hard-drive-3-line"></i>
            <h3>Your Disks</h3>
          </div>
          <div className="item">
            <i className="ri-folder-lock-line"></i>
            <h3>Protected</h3>
          </div>
          <div className="item">
            <i className="ri-star-line"></i>
            <h3>Favorites</h3>
          </div>
          <div className="item">
            <i className="ri-delete-bin-5-line"></i>
            <h3>Trash</h3>
          </div>
          <div className="item">
            <i className="ri-settings-3-line"></i>
            <h3>Settings</h3>
          </div>
          <div className="sign-out">
          <i className="ri-logout-box-r-line"></i>
          <h3>Sign Out</h3>
        </div>
      </div>
        </div>

      {/* Main Section */}
      <div className="main">
        <div className="header">
          <div className="search">
            <button><i className="ri-search-2-line"></i></button>
            <input type="text" placeholder="Search" />
            <i className="ri-equalizer-line"></i>
          </div>
          <div className="icon-btns">
            <i className="ri-notification-line"></i>
            <i className="ri-message-3-line"></i>
            <i className="ri-menu-line" id="menu-btn"></i>
          </div>
        </div>
        <h3 class="separator">
            Quick Access
        </h3>

        <div class="quick-access">
            <div class="item">
                <i class="ri-image-fill"></i>
                <h5>Pictures</h5>
                <p>437/500 files</p>
            </div>
            <div class="item">
                <i class="ri-file-3-line"></i>
                <h5>Documents</h5>
                <p>210/500 files</p>
            </div>
            <div class="item">
                <i class="ri-music-2-fill"></i>
                <h5>Sounds</h5>
                <p>90/1000 files</p>
            </div>
            <div class="item">
                <i class="ri-video-on-fill"></i>
                <h5>Videos</h5>
                <p>540/800 files</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

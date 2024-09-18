import React from "react";
import "../../App.css";

const Home = () => {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
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
        </div>
        <div className="sign-out">
          <i className="ri-logout-box-r-line"></i>
          <h3>Sign Out</h3>
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
        <h3 className="separator">Quick Access</h3>
        <table>
            <tbody>
                <tr class="selected">
                    <td class="icon"><i class="ri-image-fill"></i></td>
                    <td class="name">IMG_10234.png</td>
                    <td class="extension">PNG File</td>
                    <td class="size">2.7 MB</td>
                    <td class="more"><i class="ri-more-fill"></i></td>
                </tr>
                <tr>
                    <td class="icon"><i class="ri-file-3-fill"></i></td>
                    <td class="name">My Report.docx</td>
                    <td class="extension">DOCX File</td>
                    <td class="size">5.4 MB</td>
                    <td class="more"><i class="ri-more-fill"></i></td>
                </tr>
                <tr>
                    <td class="icon"><i class="ri-video-on-fill"></i></td>
                    <td class="name">Fun Video.mp4</td>
                    <td class="extension">MP4 File</td>
                    <td class="size">13.9 MB</td>
                    <td class="more"><i class="ri-more-fill"></i></td>
                </tr>
                <tr>
                    <td class="icon"><i class="ri-music-2-fill"></i></td>
                    <td class="name">Billie Eilish.mp3</td>
                    <td class="extension">MP3 File</td>
                    <td class="size">4.4 MB</td>
                    <td class="more"><i class="ri-more-fill"></i></td>
                </tr>
            </tbody>
        </table>
      </div>
      <div class="right-section">
        <div class="profile">
            <div class="info">
                <img src="assets/profile.png"/>
                <div class="account">
                    <h5>Reza MK</h5>
                    <p>Exapmle@gmail.com</p>
                </div>
            </div>
            <i class="ri-arrow-down-s-line"></i>
        </div>
        <div class="widgets">
            <div class="disk">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                </div>
                <div class="info">
                    <h5><span>750</span> GB Free<span> / 1</span> TB</h5>
                    <p>Available Storage</p>
                </div>
            </div>

            <div class="bottom">
                <button>New Upload <i class="ri-add-line"></i></button>

                <div class="premium">
                    <div class="title">
                        <i class="ri-folder-add-line"></i>
                        <h5>Buy Premium</h5>
                    </div>
                    <p>Upgrade space now and get a 18% discount.</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  );
};

export default Home;

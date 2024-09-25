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
    </div>
  );
};

export default Home;

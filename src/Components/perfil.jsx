import React from "react";
import "../App.css";

const Perfil = () => {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
        integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      

    <div className="right-section">
      <div className="profile">
        <div className="info">
          <img src="assets/profile.png" alt="Profile" />
          <div className="account">
            <h5>Reza MK</h5>
            <p>Example@gmail.com</p>
          </div>
        </div>
        <i className="ri-arrow-down-s-line"></i>
      </div>
    </div>
    </div>
  );
};

export default Perfil;

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
      

      <div class="right-section">
        <div class="profile">
            <div class="info">
                <img src="../Components/assets/ilustracion-3d-hombre-negocios-traje-negro-bigote.jpg"/>
                <div class="account">
                    <h5>Reza MK</h5>
                    <p>Exapmle@gmail.com</p>
                </div>
            </div>
            <i class="ri-arrow-down-s-line"></i>
        </div>
        </div>
        </div>
  );
};

export default Perfil;

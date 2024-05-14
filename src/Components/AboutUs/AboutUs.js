import React from "react";
import './AboutUs.css';
import DaniellaOrnelasImg from "../Images/ProfileDani.jpeg";

function AboutUs(){
    return(

        <div className="aboutus-cointainer">
            <h2>Sobre Nós</h2>

            <div className="daniella-section">
                <img src={DaniellaOrnelasImg} alt="Daniella Ornelas" className="daniella-img" />
                <div className="daniella-info">
                    <h3>Fisioterapeuta Daniella Ornelas</h3>
                    <p>ajshbdjabsdjkabnsdkjasdjnasdjn.</p>
                </div>
            </div>

            <div className="clinic-history">
                <h3>História da Clínica</h3>
                <p>Texto sobre a história da clínica e sua fundação.</p>
            </div>

        </div>


    );

}
export default AboutUs;
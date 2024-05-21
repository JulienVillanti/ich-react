import React from "react";
import './AboutUs.css';
import DaniellaOrnelasImg from "../Images/ProfileDani.jpeg";
import feedback1 from "../Images/feedback1.jpeg";
import feedback2 from "../Images/feedback2.jpeg";
import feedback3 from "../Images/feedback3.jpeg";
import massage from "../Images/massage-img1.jpeg";
import { Link } from "react-router-dom";
function AboutUs(){
    return(
        <div className="aboutus-cointainer">
            <div className="aboutus">
            <h2>Sobre Nós</h2>

            <div className="daniella-section">
                <img src={DaniellaOrnelasImg} alt="Daniella Ornelas" className="daniella-img" />
                <div className="daniella-info">
                    <h3>Fisioterapeuta Daniella Ornelas</h3>
                    <p>Idealizadora do Instituto do Corpo Humano e Fisioterapeuta</p>
                </div>
            </div>

            <div className="clinic-history">
                <h3>Nossa Missão</h3>
                <p>A missão do instituto é trazer tratamento holístico e acolhimento genuíno para cada indivíduo. </p>
                <p>Reconhecendo sua singularidade e promovendo esperança através de resultados tangíveis.</p>
                <p>Nosso compromisso é transformar vidas, oferecendo cuidado e apoio em nossas três unidades.</p>
            </div>
            
            <h4>Feedbacks</h4>
            <div className="feedbacks">
                <div className="feedback-container">
                <img src={feedback1} alt="Feedback 1" className="feedback-img" />
                </div>
                <div className="feedback-container">
                <img src={feedback2} alt="Feedback 2" className="feedback-img" />
                </div>
                <div className="feedback-container">
                <img src={feedback3} alt="Feedback 3" className="feedback-img" />
                </div>
            </div>

            <div className="img-massage">
                <img src={massage} alt="massage" className="massage-img" />
            <div className="text-container">
                <p className="massage-text">Quer saber mais?</p>
            <Link to="/services">
                <button className="agende-button">Agende Aqui</button>
            </Link>
            </div>
            </div>

            </div> 
        </div>
    );

}
export default AboutUs;
import React from "react";
import './Services.css';
// import img2 from '../Images/massage-img2.jpeg'

function Services() {
    return(     
        <div className="services-container">
            <h6>Conheca nossos Serviços: </h6>
            <div className="services">
            {/* <img src={img2} alt="Services" className="services-img" /> */}
                <p> Fisioterapia</p>
                <p> Nutricionista</p>
                <p> Psicologa</p>
                <p> Estetica Facial e Corporal</p>
                <p> Massagem</p>
                <p> Terapias Integrativas</p>
                <p> Academia</p>
                <p> Pilates</p>
                <p> RPG</p>
                

            </div>
            <div className="services-gym">
                <p>Academia</p>
                <p>Equipamentos modernos e variados para todos os níveis de treino.</p>
                <p>Treinamento personalizado e acompanhamento profissional.</p>
                <button className="services-button">Agende Aqui</button>

            </div>
            <div className="services-pilates">
                <p>Pilates</p>
                <p>Melhore sua postura e flexibilidade com nossos exercícios de Pilates.</p>
                <p>Aulas em grupo.</p>
                <button className="services-button">Agende Aqui</button>

            </div>
           
            <div className="services-physio">
                <p>Fisioterapia</p>
                <p>Tratamentos personalizados para recuperação e reabilitação.</p>
                <p>Profissionais qualificados e experientes.</p>
                <button className="services-button">Agende Aqui</button>

            </div>
          
        </div>
    );
}

export default Services;

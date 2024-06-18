
import './Services.css';
import img2 from '../Images/massage-img2.jpeg'
import Calendar from 'react-calendar';
import React,{ useState } from 'react';

function Services() {

   //Create a calendar 
      const [date,setDate] = useState(new Date());
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


    //Pop up-Controling visibility
    const  [isPopupVisible,setIsPopupVisible] = useState(false);

    //To change the popup
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    }

    return(  
     <div className='background-services'>
        {/*Start services  */}
        <div className="services-container">
            <h6>Conheça nossos Serviços: </h6>
        
            <div className="services-gym">
                <p className='services-title'>ACADEMIA</p>
                <div className='paragraph-services1'>
                <p>Equipamentos modernos e variados para todos os níveis de treino.</p>
                <p>Treinamento personalizado e acompanhamento profissional.</p>
                </div>
                <button className="services-button1" onClick={togglePopup}>Agende Aqui</button>

            </div>
                <div className="services-pilates">
                <p className='services-title'>PILATES</p>
                <div className='paragraph-services2'>
                <p>Melhore sua postura e flexibilidade com nossos exercícios de Pilates.</p>
                <p>Aulas em grupo.</p>
            </div>
                <button className="services-button2" onClick={togglePopup}>Agende Aqui</button>

            </div>
                <div className="services-physio">
                <p className='services-title'>FISIOTERAPIA</p>
                <div className='paragraph-services3'>
                <p>Tratamentos personalizados para recuperação e reabilitação.</p>
                <p>Profissionais qualificados e experientes.</p>
            </div>
                <button className="services-button3" onClick={togglePopup}>Agende Aqui</button>

            </div>

                <div className="others-services">
                <p className='title-nutricao'>NUTRIÇÃO</p>
                <img className='img-nutricao' src={img2} alt="Imagem de Nutrição" /> 
                <div className='paragraph-services4'>
                <p>Consultas personalizadas para promover uma alimentação saudável e equilibrada.</p>
                <p>Orientações nutricionais adaptadas às necessidades individuais de cada cliente.</p>
            </div>
            </div>

            
            
            
            

        </div>
          {/* End services */}

          {isPopupVisible && (
            <div className="popup">
                <div className="popup-container">
                    <div className="app-calendar"> 
                        <p className="text-calendar">Agendamento: </p>
                        <div className="calendar-container">
                            <Calendar onChange={setDate} value ={date}/>
                        </div>
                        <p className="text-data">
                            <span className="bold"> Data: </span>{' '}
                            {/* Change the idiom for portuguese */}
                            {date.toLocaleDateString('pt-BR', options)}
                        </p>
                    </div>
                    <button onClick={togglePopup}>Fechar</button>
                </div>
            </div>
        )}
        
            {/* End Popup */}
        </div>
    );
}

export default Services;

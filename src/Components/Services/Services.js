import './Services.css';
import img2 from '../Images/massage-img2.jpeg'
import Calendar from 'react-calendar';
import React,{ useState } from 'react';
import {addDays,getDay, isWeekend} from 'date-fns';

function Services() {

   //Create a calendar 
      const [date,setDate] = useState(new Date());
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const [selectedTime, setSelectedTime] = useState(null);
      const [selectedDate, setSelectedDate] = useState(null);
      const [isPopupVisible, setIsPopupVisible] = useState(false);

      const handleDateChange = (date) => {
        setDate(date);
        setSelectedTime(null); // Limpa o horário selecionado ao mudar a data
        setSelectedDate(null);
      };

      //Limit the date Depending on the schedule or Vacations
      const minDate = new Date('2024-06-01');
      const maxDate = new Date('2024-12-20');

      //For checking if it is weekend or not. 
      //Limit weekend on saturday and sunday
       // Check if it is a weekend
    const isWeekendDay = (date) => {
        return isWeekend(date);
    }

    // Check if it is a weekday
    const isWeekday = (date) => {
        const day = getDay(date);
        return day !== 0 && day !== 6; 
        // 0 = Sunday, 6 = Saturday
    };


    //To change the popup
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
        setSelectedDate(null);
    }

    // Simulação de horários disponíveis
    //1 to 5 (monday to friday)
            const availableTimes = {
                1: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                2: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                3: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                4: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                5: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
              };

              //For time
              const handleTimeSelect = (time) => {
                setSelectedTime(time);
              };

            // Function to handle calendar date click
    const handleCalendarClick = (value) => {
        if (isWeekday(value)) {
            setSelectedDate(value); // Set selected date only if it's a weekday
        }
    };
 

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
{/* 
            <div className="others-services">
            <p className='title-nutricao'>Saiba mais sobre outros serviços:</p>
            <img className='img-nutricao' src={img2} alt="Imagem de Nutrição" />
            <div className='paragraph-services4'>
                <p>Consultas personalizadas para promover uma alimentação saudável e equilibrada.</p>
            </div>
            <button className='learn-more-button'>
                Saiba Mais
            </button>
        </div> */}
            

        </div>
          {/* End services */}

        {/* Popup do calendário */}
        {isPopupVisible && (
  <div className="popup">
    
    <div className="popup-container">
      <div className="app-calendar"> 
        <p className="text-calendar">Agendamento: </p>
        <button className='close-button' onClick={togglePopup}>Fechar</button>
        <div className="calendar-container">
          
          <Calendar 
            value={date} 
            onChange={handleDateChange} 
            minDate={minDate}
            maxDate={maxDate}
            onClickDay={handleCalendarClick} 
            tileDisabled={(date) => !isWeekday(date) || isWeekend(date)}
          />
        </div>
        

        {isWeekday(date) && (
          <div className="available-times">
            <p className="text-data1">
              <span className="bold">Data Selecionada:</span> {date.toLocaleDateString('pt-BR', options)}
            </p>
            <p className="text-data2">
              <span className="bold">Horários Disponíveis:</span>
              <ul>
                {(() => {
                  const times = availableTimes[getDay(date)];

                  const timeElements = [];

                  for (let i = 0; i < times.length; i++) {
                    const time = times[i];
                    timeElements.push(
                      <li key={time}>
                        <button className="time-button" onClick={() => handleTimeSelect(time)}>
                          {time}
                        </button>
                      </li>
                    ); 
                  }
                  
                  return timeElements;
                  
                })()}
              </ul>

               {/* If I choose the time show the selected time */}
            {selectedTime && (
              <p className="selected-time">
                <span>Horário Selecionado:</span> {selectedTime}
              </p>
            )}
            </p>
          </div>
        )}

      </div>
    </div>
  </div>

)}
    </div>
    )
}

export default Services;
import './Services.css';
import Calendar from 'react-calendar';
import React, { useState } from 'react';
import {getDay, isWeekend} from 'date-fns';


function Services() {

   //Create a calendar  for each service
    // Gym 
    const [gymDate, setGymDate] = useState(new Date());
    const [gymSelectedTime, setGymSelectedTime] = useState(null);
    const [gymSelectedDate, setGymSelectedDate] = useState(null);
    const [gymIsPopupVisible, setGymIsPopupVisible] = useState(false);
     // Const for alert message for saturday and sunday
    const [gymMessageWeekend, setGymMessageWeekend] = useState(false);

    // Pilates 
    const [pilatesDate, setPilatesDate] = useState(new Date());
    const [pilatesSelectedTime, setPilatesSelectedTime] = useState(null);
    const [pilatesSelectedDate, setPilatesSelectedDate] = useState(null);
    const [pilatesIsPopupVisible, setPilatesIsPopupVisible] = useState(false);
     // Const for alert message for saturday and sunday
    const [pilatesMessageWeekend, setPilatesMessageWeekend] = useState(false);

    // Physiotherapy 
    const [physioDate, setPhysioDate] = useState(new Date());
    const [physioSelectedTime, setPhysioSelectedTime] = useState(null);
    const [physioSelectedDate, setPhysioSelectedDate] = useState(null);
    const [physioIsPopupVisible, setPhysioIsPopupVisible] = useState(false);
     // Const for alert message for saturday and sunday
    const [physioMessageWeekend, setPhysioMessageWeekend] = useState(false);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      const handleDateChange = (service, date) => {

        switch (service) {
          case 'gym':
            setGymDate(date);
            setGymSelectedTime(null);
            setGymSelectedDate(null);
            break;

          case 'pilates':
            setPilatesDate(date);
            setPilatesSelectedTime(null);
            setPilatesSelectedDate(null);
            break;

          case 'physio':
            setPhysioDate(date);
            setPhysioSelectedTime(null);
            setPhysioSelectedDate(null);
            break;

          default:
            break;
        }
       
      };

      //Limit the date Depending on the schedule or Vacations
      const minDate = new Date('2024-06-01');
      const maxDate = new Date('2024-12-31');


    // Check if it is a weekday
    const isWeekday = (date) => {

        const day = getDay(date);

        return day !== 0 && day !== 6; 
        // 0 = Sunday, 6 = Saturday
    };


    //To change the popup
    const togglePopup = (service) => {

      switch (service) {
        case 'gym':
          setGymIsPopupVisible(!gymIsPopupVisible);
          break;

        case 'pilates':
          setPilatesIsPopupVisible(!pilatesIsPopupVisible);
          break;

        case 'physio':
          setPhysioIsPopupVisible(!physioIsPopupVisible);
          break;

        default:
          break;
      }
        
    };

    // Hours available
    //1 to 5 (monday to friday)
            const availableTimes = {
              gym: {
                1: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                2: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                3: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                4: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                5: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
              },
              pilates: {
                1: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                2: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                3: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                4: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                5: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
              },
              physio: {
                1: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                2: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                3: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],
                4: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00','19:00'],       
                5: ['08:00', '09:00', '10:00', '11:00','12:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
              },
            };

              //For time
              const handleTimeSelect = (service, time) => {

                switch (service) {
                  case 'gym':
                    setGymSelectedTime(time);
                    break;

                  case 'pilates':
                    setPilatesSelectedTime(time);
                    break;

                  case 'physio':
                    setPhysioSelectedTime(time);
                    break;

                  default:
                    break;
                }
               
              };

            // Function to handle calendar date click
    const handleCalendarClick = (service, value) => {
      switch (service) {
        case 'gym':

        if (isWeekend(value)) {
          setGymSelectedDate(value); // Set selected date only if it's a weekday
          setGymMessageWeekend(true);
        } else {
          setGymSelectedDate(value); 
          setGymMessageWeekend(false);
        }
        break;
        case 'pilates':
          if (isWeekend(value)) {
            setPilatesSelectedDate(value); // Set selected date only if it's a weekday
            setPilatesMessageWeekend(true);
          } else {
            setPilatesSelectedDate(value);
            setPilatesMessageWeekend(false);
          }
          break;
        case 'physio':
          if (isWeekend(value)) {
            setPhysioSelectedDate(value); // Set selected date only if it's a weekday
            setPhysioMessageWeekend(true);
          } else {
            setPhysioSelectedDate(value);
            setPhysioMessageWeekend(false);
          }
          break;
        default:
          break;
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
                <button className="services-button1" onClick={() => togglePopup('gym')}>Agende Aqui</button>

            </div>
                <div className="services-pilates">
                <p className='services-title'>PILATES</p>
                <div className='paragraph-services2'>
                <p>Melhore sua postura e flexibilidade com nossos exercícios de Pilates.</p>
                <p>Aulas em grupo.</p>
            </div>
                <button className="services-button2" onClick={() => togglePopup('pilates')}>Agende Aqui</button>

            </div>
                <div className="services-physio">
                <p className='services-title'>FISIOTERAPIA</p>
                <div className='paragraph-services3'>
                <p>Tratamentos personalizados para recuperação e reabilitação.</p>
                <p>Profissionais qualificados e experientes.</p>
            </div>
                <button className="services-button3" onClick={() => togglePopup('physio')}>Agende Aqui</button>

            </div>
        </div>
          {/* End services */}

        {/* Popup do calendário GYM */}
        {gymIsPopupVisible && (
  <div className="popup">
    <div className="popup-container">
      <div className="app-calendar"> 
     
      {gymMessageWeekend && (
            <p className="message-weekend">Sábado e domingo não estão disponíveis.</p>
          )}

        <p className="text-calendar">Academia </p>
        <button className='close-button' onClick={() => togglePopup('gym')}>Fechar</button>
        <div className="calendar-container">
          
          <Calendar 
            value={gymDate} 
            onChange={(date) => handleDateChange('gym', date)} 
            minDate={minDate}
            maxDate={maxDate}
            onClickDay={(value) => handleCalendarClick('gym', value)}
            tileDisabled={(date) => !isWeekday(date) || isWeekend(date)}
          />
        </div>
        
         
        {isWeekday(gymDate) && (
          <div className="available-times">
            <p className="text-data1">
              <span className="bold">Data Selecionada:</span> {gymDate.toLocaleDateString('pt-BR', options)}
            </p>
            <p className="text-data2">
              <span className="bold">Horários Disponíveis:</span>
              <ul>
                {(() => {
                  const times = availableTimes['gym'][getDay(gymDate)];

                  const timeElements = [];

                  for (let i = 0; i < times.length; i++) {
                    const time = times[i];
                    timeElements.push(

                      <li key={time}>
                        <button className="time-button" onClick={() => handleTimeSelect('gym', time)}>
                          {time}
                        </button>
                      </li>
                    ); 
                  }
                  
                  return timeElements;
                  
                })()}
              </ul>

               {/* If I choose the time show the selected time */}
            {gymSelectedTime && (
              <p className="selected-time">
                <span>Horário Selecionado:</span> 
                {gymSelectedTime}
              </p>
              
            )}
            </p>
          </div>
        )}

      </div>
    </div>
  </div>

)}

   {/* Pilates Popup */}
   {pilatesIsPopupVisible && (
                <div className="popup">
                        <div className="app-calendar">

                            {pilatesMessageWeekend && (
                                <p className="message-weekend">Sábado e domingo não estão disponíveis para agendamento.</p>
                            )}

                            <p className="text-calendar">Pilates: </p>
                            <button className='close-button' onClick={() => togglePopup('pilates')}>Fechar</button>
                            <div className="calendar-container">
                                <Calendar
                                    value={pilatesDate}
                                    onChange={(date) => handleDateChange('pilates', date)}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    onClickDay={(value) => handleCalendarClick('pilates', value)}
                                    tileDisabled={(date) => !isWeekday(date) || isWeekend(date)}
                                />
                            </div>

                            {isWeekday(pilatesDate) && (
                                <div className="available-times">
                                    <p className="text-data1">
                                        <span className="bold">Data Selecionada:</span> {pilatesDate.toLocaleDateString('pt-BR', options)}
                                    </p>
                                    <p className="text-data2">
                                        <span className="bold">Horários Disponíveis:</span>
                                        <ul>
                                            {(() => {
                                                const times = availableTimes['pilates'][getDay(pilatesDate)];
                                                
                                                const timeElements = [];

                                                for (let i = 0; i < times.length; i++) {
                                                  const time = times[i];
                                                  timeElements.push(
                                                   
                                                   
                                                   <li key={time}>
                                                        <button className="time-button" onClick={() => handleTimeSelect('pilates', time)}>
                                                            {time}
                                                        </button>
                                                    </li>
                                                );
                                            }
                                            return timeElements;
                                            })()}
                                        </ul>

                                        {/* Display selected time */}
                                        {pilatesSelectedTime && (
                                            <p className="selected-time">
                                                <span>Horário Selecionado:</span> 
                                                {pilatesSelectedTime}
                                            </p>
                                        )}
                                    </p>
                                </div>
                            )}

                        </div>
                </div>
            )}

            {/* Physiotherapy Popup */}
            {physioIsPopupVisible && (
                <div className="popup">
                    <div className="popup-container">
                        <div className="app-calendar">

                            {physioMessageWeekend && (
                                <p className="message-weekend">Sábado e domingo não estão disponíveis para agendamento.</p>
                            )}

                            <p className="text-calendar">Fisioterapia: </p>
                            <button className='close-button' onClick={() => togglePopup('physio')}>Fechar</button>
                            <div className="calendar-container">
                                <Calendar
                                    value={physioDate}
                                    onChange={(date) => handleDateChange('physio', date)}
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    onClickDay={(value) => handleCalendarClick('physio', value)}
                                    tileDisabled={(date) => !isWeekday(date) || isWeekend(date)}
                                />
                            </div>

                            {isWeekday(physioDate) && (
                                <div className="available-times">
                                    <p className="text-data1">
                                        <span className="bold">Data Selecionada:</span> {physioDate.toLocaleDateString('pt-BR', options)}
                                    </p>
                                    <p className="text-data2">
                                        <span className="bold">Horários Disponíveis:</span>
                                        <ul>
                                            {(() => {
                                                const times = availableTimes['physio'][getDay(physioDate)];
                                               
                                                const timeElements = [];

                                                for (let i = 0; i < times.length; i++) {
                                                const time = times[i];
                                                timeElements.push(

                                                    <li key={time}>
                                                        <button className="time-button" onClick={() => handleTimeSelect('physio', time)}>
                                                            {time}
                                                        </button>
                                                    </li>
                                                );
                                            }
                                  
                                            return timeElements;
                                            })()}
                                              </ul>

                                        {/* Display selected time */}
                                        {physioSelectedTime && (
                                            <p className="selected-time">
                                                <span>Horário Selecionado:</span> 
                                                {physioSelectedTime}
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
    );
}

export default Services;
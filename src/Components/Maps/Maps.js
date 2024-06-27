import React from "react"
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import './Maps.css';


const Maps = () => {

   

      return (
        <div className='gmaps'>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480.4710431157477!2d-47.32900768518448!3d-15.55054445928155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9350a37a5fc45f81%3A0xe2e1361ef51029c5!2sInstituto%20do%20Corpo%20Humano-Sa%C3%BAde%20da%20Mulher!5e0!3m2!1spt-BR!2sca!4v1717640962806!5m2!1spt-BR!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
        ></iframe>
    </div>
)

}
export default Maps;
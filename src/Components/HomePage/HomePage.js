import React, {useState, useEffect} from "react";
import './HomePage.css';
import {motion} from 'framer-motion';
import clinic0 from "../Images/clinic0.jpeg";
import clinic4 from "../Images/clinic4.jpeg";
import clinic5 from "../Images/clinic5.jpeg";
import clinic7 from "../Images/clinic7.jpeg";
import clinic8 from "../Images/clinic8.jpeg";
import photoPromotion1 from "../Images/photoPromotion1.jpg";
import photoPromotion2 from "../Images/photoPromotion2.jpg";
import icon_instagram from '../Images/icon_instagram.png'; 
import { Link } from "react-router-dom";


function HomePage(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //Creating an image carousel
    //Before I neeed to instal npm install framer-motion
      const slideImages = [ 

        clinic0,
        clinic4,
        clinic7,
        clinic5
    ];

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + slideImages.length) % slideImages.length);
    };

    //For each slid pass automaticaly
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);//3 sec
        return () => clearInterval(interval); 
      }, [currentImageIndex]); 


    return(
        <div className="slide-container">
            <h1> Melhore seu bem estar e agende uma sessão conosco</h1>
            <p> Você só precisar chegar a tempo</p>

            <Link to="/services">
            <button className="btn-schedule">Marque sua sessão aqui </button>
            </Link>

            {/* START CAROUSEL PHOTOS */}
        <div className="home-container">
            <motion.div
                className="each-slide"
                style={{ backgroundImage: `url(${slideImages[currentImageIndex]})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}>

            </motion.div>
            </div>
        {/*  END CAROUSEL PHOTOS */}

        {/* START PROMOTIONS */}
        <div className="Container-Promotions">
            <p>Promoções:</p>
            <img className="photoPromotion1" src={photoPromotion1} alt="ICH-Promotion" />
            <img className="photoPromotion2" src={photoPromotion2} alt="ICH-Promotion" />
            
            </div>
    
        {/* END PROMOTIONS */}



{       /* START Footer  */}
            <footer>
            <div className="clinic-container">
                <img className="clinic-img8" src={clinic8} alt="ICH-Saúde da Mulher- Sobradinho" />
                <p>📍 ICH-Saúde da Mulher- Sobradinho </p>
                <p>📞 61 99606-0555</p>
            </div>
            <div className="clinic-container">
                <img className="clinic-img4" src={clinic4} alt="ICH-Saúde da Mulher- Formosa" />
                <p>📍 ICH-Saúde da Mulher- Formosa </p>
                <p>📞 61 99606-0546</p>
            </div>
            <div className="clinic-container">
                <img  className="clinic-img5"src={clinic5} alt="ICH-D.O" />
                <p>📍 ICH-D.O</p>
            </div>

            <div className="icon-container">
            <a href="https://www.instagram.com/institutodocorpohumano/" target="_blank"  className="icon-instagram">
            <img src={icon_instagram} alt="Instagram" className="icon-instagram" /> 
            </a>
            <p>Acesse nosso Instagram</p>
            </div>
</footer>
{/* END Footer */}


        </div>
    );

}
export default HomePage;
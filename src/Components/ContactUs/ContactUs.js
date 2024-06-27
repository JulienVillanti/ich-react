import React, { useState } from 'react';
import './ContactUs.css';
import Maps from '../Maps/Maps';


function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
     
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            message: ""
        });
      
    };

    return (
<div className='slide-container'>

        
            <div className="contact-maps-wrapper">
            <h2>Entre em contato!</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Nome:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    E-mail:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Mensagem:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div className="contact-container">
                <Maps />
            </div>
        </div>
        
    );
}

export default ContactUs;
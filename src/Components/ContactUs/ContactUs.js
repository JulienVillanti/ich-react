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
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Message:
                    <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="contact-container">
                <Maps />
                <div className="maps-text-container">
                    <h3>Our Office Location</h3>
                    <p>123 Main Street</p>
                    <p>City, State, ZIP Code</p>
                    <p>Contact us at: (123) 456-7890</p>
                    <p>Email: contact@company.com</p>
                </div>
            </div>
        </div>
        
    );
}

export default ContactUs;
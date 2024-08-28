import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Contact() {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qfie3ob', 'template_bi5zjw4', form.current, {
      publicKey: 'C372p1m_voPbDxOfy'
    })
    .then((result) => {
      toast.success('Email is sent');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      toast.error('Email could not be sent.');
      console.error('EmailJS error:', error);
    });
  };

  return (
    <>
      <div className="card contact">
        <h3>Contact</h3>
        <div className='contact-container'>
          
          <div className="contact-info">
            <p className='box-3d'><i className="fas fa-envelope"></i> Email: pkmiracle36@gmail.com</p>
            <p className='box-3d'><i className="fas fa-phone"></i> Phone: +61473654956</p>
            <p className='box-3d'><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/prabin-kc/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
            <p className='box-3d'><i className="fab fa-youtube"></i> YouTube: <a href="https://www.youtube.com/@prabin-demo/featured" target="_blank" rel="noopener noreferrer">CodeMind TV</a></p>
            <p className='box-3d'><i className="fab fa-upwork"></i> Upwork: <a href="https://www.upwork.com/freelancers/~01c69796f65626dcd9?s=1110580755107926016" target="_blank" rel="noopener noreferrer">Upwork</a></p>
            <p className='box-3d'><i className="fab fa-github"></i> GitHub: <a href="https://github.com/prabinkc2046?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>

          <form ref={form} className="contact-form box-3d" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit">Send Message</button>
          </form>
          
        </div>
      </div> 
    </>
  );
}

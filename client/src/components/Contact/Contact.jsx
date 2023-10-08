
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import Footer from '../Footer/Footer';
import {MdEmail} from 'react-icons/md'
import {IoMdCall} from 'react-icons/io'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submissionTimestamp = new Date(); // Create a timestamp
      const dataToSend = {
        ...formData,
        submissionTime: submissionTimestamp.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
      };

      // Send a POST request to your backend API to store the form data
      await axios.post('https://backend-portfolio-637j.onrender.com/api/submit-form', dataToSend);

      // Clear the form fields after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      // Set the submitted state to true to show a success message
      setSubmitted(true);
    } catch (error) {
      // Handle errors (e.g., display an error message to the user)
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you have any questions or want to get in touch, feel free to reach out to me through the following methods:</p>

        <div className="contact-info">
          <p> <MdEmail/>    bidyasagarhazarika@gmail.com</p>
          <p><IoMdCall/>   +91 8822009123</p>
        </div>

        <p>You can use the contact form below to send me a message:</p>

        {submitted ? (
          <div className="success-message">
            <p>Submitted successfully!</p>
            <p>I will reach out to you shortly 😊</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;



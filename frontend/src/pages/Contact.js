import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }; 

  return (
    <>
    <Header />
    <div className="container py-5">
      <div className="row">
        {/* Contact Form */}
        <div className="col-lg-8 mb-4">
          <h2 className="mb-4">Get in Touch</h2>
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links Sidebar */}
        <div className="col-lg-4">
          <div className="social-sidebar card shadow-sm">
            <div className="card-body">
              <h3 className="h4 mb-4">Connect With Me</h3>
              <div className="social-links">
                <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                  <FaTwitter /> Twitter
                </a>
                <a href="mailto:your.email@example.com" className="social-link">
                  <FaEnvelope /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
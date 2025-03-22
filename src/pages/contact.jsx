import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="travel-contact-wrapper">
      <div className="parallax-bg"></div>
      
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-header">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Start Your Journey
          </motion.h1>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Let's plan your perfect getaway together
          </motion.p>
        </div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="info-card">
              <div className="card-icon">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3>Visit Our Office</h3>
              <p>123 Paradise Street</p>
              <p>Travel City, TC 12345</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Friday: 9AM - 6PM</p>
              <p>Saturday: 10AM - 4PM</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Contact Info</h3>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: adventures@travelagency.com</p>
            </div>

            <div className="featured-destinations">
              <h3>Popular Destinations</h3>
              <div className="destination-tags">
                <span>Bali</span>
                <span>Maldives</span>
                <span>Santorini</span>
                <span>Paris</span>
                <span>Tokyo</span>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="inquiry-form"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            onSubmit={handleSubmit}
          >
            <h2>Plan Your Trip</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                />
                <i className="fas fa-user"></i>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Your Email"
                />
                <i className="fas fa-envelope"></i>
              </div>
            </div>

            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                  placeholder="Desired Destination"
                />
                <i className="fas fa-globe-americas"></i>
              </div>

              <div className="form-group">
                <input
                  type="date"
                  value={formData.travelDate}
                  onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                />
                <i className="fas fa-calendar-alt"></i>
              </div>
            </div>

            <div className="form-group">
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your dream vacation..."
              ></textarea>
              <i className="fas fa-pencil-alt"></i>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Planning
              <i className="fas fa-paper-plane"></i>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact

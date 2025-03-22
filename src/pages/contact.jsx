import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './contact.css'

function Contact() {
  const [activeInput, setActiveInput] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    travelDate: '',
    destination: '',
    message: ''
  })

  return (
    <div className="luxury-travel-page">
      <div className="travel-bg"></div>
      
      <motion.div 
        className="content-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="side-panel">
          <motion.div 
            className="brand-section"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2>Luxury Escapes</h2>
            <p>Where dreams meet destinations</p>
          </motion.div>

          <motion.div 
            className="featured-destinations"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="destination-card maldives">
              <span className="destination-name">Maldives</span>
              <span className="destination-price">from $2,999</span>
            </div>
            <div className="destination-card santorini">
              <span className="destination-name">Santorini</span>
              <span className="destination-price">from $2,499</span>
            </div>
            <div className="destination-card bali">
              <span className="destination-name">Bali</span>
              <span className="destination-price">from $1,999</span>
            </div>
          </motion.div>

          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p>luxury@travels.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="form-section"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="form-header">
            <h1>Plan Your Luxury Getaway</h1>
            <p>Let us craft your perfect escape</p>
          </div>

          <form className="luxury-form">
            <div className="form-grid">
              <div className={`input-group ${activeInput === 'name' ? 'active' : ''}`}>
                <input
                  type="text"
                  required
                  onFocus={() => setActiveInput('name')}
                  onBlur={() => setActiveInput(null)}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <label>Full Name</label>
              </div>

              <div className={`input-group ${activeInput === 'email' ? 'active' : ''}`}>
                <input
                  type="email"
                  required
                  onFocus={() => setActiveInput('email')}
                  onBlur={() => setActiveInput(null)}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <label>Email Address</label>
              </div>
            </div>

            <div className="form-grid">
              <div className={`input-group ${activeInput === 'date' ? 'active' : ''}`}>
                <input
                  type="date"
                  required
                  onFocus={() => setActiveInput('date')}
                  onBlur={() => setActiveInput(null)}
                  value={formData.travelDate}
                  onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                />
                <label>Travel Date</label>
              </div>

              <div className={`input-group ${activeInput === 'destination' ? 'active' : ''}`}>
                <input
                  type="text"
                  required
                  onFocus={() => setActiveInput('destination')}
                  onBlur={() => setActiveInput(null)}
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
                <label>Desired Destination</label>
              </div>
            </div>

            <div className={`input-group ${activeInput === 'message' ? 'active' : ''}`}>
              <textarea
                required
                onFocus={() => setActiveInput('message')}
                onBlur={() => setActiveInput(null)}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              <label>Tell us about your dream vacation</label>
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Begin Your Journey
              <i className="fas fa-arrow-right"></i>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact

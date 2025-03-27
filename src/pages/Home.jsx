import React from 'react';
import './Home.css';
import expediaLogo from '../assets/expedia.svg';
import tripadvisorLogo from '../assets/tripadvisor.svg';
import bookingLogo from '../assets/booking.svg';
import airbnbLogo from '../assets/airbnb.svg';
import orbitzLogo from '../assets/orbitz.svg';
import lotOfChoicesIcon from '../assets/lot-of-choices.svg';
import bestTourGuideIcon from '../assets/best-tour-guide.svg';
import easyBookingIcon from '../assets/easy-booking.svg';
import heroImage from '../assets/hero-woman.jpg';

const Home = () => {
  const destinations = [
    {
      id: 1,
      title: 'Tokyo',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
      rating: '4.8',
      duration: '7 Days'
    },
    {
      id: 2,
      title: 'Rome',
      price: '$750',
      image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5',
      rating: '4.9',
      duration: '5 Days'
    },
    {
      id: 3,
      title: 'Paris',
      price: '$950',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
      rating: '4.7',
      duration: '6 Days'
    },
    {
      id: 4,
      title: 'Santorini',
      price: '$850',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff',
      rating: '4.9',
      duration: '8 Days'
    },
    {
      id: 5,
      title: 'Swiss Alps',
      price: '$950',
      image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e',
      rating: '4.8',
      duration: '5 Days'
    },
    {
      id: 6,
      title: 'Bali',
      price: '$750',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
      rating: '4.7',
      duration: '6 Days'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-image-side">
            <div className="hero-image-circle">
              <img 
                src={heroImage} 
                alt="Happy woman traveler with hat and suitcase" 
                className="hero-image" 
              />
            </div>
            <div className="floating-circle purple"></div>
            <div className="floating-circle yellow"></div>
            <div className="floating-circle orange"></div>
          </div>

          <div className="hero-content">
            <span className="subtitle">WE ARE THE BEST FOR YOU</span>
            
            <h1>
              Unlock Your Dream<br />
              Destination
            </h1>
            
            <p>
              We are dedicated to making your journey of discovery truly unforgettable. 
              Our team of passionate travel experts is here to assist you in finding the 
              destination of your dreams.
            </p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3>4k+</h3>
                <p>Satisfied Customers</p>
              </div>
              <div className="stat-card">
                <h3>1000+</h3>
                <p>Global Destinations</p>
              </div>
              <div className="stat-card">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
              <div className="stat-card">
                <h3>100%</h3>
                <p>Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <div className="partners-grid">
            <img src={expediaLogo} alt="Expedia" />
            <img src={tripadvisorLogo} alt="Tripadvisor" />
            <img src={bookingLogo} alt="Booking.com" />
            <img src={airbnbLogo} alt="Airbnb" />
            <img src={orbitzLogo} alt="Orbitz" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-header">
            <span className="subtitle">WHAT WE SERVE</span>
            <h2>Top Values For You</h2>
            <p>Embrace life's vastness, venture forth,</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img src={lotOfChoicesIcon} alt="Lot of choices" />
              </div>
              <h3>Lot of choices</h3>
              <p>Embrace life's vastness, venture forth,</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={bestTourGuideIcon} alt="Best Tour Guide" />
              </div>
              <h3>Best Tour Guide</h3>
              <p>Embrace life's vastness, venture forth,</p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src={easyBookingIcon} alt="Easy Booking" />
              </div>
              <h3>Easy Booking</h3>
              <p>Embrace life's vastness, venture forth,</p>
            </div>
          </div>
        </div>
      </section>

      <section className="explore-destinations">
        <h2>Explore top destinations</h2>
        <div className="cards-container">
          {destinations.map(destination => (
            <div key={destination.id} className="destination-card">
              <div className="card-image">
                <img src={destination.image} alt={destination.title} />
                <div className="card-badge">
                  <span className="rating">{destination.rating}</span>
                  <span className="duration">{destination.duration}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{destination.title}</h3>
                <div className="card-footer">
                  <span className="price">From {destination.price}</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="expert-trip">
        <div className="expert-content">
          <h2>Creating the best<br />trip experience</h2>
          <p>We will help you to create the best and comfortable trip with our experienced travel experts.</p>
          
          <div className="stats">
            <div className="stat-item">
              <h3>15k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>650+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat-item">
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
        <div className="expert-image">
          <img src="https://images.unsplash.com/photo-1515552726023-7125c8d07fb3" alt="Expert planning" />
          <div className="floating-achievement">
            <div className="achievement-icon">🏆</div>
            <div className="achievement-text">
              <h4>Best Tour Guide</h4>
              <p>Achievement 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to get special prize</h2>
          <p>Don't wanna miss something? Subscribe right now and get special promotion and monthly newsletter</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
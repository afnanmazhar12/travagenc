import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          Trav<span className="highlight">log</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="nav-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  )
}

export default NavBar 
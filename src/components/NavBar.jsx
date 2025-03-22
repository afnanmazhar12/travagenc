import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav style={{ padding: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default NavBar 
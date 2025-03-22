import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './pages/contact'
// import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

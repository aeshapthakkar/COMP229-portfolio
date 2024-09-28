import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar imported once at the root level
import Home from './pages/home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/projects';
import Services from './pages/services';
import ContactMe from './pages/contactMe';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar is always rendered */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

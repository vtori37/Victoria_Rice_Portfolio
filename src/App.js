import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navi from './components/Navi';
import Footer from './components/Footer.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';

function App() {
  return (
    <div className="App">
    <Router>
      <Navi />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
     </Router>
    </div>
  );
}

export default App;

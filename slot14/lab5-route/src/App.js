// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // <-- Đảm bảo import đúng
import About from './pages/About';
import News from './pages/News';
import Quiz from './pages/Quiz';
import Contact from './pages/Contact';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} /> {/* <-- Route cho Home */}
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
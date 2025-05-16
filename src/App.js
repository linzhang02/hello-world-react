import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ThingsToRead from './ThingsToRead';
import './App.css';
import KeyboardHelp from './KeyboardHelp';

function App() {
  const navRefs = [useRef(null), useRef(null), useRef(null)];

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % navRefs.length;
      navRefs[nextIndex].current.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + navRefs.length) % navRefs.length;
      navRefs[prevIndex].current.focus();
    }
  };

  return (
    <Router>
      <nav aria-label="Main navigation">
        <ul className="nav">
          <li>
            <Link
              to="/"
              ref={navRefs[0]}
              tabIndex="0"
              onKeyDown={(e) => handleKeyDown(e, 0)}
            >
              🏠 Home
            </Link>
          </li>
          <li>
            <Link
              to="/things-to-read"
              ref={navRefs[1]}
              tabIndex="0"
              onKeyDown={(e) => handleKeyDown(e, 1)}
            >
             📖 Things To Read
            </Link>
          </li>
          <li>
            <Link
              to="/keyboard-help"
              ref={navRefs[2]}
              tabIndex="0"
              onKeyDown={(e) => handleKeyDown(e, 2)}
            >
              ⌨️Keyboard Help
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-read" element={<ThingsToRead />} />
        <Route path="/keyboard-help" element={<KeyboardHelp />} />
      </Routes>
    </Router>
  );
}

export default App;

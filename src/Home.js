import React, { useState, useRef, useEffect } from 'react';
import './Home.css';

function Home() {
  const [hobbies, setHobbies] = useState([
    'Video Games 🎮',
    'Game Development 💻',
    'watching movies ',
    'Skiing ⛷️',
    'Hiking 🥾',
    'Biking 🚴 ',
  ]);

  const sortHobbies = () => {
    const sorted = [...hobbies].sort((a, b) =>
      a.toLowerCase().localeCompare(b.toLowerCase())
    );
    setHobbies(sorted);
  };

  // Refs for keyboard navigation
  const hobbyRefs = useRef([]);
  const buttonRef = useRef(null);

  // Resize the ref array when hobbies change
  useEffect(() => {
    hobbyRefs.current = hobbyRefs.current.slice(0, hobbies.length);
  }, [hobbies]);

  // Handle left/right arrow key navigation
  const handleKeyDown = (e, index) => {
    const total = hobbies.length + 1;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (index + 1) % total;
      (nextIndex === hobbies.length
        ? buttonRef.current
        : hobbyRefs.current[nextIndex]
      )?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (index - 1 + total) % total;
      (prevIndex === hobbies.length
        ? buttonRef.current
        : hobbyRefs.current[prevIndex]
      )?.focus();
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>✌🏻 Welcome To My Page ✌🏻</h1>
        <div>
          <img
            src="/profile.jpg"
            alt="profile picture"
            width="700"
            className="profile-pic"
          />
          <div className="intro-section">
            <p className="greeting">Hi there! 👋 Thanks for stopping by.</p>
            <p className="intro-line">I'm <strong>Mike Zhang</strong>. Here you can explore <span className="accent">my hobbies</span> and <span className="accent">favorite reading links</span>.</p>
            <p className="major-line">
              I'm currently studying <strong>Computer Science & Software Engineering</strong> at the <span className="accent">University of Washington Bothell</span>.
            </p>
            <p className="classes-line">Some fun electives I've taken include <span className="accent">CSS 480</span> and <span className="accent">CSS 481</span>.</p>
          </div>
        </div>

        <div className="hobby-section">
          <h2>My Hobbies</h2>
          <div className="hobby-card">
            <ul className="hobby-list">
              {hobbies.map((hobby, index) => (
                <li key={index} tabIndex="0">
                  {hobby}
                </li>
              ))}
            </ul>
            <button
              className="sort-button"
              onClick={sortHobbies}
              tabIndex="0"
              ref={buttonRef}
              onKeyDown={(e) => handleKeyDown(e, hobbies.length)}
            >
              Sort Alphabetically
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


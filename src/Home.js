import React, { useState, useRef, useEffect } from 'react';


function Home() {
  const [hobbies, setHobbies] = useState([
    'Video Games',
    'Game Development',
    'watching movies',
    'Skiing',
    'Hiking',
    'Biking',
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
        <h1>Welcome To My Webpage !!</h1>

        <div>
          <h2>About me</h2>
          <img
            src="https://www.uwb.edu/wp-content/uploads/2023/05/gml-generic-bronze-W-plaza-square.jpg"
            alt="uwb"
            width="200px"
          />
          <p>I am a senior studying at <strong>University of Washington Bothell</strong>.</p>
          <p>I am taking <i>CSS 480</i> and <i>CSS 481</i> this quarter.</p>
          <p>I learned a little HTML/CSS & Javascript in CSS 481 so far but still pretty new to React.</p>
        </div>

        <div className="hobby-section">
          <h2>My Hobbies</h2>
          <div className="hobby-container">
            <ul className="hobby-list">
              {hobbies.map((hobby, index) => (
                <li
                  key={index}
                  tabIndex="0"
                  ref={el => hobbyRefs.current[index] = el}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  {hobby}
                </li>
              ))}
            </ul>
            <button
              onClick={sortHobbies}
              tabIndex="0"
              ref={buttonRef}
              onKeyDown={(e) => handleKeyDown(e, hobbies.length)}
              className="sort-button"
            >
              Sort Hobbies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


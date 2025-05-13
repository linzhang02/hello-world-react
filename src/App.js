import React, { useState } from 'react';
import './App.css';

function App() {
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

  return (
    <div className="App">
      <h1>Welcome To My Webpage !!</h1>

      <div>
        <h2>About me</h2>
        <img
          src="https://www.uwb.edu/wp-content/uploads/2023/05/gml-generic-bronze-W-plaza-square.jpg"
          alt="uwb"
          width="200px"
        />
        <p>
          I am a senior studying at <strong>University of Washington Bothell</strong>.
        </p>
        <p>
          I am taking <i>CSS 480</i> and <i>CSS 481</i> this quarter.
        </p>
        <p>
          I learned a little HTML/CSS & Javascript in CSS 481 so far but still pretty new to React.
        </p>
      </div>

      <div>
        <h2>My Hobbies</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <button onClick={sortHobbies}>Sort</button>
      </div>
    </div>
  );
}

export default App;


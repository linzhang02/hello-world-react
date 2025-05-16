import React from 'react';
import './ThingsToRead.css'; // Create this CSS file if not already

const links = [
  { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
  { name: "React Docs", url: "https://reactjs.org/" },
  { name: "W3Schools", url: "https://www.w3schools.com/" },
  { name: "CSS Tricks", url: "https://css-tricks.com/" },
  { name: "JavaScript Info", url: "https://javascript.info/" },
  { name: "Stack Overflow", url: "https://stackoverflow.com/" },
  { name: "University of Washington - Bothell", url: "https://www.uwb.edu/" },
  { name: "Apex Legends News", url: "https://www.ea.com/games/apex-legends/apex-legends/news" },
  { name: "CNN", url: "https://www.cnn.com/" },
  { name: "New York Times", url: "https://www.nytimes.com/" },
];

function ThingsToRead() {
  return (
    <div className="things-container">
      <h1>I like to Read About</h1>
      <ul className="link-list">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" tabIndex="0">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ThingsToRead;

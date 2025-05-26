import './GameProjects.css';

const projects = [
  {
    title: "Pong Clone",
    description: "A simple Pong Clone that features two-player gameplay.",
    image: "/pong.png",
    link: "https://linzhang02.github.io/Pong/"
  },
  {
    title: "Space Shooter",
    description: "A simple space shooter game where you can control a spaceship and shoot rocks.",
    image: "https://linzhang02.github.io/Pong/pong.png",
    image: "/space.png",
    link: "https://linzhang02.github.io/2-Person-Project/"
  },
  {
    title: "Shotgun Boy Adventure",
    description: "A 2D platformer game where you control a character with a shotgun, navigating through various levels.",
    image: "/shotgun.png",
    link: "https://sites.google.com/view/css385web/home?authuser=0"
  }
];

function GameProjects() {
  return (
    <div className="game-projects">
      <h1>🎮 Game Development Projects</h1>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-info">
              <h2>{project.title}</h2>
                            <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
              />
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameProjects;

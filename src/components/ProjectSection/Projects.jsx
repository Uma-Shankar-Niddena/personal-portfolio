import React from "react";
import "./projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    story: "When I coded my identity into pixels.",
    tech: ["React", "Three.js", "GSAP"],
    live: "#",
    github: "#",
  },
  {
    name: "E-Commerce Store",
    story: "Learned how people shop and how servers breathe.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "#",
  },
  {
    name: "To-Do App",
    story: "Built this when life itself was a to-do list.",
    tech: ["React", "Node.js"],
    live: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">🍽️ My Project Starters</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="card-front">
              <h3>{proj.name}</h3>
              <div className="tech-used">
                {proj.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
            <div className="card-back">
              <p>{proj.story}</p>
              <div className="links">
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

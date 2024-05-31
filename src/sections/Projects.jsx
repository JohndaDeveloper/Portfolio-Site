import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styling/Projects.css";

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description of project 1" },
    { title: "Project 2", description: "Description of project 2" },
    // Add more projects here
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

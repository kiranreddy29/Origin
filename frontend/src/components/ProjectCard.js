function ProjectCard({ title, description, tech }) {
    return (
      <div className="project-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{tech}</small>
      </div>
    );
  }
  
  export default ProjectCard;
  
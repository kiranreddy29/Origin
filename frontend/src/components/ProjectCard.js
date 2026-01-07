function ProjectCard({ title, description, tech }) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{tech}</small>
      </div>
    );
  }
  
  export default ProjectCard;
  
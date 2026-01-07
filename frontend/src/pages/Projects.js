import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "ZenCo LMS",
      description: "Full-stack learning management system",
      tech: "React, Node.js, MongoDB"
    },
    {
      title: "Food Donation Platform",
      description: "Web app to manage food donations",
      tech: "PHP, MySQL, HTML, CSS"
    }
  ];

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </div>
  );
}

export default Projects;

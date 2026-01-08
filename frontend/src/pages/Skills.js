import SkillItem from "../components/SkillItem";

function Skills() {
  const skills = ["Java", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <div className="container">
      <h1>Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

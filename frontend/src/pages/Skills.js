import SkillItem from "../components/SkillItem";

function Skills() {
  const skills = ["Java", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <SkillItem key={index} name={skill} />
        ))}
      </ul>
    </div>
  );
}

export default Skills;

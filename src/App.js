import "./App.css";

const skills = [
  {
    skill: "HTML & CSS",
    level: "advance",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advance",
    color: "#EFD81D",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAF8",
  },
  {
    skill: "Saas",
    level: "intermediate",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://avatars.githubusercontent.com/u/113059240?v=4"
      alt="shirhabeel-awan"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Shirhabeel Awan</h1>
      <p>
        Diving into a MERN stack technology starting with React. I'm a student
        of software engineering. I like to participate in open source projects
        of web developement using JavaScript and I just enjoy the long bike
        rides of random roads around my city.
      </p>
    </div>
  );
}

function SkillList() {
  // const allSkills = skills;
  // const numSkills = allSkills.length;

  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
      {/* <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Git & GitHub" emoji="👶" color="orangered" /> */}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advance" && "💪"}
      </span>
    </div>
  );
}

export default App;

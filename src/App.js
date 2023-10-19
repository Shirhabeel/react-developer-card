import "./App.css";

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
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Git & GitHub" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;

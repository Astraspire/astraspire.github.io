import { useState } from 'react';
import profilePic from './assets/dfetterProfilePic.jpg';
import './App.css';

function TechnicalSkillContainer() {
  return (
    <div className="container">
      <div className="containerItem"><h3>Languages:</h3></div>
      <div className="containerItem">Python, TypeScript/JavaScript, Java, C++, HTML/CSS, React</div>
      <div className="containerItem"><h3>Frameworks & Platforms:</h3></div>
      <div className="containerItem">Horizon Worlds (TypeScript API), Unity (basic), Unreal Engine (basic)</div>
      <div className="containerItem"><h3>Tools:</h3></div>
      <div className="containerItem">Git, Jira/Trello, AWS (Route53/S3 basics)</div>
      <div className="containerItem"><h3>Audio & Multimedia:</h3></div>
      <div className="containerItem">Ableton Live, Pro Tools, VSTs, Mixing & Mastering</div>
      <div className="containerItem"><h3>Soft Skills:</h3></div>
      <div className="containerItem">Team facilitation and leadership, communication, conflict resolution, project coordination and organization, adaptability in dynamic environments.</div>
    </div>
  );
}

function ContactLink() {
  return (
    <a href="mailto:danny-fetter@outlook.com?subject=I%saw%your%resume%online"
      style={{ color: "#4dcff3aa", textDecoration: "underline" }} 
    >
      Email Danny Here
    </a>
  );
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://github.com/Astraspire" target="_blank">
          <img src={profilePic} className="profilePic" alt="Profile Picture -> GitHub Link" />
        </a>
      </div>
      <h1>Danny Fetter</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          I'm pressed * {count}
        </button>
        <h2> 
          Summary
        </h2>
        <p>
          Junior software engineer with strong CS fundamentals (GPA 3.96) and hands‑on experience building interactive applications and tools in Python, TypeScript/JavaScript, Java, and C++.  Motivated and task-oriented, evidenced by shipping a live VR music‑creation game and multiple web projects. Skilled with Git, Agile practices, and cloud technologies. With a strong foundation in both technical and interpersonal skills, I bring discipline, determination, and a user-first mindset to developing reliable, high-quality software that drives success.
        </p>
      </div>

      <div className="card">
        <h2> 
          Technical Skills
        </h2>
        <p>
        {/* Displays technical skills using a grid container */}    
        <TechnicalSkillContainer />
        </p>
      </div>

      <p className="email-me">
        This is a React resume by Danny Fetter<br />
        <ContactLink />
      </p>
    </>
  )
}

export default App

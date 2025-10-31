import profilePic from './assets/dfetterProfilePic.jpg';
import './App.css';

function MailingButton() {
  return (
    <a href="mailto:someone@example.com?subject=Hello&body=This%20is%20a%20test">
      <button>
        Email Me
      </button>
    </a>
  );
}

function TechnicalSkillContainer() {
  return (
    <div className="skillContainer">
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

function ProjectContainer() {
  return (
    <div className="projectContainer">
      <div className="containerItem"><h3>Astro Beat Lab (2025 - Present)</h3></div>
      <div className="containerItemList">
        <ul>
          <li>Built a real‑time, beat‑synchronized 25‑pad loop system with live control logic and state management.</li>
          <li>Designed multiplayer network interactions, an inventory system and user interface for immersive collaboration.</li>
          <li>Managed full development lifecycle: task planning, scripting, testing, and deployment.</li>
          <li>Published and maintained live world on Meta Horizon (web/VR).</li>
        </ul>
      </div>
      
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
  return (
      <>
      <div>
        <a href="https://github.com/Astraspire" target="_blank">
          <img src={profilePic} className="profilePic" alt="Profile Picture -> GitHub Link" />
        </a>
      </div>
      <h1>Danny Fetter</h1>
      <MailingButton />
      <div className="card">
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

      <div className="card">
        <h2>
          Projects
        </h2>
        <p>
          {/* Displays projects developed and/or managed by Danny */}
          <ProjectContainer />
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

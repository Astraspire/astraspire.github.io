import profilePic from './assets/dfetterProfilePic.jpg';
import astroBeatLabLogo from './assets/abl_wide-logo.jpg';
import snhuLogo from './assets/logo-snhu.png';
import saeDiploma from './assets/saeDiplomaDanny.jpg';
import './App.css';

function MailingButton() {
  return (
    <a href="mailto:danny-fetter@outlook.com?subject=I%20saw%20your%20resume%20online">
      <button>
        Email Me
      </button>
    </a>
  )
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
  )
}

function AstroBeatLabContainer() {
  return (
    <div className="astroProjectContainer">
      <div className="astroProjectContainerItem"><h3>Astro Beat Lab (2025 - Present)</h3></div>
      <div className="astroContainerSubItem1">
        <a href="https://github.com/Astraspire/AstroBeatLab"
      style={{ color: "#00ff6aaa", textDecoration: "underline" }}
      >
        <h4>See The Code (Repository)</h4>
      </a>
      </div>  
      <div className="astroBeatLabLogo">
          <img src={astroBeatLabLogo} alt="Astro Beat Lab Logo" />
      </div>    
      <div className="astroContainerSubItem2">
        <a href="https://horizon.meta.com/world/23950032601329826"
          style={{ color: "#00ff6aaa", textDecoration: "underline" }}
        >
          <h4>Play The Game (Free To Play)</h4>
        </a>
      </div>
      <div className="astroContainerItemList">
        <ul>
          <li>•	Built a real‑time, beat‑synchronized 25‑pad loop system with live control logic and state management.</li>
          <li>•	Designed multiplayer network interactions, an inventory system and user interface for immersive collaboration.</li>
          <li>•	Managed full development lifecycle: task planning, scripting, testing, and deployment.</li>
          <li>•	Published and maintained live world on Meta Horizon (web/VR/mobile).</li>
        </ul>
      </div>
    </div>
  )
}

function EPKContainer() {
  return (
    <div className="epkProjectContainer">
      <div className="epkProjectContainerItem"><h3>Web EPK Sites (2020 - 2023)</h3></div>
      <div className="epkContainerSubItem1">
        <a href="https://github.com/Astraspire/EPK"
      style={{ color: "#00ff6aaa", textDecoration: "underline" }}
      >
        <h4>See An Example of an EPK (Repository)</h4>
      </a>
      </div>   
      <div className="epkContainerSubItem2">
        <a href="https://github.com/Astraspire/LwDevWeb"
          style={{ color: "#00ff6aaa", textDecoration: "underline" }}
        >
          <h4>Original Freelance Portfolio Website (Repository)</h4>
        </a>
      </div>
      <div className="epkContainerItemList">
        <ul>
          <li>•	Developed responsive artist EPK and portfolio sites using HTML/CSS and lightweight JavaScript.</li>
          <li>•	Integrated audio playback features and handled AWS cloud deployment and updates.</li>
        </ul>
      </div>
    </div>
  )
}

function EducationContainer() {
  return (
    <div className="educationContainer">
      <div className="eduSNHUContainerItem">
        <h3>
        A.S. in Computer Science (expected August 2026)
        </h3>
        <p>
          <img src={snhuLogo} alt="SNHU logo"/>
        </p>
        <div className="eduSNHUContainerSubItem">
          <a href="https://meritpages.com/dfetter"
            style={{ color: " rgb(5, 46, 0)", textDecoration: "underline" }}
          >
            <h4>Link to List of Academic Awards</h4>
          </a>
        </div>
      </div>
      <div className="eduSAEContainerItem">
        <h3>
        Diploma of Audio Technology, SAE
        </h3>
        <p>
          <img src={saeDiploma} alt="SAE Diploma"/>
        </p>
        <div className="eduSAEContainerSubItem">
          <h4>Diploma Earned in 2015</h4>
        </div>
      </div>
    </div>
  )
}

function ContactLink() {
  return (
    <a href="mailto:danny-fetter@outlook.com?subject=I%20saw%20your%20resume%20online"
      style={{ color: "#4dcff3aa", textDecoration: "underline" }} 
    >
      Email Danny Here
    </a>
  )
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
          {/* Displays projects I have developed and/or managed */}
          <AstroBeatLabContainer />
          <EPKContainer />
        </p>
      </div>

      <div className="card">
        <h2>
          Formal Education
        </h2>
        <p>
          {/* Displays education certifications I have received */}
          <EducationContainer />
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

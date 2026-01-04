import profilePic from './assets/dfetterProfilePic.jpg';
import astroBeatLabLogo from './assets/abl_wide-logo.jpg';
import snhuLogo from './assets/logo-snhu.png';
import saeDiploma from './assets/saeDiplomaDanny.jpg';
import Resume from './assets/DannyFetter-Resume.pdf';
import { useState, useEffect } from "react";
import './App.css';

function SocialBar() {
  return (
    <div className="socialBar">
      <div className="socialBarItem">
        <a href="https://linkedin.com/in/danny-fetter" target="_blank">
          <button>
            LinkedIn
          </button>
        </a>
      </div>

      <div className="socialBarItem">
        <a href="mailto:danny-fetter@outlook.com?subject=I%20saw%20your%20resume%20online" target="_blank">
          <button>
            Email Me
          </button>
        </a>
      </div>

      <div className="socialBarItem">
        <a href="https://app.joinhandshake.com/profiles/dfetter" target="_blank">
          <button>
            Handshake
          </button>
        </a>
      </div>

      <div className="socialBarItem">
        <a href={ Resume } download="DannyFetter_Resume.pdf">
          <button>
            Resume
          </button>
        </a>
      </div>
    </div>
  )
}

function TechnicalSkillContainer() {
  return (
    <div className="skillContainer">
      <div className="skillContainerItem"><h3>Languages:</h3></div>
      <div className="skillContainerItem">Python, TypeScript/JavaScript, Java, C++, HTML/CSS, React</div>
      <div className="skillContainerItem"><h3>Frameworks & Platforms:</h3></div>
      <div className="skillContainerItem">Horizon Worlds (TypeScript API), Unity (basic), Unreal Engine (basic)</div>
      <div className="skillContainerItem"><h3>Tools:</h3></div>
      <div className="skillContainerItem">Git, Jira/Trello, AWS (Route53/S3 basics)</div>
      <div className="skillContainerItem"><h3>Audio & Multimedia:</h3></div>
      <div className="skillContainerItem">Ableton Live, Pro Tools, VSTs, Mixing & Mastering</div>
      <div className="skillContainerItem"><h3>Soft Skills:</h3></div>
      <div className="skillContainerItem">Team facilitation and leadership, communication, conflict resolution, project coordination and organization, adaptability in dynamic environments.</div>
    </div>
  )
}

function AstroBeatLabContainer() {
  return (
    <div className="astroProjectContainer">
      <div className="astroProjectContainerItem"><h3>Astro Beat Lab (2025 - Present)</h3></div>
      <div className="astroContainerSubItem1">
        <a href="https://github.com/Astraspire/AstroBeatLab"
        style={{ textDecoration: "underline" }}
        >
          <h4>See The Code (Repository)</h4>
        </a>
      </div>  
      <div className="astroBeatLabLogo">
          <img src={astroBeatLabLogo} alt="Astro Beat Lab Logo" />
      </div>    
      <div className="astroContainerSubItem2">
        <a href="https://horizon.meta.com/world/23950032601329826"
          style={{ textDecoration: "underline" }}
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
        style={{ textDecoration: "underline" }}
        >
          <h4>See An Example of an EPK (Repository)</h4>
        </a>
      </div>   
      <div className="epkContainerSubItem2">
        <a href="https://github.com/Astraspire/LwDevWeb"
          style={{ textDecoration: "underline" }}
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
        B.S. in Computer Science (expected 2027), Southern New Hampshire University
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
      target="_blank" 
    >
      Email Danny Here
    </a>
  )
}

function Tabs({ tabs, initial }) {
  const [activeId, setActiveId] = useState(initial ?? (tabs[0] && tabs[0].id));

  // call onSelect for the active tab when activeId changes
  useEffect(() => {
    const tab = tabs.find(t => t.id === activeId);
    if (tab && typeof tab.onSelect === "function") tab.onSelect();
  }, [activeId, tabs]);

  return (
    <div>
      <div className="tablist" role="tablist" aria-label="Sample Tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            className={`tab ${t.id === activeId ? "active" : ""}`}
            onClick={() => setActiveId(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="tabpanels">
        {tabs.map(t => (
          <div key={t.id + "-panel"} role="tabpanel" hidden={t.id !== activeId}>
            {t.panel ?? null}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const onOpenSummary = () => console.log("Summary selected — open summary tab");
  const onOpenTechSkills = () => console.log("Technical Skills selected — fetch tech skills tab");
  const onOpenProjects = () => console.log("Projects selected — load projects tab");
  const onOpenEducation = () => console.log("Education selected - open education tab");

  const tabs = [
    { id: "summary", label: "Summary", onSelect: onOpenSummary, panel: <div>
      {/* Summary Card */}
      <div className="card">
        <h2> 
          Summary
        </h2>
        <div className="summaryCard">
          <p>
            Junior software engineer with strong CS fundamentals (GPA 3.96) and hands‑on experience building interactive applications and tools in Python, TypeScript/JavaScript, Java, and C++.  Motivated and task-oriented, evidenced by shipping a live VR music‑creation game and multiple web projects. Skilled with Git, Agile practices, and cloud technologies. With a strong foundation in both technical and interpersonal skills, I bring discipline, determination, and a user-first mindset to developing reliable, high-quality software that drives success.
          </p>
        </div>
    </div>
    </div> },
    { id: "technicalSkills", label: "Technical Skills", onSelect: onOpenTechSkills, panel: <div>
      {/* Technical Skills Card */}
      <div className="card">
        <h2> 
          Technical Skills
        </h2>
        <p>
        {/* Displays technical skills using a grid container */}    
        <TechnicalSkillContainer />
        </p>
      </div>
    </div> },
    { id: "projects", label: "Projects", onSelect: onOpenProjects, panel: <div>
      {/* Projects Card */}
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
    </div> },
    { id: "education", label: "Education", onSelect: onOpenEducation, panel: <div>
      {/* Education Card */}
      <div className="card">
        <h2>
          Formal Education
        </h2>
        {/* Displays education certifications I have received */}
        <EducationContainer />
        </div>
    </div> }
  ];

  return (  
      <>
      <div>
        <img src={profilePic} className="profilePic" alt="Profile Picture -> GitHub Link" />
      </div>
      <h1>Danny Fetter</h1>
      {/* Social Links' Nav Bar */}
      <SocialBar />

      <Tabs tabs={tabs} initial="summary" />

      {/* Email Card */}
      <p className="email-me">
        This is a React resume by Danny Fetter<br />
        <ContactLink />
      </p>
    </>
  )
}

export default App

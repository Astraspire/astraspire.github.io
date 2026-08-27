import profilePic from './assets/dannyFetter-2026portfolioPicture.jpg';
import astroBeatLabLogo from './assets/abl_wide-logo.jpg';
import snhuLogo from './assets/logo-snhu.png';
import saeDiploma from './assets/saeDiplomaDanny.jpg';
import ResumePdf from './assets/dannyFetter-resume2026.pdf?url';
import ResumeDocx from './assets/dannyFetter-resume2026.docx?url';

// NOTE (Phase 8 fix): Vite's default import parser rejects binary .docx/.pdf as JS.
// Importing with '?url' returns a string URL, which is what the native <a download>
// needs so the browser downloads the file instead of the build choking.
import { useState, useEffect, useRef } from "react";
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
        <ResumeDownload />
      </div>
    </div>
  )
}

function TechnicalSkillContainer() {
  return (
    <div className="skillContainer">
      <div className="skillContainerItem"><h3>Languages:</h3></div>
      <div className="skillContainerItem">Python, TypeScript/JavaScript, Java, C++, HTML/CSS, React</div>
      <div className="skillContainerItem"><h3>AI / ML:</h3></div>
      <div className="skillContainerItem">LLM API Integration, Retrieval-Augmented Generation (RAG), Agent Orchestration, Prompt Engineering, Output Evaluation & Verification, Local LLMs (Qwen 3.6 35B-A3B, Ornith 1.5 35B-A3B), Vector Similarity (cosine/Jaccard), Open WebUI</div>
      <div className="skillContainerItem"><h3>Frameworks & Platforms:</h3></div>
      <div className="skillContainerItem">Horizon Worlds (TypeScript API)</div>
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
          <li>•	Parsed extensive Horizon Worlds documentation using AI‑assisted research, then implemented the core TypeScript logic independently.</li>
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

function MemoryControllerContainer() {
  return (
    <div className="epkProjectContainer">
      <div className="epkProjectContainerItem"><h3>AI Memory Controller — Local Open WebUI Memory System (Python)</h3></div>
      <div className="epkContainerSubItem1">
        <a href="https://github.com/Astraspire/memory_tool_owui"
        style={{ textDecoration: "underline" }}
        >
          <h4>See The Code (Repository)</h4>
        </a>
      </div>
      <div className="epkContainerSubItem1">
        <a href="https://github.com/open-webui/open-webui"
        style={{ textDecoration: "underline" }}
        >
          <h4>Integration (Open WebUI)</h4>
        </a>
      </div>
      <div className="epkContainerItemList">
        <ul>
          <li>• Built a custom memory tool using vector similarity (cosine/Jaccard) retrieval to autonomously audit, rank, and recall prior context, then inject refined context into system prompts — a functional retrieval-augmented generation (RAG) workflow.</li>
          <li>• Designed a custom user-document injection pipeline for Open WebUI that automates daily context personalization via scheduled prompt loops.</li>
          <li>• Orchestrated the full AI workflow: defined requirements, coordinated model implementation, then read and verified generated code until it was understood.</li>
        </ul>
      </div>
    </div>
  )
}

function LetsMathContainer() {
  return (
    <div className="epkProjectContainer">
      <div className="epkProjectContainerItem"><h3>LetsMath Study Buddy — Self-Contained Study Web App (Python)</h3></div>
      <div className="epkContainerSubItem1">
        <a href="https://github.com/Astraspire/LetsMath_StudyBuddy"
        style={{ textDecoration: "underline" }}
        >
          <h4>See The Code (Repository)</h4>
        </a>
      </div>
      <div className="epkContainerItemList">
        <ul>
          <li>• Built a free, self-contained web app for studying pre-calc and calculus fundamentals with flashcards and quizzes — first AI-assisted build using a cloud coding assistant (Claude via Perplexity).</li>
          <li>• Learned structured prompting, documentation, and verification workflows; used a second AI to verify outputs before turning them into study materials.</li>
        </ul>
      </div>
    </div>
  )
}

function YGOContainer() {
  return (
    <div className="epkProjectContainer">
      <div className="epkProjectContainerItem"><h3>YGO Life Point Tracker — Two-Player Web App (Python)</h3></div>
      <div className="epkContainerSubItem1">
        <a href="https://github.com/Astraspire/YGO_LP"
        style={{ textDecoration: "underline" }}
        >
          <h4>See The Code (Repository)</h4>
        </a>
      </div>
      <div className="epkContainerItemList">
        <ul>
          <li>• Built a two-player life-point tracker for Yu-Gi-Oh as a self-contained web application — first LOCAL AI project (Gemma 4E4B via Cline on VS Code).</li>
          <li>• Orchestrated implementation, then read and verified generated code until it was understood.</li>
        </ul>
      </div>
    </div>
  )
}

// TimelineCard: single AI-progression timeline card (date range + ai-info hover badge)
function TimelineCard({ title, dateRange, bullets, aiNotes }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="timelineCard">
      <div className="timelineCardHeader">
        {dateRange && <span className="timelineDate">{dateRange}</span>}
        {/* PLAN-C Item 3 fix: badge now keyed on aiNotes (was aiUsage, never passed → never rendered). All 5 cards pass aiNotes. */}
        {aiNotes && (
          <span
            className="aiInfoBadge"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
            role="button"
            tabIndex={0}
            aria-label={`AI Info for ${title}`}
          >
            <span className="aiInfoCircle">AI Info</span>
            {showInfo && <span className="aiInfoTooltip">{aiNotes}</span>}
          </span>
        )}
      </div>
      <h3 className="timelineTitle">{title}</h3>
      <ul className="timelineBullets">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
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

// AISystemsContainer: agentic-workflow design, prompt engineering, and Python runtime identity filter
function AISystemsContainer() {
  return (
    <div className="aiSystemsContainer">
      {/* Consolidated: identity pillars + Python runtime identity filter */}
      <div className="aiSystemSection">
        <h3>Identity Engineering & Runtime Filter</h3>
        <ul>
          <li>Built a self-hosted local AI instance whose system prompt is personalized automatically based on chat history and stored memories.</li>
          <li>Wrote a Python filter function that inserts "identity" notes directly into the system prompt at runtime — automated via scheduled prompt loops, no manual edits required.</li>
          <li>Through careful prompting, the model adjusts "personality" and "identity" pillars daily to improve output quality and personalization to the user.</li>
          <li>Not the core code piece, but a direct API-call coding experience plus a repeatable skill in shaping AI behavior through documentation and system-prompt structure.</li>
        </ul>
      </div>
      <div className="aiSystemSection">
        <h3>Calculus Tutoring Workflow</h3>
        <ul>
          <li>Treated calculus study like a repo: compiled open-source content, then had the model work through and test solutions and explanations over time.</li>
          <li>Designed a customized workflow that the model could adapt and track during tutoring sessions via documentation workflows I set up.</li>
          <li>Not coding — an agentic-workflow design showcase demonstrating how local AI can be orchestrated for adaptive learning.</li>
        </ul>
      </div>
    </div>
  );
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

// ResumeDownload: dropdown offering PDF + DOCX (native downloads, click-outside + Esc to close)
function ResumeDownload() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    function handleKey(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="resumeDropdown" ref={ref}>
      <button
        className="resumeDropdownToggle"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="resumeMenu"
        onClick={() => setOpen(o => !o)}
      >
        Resume ▾
      </button>
      {open && (
        <div className="resumeDropdownMenu" id="resumeMenu" role="menu">
          <a className="resumeDropdownItem" href={ResumePdf} download="DannyFetter_Resume_2026.pdf" role="menuitem">
            Download PDF
          </a>
          <a className="resumeDropdownItem" href={ResumeDocx} download="DannyFetter_Resume_2026.docx" role="menuitem">
            Download DOCX
          </a>
        </div>
      )}
    </div>
  );
}

// ThemeToggle: floating sun/moon toggle (top-right corner, detached from layout)
// PLAN-C Item 4: smaller (40x40, font 20px), clearer rest dim, active state keeps it
// undimmed while active/hovered, dims on mouse leave, smaller hover scale (1.08).
function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState(false);   /* PLAN-C: stays undimmed while active/hovered */

  useEffect(() => {
    // First visit: auto-detect browser preference; default to light if none
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved === "dark" : prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);

    // Listen for live browser theme changes (only auto-switch if no manual choice saved)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setDark(e.matches);
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    setActive(true);                 /* PLAN-C: stay undimmed after click */
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      className={`themeToggle ${active ? "active" : ""}`}   /* PLAN-C: active class keeps undimmed */
      aria-label="Toggle dark mode"
      onClick={toggle}
      onMouseEnter={() => setActive(true)}       /* PLAN-C */
      onMouseLeave={() => setActive(false)}     /* PLAN-C: replaces the no-op */
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

function App() {
  const onOpenSummary = () => console.log("Summary selected — open summary tab");
  const onOpenTechSkills = () => console.log("Technical Skills selected — fetch tech skills tab");
  const onOpenProjects = () => console.log("Projects selected — load projects tab");
  const onOpenEducation = () => console.log("Education selected - open education tab");
  const onOpenAISystems = () => console.log("AI Systems selected — open AI systems tab");

  const tabs = [
    { id: "summary", label: "Summary", onSelect: onOpenSummary, panel: <div>
      {/* Summary Card */}
      <div className="card">
        <h2> 
          Summary
        </h2>
        <div className="summaryCard">
          <p>
            Junior software engineer who holds an A.S. in Computer Science and is currently pursuing a B.S. (expected Dec 2027), with a demonstrated record of self-directed learning — President's List and Honor Roll recipient. Experienced building and integrating AI-powered applications and full-stack web products end-to-end: LLM API integration, retrieval-augmented generation, agent orchestration, and output verification. Comfortable writing and reading code in Python, TypeScript/JavaScript, Java, and C++. Has shipped a live VR music-creation platform on Meta Horizon, AI-assisted development projects, and client-facing web products. Brings discipline, determination, and a user-first mindset to building reliable, high-quality software.
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
        <div className="timeline">
          {/* Displays projects as an AI-progression timeline */}
          <TimelineCard
            title="AI Memory Controller"
            dateRange="2025 – Present"
            bullets={[
              "Built a custom memory tool using vector similarity (cosine/Jaccard) retrieval to autonomously audit, rank, and recall prior context, then inject refined context into system prompts — a functional retrieval-augmented generation (RAG) workflow.",
              "Designed a custom user-document injection pipeline for Open WebUI that automates daily context personalization via scheduled prompt loops.",
              "Orchestrated the full AI workflow: defined requirements, coordinated model implementation, then read and verified generated code until it was understood.",
            ]}
            aiNotes="Local AI orchestration. Perplexity helped set up initial Jaccard scores for v0.9 of Open WebUI; everything after used local models (9B and 35B-A3B). Strength grew from writing code → envisioning full systems, documenting densely, organizing docs for agentic workflows, then deploying/managing the agent over my reviews."
          />
          <TimelineCard
            title="Astro Beat Lab"
            dateRange="2025 – Present"
            bullets={[
              "Parsed extensive Horizon Worlds documentation using AI-assisted research, then implemented the core TypeScript logic independently.",
              "Built a real-time, beat-synchronized 25-pad loop system with live control logic and state management.",
              "Designed multiplayer network interactions, an inventory system and user interface for immersive collaboration.",
              "Published and maintained live world on Meta Horizon (web/VR/mobile).",
            ]}
            aiNotes="Research-assisted. Actively researching code with AI/Perplexity, strategizing implementation, understanding before writing. Used AI only for bugs when help was needed. Reviewed thoroughly; wrote most code myself."
          />
          <TimelineCard
            title="YGO Life Point Tracker"
            dateRange="2025"
            bullets={[
              "Built a two-player life-point tracker for Yu-Gi-Oh as a self-contained web application.",
              "Orchestrated implementation, then read and verified generated code until it was understood.",
            ]}
            aiNotes="Pure local AI test. Gemma-4-E4B-IT-QAT at the helm (not a strong coding model), via Cline (VS Code extension). A test of what local AI could produce."
          />
          <TimelineCard
            title="LetsMath Study Buddy"
            dateRange="2024"   /* PLAN-C Item 2: Danny confirmed early 2024 */
            bullets={[
              "Built a free, self-contained web app for studying pre-calc and calculus fundamentals with flashcards and quizzes.",
              "Planned it and documented what I wanted, but the application itself was built by Perplexity — both the 'computer' variant and regular Perplexity did the actual building.",
              "Vibe-coded experiment to see what AI could do while making something useful for my own studies.",
            ]}
            aiNotes="Vibe-coded experiment. I planned it and documented what I wanted, but the app itself was built by Perplexity (both the 'computer' variant and regular Perplexity). First AI-assisted build — mostly experimenting to see what AI could do."
          />
          <TimelineCard
            title="EPK Sites"
            dateRange="2020 – 2023"
            bullets={[
              "Developed responsive artist EPK and portfolio sites using HTML/CSS and lightweight JavaScript.",
              "Integrated audio playback features and handled AWS cloud deployment and updates.",
            ]}
            aiNotes="None. Completely own development. Any AI use was purely research and chat-based at that time."
          />
        </div>
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
    </div> },
    { id: "aiSystems", label: "AI Systems", onSelect: onOpenAISystems, panel: <div>
      {/* AI Systems Card */}
      <div className="card">
        <h2>
          AI Systems
        </h2>
        <AISystemsContainer />
        </div>
    </div> }
  ];

  return (  
      <>
      <div>
        <img src={profilePic} className="profilePic" alt="Danny Fetter — Profile Picture" />
      </div>
      <h1>Danny Fetter</h1>
      <p className="tagline">Full-Stack Development • Edge-Driven AI Workflow</p>
      {/* Social Links' Nav Bar */}
      <SocialBar />

      <ThemeToggle />

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

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Jumbotron, Row, Col } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup, faCode, faFire, faChevronLeft, faChevronRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft, faReact, faPython, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackGround from './BackGround';


const Home = () => (
  <Jumbotron fluid id="home" className="text-center">
    <Container id='homeContainer'>
      <h1 class="em">Logan Dye</h1>
      <p>Application Engineer I</p>

      <div id="icons">
          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faLayerGroup} />
            <span>Microsoft Fabric</span>
          </div>
          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faMicrosoft} />
            <span>Power Platform</span>
          </div>

          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faPython} />
            <span>Python</span>
          </div>

          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faFire} />
            <span>PySpark</span>
          </div>

          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faDatabase} />
            <span>SQL</span>
          </div>

          <div className="stackItem">
            <FontAwesomeIcon className="stackIcon" icon={faCode} />
            <span>REST APIs</span>
          </div>     
      </div>
    </Container>
  </Jumbotron>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p class="aboutMeParagraph">
      <span class="em">Welcome!</span> I’m Logan Dye, an Application Engineer I at Superior, a Columbus Ohio-based electrical contracting company. 
      My work focuses on the technology behind the business, from enterprise applications and integrations to automation, data, reporting, and troubleshooting.      
      I'm a problem solver at heart, and that's what I enjoy most about my role. 
      Working in the construction industry gives me the opportunity to solve a wide variety of problems and collaborate with people across different areas of the company. 
      I enjoy digging into how a process or system works, finding opportunities to improve it, and building practical solutions that make a meaningful difference.      <br></br><br></br>

      I hold an Associate degree in Computer Science: Software Development from Columbus State Community College. 
      My experience spans software development, enterprise applications, BI analytics, integrations, ETL, automation, reporting, testing, and technical troubleshooting.
    </p>
  </section>
);

const Employment = () => (
  <section id="employment">

    <h2 class="title employment">Employment History</h2>
    <section id="employmentSectionTop">
      <a target='_blank' href="https://superiorgroup.net/">
        <img id="tsgLogo" src="/superiorGroupLogo.png"></img>
      </a>
      <h3 class="company">The Superior Group</h3>
      <h3 class="company details">Columbus, Ohio, United States</h3>
      <span className="superiorTimeline">
        <div className="superiorPosition">
          <h4>Application Engineer I</h4>
          <h5>March 2026 - Present</h5>
          <p>
            As an Application Engineer I at Superior, I develop, integrate, and support enterprise applications and data solutions used across the business. 
            My work focuses on application integrations, automation, data pipelines, reporting, and troubleshooting, with an emphasis on building reliable solutions that connect systems and improve business processes.
          </p>
                    <ul>
            <li>
              Develop and maintain enterprise application integrations using Python, REST APIs, Microsoft Fabric, and Spark.        
            </li>
            <li>
              Build and support Microsoft Fabric pipelines, notebooks, and data workflows used to transform, synchronize, and validate data across enterprise applications.     
            </li>
            <li>
             Develop and improve integrations, including employee synchronization, project assignments, cost codes, and other workforce data.    
            </li>
            <li>
              Create reporting and quality-control solutions that help identify payroll, employee, timekeeping, and integration data issues before they affect downstream processes.       
            </li>
            <li>
              Automate manual processes and develop integration solutions across platforms.
            </li>
            <li>
              Troubleshoot application and integration issues by tracing problems across APIs, pipelines, source data, and downstream systems, implementing fixes and validating the resulting data.
            </li>
            <li>
              Collaborate with business teams to understand requirements, improve existing workflows, and develop technical solutions that support both office and field operations.
            </li>
          </ul>
        </div>
        <div className="superiorPosition">
          <h4>Business Analyst</h4>
          <h5>November 2024 - March 2026</h5>
          <p>During my time as a Business Analyst at Superior, I supported enterprise applications and data initiatives across the business, with a focus on ERP administration, reporting, integrations, automation, and process improvement. 
            I worked directly with business users to understand operational problems and turn them into practical technical solutions.</p>
          <ul>
            <li>
              Supported and administered CMiC ERP, troubleshooting user, data, reporting, and configuration issues across business functions.          
            </li>
            <li>
              Developed and maintained Power BI dashboards and reports, transforming ERP and operational data into actionable reporting for business stakeholders.          
            </li>
            <li>
              Built data processing and ETL workflows using SQL, Python, Power Query, and Microsoft Fabric to clean, combine, validate, and prepare business data for reporting and downstream processes.          
            </li>
            <li>
              Developed automation solutions using Power Automate, VBA, Python, and other integration tools to reduce manual work and improve existing business processes.          
            </li>
            <li>
              Worked on integrations between enterprise platforms, helping move and synchronize data between CMiC and other business applications.
            </li>
            <li>
              Created and enhanced Excel-based reporting and operational tools, including Power Query transformations, PivotTables, VBA automation, and dynamic reporting.
            </li>
            <li>
              Investigated application and data issues by tracing problems through source systems, queries, integrations, and reports to identify root causes rather than relying solely on reported symptoms.
            </li>
            <li>
              Partnered directly with users and stakeholders to gather requirements, test solutions, document changes, provide training, and support implementations from initial request through production use.
            </li>
          </ul>
        </div>
      </span>
    </section>
    <section id="employmentSection">
      <a target='_blank' href="https://www.morganstanley.com">
        <img id="msLogo" src="/morgan_stanley_logo.jpg"></img>
      </a>
      <h3 class="company">Morgan Stanley</h3>
      <h3 class="company details">Columbus, Ohio, United States</h3>
      <span>
        <h4>Data Analyst</h4>
        <h5>January 2023 - November 2024</h5>
        <p>As a Data Analyst on the End User Services (E2E) team, I managed incident and request ticket data to improve service for employees,
          creating reports, automating processes, and analyzing trends to enhance efficiency and user satisfaction.</p>
        <ul>
          <li>
            Produced reports using Python and SQL, delivering actionable insights on ticket trends and team performance
          </li>
          <li>
            Designed a Python workflow with pandas, NumPy, and Selenium (ChromeDriver) to extract, transform, and format aged ticket data from ServiceNow, and automatically distributed HTML reports to managers
          </li>
          <li>
            Maintained and enhanced the E2E team workbook using Excel and macros for ETL, formatting, and ticket analysis
          </li>
          <li>
            Analyzed ticket data to identify trends, provide insights, and collaborate with global teams to improve processes and communication
          </li>
        </ul>
      </span>
      <div id="resume">
        <h2 className="resume-title">Full Resume</h2>


        <a
          href="/Logan_Dye_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          View Resume (PDF)
        </a><br></br>

        <a
          href="/Logan_Dye_Resume.pdf"
          download
          className="resume-link"
        >
          Download Resume
        </a>

      </div>
    </section>

  </section>
)

const Skills = () => (
  <section id="skills">

    <h2>Skills</h2>

    <h3>Data Engineering & Analytics:</h3>
    <p>
      <span class="skills">Microsoft Fabric</span>
      <span class="skills">PySpark</span>
      <span class="skills">Spark</span>
      <span class="skills">SQL</span>
      <span class="skills">Python</span>
      <span class="skills">Pandas</span>
      <span class="skills">ETL</span>
      <span class="skills">Data Transformation</span>
      <span class="skills">Data Integration</span>
      <span class="skills">Data Validation</span>
      <span class="skills">Data Analysis</span>
      <span class="skills">Power BI</span>
      <span class="skills">Power Query</span>
      <span class="skills">Delta Lake</span>
      <span class="skills">Lakehouse</span>
      <span class="skills">Data Pipelines</span>
      <span class="skills">Data Modeling</span>
      <span class="skills">Dashboard Development</span>
      <span class="skills">Reporting</span>
    </p>

    <h3>Application Integration & Automation:</h3>
    <p>
      <span class="skills">REST APIs</span>
      <span class="skills">API Integration</span>
      <span class="skills">JSON</span>
      <span class="skills">Microsoft Power Platform</span>
      <span class="skills">Power Automate</span>
      <span class="skills">Power Apps</span>
      <span class="skills">Workflow Automation</span>
      <span class="skills">Process Automation</span>
      <span class="skills">System Integration</span>
      <span class="skills">VBA</span>
      <span class="skills">Boomi</span>
      <span class="skills">Workato</span>
    </p>

    <h3>Enterprise Applications:</h3>
    <p>
      <span class="skills">CMiC ERP</span>
      <span class="skills">Riskcast</span>
      <span class="skills">Autodesk Construction Cloud</span>
      <span class="skills">ServiceNow</span>
      <span class="skills">Jira</span>
      <span class="skills">SharePoint</span>
      <span class="skills">Microsoft Excel</span>
    </p>

    <h3>Software Development:</h3>
    <p>
      <span class="skills">Python</span>
      <span class="skills">C#</span>
      <span class="skills">Java</span>
      <span class="skills">JavaScript</span>
      <span class="skills">Visual Basic</span>
      <span class="skills">.NET Framework</span>
      <span class="skills">Spring Boot</span>
      <span class="skills">Git</span>
      <span class="skills">Visual Studio</span>
      <span class="skills">Testing</span>
      <span class="skills">Debugging</span>
    </p>

    <h3>Web Development:</h3>
    <p>
      <span class="skills">HTML5</span>
      <span class="skills">CSS3</span>
      <span class="skills">JavaScript</span>
      <span class="skills">ReactJS</span>
      <span class="skills">AngularJS</span>
      <span class="skills">Node.js</span>
      <span class="skills">jQuery</span>
      <span class="skills">Bootstrap</span>
      <span class="skills">Tailwind</span>
      <span class="skills">Firebase</span>
      <span class="skills">AWS</span>
    </p>

    <h3>Technical & Professional:</h3>
    <p>
      <span class="skills">Troubleshooting</span>
      <span class="skills">Root Cause Analysis</span>
      <span class="skills">Process Improvement</span>
      <span class="skills">Requirements Gathering</span>
      <span class="skills">Application Support</span>
      <span class="skills">ERP Administration</span>
      <span class="skills">System Administration</span>
      <span class="skills">Agile Methodologies</span>
      <span class="skills">Documentation</span>
      <span class="skills">User Training</span>
      <span class="skills">Cross-Functional Collaboration</span>
      <span class="skills">Windows</span>
      <span class="skills">Linux</span>
      <span class="skills">macOS</span>
    </p>

  </section>
)


const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow ${'custom-prev-arrow'}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`slick-arrow ${'custom-next-arrow'}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};



const ProjectCard = ({ project }) => (
  <div className="project-card featured-work-card">

    <div className="project-content">
      <h2>{project.title}</h2>
      <h3>{project.name}</h3>

      {project.technologies && (
        <p className="project-technologies">
          {project.technologies}
        </p>
      )}

      <p className="project-description">
        {project.description}
      </p>

      {project.highlights && (
        <ul className="project-highlights">
          {project.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      )}
    </div>

    {project.imageSrc && (
      <div className="project-image">
        <img src={project.imageSrc} alt={project.name} />
      </div>
    )}

  </div>
);

const credentials = [
  {
    id: 1,
    issuer: "Microsoft",
    name: "Microsoft Certified: Fabric Analytics Engineer Associate",
    exam: "DP-600",
    imageSrc: "/DP-600_badge.png",
    credentialLink: "https://learn.microsoft.com/api/credentials/share/en-us/LoganDye-7306/95D21196AEA76639?sharingId=2B69066D975B1EE1"
  },
  {
    id: 2,
    issuer: "Columbus State Community College",
    name: "Associate of Applied Science",
    exam: "Software Development",
    imageSrc: "/CSCC-logo.jpg",
    credentialLink: "https://explore.cscc.edu/programs/CSCI.SOFTDV.AAS/computer-science-software-developer-aas"
  }
];
const CredentialsCard = () => (
  <div className="project-card credentials-card">

    <div className="project-content">
      <h2>Credentials</h2>

      <div className="credentials-grid">
        {credentials.map((credential) => (
          <div className="credential-item" key={credential.id}>

            <img
              className="credential-badge"
              src={credential.imageSrc}
              alt={credential.name}
            />

            <div className="credential-details">
              <h3>{credential.name}</h3>

              <p className="credential-exam">
                {credential.exam}
              </p>

              <p>
                {credential.issuer}
              </p>

              {credential.credentialLink && (
                <a
                  href={credential.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Credential
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>

  </div>
);


const Projects = () => {
const projects = [
  {
    id: 1,
    title: "Featured Work",
    name: "CMiC ERP to Riskcast Timekeeping Enterprise Integration",
    technologies: "Microsoft Fabric · Python · PySpark · REST APIs · Delta Lake",
    description:
      "Develop and maintain production integration workflows that synchronize employee and workforce information between CMiC ERP and Riskcast. The solution processes employee records, project assignments, cost codes, and other workforce data using Microsoft Fabric notebooks, PySpark transformations, and REST API operations. It also includes data validation, response tracking, error handling, and production troubleshooting.",
    highlights: [
      "Transforms and validates workforce data from CMiC before synchronization.",
      "Creates and updates employee, user, project-assignment, and workforce records through REST APIs.",
      "Tracks API responses and integration errors to support troubleshooting and data-quality monitoring."
    ]
  },
  {
    id: 2,
    title: "Featured Work",
    name: "Payroll and Timekeeping Quality Control",
    technologies: "Microsoft Fabric · PySpark · SQL · Power BI · Excel · Power Query",
    description:
      "Developed reporting and quality-control workflows that compare CMiC ERP and Riskcast timekeeping data before payroll processing. The solution helps identify employee, trade, union, pay-class, timecard, and integration discrepancies so they can be reviewed before affecting downstream payroll processes.",
    highlights: [
      "Combines and compares employee and timekeeping data from multiple enterprise systems.",
      "Identifies data mismatches and exceptions requiring review before payroll processing.",
      "Provides repeatable reporting that improves visibility into integration and data-quality issues."
    ]
  },
  {
    id: 3,
    title: "Featured Work",
    name: "CMiC ERP to Docebo LMS Enterprise Integration",
    technologies: "Microsoft Fabric · Python · PySpark · REST APIs · Delta Lake",
    description:
      "Develop and maintain integration workflows that synchronize employee information between CMiC ERP and Docebo LMS. The solution extracts, transforms, and validates workforce data before using REST APIs to create and update user records in the learning-management platform.",
    highlights: [
      "Prepares CMiC employee data for automated Docebo user provisioning and updates.",
      "Applies transformation and validation rules before sending records to the Docebo API.",
      "Captures API responses and errors to support monitoring, troubleshooting, and reliable synchronization."
    ]
  },
  {
    id: 4,
    title: "Featured Work",
    name: "Project Administration Reporting Dashboard",
    technologies: "Power BI · CMiC ERP · SQL · Power Query · Excel",
    description:
      "Developed reporting for project administration teams using labor and operational data from CMiC ERP. The solution gives users greater visibility into recorded hours, pay-period activity, and project-level information while reducing dependence on manually prepared reports.",
    highlights: [
      "Transforms ERP data into project-level reporting for business users.",
      "Supports self-service review of labor and operational information.",
      "Reduces repetitive report preparation and improves access to current project data."
    ]
  },
  {
    id: 5,
    title: "Featured Work",
    name: "ServiceNow Ticket Analytics Automation",
    technologies: "Python · pandas · NumPy · Selenium · Excel · HTML",
    description:
      "Developed an automated reporting workflow that extracted incident and request data from ServiceNow, transformed and validated the records, and generated formatted reports for management. The process improved consistency and reduced the manual effort required to prepare recurring ticket-aging and operational reports.",
    highlights: [
      "Automated browser-based extraction of ServiceNow ticket data using Selenium and ChromeDriver.",
      "Used pandas and NumPy to clean, transform, validate, and organize reporting data.",
      "Generated and distributed formatted HTML reports for managers and operational stakeholders."
    ]
  }
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <SamplePrevArrow className="custom-prev-arrow" />,
    nextArrow: <SampleNextArrow className="custom-next-arrow" />,
  };

  return (
    <section id="projects">
      <Slider {...settings}>
      <div>
        <CredentialsCard />
      </div>

        {projects.map((project, index) => (

          <div key={project.id}>
            
            <ProjectCard project={project} isFirst={index === 0} />
          </div>
        ))}
      </Slider>
    </section>
  );
};


const Contact = () => (
  <section id="contact">
    <div className="contact-icons">
      <h2>Contact</h2>
      <p><span class="contact-header">Email:</span><a id="contact-git" href="mailto:logandye50@gmail.com">logandye50@gmail.com</a></p>
      <p><span class="contact-header">Linkedin:</span><a target='_blank' id='contact-linkedin' href='https://www.linkedin.com/in/logan-dye-8b2b24256/'>https://www.linkedin.com/in/logan-dye-8b2b24256/</a></p>
      <p><span class="contact-header">GitHub:</span><a target='_blank' id='contact-git' href='https://github.com/Logand50'>https://github.com/Logand50</a></p>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/logan-dye-8b2b24256/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Logand50" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>


  </section>
);



const App = () => {
  useEffect(() => {
    // smooth scrolling
    const smoothScroll = (target) => {
      const element = document.querySelector(target);
      const offset = 80;
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth"
        });
      }
    };

    // Attach smooth scrolling event listeners to the navigation links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        smoothScroll(link.getAttribute("href"));
      });
    });
  }, []);

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Logan Dye</Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link as="a" href="#about">About</Nav.Link>
            <Nav.Link as="a" href="#employment">Employment</Nav.Link>
            <Nav.Link as="a" href="#projects">Featured</Nav.Link>
            <Nav.Link as="a" href="#skills">Skills</Nav.Link>
            <Nav.Link as="a" href="#contact">Contact</Nav.Link>
          </Nav>

        </Container>
      </Navbar>

      <div id="content">
        <BackGround />
        <Home />
        <About />
        <Employment />
        <Projects />
        <Skills />
        <Contact />


      </div>

      <footer className="bg-dark text-white text-center py-3">
        <p>Web app built with React, HTML, CSS, and Bootstrap. Hosted on Firebase.</p>
        <p><span>&copy; 2023-{new Date().getFullYear()}</span> Logan Dye</p>
      </footer>
    </Router>
  );
};



export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Jumbotron, Row, Col } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJava, faPython, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackGround from './BackGround';


const Home = () => (
  <Jumbotron fluid id="home" className="text-center">
    <Container id='homeContainer'>
      <h1 class="em">Logan Dye</h1>
      <p>Software and Web Developer</p>

      <p class="stack">Java, C#, Python, JavaScript, ReactJS, AngularJS, HTML5, CSS3, SQL</p>
      <div id="icons">
        <FontAwesomeIcon className='icon1' icon={faJava} />
        <FontAwesomeIcon className='icon2' icon={faPython} />
        <FontAwesomeIcon className='icon3' icon={faJs} />
        <FontAwesomeIcon className='icon4' icon={faReact} />
        <FontAwesomeIcon className='icon5' icon={faAngular} />
        <FontAwesomeIcon className='icon6' icon={faHtml5} />
        <FontAwesomeIcon className='icon7' icon={faCss3Alt} />
        <FontAwesomeIcon className='icon8' icon={faDatabase} />
      </div>
    </Container>
  </Jumbotron>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p class="aboutMeParagraph">
      <span class="em">Welcome!</span> Hello, I’m Logan Dye, currently working as a Business Support Analyst at The Superior Group. I’m focused on providing support for our enterprise applications.
      What I enjoy most about my position is the opportunity to actively contribute to many different areas of the business, using my skills to support the company across a wide range of functions and make a meaningful impact.<br></br><br></br>

      I currently have an Associate degree in Computer Science: Software Development from Columbus State Community College, with plans to pursue a Bachelor’s degree in Computer Science.
      I have professional experience in software development and testing, as well as BI analytics, implementation, automation, troubleshooting, and communication. <br></br><br></br>

      Skills: Python, C#, Java, Spring Boot, JavaScript, ReactJS, AngularJS, jQuery, SQL, HTML, CSS, Git, VBA, Tableau, Power BI, Microsoft Fabric, Power Automate, SharePoint, Boomi, Workauto, CMiC ERP Administration, Autodesk Construction Cloud, Excel, Dashboard creation and modifications, Software Integration, ETL, Reporting, Automation, Solutions Development, Workflow Integrations, Jira, ServiceNow
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

      <h3 class="company details"></h3>
      <h3 class="company details">Columbus, Ohio, United States</h3>
      <span>
        <h4>ERP Data Analyst</h4>
        <h5>November 2024 - Present</h5>
        <p>At Superior, I design, implement, and support ERP systems and enterprise applications to align technology with organizational goals.
          I work closely with cross-functional teams, acting as a bridge between business and technical stakeholders, while driving system enhancements,
          training, and process improvements that maximize value across the organization.</p>
        <ul>

          <li>
            Lead ERP projects end-to-end, from requirements gathering through testing, deployment, and post-launch support
          </li>
          <li>
            Design and implement ERP solutions and application integrations that improve efficiency and meet business needs
          </li>
          <li>
            Create reports, dashboards, and data analyses to identify trends, support decision-making, and uncover opportunities for process improvement
          </li>
          <li>
            Develop training materials, user manuals, and hands-on sessions to ensure smooth onboarding and maximize system adoption
          </li>
          <li>
            Collaborate with cross-functional teams and stakeholders to translate business requirements into effective technical solutions
          </li>
          <li>
            Promote continuous learning, process improvements, and system enhancements to keep pace with evolving technologies
          </li>
        </ul>
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
    {/* <p>Click to view subskills</p> */}
    <h3>Web Development:</h3>
    <p>
      <span class="skills">HTML5</span>
      <span class="skills">CSS3</span>
      <span class="skills">JavaScript</span>
      <span class="skills">ReactJS</span>
      <span class="skills">AngularJS</span>
      <span class="skills">Node.JS</span>
      <span class="skills">Bootstrap</span>
      <span class="skills">Tailwind</span>
      <span class="skills">AWS</span>
      <span class="skills">Firebase</span>
    </p>
    <h3>Software Development:</h3>
    <p>
      <span class="skills">Python</span>
      <span class="skills">Java</span>
      <span class="skills">C#</span>
      <span class="skills">Visual Basic</span>
      <span class="skills">.NET framework</span>
    </p>
    <h3>
      Technical:
    </h3>
    <p>
      <span class="skills">Data Analysis</span>
      <span class="skills">Continuous Improvement</span>
      <span class="skills">Testing</span>
      <span class="skills">Windows OS</span>
      <span class="skills">Linux OS</span>
      <span class="skills">Mac OS</span>
      <span class="skills">Hardware Devices</span>
      <span class="skills">MobileIron</span>
      <span class="skills">InTune</span>
      <span class="skills">VOIP</span>
      <span class="skills">Security</span>
      <span class="skills">Troubleshooting</span>
      <span class="skills">Visual Studio</span>


    </p>
    <h3>
      Other:
    </h3>
    <p>
      <span class="skills">Process Improvement</span>
      <span class="skills">Agile Methodologies</span>
      <span class="skills">Communication</span>
      <span class="skills">Determination</span>
      <span class="skills">Reliability</span>

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



const ProjectCard = ({ project, isFirst }) => (
  <div className={`project-card ${isFirst ? 'first-project' : ''}`}>

    <div className="project-content">
      <h2>{project.title}</h2>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <a target='_blank' href={project.githubLink}>{project.githubLink}</a>
    </div>
    <div className="project-image">
      <img src={project.imageSrc} alt={project.title} />
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Projects',
      id: 1,
      name: "C Sharp Calculator",
      description: "Desktop calculator built in C# using Windows Forms. Implements event-driven UI logic, input validation, and state management for chained arithmetic operations. UI and interaction model inspired by the iOS calculator. Source code linked below.",
      githubLink: "https://github.com/Logand50/CSharpCalculator",
      imageSrc: "/CSharpCalculator.png",
    },
    {
      title: 'Projects',
      id: 2,
      name: "StudyHub – Computer Science Resource Site",
      description: "Static resource hub for computer science topics and study materials. Built with HTML, CSS, Bootstrap, and jQuery. Focused on clean layout, responsive design, and structured content organization for easy navigation.",
      githubLink: "https://studylinkhub.netlify.app/",
      imageSrc: "/studyhub.png",
    },
    {
      title: 'Projects',
      id: 3,
      name: "AngularJS Tic-Tac-Toe",
      description: "Single-page Tic-Tac-Toe game built with AngularJS and TypeScript. Uses component-based architecture, two-way data binding, event handling, and dynamic styling with animations to manage game state and user interaction.",
      githubLink: "https://angularpwa-tictactoe.netlify.app/",
      imageSrc: "/TicTacToeAngular.png",
    },
    {
      title: 'Projects',
      id: 4,
      name: "Car Driving Game",
      description: "Browser-based driving game developed in vanilla JavaScript. Implements keyboard input handling, basic physics-style movement, and real-time rendering using the HTML canvas. Ongoing project with planned gameplay and performance improvements.",
      githubLink: "https://driftgame.netlify.app/",
      imageSrc: "/drift.png",
    },
    {
      title: 'Projects',
      id: 5,
      name: "Java Calculator",
      description: "Desktop calculator application written in Java using the Swing library. Demonstrates object-oriented design, GUI layout management, and action listeners to handle arithmetic operations and user input.",
      githubLink: "https://github.com/Logand50/java-calculator",
      imageSrc: "/CalculatorJava.png",
    },
    {
      title: 'Projects',
      id: 6,
      name: "Tic-Tac-Toe Game (Python)",
      description: "Tic-Tac-Toe game built in Python with Pygame. Features both single-player and two-player modes, including a basic AI opponent implemented with rule-based decision logic and turn-state management.",
      githubLink: "https://github.com/Logand50/TicTacToe",
      imageSrc: "/1687734404199.jpg",
    },
    {
      title: 'Projects',
      id: 7,
      name: "Snake Game",
      description: "Classic Snake game recreated in Python using Pygame. Implements a real-time game loop, collision detection, score tracking, and incremental difficulty through speed scaling.",
      githubLink: "https://github.com/Logand50/snake_pygame",
      imageSrc: "/Snake_game.pdf.png",
    },
    {
      title: 'Projects',
      id: 8,
      name: "Fetch JavaScript Game",
      description: "Interactive browser game developed for a JavaScript course. Demonstrates DOM manipulation, event-driven logic, and dynamic UI updates using jQuery.",
      githubLink: "https://fetchjs.netlify.app/",
      imageSrc: "/fetchGame.png",
    },
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,     // ms between slides
    pauseOnHover: true,      // stop when mouse hovers
    pauseOnFocus: true,      // stop when clicked/focused
    pauseOnDotsHover: true,  // optional

    prevArrow: <SamplePrevArrow className="custom-prev-arrow" />,
    nextArrow: <SampleNextArrow className="custom-next-arrow" />,
    
  };

  return (
    <section id="projects">
      <Slider {...settings}>

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
            <Nav.Link as="a" href="#projects">Projects</Nav.Link>
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

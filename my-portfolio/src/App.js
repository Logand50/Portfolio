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

      <p>Java, C#, Python, JavaScript, ReactJS, AngularJS, HTML5, CSS3, SQL</p>
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
      <span class="em">Welcome!</span> Hello, I'm Logan Dye, a Data Analyst at The Superior Group passionate about process improvement and automation.
      I am currently pursuing an Associates degree in Computer Science: Software Development from Columbus State Community College. I really enjoy web development and have enterprise experience in software development and data analysis.

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
        <ul>
          <li>
            Support ERP systems and infrastructure.
          </li>
          <li>
            Develop interactive dashboards and data visualizations using Power BI and similar tools to support data-driven decision-making.
          </li>
          <li>
            Utilize SQL and Excel for data analysis, including JOINs and complex queries to extract and manipulate data efficiently.
          </li>
          <li>
            Manage service requests using a service request platform, ensuring accurate tracking, prioritization, and timely resolution of issues.
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
        <ul>
          <li>
            Data Analyst within the Technology End User Services End to End (E2E) team, I play a critical role in managing incident/request ticket data for the end user community.
          </li>
          <li>
            Generating daily, weekly, monthly, and ad hoc reports for senior management, highlighting key insights and trends using SQL and Excel.
          </li>
          <li>
            Responsible for automation projects for the firm, using Python and other programming languages to streamline reporting and automate routine tasks.
          </li>
          <li>
            Maintain the software and analyze aged tickets to track patterns and trends. Leverage advanced Microsoft Excel skills, along with tools such as Service Now, Tableau, and Power BI.
          </li>
          <li>
            Contributed to the development of a program utilizing Python and the pandas data analysis library to analyze and disseminate formatted reports of older tickets to department leads.
          </li>
          <li>
            Develop a program using Python and the pandas data analysis library to analyze and send out formatted reports of older tickets to their department leads. Analyzed aged tickets and use methods to track patterns and trends.
          </li>
          <li>
            Assess ticket quality and aging, identify repeat callers and status callers and analyze ticket hopping metrics to drive continuous enhancement of end user satisfaction. My Analyze tickets to discover trends and ensure a high-quality service experience for our users.
          </li>
          <li>
            I am responsible for providing technical assistance to employees of the firm. I have experience troubleshooting and resolving technical issues related to computer systems, software, and hardware.
          </li>
          <li>
            Analyze of tickets to discover trends and to assist in providing great quality of service to our users.
          </li>
          <li>
            Assisted in the implementation and maintenance of new technology and provided training to employees on how to use it effectively. I work closely with local IT and other departments to ensure the high quality of service of the company's technology infrastructure.
          </li>
        </ul>
      </span>
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
      description: "This is a fully functional calculator app built with C# and Windows Forms, featuring a user-friendly interface and supporting basic arithmetic operations such as addition, subtraction, multiplication, and division. Modeled after the IPhone calculator app. Link to the code below.",
      githubLink: "https://github.com/Logand50/CSharpCalculator",

      imageSrc: "/CSharpCalculator.png",
    },
    {
      title: 'Projects',
      id: 2,
      name: "StudyHub - Computer Science Resource Site",
      description: "Website containing computer science articles and links to study materials. Made with JQuery, CSS & Bootstrap, and HTML.",
      githubLink: "https://studylinkhub.netlify.app/",

      imageSrc: "/studyhub.png",
    },
    {
      title: 'Projects',
      id: 3,
      name: "AngularJS Tic-Tac-Toe",
      description: "Tic Tac Toe programmed using the AngularJS framework and TypeScript. I used component interaction, dynamic styling and animation, DOM manipulation, and event handling.",
      githubLink: "https://angularpwa-tictactoe.netlify.app/",
      imageSrc: "/TicTacToeAngular.png",
    },
    {
      title: 'Projects',
      id: 4,
      name: "Car Driving Game",
      description: "Car driving game programmed in JavaScript. Use [w s a d] keys to drive the car around. Work in progress.",
      githubLink: "https://driftgame.netlify.app/",
      imageSrc: "/drift.png",
    },
    {
      title: 'Projects',
      id: 5,
      name: "Java Calculator",
      description: "Basic calculator programmed using Java. This program implemented use of the Swing Library.",
      githubLink: "https://github.com/Logand50/java-calculator",
      imageSrc: "/CalculatorJava.png",

    },
    {
      title: 'Projects',

      id: 6,
      name: "Tic-Tac-Toe Game",
      description: "Tic Tac Toe Game programmed in Python, using the Pygame library. The program implements a simple computer algorithm for the single-player mode.",
      githubLink: "https://github.com/Logand50/TicTacToe",
      imageSrc: "/1687734404199.jpg",
    },
    {
      title: 'Projects',

      id: 7,
      name: "Snake Game",
      description: "Snake Game programmed in Python. This code presents an engaging rendition of the classic Snake game using the Pygame library.",
      githubLink: "https://github.com/Logand50/snake_pygame",
      imageSrc: "/Snake_game.pdf.png",
    },
    {
      title: 'Projects',
      id: 8,
      name: "Fetch JavaScript Game",
      description: "Game programmed for a JavaScript course. Demonstrating DOM manipulation using the JQuery library.",
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
      <p>Email:<a id="contact-git" href="mailto:logandye50@gmail.com">logandye50@gmail.com</a></p>
      <p>Linkedin: <a target='_blank' id='contact-linkedin' href='https://www.linkedin.com/in/logan-dye-8b2b24256/'>https://www.linkedin.com/in/logan-dye-8b2b24256/</a></p>
      <p>GitHub: <a target='_blank' id='contact-git' href='https://github.com/Logand50'>https://github.com/Logand50</a></p>
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
        <p>Webpage programmed using ReactJS, CSS/HTML & Bootstrap. Hosted using Google Firebase.</p>
        <p>&copy; 2023-{new Date().getFullYear()}, Logan Dye. All rights reserved.</p>
      </footer>
    </Router>
  );
};



export default App;

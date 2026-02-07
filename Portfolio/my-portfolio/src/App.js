import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Jumbotron, Row, Col } from "react-bootstrap";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faReact, faJava, faPython, faJs, faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BackGround from './BackGround';


const Home = () => (
  <Jumbotron fluid id="home" className="text-center">
    <Container id='homeContainer'>
      <h1>Logan Dye</h1>
      <p>Software and Web Developer</p>
      
      <p>Java, Python, JavaScript, ReactJS, HTML5, CSS3, SQL</p>
      <div id="icons">
      <FontAwesomeIcon className='icon1' icon={faJava} />
      <FontAwesomeIcon className='icon2'icon={faPython} />
      <FontAwesomeIcon className='icon3'icon={faJs} />
      <FontAwesomeIcon className='icon4'icon={faReact} />
      <FontAwesomeIcon className='icon5'icon={faHtml5} />
      <FontAwesomeIcon className='icon6'icon={faCss3Alt} />
      <FontAwesomeIcon className='icon7'icon={faDatabase} />
      </div>
    </Container>
  </Jumbotron>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>
    Hello! I'm Logan Dye, a Tech Support Specialist at Morgan Stanley and a Software Developer in Training with a passion for creating innovative and useful applications. I am currently pursuing an Associate of Applied Science (AAS) degree in Software Development at Columbus State Community College, where I have gained comprehensive expertise in various programming languages, my goal is to become a full stack developer. My journey into software development has been shaped by diverse experiences, including professional roles that have broadened my skill set. Transitioning from a Tech Support Agent to a Data Analyst, I honed my abilities in data manipulation, analysis, and visualization, utilizing tools such as Python, Excel, Tableau, and PowerBi. This role change was driven by my dedication to continuous growth and learning, achieving it through dedication, self-study, and a proactive approach to professional development. My proficiency extends beyond programming languages to encompass Agile methodologies, soft-skills, and technical expertise. I am enthusiastic about leveraging my multifaceted skill set to contribute meaningfully to innovative projects and solutions.
    </p>
  </section>
);

const Employment = () => (
  <section id="employment">

    <h2>Employment History</h2>
    <a target='_blank' href="https://www.morganstanley.com">
    <img id="msLogo" src="/morgan_stanley_logo.jpg"></img>
    </a>
    <h3>Morgan Stanley</h3>

    <h3>January 2023 - Present</h3>
    <h3>Columbus, Ohio, United States</h3>
    <ul>
    <li><h4>Data Analyst</h4>
    <h5>Dec 2023 - Present</h5>
    <p>In my current role as a Data Analyst within the Technology End User Services End to End (E2E) team, I play a critical role in managing incident/request ticket data for the end user community. This involves generating daily, weekly, monthly, and ad hoc reports for senior management, highlighting key insights and trends. I also assess ticket quality and aging, identify repeat callers and status callers, and analyze ticket hopping metrics to drive continuous enhancement of end user satisfaction. My responsibilities extend to analyzing tickets to discover trends and ensure a high-quality service experience for our users. As part of a collaborative team effort, I contributed to the development of a program utilizing Python and the pandas data analysis library to analyze and disseminate formatted reports of older tickets to department leads. This initiative has evolved into my permanent role, where I not only maintain the software but also analyze aged tickets to track patterns and trends. Leveraging advanced Microsoft Excel skills, along with tools such as Service Now, Tableau, and PowerBi, is integral to our analytical processes. My commitment to continuous improvement extends beyond ticket analysis, as I seek to optimize our processes and workflows to better serve our end users. By leveraging a combination of technical expertise and strategic insights, I strive to drive positive outcomes and deliver exceptional value to our organization.</p>
    </li>
    <li>
    <h4>IT Support Specialist</h4>
    <h5>Jan 2023 - Present</h5>
    <p>I am responsible for providing technical assistance to employees of the firm. I have experience troubleshooting and resolving technical issues related to computer systems, software, and hardware. I also work on automation projects for the firm, using Python and other programming languages to streamline reporting and automate routine tasks. My role involves analysis of tickets to discover trends and to assist in providing great quality of service to our users. I worked as part of a team to develop a program using Python and the pandas data analysis library to analyze and send out formatted reports of older tickets to their department leads. This team has now become my permanent role, in addition to maintaining the software, we analyze aged tickets and use methods to track patterns and trends. I have also assisted in the implementation and maintenance of new technology and provided training to employees on how to use it effectively. I work closely with local IT and other departments to ensure the high quality of service of the company's technology infrastructure. I am familiar with multiple operating systems and software and have experience with hardware repair and maintenance. I am a problem solver and a quick learner and I enjoy helping people and finding solutions to difficult technical issues.</p>
    </li>
    </ul>
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
      title:'Projects',
      id: 1,
      name: "AngularJS Tic-Tac-Toe",
      description: "Tic Tac Toe programmed using the AngularJS framework and TypeScript. I used component interaction, dynamic styling and animation, DOM manipulation, and event handling.",
      githubLink: "https://angularpwa-tictactoe.netlify.app/",
      imageSrc: "/TicTacToeAngular.png",
    },
    {
      title:'Projects',
      id: 2,
      name: "Car Driving Game",
      description: "Car driving game programmed in JavaScript. Use [w s a d] keys to drive the car around. Work in progress.",
      githubLink: "https://driftgame.netlify.app/",
      imageSrc: "/drift.png",
    },
    {
      title:'Projects',
      id: 3,
      name: "Java Calculator",
      description: "Basic calculator programmed using Java. This program implemented use of the Swing Library.",
      githubLink: "https://github.com/Logand50/java-calculator",
      imageSrc: "/CalculatorJava.png",
    },
    {
      title:'Projects',

      id: 4,
      name: "Tic-Tac-Toe Game",
      description: "Tic Tac Toe Game programmed in Python, using the Pygame library. The program implements a simple computer algorithm for the single-player mode.",
      githubLink: "https://github.com/Logand50/TicTacToe",
      imageSrc: "/1687734404199.jpg",
    },
    {
      title:'Projects',

      id: 5,
      name: "Snake Game",
      description: "Snake Game programmed in Python. This code presents an engaging rendition of the classic Snake game using the Pygame library.",
      githubLink: "https://github.com/Logand50/snake_pygame",
      imageSrc: "/Snake_game.pdf.png",
    },
    {
      title:'Projects',
      id: 6,
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

            <ProjectCard project={project} isFirst={index===0}/>
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
      <p>Email:<a id="contact-git"href="mailto:logandye50@gmail.com">logandye50@gmail.com</a></p>
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
      const offset =70;
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
              <Nav.Link as="a" href="#contact">Contact</Nav.Link>
            </Nav>

        </Container>
      </Navbar>

      <div id="content">
        {/* <BackGround /> */}
        <Home />
        <About />
        <Employment />
        <Projects />
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

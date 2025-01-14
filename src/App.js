import "./App.css";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importation des icônes
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône "arrow-down"
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Skills } from "./Skills";
import { MyProjects } from "./MyProjects";
import { Training } from "./Training";
import { ContactResume } from "./ContactResume";
import { Reveal } from "./Reveal";
import { RevealRight } from "./Reveal";
import { RevealIcon } from "./Reveal";
import { RevealArrow } from "./Reveal";
import { RevealNavBar } from "./Reveal";


export default function App() {
  return (
    <div>
      <SlideTabs />
      <HomePage />
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <div id="training">
        <Training />
      </div>
      <div id="contact-resume">
        <ContactResume />
      </div>
    </div>
  );
}






const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navBar">
      <RevealNavBar>
        <button
          className={`hamburger md:hidden ${isMenuOpen ? 'cross' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : '☰'}
        </button>
        <ul
          onMouseLeave={() => {
            setPosition((pv) => ({
              ...pv,
              opacity: 0,
            }));
          }}
          className={`mt-10 ml-20 !pl-3 py-2 pr-3 flex w-fit rounded-full bg-vertdark ${isMenuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <Tab setPosition={setPosition} onClick={() => { handleScroll('about-me'); closeMenu(); }}>About me</Tab>
          <Tab setPosition={setPosition} onClick={() => { handleScroll('skills'); closeMenu(); }}>Skills</Tab>
          <Tab setPosition={setPosition} onClick={() => { handleScroll('projects'); closeMenu(); }}>My project</Tab>
          <Tab setPosition={setPosition} onClick={() => { handleScroll('training'); closeMenu(); }}>Training</Tab>
          <Tab setPosition={setPosition} onClick={() => { handleScroll('contact-resume'); closeMenu(); }}>Contact & Resume</Tab>

          <Cursor position={position} />
        </ul>
      </RevealNavBar>
    </div>
  );
};

const Tab = ({ children, setPosition, onClick }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs text-beige font-outfit md:px-5 md:py-3 md:text-base hover:text-dark-green"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-vert md:h-12"
    />
  );
};








function HomePage() {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Reveal>
        <div className="name">
          <h1>
            Valentin
            <br />
            Bracchetti
          </h1>
          <h2>Front-end Developer</h2>
        </div>
      </Reveal>
      <div className="bar">
        <RevealRight>
          <h4>
            _____________________________________________________________________
          </h4>
        </RevealRight>
        <RevealIcon>
          <h4>
            <span className="social">
              <a href="https://github.com/ValentinBctt" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="icon-home" />{" "}
              </a>
              {/* Icône GitHub */}
              <a href="https://www.linkedin.com/in/valentin-bracchetti/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon-home" />{" "}
              </a>
              {/* Icône LinkedIn */}
            </span>
          </h4>
        </RevealIcon>
      </div>
      <div className="arrow-down-container">
          <RevealArrow>
        <div className="arrow-down">
          <FontAwesomeIcon icon={faArrowDown} className="icon-down cursor-pointer" onClick={() => handleScroll('about-me')}/>{" "}
          {/* Icône "arrow-down" */}
        </div>
          </RevealArrow>
      </div>
    </>
  );
}
function AboutMe() {
  return (
    <>
      <div className="box">
        <h3>About me</h3>
        <div className="about-me">
          <Reveal>
          <div className="text">
            <p>
              Créateur d'expériences web modernes et fonctionnelles, je me
              spécialise dans le développement web front-end tout en maîtrisant
              les bases du full stack grâce à ma formation au Wagon. Mon
              parcours diversifié en marketing digital et community management
              enrichit ma capacité à comprendre les besoins des utilisateurs et
              à concevoir des solutions qui allient technique et créativité.{" "}
              <br />
              <br />

              <strong>💡 Pourquoi travailler avec moi ?</strong>
              <br />
              Je suis quelqu’un de curieux et à l’écoute, qui aime comprendre
              les besoins de mes clients pour créer des solutions sur-mesure.
              Mon parcours diversifié, entre projets techniques et créativité,
              m’a donné une grande flexibilité et un regard unique sur les
              projets web.
              <br />
              <br />
              N’hésitez pas à me contacter pour discuter de vos projets web et
              digitaux. Ensemble, nous donnerons vie à vos idées !
            </p>
          </div>
          </Reveal>

          <img
            src="/assets/Photo-CV2.jpg"
            alt="Valentin Bracchetti"
            className="photo"
          />
        </div>
      </div>
    </>
  );
}

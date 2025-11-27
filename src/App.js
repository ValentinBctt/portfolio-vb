import "./App.css";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importation des icônes
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône "arrow-down" et "arrow-up"
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
import { SimpleParallax } from "./Reveal";


export default function App() {
  return (
    <div>
      <div className="home">
      <SlideTabs />
      <HomePage />
      </div>
      <ArrowTop />
      <div id="about-me">
        <AboutMe />
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


function ArrowTop() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const homeElement = document.querySelector('.home');
    if (homeElement) {
      observer.observe(homeElement);
    }

    return () => {
      if (homeElement) {
        observer.unobserve(homeElement);
      }
    };
  }, []);





    const scrollToTop = () => {
      const homeElement = document.querySelector('.home');
      if (homeElement) {
        homeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
    if (!isVisible) {
      return null;
    }

  return(
    <RevealRight>
    <FontAwesomeIcon className="arrow-top" icon={faArrowUp} onClick={scrollToTop}/>
    </RevealRight>
  )
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
          <Tab setPosition={setPosition} onClick={() => { handleScroll('projects'); closeMenu(); }}>My projects</Tab>
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
        <div className="name">
          <h1>
      <Reveal>
            Valentin
            <br />
            Bracchetti
      </Reveal>
          </h1>
          <Reveal delay={0.4}>
          <h2>Full-Stack Developer</h2>
          </Reveal>
        </div>
      <div className="bar">
        <RevealRight delay={0.6}>
          <h4>
            _____________________________________________________________________
          </h4>
        </RevealRight>
        <RevealIcon delay={0.8}>
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handle = (e) => setIsMobile(e.matches);
    // set initial
    handle(mq);
    // attach listener (support both addEventListener and deprecated addListener)
    if (mq.addEventListener) {
      mq.addEventListener("change", handle);
      return () => mq.removeEventListener("change", handle);
    } else {
      mq.addListener(handle);
      return () => mq.removeListener(handle);
    }
  }, []);

  const aboutBox = (
    <div className="box-about w-full p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">About me</h3>
      <div className="about-me flex flex-col items-center gap-4">
        <img
          src="/assets/Photo-CV2.jpg"
          alt="Valentin Bracchetti"
          className="photo w-40 h-40 md:w-56 md:h-56 object-cover rounded-full"
        />
        <Reveal>
          <div className="text">
            <p>
              As a creator of modern, functional web experiences, I am specialized in front-end web development, while mastering the basics of full stack thanks to my training at Le Wagon. <br />
              My diverse background in digital marketing and community management enriches my ability to understand users' needs and design solutions that combine technique and creativity.
              <br /><br />
              💡 Why should you work with me? <br />
              I'm a curious and good listener, who likes to understand my customers needs to create tailor-made solutions. My diverse background, between technical projects and creativity, has given me great flexibility and a unique perspective on web projects.
              <br /><br />
              Don't hesitate to contact me to discuss your web and digital projects. Together, we'll bring your ideas to life!
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );

  return (
    <>
      <div className="about-skills gap-4">
        {isMobile ? aboutBox : <SimpleParallax>{aboutBox}</SimpleParallax>}

        {/* Box Skills */}
        <div className="box-skills w-full md:w-2/5  p-6 rounded-lg shadow-md" id="skills">
          <Skills />
        </div>
      </div>
    </>
  );
}

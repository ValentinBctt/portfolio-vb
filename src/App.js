import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importation des icônes
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône "arrow-down"
import { Skills } from "./Skills";
import { MyProjects } from "./MyProjects";
import { Training } from "./Training";
import { ContactResume } from "./ContactResume";
import { Reveal } from "./Reveal";
import { SlideTabs } from "./Reveal"

export default function App() {
  return (
    <div>
      <NavBar />
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

function NavBar() {


  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  const navLinks = [
    { id: "about-me", text: "About me" },
    { id: "skills", text: "Skills" },
    { id: "projects", text: "Projects" },
    { id: "training", text: "Training" },
    { id: "contact-resume", text: "Contact & Resume" },
  ];

  return (
    <nav>
      <ul className="navBar">

        {navLinks.map((link) => (

          <li key={link.id}>
            <a href={`#${link.id}`} onClick={handleScroll}>
              {link.text}
            </a>
          </li>

        ))}
      </ul>
    </nav>
  );
}

function HomePage() {
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
        <h4>
          _____________________________________________________________________________________________
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
      </div>
      <div className="arrow-down-container">
        <div className="arrow-down">
          <FontAwesomeIcon icon={faArrowDown} className="icon-down" />{" "}
          {/* Icône "arrow-down" */}
        </div>
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

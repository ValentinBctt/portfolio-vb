import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Importation des icônes
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Import de l'icône "arrow-down"
import { Skills } from "./Skills";
import { MyProjects } from "./MyProjects";
import { Training } from "./Training";
import { ContactResume } from "./ContactResume";

export default function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Training />
      <ContactResume />
    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <ul className="navBar">
        <li>
          <a href="/About me">About me</a>
        </li>
        <li>
          <a href="/Skills">Skills</a>
        </li>
        <li>
          <a href="/MyProjects">My Projects</a>
        </li>
        <li>
          <a href="/Training">Training</a>
        </li>
        <li>
          <a href="/Contact&Resume">Contact & Resume</a>
        </li>
      </ul>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <div className="name">
        <h1>
          Valentin
          <br />
          Bracchetti
        </h1>
        <h2>Front-end Developer</h2>
      </div>
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
              <strong>🎯 Mes compétences clés :</strong>
              <br />
              Développement front-end : création de maquettes et interfaces
              utilisateur (Figma, HTML, CSS, JavaScript, React).
              <br />
              Développement back-end : mise en place de bases de données,
              gestion des API, et construction de fonctionnalités dynamiques
              (Ruby on Rails). Construction d’applications web UX-friendly.
              Ecoute et adaptation des besoins client. Expérience en gestion de
              projets e-commerce et digital marketing.
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

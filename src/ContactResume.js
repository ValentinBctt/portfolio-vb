import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // On garde les icônes importées
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function ContactResume() {
  return (
    <div className="box-contact-resume">
      <h3>Contact & Resume</h3>

    <div className="contact-resume">
      <div className="resume">
      <a href="./assets/CV Valentin Bacchetti.pdf" download="CV Valentin Bacchetti.pdf">
      <FontAwesomeIcon icon={faDownload} />Download my resume
    </a>
        </div>
      <div className="contact">
        <p>
          <strong><FontAwesomeIcon icon={faEnvelope} /></strong>  valentin.bctt@gmail.com <br />
          </p>
          <p>
          <strong><FontAwesomeIcon icon={faPhone} /></strong> 07 60 10 15 50
        </p>
        <span className='social2'>
                      <a href="https://github.com/ValentinBctt" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon-home" />{" "}
                      </a>
                      {/* Icône GitHub */}
                      <a href="https://www.linkedin.com/in/valentin-bracchetti/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icon-home" />{" "}
                      </a>
                      {/* Icône LinkedIn */}
                    </span>
      </div>
    </div>
    </div>
  );
}

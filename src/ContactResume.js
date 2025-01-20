import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // On garde les icônes importées
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export function ContactResume() {
  return (
    <div className="box">
      <h3>Contact & Resume</h3>

    <div className="contact-resume">
      <div className="resume">
      <a href="./assets/Cv Valentin Bracchetti - Front-end Developer.pdf" download="Cv Valentin Bracchetti - Front-end Developer.pdf">
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
      </div>
    </div>
    </div>
  );
}

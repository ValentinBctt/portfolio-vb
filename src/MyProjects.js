  import { useState } from 'react';
  import { Reveal } from "./Reveal";
  import { RevealTop } from "./Reveal";
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.bundle.min';
  import './App.css'; // Assurez-vous d'importer le fichier CSS contenant les styles
  import Modal from 'bootstrap/js/dist/modal'; // Importer Modal de Bootstrap
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
  import { faExpand } from '@fortawesome/free-solid-svg-icons';

  const projects = [
    {
      name: "Create.",
      description: "Create is a web application for organizing artistic projects. Users can create projects, add tasks, deadlines, notes, and files, all within a comprehensive dashboard. They can also invite other users to join their projects for a flexible organization.",
      image: "assets/projects/Create1.png",
      image2: "assets/projects/Create2.png",
      image3: "assets/projects/Create3.png",
      language1: "Rails",
      language2: "HTML",
      language3: "CSS",
      language4: "JS",
      link: "https://www.lets-create-app.online/users/sign_in"
    },
    {
      name: "O-Jaune (almost done)",
      description: `Website for an music association who organize events and concerts in Bordeaux. The objective of the design was to match the "digital" art direction of the association. This website is a showcase of the events and concerts organized by the association.`,
      image: "assets/projects/o-jaune1.png",
      image2: "assets/projects/o-jaune2.png",
      image3: "assets/projects/o-jaune3.png",
      language1: "React",
      language2: "HTML",
      language3: "CSS",
      language4: "Motion",
      link: "https://o-jaune-41b729964877.herokuapp.com/"
    },

  ];

  export function MyProjects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleImageClick = (project) => {
      setSelectedProject(project);
      const modalElement = document.getElementById('imageModal');
      const modal = new Modal(modalElement);
      modal.show();
    };

    return (
      <div className="box">
        <h3>My projects</h3>
        <RevealTop>
          {/* Carrousel pour mobile */}
          <div id="projectsCarousel" className="carousel slide d-md-none" data-bs-interval="false">
            <div className="carousel-inner">
              {projects.map((project, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="project">
                    <img src={project.image} className="d-block w-100" alt={project.name} onClick={() => handleImageClick(project)} />
                    <h6><strong>{project.name}</strong></h6>
                  <p className='full-screen'><FontAwesomeIcon icon={faExpand} /></p>
                    <p>{project.description}</p>
                    <div className="languages">
                      <div className="language">
                        <p>{project.language1}</p>
                      </div>
                      <div className="language">
                        <p>{project.language2}</p>
                      </div>
                      <div className="language">
                        <p>{project.language3}</p>
                      </div>
                      <div className="language">
                        <p>{project.language4}</p>
                      </div>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev outside" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next outside" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Affichage des projets pour les écrans plus larges */}
          <div className="projects d-none d-md-flex">
            {projects.map((project, index) => (
              <div className="project" key={index}>
                <div id={`carouselExampleIndicators${index}`} className="carousel slide" data-bs-interval="false">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={project.image} className="d-block w-100" alt={project.name} onClick={() => handleImageClick(project)} />
                    </div>
                    <div className="carousel-item">
                      <img src={project.image2} className="d-block w-100" alt={project.name} onClick={() => handleImageClick(project)} />
                    </div>
                    <div className="carousel-item">
                      <img src={project.image3} className="d-block w-100" alt={project.name} onClick={() => handleImageClick(project)} />
                    </div>
                  </div>
                  <p className='full-screen' onClick={() => handleImageClick(project)}><FontAwesomeIcon icon={faExpand} /></p>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleIndicators${index}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <h6><strong>{project.name}</strong></h6>
                <p>{project.description}</p>
                <div className="languages">
                  <div className="language">
                    <p>{project.language1}</p>
                  </div>
                  <div className="language">
                    <p>{project.language2}</p>
                  </div>
                  <div className="language">
                    <p>{project.language3}</p>
                  </div>
                  <div className="language">
                    <p>{project.language4}</p>
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            ))}
          </div>
        </RevealTop>

        {/* Modal */}
        <div className="modal fade" id="imageModal" tabIndex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="imageModalLabel">{selectedProject ? selectedProject.name : ''}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {selectedProject && (
                  <div id="carouselModal" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                      <button type="button" data-bs-target="#carouselModal" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselModal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselModal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={selectedProject.image} className="d-block w-100" alt={selectedProject.name} />
                      </div>
                      <div className="carousel-item">
                        <img src={selectedProject.image2} className="d-block w-100" alt={selectedProject.name} />
                      </div>
                      <div className="carousel-item">
                        <img src={selectedProject.image3} className="d-block w-100" alt={selectedProject.name} />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselModal" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselModal" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

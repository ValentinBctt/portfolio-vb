const projects = [
  {
    name: "Project 1",
    description: "Description of the project 1",
    image: "assets/carapuce-lunettes-soleil.jpg",
    language1: "Ruby",
    language2: "Rails",
    language3: "React",
  },
  {
    name: "Project 2",
    description: "Description of the project 2",
    image: "assets/carapuce-lunettes-soleil.jpg",
    language1: "React",
  },
  {
    name: "Project 3",
    description: "Description of the project 2",
    image: "assets/carapuce-lunettes-soleil.jpg",
    language1: "React",
  }
]

export function MyProjects() {
  return (
    <div className="box">
    <h3>My projects</h3>
    <div className="projects">
      {projects.map((project) => (
        <div className="project">
          <img src={project.image} alt={project.name} />
          <p><strong>{project.name}</strong></p>
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
        </div>
        </div>
      ))}
    </div>
    </div>
  );
}

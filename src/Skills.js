import { Reveal } from "./Reveal";

export function Skills() {
  const frontend = [
    { title: "React", logo: "assets/logos/react-svgrepo-com.svg" },
    { title: "Java-Script", logo: "assets/logos/js01-svgrepo-com.svg" },
    { title: "CSS", logo: "assets/logos/css3-01-svgrepo-com.svg" },
    { title: "HTML", logo: "assets/logos/html5-01-svgrepo-com.svg" },
    { title: "Figma", logo: "assets/logos/figma-svgrepo-com.svg" },
    { title: "Tailwind", logo: "assets/logos/tailwind-svgrepo-com.svg" },
    { title: "Bootstrap", logo: "assets/logos/bootstrap-fill-svgrepo-com.svg" },
  ];

  const backend = [
    { title: "Ruby", logo: "assets/logos/ruby-svgrepo-com.svg" },
    { title: "Ruby on Rails", logo: "assets/logos/rails-svgrepo-com.svg" },
    { title: "Next.js", logo: "assets/logos/next-dot-js-svgrepo-com.svg" },
  ];

  return (
    <>
      <h3>Skills</h3>

      <Reveal delay={0}>
        <p className="skills-titles"><strong>Front-end</strong></p>
      </Reveal>
      <div className="skills">
        {frontend.map((skill, index) => (
          <Reveal key={index} delay={0.5 * (index + 2)}>
            <div className="skill">
              <img src={skill.logo} alt={skill.title} className="logo" />
              <h5>{skill.title}</h5>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3 * (frontend.length + 1)}>
        <p className="skills-titles"><strong>Back-end</strong></p>
      </Reveal>
      <div className="skills">
        {backend.map((skill, index) => (
          <Reveal key={index} delay={0.5 * (index + frontend.length + 2)}>
            <div className="skill">
              <img src={skill.logo} alt={skill.title} className="logo" />
              <h5>{skill.title}</h5>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

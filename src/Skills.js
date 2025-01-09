
export function Skills() {
  const frontend = [
    {
      title: "React",
      logo: "assets/logos/react-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Java-Script",
      logo: "assets/logos/js01-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "CSS",
      logo: "assets/logos/css3-01-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "HTML",
      logo: "assets/logos/html5-01-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Figma",
      logo: "assets/logos/figma-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Tailwind",
      logo: "assets/logos/tailwind-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Bootstrap",
      logo: "assets/logos/bootstrap-fill-svgrepo-com.svg",
      className: "logo"
    },
  ];

  const backend = [
    {
      title: "Ruby",
      logo: "assets/logos/ruby-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Ruby on Rails",
      logo: "assets/logos/rails-svgrepo-com.svg",
      className: "logo"
    },
    {
      title: "Next.js",
      logo: "assets/logos/next-dot-js-svgrepo-com.svg",
      className: "logo"
    }
  ];

  return (
    <>
    <div className="box">
      <h3>Skills</h3>
        <p className="skills-titles"><strong>Front-end</strong></p>
      <div className="skills">
        {frontend.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={skill.title} className="logo" />
            <h5>{skill.title}</h5>
          </div>
        ))}
      </div>
      <p className="skills-titles"><strong>Back-end</strong></p>
      <div className="skills">
        {backend.map((skill, index) => (
          <div key={index} className="skill">
            <img src={skill.logo} alt={skill.title} />
            <h5>{skill.title}</h5>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

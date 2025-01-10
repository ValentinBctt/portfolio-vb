import { useState } from "react";

const courses = [
  {id: 1,
    title: "Le Wagon",
    description:
      `Lors de ma formation au Wagon, j'ai appris à concevoir et développer des applications web complètes.
      J'ai maîtrisé les bases du front-end avec HTML, CSS, JavaScript et React, ainsi
      que le back-end avec Ruby on Rails, la gestion d'API et les bases de données.
       Cette expérience m'a permis de développer des compétences en résolution de problèmes,
        en méthodologies agiles et
      en collaboration d'équipe, tout en créant des projets web fonctionnels et innovants.
      Lors de ma formation au Wagon, j'ai appris à concevoir et développer des applications web complètes.`,
    photo: "assets/Le-wagon-class.jpeg"
  },
  {
    id: 2,
    title: `The Ultimate React Course 2024: React, Next.js, Redux`,
    description: `Grâce à la formation "The Ultimate React Course" sur Udemy, j'ai renforcé mes
    compétences en développement web en maîtrisant React, Next.js et Redux. J'ai
    appris à créer des applications performantes et modernes, tout en appliquant les meilleures pratiques. Cette expérience m'a permis de mieux comprendre les concepts clés comme les composants, l'état, les props,
    ainsi que la gestion avancée d'état avec Redux et le rendu côté serveur avec Next.js.`,
    photo: "https://img-c.udemycdn.com/course/750x422/4471614_361e_8.jpg"
  },
  {
    id: 3,
    title: "MBA Digital Marketing - EDC Paris",
    description: `  J'ai développé une solide expérience en marketing digital, notamment en stratégie de
        contenu, gestion de campagnes publicitaires et analyse des performances.
         Mon rôle impliquait également la gestion de communautés en ligne, l'optimisation SEO, et la création de contenus engageants, me permettant de comprendre les besoins des utilisateurs et de renforcer la visibilité des marques.
      `,
    photo: "https://www.concours-sesame.net/media/vignette/5252"
  }
]

export function Training() {
  const [activeCourse, setActiveCourse] = useState(courses[0]);

  const handleActiveCourse = (course) => {
    setActiveCourse(course);
  };

  return (
    <>
      <div className="box">
        <h3>Formations</h3>
        <div className="training">
        <ul className="course-list">
          {courses.map((course, index) => (
            <li className="course" key={index} onClick={() => handleActiveCourse(course)}>
              <img src={course.photo} alt={course.title} className="course-photo" />
              <div className="course-title">
                <p>
                  {course.title.split(' ').map((word, index) => (
                    <>
                      {word}
                      {(index + 1) % 5 === 0 ? <br /> : ' '}
                    </>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {activeCourse && (
        <div className="selected-course">
          <img
            src={activeCourse.photo}
            alt={activeCourse.title}
            className="selected-course-photo"
          />
          <h3>{activeCourse.title}</h3>
          <h4>{activeCourse.description}</h4>
        </div>
      )}
    </div>
    </>
  );
}

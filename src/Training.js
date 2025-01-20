import React, { useState } from 'react';
import { Reveal, RevealShort } from './Reveal';

const courses = [
  {
    id: 1,
    title: "Le Wagon Web Developer Fullstack Bootcamp",
    description: `During this intensive training, I gained solid skills in web development, learning the fundamentals needed to design and build modern, functional applications.

I started with the basics of web development, including HTML and CSS for creating responsive designs, JavaScript for interactive features, and Ruby for backend development.

I also learned to use essential tools like Git and GitHub for version control and collaboration. Teamwork was a core part of the program, where I worked on real-world projects under tight deadlines, honing my communication and coordination skills in an agile environment.

This bootcamp provided me with both technical skills and a collaborative mindset, preparing me to tackle real-world projects and continue growing in the ever-evolving field of web development.`,
    photo: "assets/Le-wagon-class.jpeg"
  },
  {
    id: 2,
    title: `The Ultimate React Course 2024: React, Next.js, Redux`,
    description: `Thanks to "The Ultimate React Course" on Udemy, I significantly enhanced my web development skills by mastering React. I learned how to build high-performance, modern applications while applying best practices throughout the development process.

This experience allowed me to deepen my understanding of key React concepts such as components, state, and props. I also explored advanced topics, including lifecycle methods, hooks like useEffect and useState, and context for managing state across components.

Additionally, I worked on building reusable components, optimizing application performance, and structuring projects effectively. This training gave me the confidence to tackle complex React projects and create dynamic, user-friendly web applications.`,
    photo: "https://img-c.udemycdn.com/course/750x422/4471614_361e_8.jpg"
  },
  {
    id: 3,
    title: "MBA Digital Marketing - EDC Paris",
    description: `I have developed solid experience in digital marketing, particularly in content strategy, managing advertising campaigns, and performance analysis. My role also involved creating detailed website mockups, focusing on user-friendly design and functionality, as well as implementing effective strategies to enhance online presence and meet business objectives.

In addition, I worked on community management, SEO optimization, and crafting engaging content like photos and videos for social media. I also collaborated closely with designers and developers to ensure cohesive branding across all digital platforms. This experience strengthened my ability to align creative solutions with marketing goals, resulting in impactful and measurable outcomes.`,
    photo: "https://www.concours-sesame.net/media/vignette/5252"
  }
];

export function Training() {
  const [activeCourse, setActiveCourse] = useState(courses[0]);

  const handleActiveCourse = (course) => {
    setActiveCourse(course);
  };

  return (
    <>
      <div className="box">
        <h3>Training</h3>
        <div className="training">
          <ul className="course-list">
            {courses.map((course) => (
              <li
                className={`course ${activeCourse.id === course.id ? 'active-course' : ''}`}
                key={course.id}
                onClick={() => handleActiveCourse(course)}
              >
                <img src={course.photo} alt={course.title} className="course-photo" />
                <div className="course-title">
                  <p>
                    {course.title.split(' ').map((word, index) => (
                      <React.Fragment key={index}>
                        {word}
                        {(index + 1) % 5 === 0 ? <br /> : ' '}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {activeCourse && (
            <Reveal key={activeCourse.id}>
              <div className="selected-course">
                <RevealShort key={activeCourse.id}>
                  <img
                    src={activeCourse.photo}
                    alt={activeCourse.title}
                    className="selected-course-photo"
                  />
                  <p><strong>{activeCourse.title}</strong></p>
                  <p>{activeCourse.description}</p>
                </RevealShort>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </>
  );
}

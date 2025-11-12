import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import kickstart from "../assets/projects/kickstart.png";
import umang from "../assets/projects/umang.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a custom animation duration
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-down">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card" data-aos="zoom-in">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="BlogVerse"
              description="
                  Build a blogging platform that allows users to create and publish diverse content, including text, videos, photos, and
                  status updates. Users can easily add, edit, and manage their blog posts, offering a dynamic and engaging way to share
                  their ideas.
                  • Implemented User authentication and authorization with Appwrite in backend, ensuring secure web application access.
                  • Utilized React-redux for state management and hooks to ensure proper state management in the application."
              ghLink="https://github.com/taran-preet/BlogVerse"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="NewsMonkey"
              description="Developed a news application featuring categories such as General, Sports, and Entertainment. Integrated news API for
                            dynamic content retrieval using JavaScript's fetch function and React-router for better performance.
                            • Tech-Stack: React JS, SQL, JavaScript, HTML, CSS."
              ghLink="https://github.com/taran-preet/NewsMonkey-"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="iNotebook"
              description="Created a note-taking app with complete CRUD operations, enabling users to manage notes and send them via email.
                Integrated email functionality for users to send notes to their registered mail address.
                • Implemented secure login and signup features with database integration for user authentication and access control.
                • Tech-Stack: React JS, SQL, JavaScript, HTML, CSS."
              ghLink="https://github.com/taran-preet/iNotebook"
            />
          </Col>

          <Col md={4} className="project-card" data-aos="zoom-in">
            <ProjectCard
              imgPath={umang}
              isBlog={false}
              title="Umang Jeevan"
              description="Umang Jeevan is a social platform inspired by the Ek Zaria Foundation, based in Punjab, North India. It connects donors with those in need, creating an easy and secure pathway for assistance.
               Built with a tech stack including ReactJS, React-Redux, Context API, React Query (TanStack) for efficient data caching, Bootstrap, HTML5, and CSS3, Umang Jeevan ensures a responsive and high-performance 
               user experience. For secure authentication, cookies are implemented, enhancing the safety and accessibility of user interactions. By utilizing modern web technologies, Umang Jeevan empowers a supportive community, making meaningful connections between donors and recipients."
              ghLink="https://github.com/taran-preet/collegeUmang/tree/main/collegeUmang"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

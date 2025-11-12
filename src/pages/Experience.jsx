import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../components/Particle';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Experience.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const experiences = [
    {
      company: "Seasia Infotech Private Ltd",
      role: " Associate Software Developer",
      description: `Build a blogging platform that allows users to create and publish diverse content, including text, videos, photos, and
        status updates. Users can easily add, edit, and manage their blog posts, offering a dynamic and engaging way to share
        their ideas.
        • Implemented User authentication and authorization with Appwrite in backend, ensuring secure web application access.
        • Utilized React-redux for state management and hooks to ensure proper state management in the application`,
      date: "Sep 2024 - Present"
    },
    {
      company: "CodeTown Pvt Ltd",
      role: "Lead Application Developer Intern",
      description: `Built an interactive company portal featuring user authentication, product viewing, purchasing, and post-purchase
            learning.
            • Utilized React-Redux, and React Router concepts to enhance performance and manage application state effectively.
            • Collaborating with cross-functional teams to deliver a high-quality, production-ready web application adhering to
            industry best practices.
            • Tech-Stack: React.js, Tailwind, HTML, CSS, JavaScript.`,
      date: "Jan 2024 – July 2024"
    },
    {
      company: "KhalsaSoft",
      role: " Frontend Developer intern",
      description: `Designed and built a multi-page e-commerce website, incorporating various Bootstrap components such as carousels
        and pagination across key pages like Home, Product Listing, Product Details, and Checkout, to effectively display and
        navigate different product categories.
         Utilized Bootstrap framework to streamline and enhance the website development process by 30%, ensuring consistent
        styling and layout across different platforms.
         Tech-Stack: HTML, CSS, JavaScript, Bootstrap`,
      date: "Jun 2023 – Aug 2023"
    }
  ];

  return (
    <Container className="my-5">
      <Particle />
      <br />
      <br />
      <h1 className="text-center mb-0" data-aos="fade-up">
        <span className="yellow">Professional</span> <span style={{ color: "white" }}>Experience</span>
      </h1>
      <div className="curve-container" data-aos="fade-up" data-aos-delay="200">
        <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="curved-line">
          <path d="M0,50 C150,0 350,0 500,50" stroke="#f7c619" strokeWidth="5" fill="none" />
        </svg> 
      </div> 
      <br /> 
      {experiences.map((exp, idx) => (
        <Row key={idx} className="align-items-center my-4" data-aos="fade-up" data-aos-delay={`${300 + idx * 100}`}>
          <Col md={2} className="text-center">
            <div className="role-date">
              <h5 style={{ color: "white" }} className="fw-bold"><span style={{ color:"#f7c619" }}>✲</span> {exp.role}</h5>
              <p style={{ color: "white" }} className="text-muted">{exp.date}</p>
            </div>
          </Col>

          <Col md={1} data-aos="fade-right" data-aos-delay={`${400 + idx * 100}`}>
            {/* Vertical Line with Gradient Animation */}
            <hr style={{ marginBottom: "10px" }} className="vertical-line" />
          </Col> 

          <Col md={9}>
            <div className="company-details" data-aos="fade-left" data-aos-delay={`${500 + idx * 100}`}>
              <h4 className="fw-bold yellow">{exp.company}</h4>
              <p style={{ color: "white" }}>{exp.description}</p>
            </div>
            <hr style={{ color: "white" }} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Experience;

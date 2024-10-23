import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './About.css';  // Import custom CSS for the curve

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 className="heading-intro">
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            {/* SVG for the curved underline */}
            <div className="curve-container">
              <svg
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
                className="curved-line"
              >
                <path d="M0,100 C150,0 350,0 500,100" stroke="#f7c619" strokeWidth="5" fill="none" />
              </svg>
            </div>

            <p className="home-about-body">
              Hi, my name is <span className="yellow">Taranpreet Singh Baweja</span>
              and I'm from <span className="yellow"> Chandigarh, Punjab.</span>
              <br />
              <br />
              I recently graduated with a Bachelor's degree in Computer Science and Engineering from <span className="yellow"> Thapar University, Patiala </span> in 2024.
              <br />
              <br />
              As a <b className="yellow"> Frontend </b>developer, I enjoy tackling new challenges and continuously expanding my skillset.
              <br />
              <br />I am proficient in
              <b className="yellow"> Javascript, </b>
              as well as have knowledge in programming languages such as C, C++, Python, SQL, and MongoDB and modern Javascript libraries and
              <b className="yellow"> frameworks like <b className="yellow"> React.js and React Native</b></b>
              <br />
              <br />
              I am also interested in building new
              <i>
                <b className="yellow"> Web Technologies and Products, </b>
                as well as exploring areas related to
                <b className="yellow"> Full Stack MERN Development</b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="white" glarePosition="all" >
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/taran-preet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/taransingh_baweja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/taranpreet-singh-baweja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Taranpreet_2024/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

import React, { useEffect } from "react";
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
import Experience from "../../pages/Experience";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col 
            md={8} 
            className="home-about-description"
            data-aos="fade-right" 
            data-aos-delay="200"
          >
            <h1 className="heading-intro">
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
           {/* SVG for the curved underline */}
              <div className="curve-container" data-aos="fade-up" data-aos-delay="300">
                <svg
                  viewBox="0 0 500 100"
                  preserveAspectRatio="none"
                  className="curved-line"
                  style={{ width: "100%" }}  // Ensure it scales within the container
                >
                  <path d="M0,100 C150,0 350,0 500,100" stroke="#f7c619" strokeWidth="6" fill="none" />
                </svg>
              </div>


            <p className="home-about-body">
                <span data-aos="fade-up" data-aos-delay="400">
                  Hi, my name is <span className="yellow">Taranpreet Singh Baweja </span>
                  and I'm from <span className="yellow"> Chandigarh, Punjab.</span>
                </span>
                <br />
                <br />
                <span data-aos="fade-up" data-aos-delay="500">
                  I recently graduated with a Bachelor's degree in Computer Science and Engineering from 
                  <span className="yellow"> Thapar University, Patiala </span> in 2024.
                </span>
                <br />
                <br />
                <span data-aos="fade-up" data-aos-delay="600">
                  As a <b className="yellow">Frontend</b> developer, I enjoy tackling new challenges and continuously expanding my skillset.
                </span>
                <br />
                <br />
                <span data-aos="fade-up" data-aos-delay="700">
                  I am proficient in <b className="yellow">Javascript</b>, as well as have knowledge in programming languages such as C, C++, Python, SQL, and MongoDB and modern Javascript libraries and
                  <b className="yellow"> frameworks like React.js and React Native</b>
                </span>
                <br />
                <br />
                <span data-aos="fade-up" data-aos-delay="800">
                  I am also interested in building new <b className="yellow">Web Technologies and Products</b>, as well as exploring areas related to 
                  <b className="yellow"> Full Stack MERN Development</b>
                </span>
            </p>

          </Col>
          <Col 
            md={4} 
            className="myAvtar" 
            data-aos="zoom-in" 
            data-aos-delay="500"
          >
            <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="white" glarePosition="all" >
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Experience data-aos="fade-up" data-aos-delay="600" />
        <br /><br />

        <Row>
          <Col 
            md={12} 
            className="home-about-social"
            data-aos="fade-up" 
            data-aos-delay="700"
          >
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="800">
                <a
                  href="https://github.com/taran-preet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="900">
                <a
                  href="https://www.instagram.com/taransingh_baweja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="1000">
                <a
                  href="https://www.linkedin.com/in/taranpreet-singh-baweja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" data-aos="zoom-in" data-aos-delay="1100">
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

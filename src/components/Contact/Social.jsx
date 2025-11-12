import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Social.css';

const Social = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container style={{ padding: '30px' }}>
      <Row>
        <Col md={12} className="contact-social" data-aos="fade-up">
          <div className='contact-text' data-aos="fade-down">
            <h1>FIND ME ON</h1>
            <p className='contact-h1-text'>
              Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons" data-aos="zoom-in" data-aos-delay="100">
              <a
                href="https://github.com/taran-preet/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="contact-icons" data-aos="zoom-in" data-aos-delay="200">
              <a
                href="https://www.instagram.com/taransingh_baweja/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="contact-icons" data-aos="zoom-in" data-aos-delay="300">
              <a
                href="https://www.linkedin.com/in/taranpreet-singh-baweja/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons" data-aos="zoom-in" data-aos-delay="400">
              <a
                href="https://leetcode.com/u/Taranpreet_2024/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <SiLeetcode />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Social;

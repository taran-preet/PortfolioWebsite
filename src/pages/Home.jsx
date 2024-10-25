import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Tilt from "react-parallax-tilt";
import Type from '../components/Home/Type';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section>
     <Container fluid className="home-section" id="home" style={{ paddingTop: 0, marginTop: 0 }}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col 
              md={7} 
              className="home-header"
              data-aos="fade-right" 
              data-aos-delay="200"
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" data-aos="fade-up" data-aos-delay="400">
                I'M
                <strong className="main-name"> Taranpreet Singh</strong>
              </h1>

              <div 
                style={{ padding: 50, paddingTop: 10, textAlign: "left" }}
                data-aos="fade-up" 
                data-aos-delay="600"
              >
                <Type />
              </div>
            </Col>

            <Col 
              md={5} 
              style={{ paddingBottom: 20, overflow: "hidden" }}  // Add overflow hidden on the column
              data-aos="zoom-in" 
              data-aos-delay="500"
            >
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }} // Make image fully responsive
                />
              </Tilt>
            </Col>

          </Row>
        </Container>
      </Container>
      <About data-aos="fade-up" data-aos-delay="800" />
    </section>
  );
}

export default Home;

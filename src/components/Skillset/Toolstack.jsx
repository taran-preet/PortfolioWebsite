import React, { useEffect, useState } from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiAmazonaws
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Helper function for rendering tooltips
const renderTooltip = (text) => (
  <Tooltip id="button-tooltip">
    {text}
  </Tooltip>
);

const Toolstack = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        data-aos={isMobileView ? "fade-right" : "fade-up"} 
        data-aos-delay="100"
      >
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Visual Studio Code - Code Editor")}
        >
          <span><SiVisualstudiocode /></span>
        </OverlayTrigger>
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        data-aos={isMobileView ? "fade-left" : "fade-up"} 
        data-aos-delay="200"
      >
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Postman - API Testing Tool")}
        >
          <span><SiPostman /></span>
        </OverlayTrigger>
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        data-aos={isMobileView ? "fade-right" : "fade-up"} 
        data-aos-delay="300"
      >
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Vercel - Hosting and Serverless Platform")}
        >
          <span><SiVercel /></span>
        </OverlayTrigger>
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        data-aos={isMobileView ? "fade-left" : "fade-up"} 
        data-aos-delay="400"
      >
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Netlify - Web Hosting Service")}
        >
          <span><SiNetlify /></span>
        </OverlayTrigger>
      </Col>
      <Col 
        xs={4} 
        md={2} 
        className="tech-icons" 
        data-aos={isMobileView ? "fade-right" : "fade-up"} 
        data-aos-delay="500"
      >
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("AWS - Amazon Web Service")}
        >
          <span><SiAmazonaws /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
}

export default Toolstack;

import React, { useEffect, useState } from "react";
import { Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiMysql,
  DiCss3,
} from "react-icons/di";
import {
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiReact // React Native icon (same as React)
} from "react-icons/si";

// Helper function for rendering tooltips
const renderTooltip = (text) => (
  <Tooltip id="button-tooltip">
    {text}
  </Tooltip>
);

//logic for different animation on laptop and mobile
const Techstack = () => {
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
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-right" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("HTML5 - HyperText Markup Language")}
        >
          <span><SiHtml5 /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-left" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("CSS3 - Cascading Style Sheets")}
        >
          <span><DiCss3 /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-right" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("JavaScript - Programming Language")}
        >
          <span><DiJavascript1 /></span>
        </OverlayTrigger>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-left" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("React - JavaScript Library")}
        >
          <span><DiReact /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-right" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Redux - State Management Library")}
        >
          <span><SiRedux /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-left" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("React Native - Mobile App Framework")}
        >
          <span><SiReact /></span>
        </OverlayTrigger>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-right" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("MongoDB - NoSQL Database")}
        >
          <span><SiMongodb /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-left" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("MySQL - Database")}
        >
          <span><DiMysql /></span>
        </OverlayTrigger>
      </Col>
    
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-right" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Material UI - React UI Framework")}
        >
          <span><SiMaterialui /></span>
        </OverlayTrigger>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" data-aos={isMobileView ? "fade-left" : "fade-up"}>
        <OverlayTrigger
          placement="top"
          overlay={renderTooltip("Git - Version Control System")}
        >
          <span><DiGit /></span>
        </OverlayTrigger>
      </Col>
    </Row>
  );
};

export default Techstack;

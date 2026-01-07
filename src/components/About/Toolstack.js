import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiJira, SiLinux, SiJest, SiCypress } from "react-icons/si";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={intelliJ} alt="intellij" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira fontSize={"24px"} />
        <div className="tech-icons-text">Jira</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest fontSize={"24px"} />
        <div className="tech-icons-text">Jest</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress fontSize={"24px"} />
        <div className="tech-icons-text">Cypress</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

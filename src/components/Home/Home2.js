import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <span className="purple">Senior Software Developer</span> with <span className="purple">5+ years</span> of experience building scalable systems that serve thousands of users. I've led development teams, architected <span className="purple">microservices</span>, and delivered solutions for major clients including{" "}
              <b className="purple">European government institutions</b> and{" "}
              <b className="purple">international airlines</b>.
              <br />
              <br />
              Recently, I built a custom{" "}
              <i>
                <b className="purple">RAG-based AI chatbot</b>
              </i>{" "}
              serving <b className="purple">10K+ daily users</b>, and developed a{" "}
              <i>
                <b className="purple">real-time aviation operations platform</b>
              </i>{" "}
              integrating with major European airports like Stuttgart, Frankfurt, and Vienna, alongside airlines including Lufthansa Cargo and Ryanair.
              <br />
              <br />
              My technical expertise spans{" "}
              <i>
                <b className="purple">
                  Python, FastAPI, TypeScript, React, Node.js, and Next.js
                </b>
              </i>
              {" "}with specialized knowledge in{" "}
              <b className="purple">AI/RAG systems</b>,{" "}
              <b className="purple">WebRTC</b>, and{" "}
              <b className="purple">event-driven architectures</b>.
              <br />
              <br />
              I'm passionate about building{" "}
              <b className="purple">high-impact solutions</b> that combine{" "}
              <i>
                <b className="purple">cutting-edge AI</b>,{" "}
                <b className="purple">real-time systems</b>, and{" "}
                <b className="purple">scalable cloud infrastructure</b>
              </i>
              {" "}to solve complex problems and deliver exceptional user experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

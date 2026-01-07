import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Omair Hassan</span>{" "}
            from <span className="purple">Islamabad, Pakistan</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Senior Software Developer</span> at{" "}
            <span className="purple">RIT Services GmbH</span> (Remote, Germany), where I lead development teams and architect scalable systems for European clients.
            <br />I graduated with a degree in{" "}
            <span className="purple">Electrical Engineering (Computer Systems)</span> from{" "}
            <span className="purple">FAST NUCES</span>, Islamabad (2017-2021).
            <br />
            <br />
            Over the past 5+ years, I've had the privilege of working on impactful projects — from building an{" "}
            <span className="purple">AI chatbot serving 10K+ daily users</span> to developing{" "}
            <span className="purple">real-time systems</span> for the{" "}
            <span className="purple">Lower Saxony Parliament</span> and creating{" "}
            <span className="purple">aviation logistics platforms</span> used by major European airports and airlines like{" "}
            <span className="purple">Lufthansa Cargo</span> and{" "}
            <span className="purple">Ryanair</span>. I specialize in{" "}
            <span className="purple">RAG/AI systems</span>,{" "}
            <span className="purple">microservices architecture</span>, and{" "}
            <span className="purple">real-time communications</span> using technologies like Python, FastAPI, Node.js, React, and TypeScript.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              * Architecting Intelligent Systems with RAG & LLMs 
            </li>
            <li className="about-activity">
              * Leading & Mentoring Development Teams 
            </li>
            <li className="about-activity">
              * Exploring Cutting-Edge Tech (WebRTC, Event-Driven Architecture) 
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Omair Hassan</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

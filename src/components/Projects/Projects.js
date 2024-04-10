import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import isutra1 from "../../Assets/Projects/isutra/isutra1.png"
import isutra2 from "../../Assets/Projects/isutra/isutra2.png"
import isutra3 from "../../Assets/Projects/isutra/isutra3.png"
import isutra4 from "../../Assets/Projects/isutra/isutra4.png"
import map1 from "../../Assets/Projects/MAAP/map1.png"
import map2 from "../../Assets/Projects/MAAP/map2.png"
import map3 from "../../Assets/Projects/MAAP/map3.png"
import map4 from "../../Assets/Projects/MAAP/map4.png"
import map5 from "../../Assets/Projects/MAAP/map5.png"
import map6 from "../../Assets/Projects/MAAP/map6.png"
import map7 from "../../Assets/Projects/MAAP/map7.png"
import map8 from "../../Assets/Projects/MAAP/map8.png"
import mumbal from "../../Assets/Projects/Mumbal/mumbal.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[isutra1, isutra2,isutra3,isutra4]}
              isBlog={false}
              title="isutra.online || Online Yoga class"
              description="Create a platform for all users to access fitness-related videos aimed at promoting overall health and wellness."
              demoLink="https://isutra.online/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[map1,map2,map3,map4,map5,map6,map7,map8]}
              isBlog={false}
              title="MAAP APP || Online E-Auction"
              description="User can add your item for auction and also bid other auction item and show details of auction item."
              demoLink="https://www.crenshawauctionllc.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPaths={[mumbal]}
              isBlog={false}
              title="Mumbal Chat App || Live chat app"
              description="Mumbal chat app is live chating app and make also group , broadcast and many other features."
              demoLink="https://mumbalchat.online/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


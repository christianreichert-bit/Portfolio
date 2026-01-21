
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Fincrate"
              description="A comprehensive financial management portfolio for cypto stocks, bonds etc. with a built in AI for assistance on the market. Currently undeployed but features are apparent."
              ghLink="https://github.com/christianreichert-bit/Fincrate"
              demoLink="https://fincrate.vercel.app/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Memory Allocator Benchmarker"
              description="Developed_custom_memory allocators (Buddy & Slab) in C with_comprehensive benchmarking_suite_Built interactive_web_visualization with real-time memory block display_and_performance
              metrics_Implemented_dual execution modes: native C benchmarking (2.5M+ ops/sec) and WebAssembly browser execution
              Created educational interface showing algorithm behavior, fragmentation, and allocation patterns
"              ghLink="https://github.com/christianreichert-bit/Memory-Allocator"
              demoLink="https://vercel.com/christianreichert-bits-projects/memory-allocator"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiJava,
  DiPostgresql,
  DiJira,
  DiHtml5,
  DiReact,
} from "react-icons/di";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact/>
      </Col>
    </Row>
  );
}

export default Techstack;

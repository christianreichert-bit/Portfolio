
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiSupabase,
  SiUbuntu,
  SiOracle,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSupabase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;

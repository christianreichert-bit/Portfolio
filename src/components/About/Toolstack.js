
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiSupabase,
  SiUbuntu,
  SiOracle,
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
        <SiGitbash/>
      </Col>
    </Row>
  );
}

export default Toolstack;

import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              <br />
              <br />I am Proficient in classics like
              <i>
                <b className="purple"> C, Java, python and HTML. </b>
              </i>
              <br />
              <br />
              My field of Interest's are in &nbsp;
              <i>
                <b className="purple">FrontEnd Web Programming, and Backend Database development using sql, But I am someone who can learn & do anything. </b>
              </i>
              <br />
              <br />
              Whenever possible, I also am always trying to expand my skillset, 
              whether it be leanring new softwares, languages, or improving my current knowledgeset.
              A funfact about me is that I've been playing Ping Pong for 10 years! 
              <i>
                
              </i>
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://christianreichert-bit.github.io/Portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/christian-reichert-05095434b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christian Reichert</span>
             from <span className="purple"> Lehigh University</span>
            <br />
            I Am a Junior at Lehigh University, Studying Computer Science & Engineering pursuing a bacheolors currently.
            Located at Bethlehem, PA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <footer className="blockquote-footer">cjr327</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

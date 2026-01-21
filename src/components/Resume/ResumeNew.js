import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdfPath = "https://christianreichert-bit.github.io/Portfolio/Resume.pdf"; // Path to PDF in public folder

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath} 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdfPath} className="d-flex justify-content-center"> // Use the path
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdfPath} 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
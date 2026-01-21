import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  
  // Use a direct link to your PDF - make sure it exists!
  const pdfPath = "https://raw.githubusercontent.com/christianreichert-bit/Portfolio/main/public/Resume.pdf";
  
  // Alternative: If you have the PDF in your public folder, use:
  // const pdfPath = "/Resume.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
    
    // Optional: Check if window is available (for SSR)
    const updateWidth = () => {
      if (typeof window !== 'undefined') {
        setWidth(window.innerWidth);
      }
    };
    
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button
            variant="primary"
            href={pdfPath} 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <i className="fas fa-download">&nbsp;</i> Download Resume
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Document 
              file={pdfPath} 
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => console.error("Error loading PDF:", error)}
            >
              <Page 
                pageNumber={pageNumber} 
                scale={width > 786 ? 1.7 : 0.6} 
                renderTextLayer={true}
                renderAnnotationLayer={true}
              />
            </Document>
          </div>
          
          {numPages && numPages > 1 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p>
                Page {pageNumber} of {numPages}
              </p>
              <Button
                variant="primary"
                onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="me-2"
              >
                Previous
              </Button>
              <Button
                variant="primary"
                onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages))}
                disabled={pageNumber >= numPages}
              >
                Next
              </Button>
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button
            variant="primary"
            href={pdfPath} 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <i className="fas fa-download">&nbsp;</i> Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
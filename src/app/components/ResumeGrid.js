import React, { useEffect } from 'react';
import PDFObject from 'pdfobject';

export default function ResumeGrid() {
  useEffect(() => {
    PDFObject.embed("/resume-div.pdf", "#pdf-viewer");
  }, []);

  return (
    <div>
      <h1>My Resume</h1>
      <div id="pdf-viewer" style={{ height: "1000px", width: "1400px" }}></div>
    </div>
  );
}

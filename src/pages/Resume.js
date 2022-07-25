import React from 'react';
import ResumePDF from '../pictures/Victoria_Rice_2022_Resume.pdf'
import Button from 'react-bootstrap/Button'
import '../styles/port.css';
import ResumeImg from '../pictures/Resume_Img.png'

function Resume() {

  return(
    <div className="projects">
      <h1 className="port-header">Resume</h1>
      <div className="col-md-12 text-center">
        <img className="resume-img" alt="Click to download resume"  src={ResumeImg} />
        <a href={ResumePDF} className="resume-btn" target="_blank">
                    <Button variant="outline-info">Download Resume</Button>{' '}
        </a>
      </div>
    </div>
  );
}
export default Resume;

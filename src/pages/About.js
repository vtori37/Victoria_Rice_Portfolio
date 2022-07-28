import React, {useRef} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilePic from "../pictures/profilePic.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "../styles/about.css";
import '../styles/contact.css';
import LI from '../pictures/blk-ln.png';
import GH from '../pictures/GitHub-Mark-120px-plus.png';
import DL from '../pictures/download.png'
import emailjs from '@emailjs/browser';
import ResumePDF from '../pictures/Victoria_Rice_Resume_2022.pdf'
// require('dotenv').config()


function About() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Thank you! Your message had been sent.');
    emailjs.sendForm('service_inzjoqy', 'template_cmzporr', form.current, 'Ib_5Oi3AGZiGC2Q06')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset()
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   alert('Thank you! Your message had been sent.');
  //   emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     form.current.reset()
  // };

  return (

    <section className="content-body">
     <Row className="about-row">
      <Col sm={12} md={6}>
        <div className="img-box">
          <h2 class="about">Hello! My name is Victoria Rice.</h2>
          <img className="profile-img"  alt="Victoria is smiling." src={profilePic} />
        </div>
      </Col>

      <Col className="about-me">
        <Card border="light" style={{ width: "auto" }}>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text className="card-text">
            <p>
            I have a desire to learn more about technical design as well as web development. This includes my enrollment in UT-Austin’s Coding Boot Camp, where I am in training to become a full-stack web developer. Currently, I am deepening my understanding of newly acquired skills in HTML, JavaScript, CSS, Node.js, and MySQL. I plan to further broaden my knowledge of web development by learning TypeScript, Java, Python, and C#. In addition, I practice photography and my photo editing skills in Adobe Lightroom and Photoshop in my spare time. 
            </p>
            <br></br>
            <p>
            I am a quick learner and creative problem-solver, who is highly organized and takes initiative.  I value the importance of interpersonal skills and am a strong communicator. Using these skills, I serve as a product manager at an e-commerce startup. My experience in this position has inspired me to pursue opportunities where I may leverage my degree in Business Administration in International Business to bridge communication between web development and product management. 
            </p>
            <br></br>
            <p>
            I am actively learning and look forward to new career opportunities, so please feel free to contact me if you would like to connect!
            </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
     </Row>


  
  <div className="projects projects-contact">
  <Row>
    <Col className="icon-card" sm={12} md={6}>
      <h2 className='contact-header'>Let's Connect!</h2>   
      <section id="contact-me" class="contact"> 
        <Card className="card-size" >
          <ListGroup variant="flush">
            <ListGroup.Item>
              <span  className="icon-gap">
                <a href="https://www.linkedin.com/in/victoria-rice-360/" target="_blank">
                  <img className="icons .icons-img-padding" alt="LinkedIn link" src={LI} />
                  linkedin.com/in/victoria-rice-360/ 
                </a>
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span  className="icon-gap">
                <a href="https://github.com/vtori37" target="_blank">
                  <img className="icons .icons-img-padding" alt="GitHub link" src={GH} />
                github.com/vtori37
                </a>
              </span>
            </ListGroup.Item>
            <ListGroup.Item>
              <span  className="icon-gap">
                <a>
                  <img className="icons .icons-img-padding" alt="Resume" src={DL} />
                  <a href={ResumePDF}>Resume</a>
                </a>
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </section>
      </Col>

      <Col className="container-col">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h4 > Feel free to contact me!</h4>
          <ul>
            <li>
              {/* <label>Name:</label> */}
              <input placeholder="Your name..." type="text" name="user_name" />
            </li>
            <li>
              {/* <label>Email:</label> */}
              <input placeholder="Your email..." type="email" name="user_email" />
            </li>
            <li>
              {/* <label>Message:</label> */}
              <textarea placeholder="Please write your message here..." name="message" />
            </li>
            <li>
              <input type="submit" value="Send" className='submit-btn'/>
            </li>
          </ul>
         </form>
      </Col>
    </Row>
    </div>
  </section>
  )
}

export default About;

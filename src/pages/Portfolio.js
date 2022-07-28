import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../styles/port.css';
import filmsHome from '../pictures/filmsHome.png';
import budgetTracker from '../pictures/budgetTracker.png';
import crowder from '../pictures/crowder.png';
import ecommerce from '../pictures/ecommerce.png';
import noteTaker from  '../pictures/noteTaker.png';
import workday from'../pictures/workday.png';
import maecenas from'../pictures/Maecenas.png';
import social from '../pictures/social.png';

function Portfolio() {
  return (
    <div className="projects">
      
        <h1 className="port-header">Portfolio</h1>
      <Row xs={1} lg={1}className="">
          <Col className="card-deck">
          <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={social}/>
              <Card.Body>
                <Card.Title>Social Network Application</Card.Title>
                <Card.Text>
               This application serves as a database for a social networking applicaiton. It utilizes MongoDB, Mongoose, and Express.js.
                </Card.Text>
                <a href="https://github.com/vtori37/Social_Net" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={maecenas}/>
              <Card.Body>
                <Card.Title>Maecenas Devs</Card.Title>
                <Card.Text>
                Maecenas Devs is an online platform for alumni of web development programs and industry professionals. Industry professionals can provide mentorship to aspiring developers. Creators (alumni developers) can offer up to three tiers of services, and subscribers (aspiring developers) can choose to subscribe to creators depending on the creator's stack speciality.
                </Card.Text>
                <a href="https://github.com/vtori37/Maecenas-Devs" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={filmsHome} />
              <Card.Body>
                <Card.Title>Feels Like Films</Card.Title>
                <Card.Text>
                Feels Like Films is a web applicaiton that allows users to get movie recommendations based on the current weather of a city. The genre of the recommendations correlates to the type of weather. Users can also choose to save the films they want onto a wish list.
                </Card.Text>
                <a href="https://github.com/vtori37/Group-Project-1" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={workday}/>
              <Card.Body>
                <Card.Title>Word Day Scheduler</Card.Title>
                <Card.Text>
                The Work Day Scheduler allows users to input and track tasks that they would like to get done during the work day. This application logs the user's information so that if they were to exit out of the page, the event still remains in their respective timeblocks. The user can view the time as well as the current date.
                </Card.Text>
                <a href="https://www.google.com/" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={noteTaker}/>
              <Card.Body>
                <Card.Title>Note Taker</Card.Title>
                <Card.Text>
                The purpose of this application is to create, add, save, and delete notes. This application uses Node.js, Javascript, and Express.
                </Card.Text>
                <a href="https://github.com/vtori37/note-taker" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={budgetTracker}/>
              <Card.Body>
                <Card.Title>Budget Tracker</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <a href="https://github.com/vtori37/Budget-Tracker" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={ecommerce}/>
              <Card.Body>
                <Card.Title>E-Commerce Back-end Project</Card.Title>
                <Card.Text>
                This application serves as a database for an e-commerce website. It uses MySQL to create and seed the database, sequelize to create assoications, and Express.js API to allow Sequelize to communicate with the MySQL database. 
                </Card.Text>
                <a href="https://github.com/vtori37/e-commerce_backend" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
            <Card className="card" style={{ width: '25rem' }}>
              <Card.Img variant="top" src={crowder}/>
              <Card.Body>
                <Card.Title>Crowder</Card.Title>
                <Card.Text>
                Inspired by Eventbrite and Facebook, Crowder allows users to connect to forums populated with other users who are attending the same event.
                </Card.Text>
                <a href="https://github.com/vtori37/Crowder" target="_blank">
                  <Button variant="outline-info">Project GitHub Repository</Button>{' '}
                  </a>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
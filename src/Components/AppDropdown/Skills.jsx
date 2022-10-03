import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";
import "./appdropdown.scss";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ border: 'none' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}



function Skills() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Mobile Development</h6>
            <div className='d-flex'>
              <p>React Native</p>
              <CustomToggle eventKey="0"><IoIosArrowDown eventKey="0" /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul>
              <li>React Native</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Web Development</h6>
            <div className='d-flex'>
              <p>React
              </p>
              <CustomToggle eventKey="1"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>

            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Redux,Redux-Saga,Redux-Thunk</li>
              <li>VueJS</li>
              <li>Nuxt</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Backend</h6>
            <div className='d-flex'>
              <p>Node JS</p>
              <CustomToggle eventKey="2"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <ul>
              <li>Javascript</li>
              <li>NodeJS</li>
              <li>Express JS</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Database</h6>
            <div className='d-flex'>
              <p>Mongo DB</p>
              <CustomToggle eventKey="3"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <ul>
              <li>Mongo DB</li>
              <li>Firebase</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Cloud</h6>
            <div className='d-flex'>
              <p>AWS</p>
              <CustomToggle eventKey="4"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            <ul>
              <li>AWS</li>
              <li>Heroku</li>
              <li>Netlify</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>


      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Version Control</h6>
            <div className='d-flex'>
              <p>Git</p>
              <CustomToggle eventKey="5"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="5">
          <Card.Body>
            <ul>
              <li>Git</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Skills;
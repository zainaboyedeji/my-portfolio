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



function Experience() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Moove — Software Engineer</h6>
            <div className='d-flex'>
              <p>JUNE 2021 - PRESENT</p>
              <CustomToggle eventKey="0"><IoIosArrowDown eventKey="0" /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <p>MOOVE is a mobility fintech company that provides revenue-based vehicle financing to mobility entrepreneurs across Africa.We are Uber’s exclusive vehicle financing and vehicle supply partner in Sub-Saharan Africa.
            </p>
            <ul>
              <li>Working alongside 3 developers on a major app in the company using Vuejs,Sass,Js,Tachyons.</li>
              <li>Improved development workflow by more than 60% by setting up reusable code. </li>
              <li>Worked on other software projects simultaneously and participated in the whole software development process from design to implementation and delivery.</li>
              <li>Communicating complex technical problems in an understandable manner to the team and clients.</li>
              <li>Also participated in interviewing candidates for open positions.
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Riby Finance — Frontend Engineer</h6>
            <div className='d-flex'>
              <p>JANUARY 2020 - JUNE 2021
              </p>
              <CustomToggle eventKey="1"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>

            <p>RIBY is a financial technology company that o ers businesses, cooperatives, and their members easy-to-use financial management solutions.</p>
            <ul>
              <li>Led the development of Riby-Go dashboard used for single sign-on authentication, wallet management and banking credentials management. I wrote 90% of the code using React,Redux,Sass,Bootstrap .</li>
              <li>Collaborated on Riby-Cobanking app with senior engineer.</li>
              <li>  Single Handedly developed Discovery App Used for selling and buying.</li>

              <li> Developed libraries, tools and utilities used across some Riby
                products by the team, to reduce the amount of time spent on development.</li>
            </ul>

          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <div className='d-flex headerTab justify-content-between'>
            <h6>Dev Career — Frontend Engineer</h6>
            <div className='d-flex'>
              <p>AUGUST 2019 - NOVEMBER 2019</p>
              <CustomToggle eventKey="2"><IoIosArrowDown /></CustomToggle>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <p>Dev Career is a Non-Profit Organization that’s focused on supporting upcoming developers with resources to excel into a World Class Developer.
            </p>
            <ul>
              <li>Collaborated with the entire team to build a food delivery app using React and Redux,Git and Github,Node and Pivotal Tracker.</li>
              <li>Lead a team of 4 developers to build a traveling and hotel booking website using Git and Github,HTML5,CSS3,SASS and Javascript.</li>
              <li>Participated as an active developer and code reviewer to ensure high quality of deliverables.</li>
              <li>Collaborated with peers on improving software performance, installation and maintenance of multiple servers software.</li>
              <li>Took charge of a team of up to 2 developers and conducted interviews for open positions.</li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Experience;
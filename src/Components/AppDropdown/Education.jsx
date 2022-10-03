import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { IoIosArrowDown } from "react-icons/io";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Education() {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <div className='d-flex'>
            <h3>Moove Africa — Frontend Engineer</h3>
            <div className='d-flex'>
              <p>JUNE 2021 - PRESENT</p>
              <CustomToggle eventKey="0"><IoIosArrowDown /></CustomToggle>
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
    </Accordion>
  );
}

export default Education;
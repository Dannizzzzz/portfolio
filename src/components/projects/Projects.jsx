import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import './Projects.css';
import sep from '../../assets/img/sep-image.png';
import parson from '../../assets/img/parson-image.png';

const Projects = (props) => {
  return (
    <section className="project" id="projects">
      <Container>
        <div className="projects-box">
          <h2>Projects</h2>
          <Row xs={1} md={2} className="first-row">
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={sep} />
                  <div className="cover">
                    <Button href='https://script.google.com/a/student.adelaide.edu.au/macros/s/AKfycbzqCi00EUX9rprj8Gpuz9iigGe2cqoV1XenQBHK0KTz/dev'>Link</Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Maptek Staff Management Utility</Card.Title>
                  <Card.Text>
                    This program is developed in response to the personnel management requirements of Maptek by improving
                    work efficiency through a more intuitive display of employee relationships
                    and a more convenient search, so as to meet the needs of customers in employee management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={parson} />
                  <div className="cover">
                    <Button href='https://github.cs.adelaide.edu.au/MCI-Projects-2021/Team-13'>Link</Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Analysing Parson's Puzzle responses for feedback</Card.Title>
                  <Card.Text>
                    Parson Puzzles is a learning activity through which students drag and drop code lines to form programs.
                    Feedback is provided by the activity after students have submitted their answers.
                    The project integrated a feedback function into an existing H5P-based parson puzzles program.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default Projects;
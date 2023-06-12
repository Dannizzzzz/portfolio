import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import './Projects.css';
import sep from '../../assets/img/sep-image.png';
import parson from '../../assets/img/parson-image.png';
import transport from '../../assets/img/transport-image.png';
import amazon from '../../assets/img/amazon-image.png';
import backroad from '../../assets/img/backroad-image.png';
import birthday from '../../assets/img/birthday-image.png';
import tour from '../../assets/img/tour-image.png';
import menu from '../../assets/img/menu-image.png';

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
                    <Button href="https://script.google.com/a/student.adelaide.edu.au/macros/s/AKfycbzqCi00EUX9rprj8Gpuz9iigGe2cqoV1XenQBHK0KTz/dev">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Maptek Staff Management Utility</Card.Title>
                  <Card.Text>
                    This program is developed in response to the personnel
                    management requirements of Maptek by improving work
                    efficiency through a more intuitive display of employee
                    relationships and a more convenient search, so as to meet
                    the needs of customers in employee management.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={parson} />
                  <div className="cover">
                    <Button href="https://github.cs.adelaide.edu.au/MCI-Projects-2021/Team-13">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>
                    Analysing Parson's Puzzle responses for feedback
                  </Card.Title>
                  <Card.Text>
                    Parson Puzzles is a learning activity through which students
                    drag and drop code lines to form programs. Feedback is
                    provided by the activity after students have submitted their
                    answers. The project integrated a feedback function into an
                    existing H5P-based parson puzzles program.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={transport} />
                  <div className="cover">
                    <Button href="https://danni-transport.netlify.app">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Mock Transport Company Intranet</Card.Title>
                  <Card.Text>
                    Mock Transport Company Intranet is a secure and centralized
                    platform designed to enhance communication, collaboration,
                    and information sharing among employees of the Mock
                    Transport Company. It serves as a one-stop hub for accessing
                    various resources and tools necessary to streamline our
                    daily operations and improve overall efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={amazon} />
                  <div className="cover">
                    <Button href="https://01-amazon-best-sellers-mock.netlify.app/">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Mock Amazon Best Sellers Page</Card.Title>
                  <Card.Text>
                    Discover the hottest and most popular books currently
                    trending on our virtual shelves. We believe in the power of
                    books to inspire, educate, and entertain. Our Best Books
                    Page is a curated collection of top-rated and highly
                    recommended books across various genres, offering you a
                    gateway to explore and discover exceptional reads.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={backroad} />
                  <div className="cover">
                    <Button href="https://02-backroads-app-mock.netlify.app/">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Mock Backroads App</Card.Title>
                  <Card.Text>
                    The Mock Backroads App is designed to enhance your
                    experience and make your journeys more enjoyable and
                    memorable. Whether you're hiking, cycling, or embarking on a
                    road trip, our app provides you with the tools and
                    information you need to navigate, discover, and make the
                    most of your outdoor activities
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={birthday} />
                  <div className="cover">
                    <Button href="https://danni-birthday-reminder.netlify.app/">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Birthday Reminder App</Card.Title>
                  <Card.Text>
                    Birthday Reminder App is designed to simplify your life and
                    ensure that you never forget to celebrate the special
                    moments in the lives of your loved ones. With our
                    user-friendly interface and powerful features, you can
                    effortlessly manage birthdays and make sure you always send
                    heartfelt wishes to friends and family.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={tour} />
                  <div className="cover">
                    <Button href="https://danni-tour-app.netlify.app/">
                      Link
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Tour App</Card.Title>
                  <Card.Text>
                    The Mock Tour App is designed to enhance your travel
                    adventures by providing comprehensive information,
                    personalized recommendations, and convenient tools all in
                    one place. Whether you're planning a solo trip, a family
                    vacation, or a romantic getaway, our app has everything you
                    need to navigate, discover, and create unforgettable
                    memories.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="top">
                  <Card.Img variant="top" src={menu} />
                  <div className="cover">
                    <Button href="https://danni-menu.netlify.app/">Link</Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>Menu App</Card.Title>
                  <Card.Text>
                    The Mock Menu App revolutionizes the way you experience
                    dining out or ordering in by providing a convenient and
                    user-friendly platform to access menus, discover new
                    culinary delights, and place orders with ease. Discover new
                    flavors, support local restaurants, and indulge in
                    delightful dining experiences with the Mock Menu App. Bon
                    appétit!
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

import './about.css';
import { Container, Row, Col } from "react-bootstrap";
import selfie from "../../assets/img/self-pic.jpg";

const About = (props) => {
  return (
    <section className="about" id="about">
      <Container>
        <div className="about-me">
          <h2>About Me</h2>
          <Row>
            <Col xs={12} md={6} xl={7}>
              <p>A highly motivated IT graduate from the University of Adelaide, with a focus on web development and a strong passion for building and improving websites and web applications.</p>
              <p>A fast learner and always looking for opportunities to expand my knowledge and skills. Particularly interested in web technologies and trends, and enjoy keeping up to date with the latest developments in the field.</p>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={selfie} alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default About;
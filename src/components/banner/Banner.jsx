import './Banner.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';

const Banner = (props) => {
  const scroll = () => {
    // const section = document.querySelector('#contact');
    // section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo(0, 4000);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2 className="welcome">
              Welcome to my Portfolio
              <span className="wave">👋🏻</span>
            </h2>
            <br />
            <h1 className="name">Hi! I'm Danni Zhang</h1>
            <br />
            <h4>Web Developer &nbsp; | &nbsp; Full-Stack Developer</h4>
            <br />
            <button onClick={scroll}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;

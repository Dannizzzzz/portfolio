import './Skills.css';
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import css from "../../assets/img/css.png";
import angular from "../../assets/img/angular.png";
import excel from "../../assets/img/excel.png";
import html from "../../assets/img/html.png";
import java from "../../assets/img/java.png";
import javascript from "../../assets/img/javascript.png";
import git from "../../assets/img/git.png";
import github from "../../assets/img/github.png";
import powerbi from "../../assets/img/powerbi.jpeg";
import python from "../../assets/img/python.jpg";
import react from "../../assets/img/react.png";
import rest from "../../assets/img/rest.png";
import sql from "../../assets/img/sql.png";
import tableau from "../../assets/img/tableau.png";
import typescript from "../../assets/img/typescript.png";
import vue from "../../assets/img/vue.png";
import bootstrap from "../../assets/img/bootstrap.png";
import mongodb from "../../assets/img/mongodb.png";
import nodejs from "../../assets/img/nodejs.png";
import postman from "../../assets/img/postman.png";
import sass from "../../assets/img/sass.png";

const Skills = (props) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Personal Skills</h2>
              <p>Whether it is building custom web solutions or enhancing existing ones, I strive to provide clients with solutions that combine the best of both worlds: innovative technology and user-centric design to deliver superior results.</p>
              <Carousel responsive={responsive} className="skills-slider">
                <div className="item">
                  <div className="img-box">
                    <img src={css} alt="" />
                  </div>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={html} alt="" />
                  </div>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={javascript} alt="" />
                  </div>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={java} alt="" />
                  </div>
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={python} alt="" />
                  </div>
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={typescript} alt="" />
                  </div>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={angular} alt="" />
                  </div>
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={react} alt="" />
                  </div>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={excel} alt="" />
                  </div>
                  <h5>Excel</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={git} alt="" />
                  </div>
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={github} alt="" />
                  </div>
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={vue} alt="" />
                  </div>
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={powerbi} alt="" />
                  </div>
                  <h5>Power BI</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={rest} alt="" />
                  </div>
                  <h5>REST APIs</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={sql} alt="" />
                  </div>
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={tableau} alt="" />
                  </div>
                  <h5>Tableau</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={bootstrap} alt="" />
                  </div>
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={mongodb} alt="" />
                  </div>
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={nodejs} alt="" />
                  </div>
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={postman} alt="" />
                  </div>
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <div className="img-box">
                    <img src={sass} alt="" />
                  </div>
                  <h5>Sass</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
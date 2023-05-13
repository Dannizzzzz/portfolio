import { useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faFacebookF } from "@fortawesome/fontawesome-free-brands";
import './Footer.css';

const Footer = (props) => {
  const [activeLink, setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <footer className="footer">
      <Container>
        <div className="footer-box">
          <Row>
            <Col size={12}>
              <Nav>
                <Nav.Item><Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link></Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col size={12}>
              <div className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/zhang-danni-65b4b1263"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="https://www.facebook.com/Dannizzz96"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="https://github.com/Dannizzzzz"><FontAwesomeIcon icon={faGithub} /></a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <p>&copy; Danni Zhang 2023. &nbsp; All Rights Reserved.</p>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/fontawesome-free-brands';

const NavBar = (props) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const scroll = () => {
    // const section = document.querySelector('#contact');
    // section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.scrollTo(0, 2650);
  };

  return (
    <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
      <Container className="navCon">
        <Navbar.Brand href="/">
          <div className="circle">
            <div className="name">DZ</div>
          </div>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link
              href="#home"
              className={
                activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.facebook.com/Dannizzz96">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.linkedin.com/in/zhang-danni-65b4b1263">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://github.com/Dannizzzzz">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
            <button onClick={scroll}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import logo from '../../Assets/logo.png';
import './Header.scss';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);

    
    const scrollToHome = () => {
        scroll.scrollTo(document.getElementById('home').offsetTop, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    const scrollToAbout = () => {
        scroll.scrollTo(document.getElementById('about').offsetTop, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    const scrollToServices = () => {
        scroll.scrollTo(document.getElementById('services').offsetTop, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    const scrollToPortfolio = () => {
        scroll.scrollTo(document.getElementById('portfolio').offsetTop, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };
    const scrollToContact = () => {
        scroll.scrollTo(document.getElementById('contactus').offsetTop, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
            <Navbar expand="lg">
                <Container>
                    <Link to="/">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link onClick={(e) => { scrollToHome();  }} to="/" className="nav-link">
                                Home
                            </Link>
                            <Link onClick={(e) => { scrollToAbout(); }} to="/" className="nav-link">
                                About
                            </Link>
                            <Link onClick={(e) => { scrollToServices(); }} to="/" className="nav-link">
                                Services
                            </Link>
                            <Link onClick={(e) => { scrollToPortfolio(); }} to="/" className="nav-link">
                                Portfolio
                            </Link>
                            <Link onClick={(e) => { scrollToContact(); }} to="/" className="nav-link">
                                Contact
                            </Link>
                        </Nav>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Button className='contact-btn' type="submit">
                                        <span>Hire Me Now</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
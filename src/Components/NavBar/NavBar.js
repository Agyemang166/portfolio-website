
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import "../NavBar/NavBar.css"

import * as Icon from 'react-bootstrap-icons';
import Logo from "../Images/logo.png"


import { useState, useEffect } from "react";

export const NavBar =() => {
    const [activeLink, setActiveLink] = useState("home");
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100){
                setScroll(true)
            } else{
                setScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    
    }
    return (
        <Navbar expand="lg" className={scroll ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#recommendation" className={activeLink === "recommendation" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('recommendation')}>Recommendations</Nav.Link>
              </Nav>
              <span className="Navbar-text">
                <div className="social-icon">
                    <a href="#"><Icon.Instagram className='icon'/></a>
                    <a href="https://www.tiktok.com/@agyemangdev"> <Icon.Tiktok className='icon'/></a>
                    <a href="#"><Icon.Linkedin className='icon' /></a>
                </div>
                <div>
                <a href="https://linktr.ee/agyemang166"><button>Let's connect <Icon.ArrowRightCircleFill size={28}/></button></a>
                </div>
                
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
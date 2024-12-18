import React, { Component } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link } from "react-scroll";
import "./CustomNavbar.css";

export default class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 0;
      const navbar = document.getElementById("navbar-section");
      if (isTop) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <Navbar id="navbar-section" className="navbar-section">
        <Nav.Item>
          <Nav.Link className="ken-johnson" href="/" eventKey="1">
            Landry S.
          </Nav.Link>
        </Nav.Item>
        <div className={this.state.active ? "nav-links-container" : "nav-links-container-active"}>
          <Link className="nav-links-navbar" onClick={this.toggleClass} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
          <Link className="nav-links-navbar" onClick={this.toggleClass} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
          <Link className="nav-links-navbar" onClick={this.toggleClass} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            Projects
          </Link>
          <Link className="nav-links-navbar" onClick={this.toggleClass} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
          <div className="linkedin-github">
            <a href="https://www.linkedin.com/in/lsome/" target="_blank">
              <Image src="assets/Logos/linkedin.png" className="icons-navbar" />
            </a>
            <a href="https://github.com/landry-some" target="_blank">
              <Image src="assets/Logos/github.png" className="icons-navbar" />
            </a>
          </div>
        </div>
        <div className="burger" onClick={this.toggleClass}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </Navbar>
    );
  }
}

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import "../sass/navbar.scss";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        color="light"
        light
        style={{ background: "transparent" }}
        expand="md"
        className="custom-navbar"
      >
        <NavbarBrand href="/" className="nav-main">
          KVSSK
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
            <a href="/" className="nav-button">Home </a>
            <a  href="#about" className="nav-button">About</a>
            <a href="#skills" className="nav-button">Skills </a>
            <a href="#skills" className="nav-button">Projects</a>
            <a href="#contact" className="nav-button">Contact </a>
            <a href="https://github.com/kvssankar" className="nav-button spl-button">Rate me</a>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

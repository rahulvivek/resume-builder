import React from "react";
import {
    Link,
  } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Resume Builder</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">Resumes</Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;

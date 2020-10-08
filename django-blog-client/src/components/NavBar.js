import React from "react";
import * as RBS from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <RBS.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <RBS.Navbar.Brand href="/">Home</RBS.Navbar.Brand>
        <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <RBS.Navbar.Collapse id="responsive-navbar-nav">
          <RBS.Nav className="mr-auto">
            <RBS.Nav.Link href="/posts">Posts</RBS.Nav.Link>
            <RBS.Nav.Link href="/users">Users</RBS.Nav.Link>
          </RBS.Nav>
          <RBS.Nav>
            <RBS.Nav.Link href="#deets">More deets</RBS.Nav.Link>
            <RBS.Nav.Link eventKey={2} href="#memes">
              Dank memes
            </RBS.Nav.Link>
          </RBS.Nav>
        </RBS.Navbar.Collapse>
      </RBS.Navbar>
    </>
  );
};

export default NavBar;

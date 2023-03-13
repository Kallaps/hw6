import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <Navbar>
        <Container className="links">
          <Link to="/">
            <Navbar.Brand>Home Page</Navbar.Brand>
          </Link>

          <Link to="/about-us">
            <Navbar.Brand> About Us</Navbar.Brand>
          </Link>

          <Link to="/contacts">
            <Navbar.Brand>Contacts</Navbar.Brand>
          </Link>

          <Link to="/card-list">
            <Navbar.Brand>Card List</Navbar.Brand>
          </Link>

          <Link to="/add-card">
            <Navbar.Brand>Add blog</Navbar.Brand>
          </Link>

          <Link to="/favorites">
            <Navbar.Brand>Favorites</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomePage;

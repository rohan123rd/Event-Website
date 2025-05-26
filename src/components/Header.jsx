import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Container,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  Button,
} from "react-bootstrap";
import "./Header.css";
import "../context/HoverUnderline.css";

const Header = () => {
  // const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Navbar expand="lg" className="navbar" fixed="top">
      <Container className="navbar-container">
        <Navbar.Brand as={Link} to="/">
          <img
            style={{ paddingRight: "10px" }}
            src="src/assets/logo.png"
            // width="100px"
            height="50px"
            alt="Logo"
          />
          Souvenirs Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto justify-content-center">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                Home
              </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                Services
              </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                Gallery
              </p>
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/blog" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                Blog
              </p>
            </Nav.Link> */}
            <Nav.Link as={Link} to="/about" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                About
              </p>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              <p
                className="hover-underline-animation center"
                style={{ marginBottom: "0" }}
              >
                Contact
              </p>
            </Nav.Link>
            <Nav.Link
              className="book-button nav-link-custom"
              as={Link}
              to="/bookingform"
            >
              Book Event
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

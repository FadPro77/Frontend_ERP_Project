import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "@tanstack/react-router";

const NavigationBar = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{
            backgroundColor: "#d2db1f",
            height: "5rem",
            borderRadius: "0 0 20px 20px",
          }}
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to="/"
              style={{ cursor: "pointer" }}
              className="fw-bold"
            >
              <img
                src="src/assets/img/LoremIpsum.png"
                width="80"
                height="80"
                className="d-inline-block align-center"
                alt="Logo dummy"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto ">
                <Nav.Link
                  as={Link}
                  to="/"
                  style={{ cursor: "pointer" }}
                  className="fw-bold me-3"
                >
                  Beranda
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="sadadas"
                  style={{ cursor: "pointer" }}
                  className="fw-bold"
                >
                  Riwayat
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="rounded-3 text-center fw-bold fs-5"
                  style={{
                    width: "9rem",
                    borderColor: "#db411f",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    color: "#db411f",
                    backgroundColor: "#ebdfdd",
                  }}
                >
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavigationBar;

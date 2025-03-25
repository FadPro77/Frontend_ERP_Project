import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#d2db1f" }}>
        <Container className="py-1">
          <Row className="d-flex flex-column flex-lg-row mt-3">
            <Col>
              <img
                src="src/assets/img/LoremIpsum.png"
                style={{ width: "10rem", marginLeft: "-5rem" }}
              />
            </Col>
            <Col>
              <p
                className="ms-4"
                style={{
                  width: "30rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                elementum lorem vitae ultricies vehicula. Morbi imperdiet felis
                ut aliquet aliquet. Fusce in tortor rutrum, viverra sem non,
                interdum libero. Morbi faucibus pharetra nibh, vel blandit metus
                eleifend a. Donec turpis metus, consectetur ut gravida et,
                laoreet in mi. Cras pretium sagittis odio, tristique rutrum
                sapien commodo vitae. Cras ultricies nisl metus, sed euismod
                ligula lobortis a.
              </p>
            </Col>

            <Col style={{ marginLeft: "7rem" }}>
              <div>
                <p className="fw-bold fs-5">Tautan Cepat</p>
                <p style={{ marginBottom: "5px", marginTop: "-5px" }}>
                  Beranda
                </p>
                <p style={{ marginBottom: "5px" }}>Katalog</p>
                <p>Resep</p>
              </div>
            </Col>

            <Col>
              <div style={{ width: "15rem", marginLeft: "2rem" }}>
                <p className="fw-bold fs-5">Legal</p>
                <p
                  style={{
                    marginBottom: "5px",
                    marginTop: "-5px",
                  }}
                >
                  Pemberitahuan Cookie
                </p>
                <p style={{ marginBottom: "5px" }}>Pemberitahuan Privasi</p>
                <p style={{ marginBottom: "5px" }}>Peraturan Penggunaan</p>
                <p>Aksesbilitas</p>
              </div>
            </Col>

            <Col>
              <div style={{ width: "10rem" }}>
                <p className="fw-bold fs-5">Follow</p>
                <p style={{ marginBottom: "5px", marginTop: "-5px" }}>
                  Instagram
                </p>
                <p style={{ marginBottom: "5px" }}>Facebook</p>
                <p style={{ marginBottom: "5px" }}>Twitter</p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

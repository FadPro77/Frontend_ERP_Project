import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import Background from "../../assets/img/2272.jpg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Tambahkan logika autentikasi di sini
  };

  return (
    <section
      style={{
        background: `url(${Background}) center/cover no-repeat`,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-end">
          <Col md={6} lg={5}>
            <Card
              style={{
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Body>
                <h3 className="text-center mb-4">Login</h3>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Masukkan email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100"
                    style={{
                      backgroundColor: "#db411f",
                      border: "none",
                      padding: "10px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                  >
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginForm;

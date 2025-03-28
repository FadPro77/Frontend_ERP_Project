import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ikon untuk toggle password
import { FcGoogle } from "react-icons/fc"; // Ikon Google
import Background from "../../assets/img/LOGAN 1 1.png";
import Background2 from "../../assets/img/logan 3.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {/* Bagian Kiri */}
      <div
        style={{
          flex: 1,
          background: `url(${Background}) center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "60rem",
        }}
      ></div>

      {/* Bagian Kanan */}
      <div
        style={{
          flex: 1,
          background: `url(${Background2}) center/cover no-repeat`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: "25rem",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#edeef0",
          }}
        >
          <Card.Body>
            <h3 className="text-center mb-4 fw-bold">Login Akun</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    border: "1px solid black",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>

              <Button
                type="submit"
                className="w-100 mt-3"
                style={{
                  backgroundColor: "#9E1D23",
                  border: "none",
                  padding: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "5px",
                }}
              >
                Login
              </Button>
            </Form>

            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2">atau</span>
              <hr className="flex-grow-1" />
            </div>

            <Button
              variant="light"
              className="w-100 d-flex align-items-center justify-content-center"
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "5px",
              }}
            >
              <FcGoogle className="me-2" size={20} />
              Masuk dengan Google
            </Button>
            <p className="text-center mt-2">
              Belum punya akun? silahkan{" "}
              <Link
                to="/register"
                style={{
                  color: "#0b32e0",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                daftar
              </Link>{" "}
              terlebih dahulu.
            </p>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default LoginForm;

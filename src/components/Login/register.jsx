import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  Modal,
} from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ikon untuk toggle password
import { FcGoogle } from "react-icons/fc"; // Ikon Google
import Background from "../../assets/img/LOGAN 1 1.png";
import Background2 from "../../assets/img/logan 3.png";
import TermsModal from "./TermsModal";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({ username, email, password, agreeTerms });
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
            <h3 className="text-center mb-4 fw-bold">Daftar Akun</h3>
            <Form onSubmit={handleRegister}>
              {/* Nama Pengguna */}
              <Form.Group className="mb-3">
                <Form.Label>Nama Pengguna</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama pengguna"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              {/* Email */}
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

              {/* Password */}
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <div style={{ position: "relative" }}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#888",
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </Form.Group>

              {/* Checkbox Syarat & Ketentuan */}
              <Form.Group className="mb-3 d-flex align-items-center">
                <Form.Check
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={() => setAgreeTerms(!agreeTerms)}
                  required
                  className="mb-5"
                />
                <Form.Label className="ms-2" style={{ fontSize: "14px" }}>
                  Saya berumur 18+ dan menyetujui aturan yang diberikan{" "}
                  <span
                    onClick={() => setShowModal(true)}
                    style={{
                      color: "#0b32e0",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    User Agreements, Privacy Policy, Cookie Policy
                  </span>
                </Form.Label>
              </Form.Group>

              {/* Tombol Daftar */}
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
                Daftar
              </Button>
            </Form>

            {/* Link ke halaman Login */}
            <p className="text-center mt-3">
              Saya sudah punya akun!{" "}
              <Link
                to="/login"
                style={{
                  color: "#0b32e0",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                Masuk
              </Link>
            </p>

            {/* Garis pembatas */}
            <div className="d-flex align-items-center my-3">
              <hr className="flex-grow-1" />
              <span className="mx-2">atau</span>
              <hr className="flex-grow-1" />
            </div>

            {/* Tombol Login dengan Google */}
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
          </Card.Body>
        </Card>
      </div>

      <TermsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleAgree={() => {
          setAgreeTerms(true);
          setShowModal(false);
        }}
      />
    </section>
  );
};

export default RegisterForm;

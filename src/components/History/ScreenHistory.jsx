import {
  Button,
  Container,
  Carousel,
  Row,
  Col,
  ListGroup,
  Card,
  Accordion,
} from "react-bootstrap";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { VscAdd, VscChromeMinimize } from "react-icons/vsc";
import { IoTrashOutline } from "react-icons/io5";
import { Modal } from "react-bootstrap";

const ScreenHistory = () => {
  const [quantity, setQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fungsi untuk menambah jumlah
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  // Fungsi untuk mengurangi jumlah (tidak bisa kurang dari 0)
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <section
        id="hero"
        style={{
          background: "#F1F1F0",
          minHeight: "100vh",
        }}
      >
        <Container className=" d-flex flex-column align-items-center">
          {/* Card berada di bawah */}
          <Card
            style={{
              width: "80rem",
              marginTop: "5rem",
              marginBottom: "15rem",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Body>
              <Row className="align-items-center">
                {/* Gambar Produk */}
                <Col xs="auto">
                  <img
                    src="src/assets/img/sg-11134201-22100-qf7z0zvzuiiv8c 1.png"
                    style={{
                      width: "9rem",
                      height: "9rem",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                    className="ms-3"
                  />
                </Col>

                {/* Detail Produk */}
                <Col className="ms-2">
                  <h5
                    className="fw-bold mb-1 fs-4 mt-3"
                    style={{ width: "25rem" }}
                  >
                    RIWAYAT
                  </h5>
                  <p className="fw-bold fs-5 mt-5">R1W4Y4T</p>
                </Col>

                {/* Wrapper untuk semua elemen yang harus ada di kanan */}
                <Col className="d-flex flex-column align-items-end me-3">
                  {/* Stok (diletakkan di atas) */}
                  <div className="fw-bold fs-5 text-danger mb-2">
                    Stock: 1234
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    {/* Tombol Minus */}
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#d1cccb",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      onClick={handleDecrement}
                    >
                      <VscChromeMinimize size={20} />
                    </div>

                    {/* Input jumlah */}
                    <div
                      className="rounded-3 ms-3 me-3 text-center fw-bold fs-5 d-flex align-items-center justify-content-center mx-2"
                      style={{
                        width: "3rem",
                        height: "2.5rem",
                        borderColor: "#db411f",
                        borderStyle: "solid",
                        borderWidth: "2px",
                        color: "#db411f",
                      }}
                    >
                      {quantity}
                    </div>

                    {/* Tombol Plus */}
                    <div
                      className="rounded-circle text-white d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#db411f",
                        width: "30px",
                        height: "30px",
                        cursor: "pointer",
                      }}
                      onClick={handleIncrement}
                    >
                      <VscAdd size={20} />
                    </div>
                  </div>

                  {/* Wrapper untuk tombol hapus, edit, dan update */}
                  <div className="d-flex gap-2">
                    {/* Tombol Hapus */}
                    <div
                      className="d-flex justify-content-center align-items-center me-1"
                      style={{
                        color: "#db411f",
                        borderWidth: "2px",
                        border: "solid",
                        borderRadius: "10px",
                        width: "2.5rem",
                        height: "2.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <IoTrashOutline size={20} />
                    </div>

                    {/* Tombol Edit Produk */}
                    <Button
                      variant="outline-danger"
                      style={{
                        width: "9rem",
                        height: "2.5rem",
                        borderRadius: "10px",
                        fontWeight: "bold",
                        borderWidth: "2px",
                      }}
                      className="me-1"
                      onClick={handleShowModal}
                    >
                      Edit Produk
                    </Button>

                    {/* Tombol Update Stok */}
                    <Button
                      style={{
                        backgroundColor: "#db411f",
                        width: "9rem",
                        height: "2.5rem",
                        borderRadius: "10px",
                        fontWeight: "bold",
                        border: "none",
                      }}
                    >
                      Update Stok
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Produk</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Kecap Manis - Lombok Gandaria 1 Karton"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kode Barang</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="KLMG1"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Stok</label>
                  <input
                    type="number"
                    className="form-control"
                    defaultValue="1234"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Kecap"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Gambar</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-danger"
                style={{
                  width: "7rem",
                  height: "2.5rem",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  borderWidth: "2px",
                }}
                onClick={handleCloseModal}
                className="me-2"
              >
                Tutup
              </Button>
              <Button
                style={{
                  backgroundColor: "#db411f",
                  width: "7rem",
                  height: "2.5rem",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  border: "none",
                }}
              >
                Simpan
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </section>
    </>
  );
};

export default ScreenHistory;

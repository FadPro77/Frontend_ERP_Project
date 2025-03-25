import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./TermsModal.css";

const TermsModal = ({ show, handleClose, handleAgree }) => {
  return (
    <Modal
      dialogClassName="terms-modal"
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Syarat & Ketentuan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-content-scroll">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            elementum lorem vitae ultricies vehicula. Morbi imperdiet felis ut
            aliquet aliquet. Fusce in tortor rutrum, viverra sem non, interdum
            libero. Morbi faucibus pharetra nibh, vel blandit metus eleifend a.
            Donec turpis metus, consectetur ut gravida et, laoreet in mi. Cras
            pretium sagittis odio, tristique rutrum sapien commodo vitae. Cras
            ultricies nisl metus, sed euismod ligula lobortis a. Quisque blandit
            arcu sollicitudin egestas malesuada. Praesent efficitur interdum
            massa rhoncus condimentum. Cras faucibus tortor eget sodales
            venenatis. Aliquam vitae pharetra dui.
          </p>
          <p>
            Quisque sit amet sapien auctor, pulvinar lectus ut, finibus metus.
            Nullam lobortis venenatis dignissim. Sed vel dapibus nulla, quis
            tristique massa. Vestibulum quam lectus, venenatis eu lacus nec,
            tincidunt sodales eros. Mauris tincidunt magna congue pharetra
            tempus. Nunc ullamcorper enim id sapien scelerisque dictum. Sed
            bibendum sem et magna bibendum commodo.
          </p>
          <p>
            Fusce nunc purus, convallis quis nulla et, lacinia aliquet eros. In
            pretium augue et massa tincidunt varius. Nulla in efficitur felis.
            Pellentesque vestibulum purus vitae efficitur molestie. Nunc maximus
            tristique pharetra. Proin auctor et leo non interdum. Praesent in
            semper odio, non aliquet est. Maecenas lacinia mattis luctus. In ut
            purus mattis, aliquam libero non, pharetra ipsum. Curabitur
            sollicitudin ultrices magna at varius. Vivamus in viverra urna.
            Donec pellentesque ex tellus, sit amet dictum lacus bibendum a.
          </p>
          <p>
            Vestibulum dui libero, viverra pulvinar consequat at, venenatis non
            urna. Morbi sed dolor sit amet quam vehicula sodales nec non enim.
            Nunc vestibulum neque magna, et viverra augue ornare ac. Morbi sit
            amet vestibulum erat. Curabitur at vestibulum arcu. Morbi vitae ante
            quis sapien lobortis rutrum non vitae elit. Phasellus sed sem vel
            risus bibendum facilisis. Etiam quis tincidunt felis. Vestibulum et
            sapien accumsan, condimentum odio vitae, imperdiet diam. Sed
            gravida, sapien at dictum bibendum, tellus magna pretium urna, eu
            consequat odio diam sed dolor. Ut nisi odio, scelerisque nec leo at,
            congue euismod elit. Proin sodales vehicula eleifend. Ut gravida
            tellus ac augue semper vehicula.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleAgree}>
          Setuju
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TermsModal;

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./problem-2.css";

const Problem2 = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const handleCloseA = () => setShowA(false);
  const handleCloseB = () => setShowB(false);

  const handleShowA = () => setShowA(true);
  const handleShowB = () => setShowB(true);

  //modal A

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal B
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  //switchA
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  //switchB
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  /*contact show */
  const [contact, setContact] = useState({});

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Button variant="primary" onClick={handleShowA}>
            All Contact
          </Button>
          <Modal show={showA} onHide={handleCloseA}>
            <Modal.Header closeButton className="pointer">
              <Modal.Title onClick={handleCloseA}>
                <Button variant="primary" onClick={handleShow}>
                  Modal A
                </Button>
              </Modal.Title>
            </Modal.Header>
          </Modal>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Button variant="secondary" onClick={handleShow2}>
                All Contacts
              </Button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton className="pointer">
                  <Modal.Title onClick={handleClose2}>
                    {" "}
                    <Link to={"/modalA"}>
                      <Button variant="primary" onClick={handleShow2}>
                        Modal A
                      </Button>
                    </Link>
                  </Modal.Title>
                </Modal.Header>
              </Modal>

              <Button variant="primary" onClick={handleShow3}>
                US Contacts
              </Button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton className="pointer">
                  <Modal.Title onClick={handleClose3}>
                    {" "}
                    <Link to={"/modalB"}>
                      <Button variant="primary" onClick={handleShow3}>
                        Modal B
                      </Button>
                    </Link>
                  </Modal.Title>
                </Modal.Header>
              </Modal>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Body>
          </Modal>

          <button
            onClick={handleShowB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <Modal show={showB} onHide={handleCloseB}>
            <Modal.Header closeButton className="pointer">
              <Modal.Title onClick={handleCloseB}>
                {" "}
                <Button variant="primary" onClick={handleShow1}>
                  Modal B
                </Button>
              </Modal.Title>
            </Modal.Header>
          </Modal>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Body>
              <Modal.Body>
                <Button variant="secondary" onClick={handleClose1}>
                  All Contacts
                </Button>
                <Button variant="primary" onClick={handleClose1}>
                  US Contacts
                </Button>
                <Button variant="primary" onClick={handleClose1}>
                  Close
                </Button>
              </Modal.Body>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Problem2;

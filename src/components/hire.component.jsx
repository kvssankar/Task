import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap";
import "../sass/part1.scss";
import "../sass/flex.scss";

const Hire = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{
          color: "black",
          background: "white",
          border: "1px solid black",
        }}
        className="common-button"
        onClick={toggle}
      >
        HIRE ME &#10548;
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>I will contact you soon...</ModalHeader>
        <ModalBody>
          <Input placeholder="Enter your email address"/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Send
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Hire;

import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;

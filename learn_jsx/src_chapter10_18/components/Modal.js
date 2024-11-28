import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between">
          {children}
          <div className="flex justify-end h-full">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;

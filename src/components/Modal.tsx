import React, { useEffect } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, children, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [show, onClose]);

  if (!show) return null;
  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalTitle"
        tabIndex={-1}
      >
        <h2 id="modalTitle" className="mb-4 text-xl font-bold">{title}</h2>
        {children}
        <button className="btn mt-6" onClick={onClose} autoFocus>
          Chiudi
        </button>
      </div>
    </>
  );
};

export default Modal;
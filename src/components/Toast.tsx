import React from "react";

interface ToastProps {
  message: string;
  show: boolean;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, show, onClose }) => {
  if (!show) return null;
  return (
    <div
      className="toast"
      role="alert"
      aria-live="assertive"
      tabIndex={0}
      onClick={onClose}
    >
      {message}
    </div>
  );
};

export default Toast;
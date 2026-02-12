import React from "react";
import "./PaymentModal.css";

export default function PaymentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Razorpay Payment Page */}
        <iframe
          src="https://pages.razorpay.com/tef-india"
          title="Razorpay Payment"
          className="payment-iframe"
        ></iframe>
      </div>
    </div>
  );
}

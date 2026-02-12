// InfoStrip.jsx
import React from "react";
import "./InfoStrip.css";

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="left-text">
       This trial class brings the clarity <br />
     students never get in the beginning.
      </div>

      <div className="mid-text">
Career guidance will be provided as a free add on, only if relevant to your goals. It is not the main purpose of the trial class.

      </div>

      <button className="cta-btn"    onClick={() => window.location.href = "https://pages.razorpay.com/tef-india"}  >Book your seat now</button>
    </div>
  );
}

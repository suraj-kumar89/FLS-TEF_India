import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/images/second.png"; // replace with your image path

export default function HeroSection() {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        <h1>
          Most TEF Aspirants <br />
          Start Wrong & Waste <br />
          Months
        </h1>

        <p className="hero-desc">
    Many learners choose the wrong level, follow generic French courses, or prepare without a TEF-specific strategy.
They get stuck between levels, miss score targets, or feel overwhelmed before the exam.


        </p>

        <div className="hero-lists">
          <ul className="custom-list">
            <li> Should I start from A1 even if I know basics French?</li>
            <li> What is the correct progression for A1, A2, B1 & B2 for TEF?</li>
            <li> How do I prepare effectively with limited time?</li>
          </ul>

          <ul className="custom-list">
            <li>How long does each level take for TEF readiness?</li>
            <li>How do I avoid low scores or failing the TEF exam?</li>
          </ul>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <img src={heroImg} alt="German Learning" className="hero-image" />

        <div className="floating-box">
    This trial class gives you a clear, score-oriented, and structured path to prepare for the TEF the right way.


        </div>
      </div>
    </section>
  );
}

import React from "react";
import "./WebinarPerfectFor.css";
import Check from "../assets/images/check.svg";

export default function WebinarPerfectFor() {
  const items = [
    "Complete beginners who want to start French with a clear TEF-focused foundation",
    " Learners stuck between A1, A2, or B1, unsure how to progress for TEF",
    "Anyone confused about TEF timelines, level requirements, or study plans",
    "Working professionals planning to move to Canada (or Europe) for better opportunities",
    "College students aiming to study abroad and needing clarity on French & TEF levels",
    "PR aspirants who need a structured, score-oriented French learning path",
    "Students preparing specifically for the TEF exam (Listening, Reading, Writing, Speaking)",
    "Anyone who wants a clear, practical roadmap from A1 to B2+ for TEF success",
  ];

  return (
    <section className="webinar-section">
      <div className="content-wrapper">
        <h2 className="webinar-title">This TEF Trial Class Is Perfect For</h2>
        <p className="webinar-subtitle">
If TEF is part of your Canada or career plan, this class will give you the exact clarity you need.
        </p>

        <div className="grid-container">
          {items.map((text, index) => (
            <div className="grid-card" key={index}>
        <img src={Check} alt="" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

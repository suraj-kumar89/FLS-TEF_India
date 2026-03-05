import React, { useState } from "react";
import "./FAQ.css";

import ArrowDown from "../assets/images/up.svg"; // your arrow icon


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "I am a beginner. Will this help me ?",
      a: "Yes, absolutely. This TEF trial class is designed to help beginners start the right way. You’ll get clarity on your starting level, a simple roadmap from A1 onwards, and guidance on how to build a strong foundation specifically for TEF preparation."
    },
    {
      q: "I have completed A1 or A2. Should I still join?",
      a: "Yes. If you’ve completed A1 or A2 but feel unsure about your next steps, timelines, or TEF readiness, this class will help you realign. Many learners complete levels but miss exam-specific preparation—this session fixes that gap."
    },
    {
      q: "Who are your trainers?",
      a: "Our trainers are experienced French language educators who specialize in TEF-focused preparation, not just general French teaching. They guide students on level progression, exam strategy, and common scoring mistakes based on real learner experiences."
    },
    {
      q: "Is career guidance included?",
      a: "Yes, but only as a free value add. Career, PR, or study-abroad guidance is shared only if relevant to your profile and is never used as a sales pitch. The core focus of the session remains TEF preparation."
    },
    {
      q: "Will I get the recording?",
      a: "Yes. A session recording is usually shared so you can revise key concepts, strategies, and the roadmap discussed during the class."
    },
    {
      q: "Is ₹99 refundable?",
      a: "The ₹99 trial fee is non-refundable. However, if you decide to enroll in the full TEF course, the ₹99 is adjusted in your final course fee."
    },
   
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-box">
        {faqData.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggle(i)}>
              <span className={openIndex === i ? "active-q" : ""}>
                {item.q}
              </span>

              <img
                src={ArrowDown}
                alt="toggle"
                className={`faq-arrow ${openIndex === i ? "rotate" : ""}`}
              />
            </button>

            {openIndex === i && (
              <p className="faq-answer">{item.a}</p>
            )}

            {i !== faqData.length - 1 && <div className="faq-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}

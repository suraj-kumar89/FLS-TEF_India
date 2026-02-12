import React from "react";
import "./StarterKit.css";
import CheckIcon from "../assets/images/check.svg"; // replace with your icon

export default function StarterKit() {
  const items = [
    {
      title: "Mini Assessment + TEF Level Evaluation",
      desc: "Identify your current French level and TEF readiness with a guided assessment",
      price: "Worth ₹999",
    },
    {
      title: "Personalised A1 to B2+ TEF Study Plan",
      desc: "Your 90-day, score-focused plan to progress faster and avoid common mistakes.",
      price: "Worth ₹1,500",
    },
    {
      title: "TEF Exam Preparation Strategy",
      desc: "Clear strategy for Listening, Reading, Writing & Speaking — what to focus on and what to skip",
      price: "Worth ₹1,000",
    },
    {
      title: "Beginner & TEF Resource Pack",
      desc: "Free worksheets, mock resources, recommended books, apps & tools for TEF",
      price: "Worth ₹700",
    },
    {
      title: "TEF Do’s & Don’ts Cheat Sheet",
      desc: "Avoid the most common mistakes that cost aspirants marks and retakes",
      price: "Worth ₹300",
    },
    {
      title: "Live Q&A With TEF Expert",
      desc: "Get answers to your real doubts during the session",
      price: "Worth ₹600",
    },
    {
      title: "Bonus: Career, PR & Study-Abroad Guidance",
      desc: "Shared only if relevant to your profile (Canada / immigration focused)",
      price: "Bonus Value ₹500",
    },
  ];

  return (
    <section className="starter-wrapper">
      <h2 className="starter-heading">
 A Complete TEF Preparation Starter Kit <br />
        <span className="purple-text">Worth ₹5,500+ for Just ₹299 -</span>
        <span>
          Total No Brainer
        </span>
      </h2>

      <p className="sub-head">What You Get Inside the TEF Trial Class (Worth ₹5,500+)</p>

      <div className="starter-grid">
        {items.map((item, i) => (
          <div className="starter-card" key={i}>
            <div className="card-top">
              <img src={CheckIcon} alt="" className="check-icon" />
              <h3>{item.title}</h3>
            </div>

            <p className="desc">{item.desc}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}

        {/* TOTAL BOX INSIDE GRID */}
        <div className="starter-total-box">
          <h3>Total Value ₹5,500+</h3>
          <p>Your Price Today ₹299</p>
        </div>
      </div>
    </section>
  );
}

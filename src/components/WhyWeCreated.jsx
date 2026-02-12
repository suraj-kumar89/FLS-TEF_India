import React from "react";
import "./WhyWeCreated.css";
import rightImg from "../assets/images/wwct.jpg"; // your right-side image

export default function WhyWeCreated() {
  return (
    <section className="why-wrapper">
      <div className="why-container">
        
        {/* Left Side */}
        <div className="why-left">
          <h2 className="why-title">Why We Created This</h2>

          <h3 className="why-price">
            ₹299 <span>TEF Trial Class
</span>
          </h3>

          <p className="why-desc">
           Most TEF aspirants start their preparation without clarity and end up wasting time, money, and multiple exam attempts. They follow generic French courses that don’t focus on TEF scoring, exam structure, or timelines
          </p>
          <p className="why-desc">
This ₹299 TEF trial class fixes that by giving you one clear, structured plan for your entire A1 to B2+ TEF journey, with a strong focus on exam readiness and score improvement.
          </p>

          <p className="why-bold">
     We want every TEF aspirant to start at the right level, progress with confidence, and prepare for the exam with a proven, practical strategy.


          </p>

          <div className="why-strip">
Career, PR, and immigration guidance is included only as a free value add — never as a sales pitch.

          </div>
        </div>

        {/* Right Side */}
        <div className="why-right">
          <img src={rightImg} alt="webinar student" />
        </div>

      </div>
    </section>
  );
}

import React from "react";
import "./FeaturesSection.css";
import webinarImg from "../assets/images/webinarImg.png";
import Check from "../assets/images/check.svg";

export default function FeaturesSection() {
  const leftFeatures = [
    "A LIVE expert-led TEF trial class",
    "Clarity on your correct starting level for TEF",
    "A structured TEF-focused roadmap from A1 to B2+",
    "Realistic timelines to reach your target TEF score",
    "TEF exam strategy (Listening, Reading, Writing & Speaking)"
  ];

  const rightFeatures = [
    "A mini assessment to identify your current French level",
    "TEF-specific Do’s & Don’ts that save months of wasted effort",
    "A simple 90-day score-oriented study plan",
    "Free career & immigration counselling (Canada-focused)",
    " Get 50% OFF on the full TEF course — your ₹299 will be adjusted"
  ];

  return (
    <section className="webinar-wrapper">
      <h1 className="webinar-title-feature">
        Everything You Need <br />
To Start Preparing for TEF The Right Way
      </h1>

      <div className="webinar-content">
        {/* Left Image */}
        <div className="webinar-image">
          <img src={webinarImg} alt="German Learning Session" />
        </div>

        {/* Right Content */}
        <div className="webinar-details">
          <h3 className="price-title">For ₹299, you get:</h3>

          <div className="features-grid">
            <ul>
              {leftFeatures.map((item, index) => (
                <li key={index}>
                  <img src={Check} alt="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul>
              {rightFeatures.map((item, index) => (
                <li key={index}>
                  <img src={Check} alt="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bonus-box">
            <span className="bonus-tag">Bonus</span>
            <span>Access to free resources after the session</span>
          </div>
        </div>
      </div>
    </section>
  );
}

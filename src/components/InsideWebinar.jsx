import React from "react";
import "./InsideWebinar.css";

import webinarImg from "../assets/images/insideweb.png"; // change to your image path



export default function InsideWebinar() {
  const wb_points = [


    "Understanding A1, A2, B1 & B2 in the context of TEF",
    "Which level you should start from for TEF preparation",
    "How long each level realistically takes to become TEF-ready",
    "Common TEF preparation mistakes and how to avoid them",
    "Complete TEF exam strategy (Listening, Reading, Writing & Speaking)",
    "How to study effectively for TEF with limited time",
    "Mini level assessment + TEF-focused resources",

  ];

  return (
    <section className="wb_container">
      <div className="wb_left">
        <img src={webinarImg} alt="Webinar" className="wb_img" />
      </div>

      <div className="wb_right">
        <h2 className="wb_title">Inside the TEF Trial Class</h2>
        <p className="wb_sub">What We Cover</p>

        <ul className="wb_list">
          {wb_points.map((item, index) => (
            <li key={index} className="wb_list_item">
              <span className="wb_outer_dot">
                <span className="wb_inner_dot"></span>
              </span>

              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

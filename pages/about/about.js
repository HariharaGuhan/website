import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import chat from '../../assets/chat.jpg'

export default function About() {
  return (
    <div>
      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="about-content text-center">
            <h2>
              Explore the Distinction - Our Generative AI Bots
              <br/>
              Elevate Dialogue Beyond the Ordinary Chatbot Experience
            </h2>
          </div>
        </div>
      </div>

      <div className="col-lg-12 img-div text-center mt-5">
        <div className="row">
             <img src={chat} className="about-img"/>
        </div>
      </div>
    </div>
  );
}

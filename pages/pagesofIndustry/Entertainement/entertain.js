import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./entertain.css";
import img1 from "../../assets/abocart.png";
import img2 from "../../assets/abocart.png";
import img3 from "../../assets/abocart.png";
import img4 from "../../assets/abocart.png";
import { FaArrowRight } from "react-icons/fa";

export default function Entertainment() {
    
  return (
    <div>
      <div className="col-lg-12 text-center mt-5 solutions-content">
        <div className="row">
          <h2>
            Empower Your Digital Journey <br />
            Redefine Experiences with Advanced
          </h2>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 text-center mt-5 sol-cont1">
            <h2>About Cart</h2>
            <p>
              Engage your audience with intelligent <br />
              chatbots that seamlessly interact <br /> across
               multiple channels,
              <br /> including WhatsApp, Instagram, SMS,
              Telegram, <br /> 
              websites, and chatbot applications.
            </p>
            <button className=" btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img1} className="sol-img" />
          </div>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-6  text-center">
            <img src={img2} className="sol-img" />
          </div>
          <div className="col-lg-6 mt-5  text-center sol-cont1">
            <h2>Offer Items</h2>
            <p>
              Gain valuable insights into user <br/>interactions and performance<br/>
              metrics. Our robust analytics<br/> tools empower data-driven<br/>
              decision-making.
            </p>
            <button className="btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-6 text-center mt-5 sol-cont1">
            <h2>Notification</h2>
            <p>
              Boost your team's efficiency with <br/>Agent Assist
              features, <br/>optimizing human-bot collaboration for
              <br /> enhanced customer support <br/>and operations.
            </p>
            <button className="btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img3} className="sol-img" />
          </div>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={img4} className="sol-img" />
          </div>
          <div className="col-lg-6 mt-5 text-center  sol-cont1">
            <h2>Bot Studio</h2>
            <p>
              Unleash creativity with our Bot<br/> Studio, where you 
              can design <br/>and customize chatbots to suit<br/> your 
              unique business<br/> requirements.
            </p>
            <button className="px-3 btn-but">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
        </div>
      </div>
    </div>
  );
}

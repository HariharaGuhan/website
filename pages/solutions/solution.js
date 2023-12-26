import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./solution.css";
import img1 from "../../assets/bot studio.png";
import { FaArrowRight } from "react-icons/fa";

export default function Solutions() {
  return (
    <div>
      <div className="col-lg-12 text-center mt-5 platform-content">
        <div className="row">
          <h2>We believe Governance should be kept <br/>separate from management</h2>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-6 text-center plat-cont">
            <h2 className="sol-head">Conversational Marketing</h2>
            <p>
              Transform your marketing strategy<br /> with 
              chatbots for lead generation <br/>and personalized
              interactions.
            </p>
            <button className=" btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img1} className="platform-image" />
          </div>
        </div>
      </div>

      <div className="col-lg12 mt-5">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img src={img1} className="platform-image" />
          </div>
          <div className="col-lg-6  plat-cont text-center">
            <h2>Conversational Commerce</h2>
            <p>
              Simplify transactions and elevate the
              <br /> shopping experience through conversational
              <br /> interfaces
            </p>
            <button className=" btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
        </div>
      </div>

      <div className="col-lg12 mt-5 ">
        <div className="row">
          <div className="col-lg-6 plat-cont text-center">
            <h2>Conversational Support</h2>
            <p>
              Enhance customer support with intelligent <br />
              chatbots available 24/7.
            </p>
            <button className=" btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img1} className="platform-image" />
          </div>
        </div>
      </div>
      <div className="col-lg12 mt-5 ">
        <div className="row">
          <div className="col-lg-6 plat-cont text-center">
            <h2>KRI /KPI Solution</h2>
            <p>
            Optimize your business performance with solutions centered around Key Risk Indicators (KRI) and Key Performance Indicators (KPI).
            </p>
            <button className=" btn-but px-3">Read More<span className="px-2"><FaArrowRight /></span></button>
          </div>
          <div className="col-lg-6 text-center">
            <img src={img1} className="platform-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

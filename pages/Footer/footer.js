import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer_body mt-5">
      <div className="col-lg-12 ml-2 mt-4">
        <div className="row">
          <div className="footer-content">
            <h2>Neuro Nest AI</h2>
            <p>
              At Neuro Nest AI Solutions, we specialize in empowering businesses
              through innovative AI-driven solutions.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-12 mt-5">

        <div className="row">
          <div className="d-flex ">
          <div className="col-lg-3 text-center">
            <div className="div-cont">
              <h5>Home</h5>
              <div className="footer-line1"></div>
              <p className="mt-3">About Us</p>
              <p>Our Service</p>
              <p>privacy policy</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="div-cont">
              <h5>SOLUTIONS</h5>
              <div className="footer-line"></div>
              <p className="mt-3">Conversational Marketing</p>
              <p>Conversational Commerce</p>
              <p>Conversational Support</p>
              <p>KRI/KPI Solutions</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="div-cont">
              <h5>PLATFORM</h5>
              <div className="footer-line"></div>
              <p className="mt-3">Conversational Bot</p>
              <p>Reports & Analyitics</p>
              <p>Agent Assist</p>
              <p>Bot Studio</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="div-cont">
              <h5>Industry</h5>
              <div className="footer-line"></div>
              <p className="mt-3">E-commerce</p>
              <p>Education</p>
              <p>Banking</p>
              <p>Food</p>
              <p>Travel</p>
              <p>Entertainment</p>
              <p>Real Estate</p>
              <p>Logistics</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-6 text-center">
            <div className="footer-col">
              <h4 className="text-white">Follow US</h4>
              <div className="social-links">
                <a href="#" className="text-info">
                  <FaFacebookF className="footer-icons text-info" />
                </a>
                <a href="#" >
                  <FaTwitter className="footer-icons" />
                </a>
                <a href="#" >
                  <FaInstagram className="footer-icons" />
                </a>
                <a href="#">
                  <FaLinkedinIn className="footer-icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p>© 2023 Neuro Nest AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./contact.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { MdOutlineAttachEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="contact-bg">
      <section>
        <div class="section-header">
          <div class="container">
            <h2>Contact Us</h2>
            <p>
              Neuro Nest AI Solutions, we specialize in empowering businesses
              through innovative AI-driven solutions. Our platform offers a
              comprehensive suite of tools designed to enhance customer
              engagement, streamline operations, and drive business growth.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="">
                    <span>
                      <FaHome />
                    </span>
                  </i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    3G, A block, Pioneer Apartments,<br/>
                     Near hotel Residency
                    towers, <br/>Avinashi Rd, Coimbatore, Tamil Nadu 641018
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="">
                    <span>
                      <MdOutlineAddIcCall />
                    </span>
                  </i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>9942620943</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i class="">
                    <span>
                      <MdOutlineAttachEmail />
                    </span>
                  </i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>sanjayks003@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <form action="" id="contact-form">
                <h2>Send Message</h2>
                <div class="input-box">
                  <input type="text" required="true" name="" />
                  <span>Full Name</span>
                </div>

                <div class="input-box">
                  <input type="email" required="true" name="" />
                  <span>Email</span>
                </div>

                <div class="input-box">
                  <textarea required="true" name=""></textarea>
                  <span>Type your Message...</span>
                </div>

                <div class="input-box">
                  <input type="submit" value="Send" name="" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

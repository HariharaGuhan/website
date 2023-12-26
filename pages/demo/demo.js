import React from "react";
import "./demo.css";
export default function Demo() {
  return (
    <>
      <div className="container-fluid  mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 >
              Next Level Customer Interactions
            </h1>
            <div className="mt-3">
              <p>
                Don’t miss the opportunity to witness the future of customer
                support and sales in action. Schedule a personalised demo with
                our evangelists today.
              </p>
            </div>
            <div className="mt-3">
              <ul>
                <li>Reduce Support load by 80%</li>
                <li>Reduce Support load by 80%</li>
                <li>Reduce Support load by 80%</li>
                <li>Reduce Support load by 80%</li>
                <li>Reduce Support load by 80%</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <h2  className="schedule-heading"style={{ color: "#11cdf0", fontSize: "25px" }}>Schedule a Demo</h2>
            <form id="demoForm text-center">
              <div className="form-group mt-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control col-sm-6"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="email">Business Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Business Email"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="jobTitle">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  placeholder="Enter Job Title"
                />
              </div>
              {/* Other form fields go here */}
              <div className="form-group mt-3">
                <label htmlFor="comments">Additional Comments</label>
                <textarea
                  className="form-control"
                  id="comments"
                  rows="3"
                  placeholder="Enter Additional Comments"
                ></textarea>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                  Book a Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";

export default function Demo() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h1>Next Level Customer Interactions</h1>
            <p>
              Don’t miss the opportunity to witness the future of customer
              support and sales in action. Schedule a personalised demo with our
              evangelists today.
            </p>
            <ul>
              <li>Reduce Support load by 80%</li>
              <li>Reduce Support load by 80%</li>
              <li>Reduce Support load by 80%</li>
              <li>Reduce Support load by 80%</li>
              <li>Reduce Support load by 80%</li>
            </ul>
          </div>
          <div className="col-lg-6">
          <h2>Schedule a Demo</h2>
  <form id="demoForm">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="Enter First Name">
    </div>
    <div class="form-group">
      <label for="email">Business Email</label>
      <input type="email" class="form-control" id="email" placeholder="Enter Business Email">
    </div>
    <div class="form-group">
      <label for="jobTitle">Job Title</label>
      <input type="text" class="form-control" id="jobTitle" placeholder="Enter Job Title">
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="tel" class="form-control" id="phone" placeholder="Enter Phone">
    </div>
    <div class="form-group">
      <label for="company">Company Name</label>
      <input type="text" class="form-control" id="company" placeholder="Enter Company Name">
    </div>
    <div class="form-group">
      <label for="industry">Industry Name</label>
      <input type="text" class="form-control" id="industry" placeholder="Enter Industry Name">
    </div>
    <div class="form-group">
      <label for="country">Country Name</label>
      <input type="text" class="form-control" id="country" placeholder="Enter Country Name">
    </div>
    <div class="form-group">
      <label for="businessType">Select Business Type</label>
      <select class="form-control" id="businessType">
        <option value="b2b">B2B</option>
        <option value="b2c">B2C</option>
        <option value="isvPartnership">ISV Partnership</option>
      </select>
    </div>
    <div class="form-group">
      <label for="comments">Additional Comments</label>
      <textarea class="form-control" id="comments" rows="3" placeholder="Enter Additional Comments"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Book a Demo</button>
  </form>
          </div>
        </div>
      </div>
    </>
  );
}

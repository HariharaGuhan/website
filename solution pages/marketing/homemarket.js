import React from 'react'

export default function Homemarket() {
  return (
    <div>
      <div className="container mt-5  ">
        <div className="row wrapper">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 mb-3">
            <h1 className="p-title left-aligned mt-3">
              Conversational Marketing
              <br />
              <span className="highlighttext">E-commerce & Retail</span>
            </h1>
            <div className="mt-5">
              <p className="mt-para">
                We believe Governance should be kept <br/>separate from management
              </p>
            </div>
            <div className=" mt-5">
              <a className="p-btn" title="Sheduling">
                Schedule a Demo
              </a>
            </div>
          </div>
          
          <div className="col-lg-5">
            <img src={cmarket1} className="w-100"/>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  )
}

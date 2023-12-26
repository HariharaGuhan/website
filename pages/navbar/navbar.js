import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { SiBigcommerce } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { LuBot } from "react-icons/lu";
import { MdMan2, MdOutlineReport } from "react-icons/md";
import { FcConferenceCall } from "react-icons/fc";
import { FaGraduationCap, FaPlane } from "react-icons/fa";
import { TbMathIntegrals } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { FaMoneyCheck } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/neurologo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isToggled, setIsToggled] = useState(false);

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <header className="mt-5">
        <div className="container">
          <nav className="navigation fixed-top d-xl-flex desktop-menu">
           
          <Link to="/" className="logo-container">
              <img src={logo} alt="Logo" className="logo-img" />
            </Link>
            {/* <h1 className="margin-logo">Neuro Nest Ai</h1> */}

            <ul className={`nav_menu ${isMobile ? "mobile-menu" : ""}`}>              <li className="nav_list">
                <Link to="/" className="nav-link navbar-brand">
                  Home
                </Link>
              </li>
              <li className="nav_list nav_list_menu">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Solutions{" "}
                </Link>
                <div className="dropdownSolution">
                  <div className="dropdown-inner">
                    <div className="dropdown-item">
                      <div className="item-list">
                        <div className="item-img">
                          <span>
                            <BsCart />
                          </span>
                        </div>
                        <div className="item-list-info">
                          <Link to="/ConversationalMarketing" className="dropdown-item">
                            <span>Conversational Marketing</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <SiBigcommerce />
                        </div>
                         <div className="item-list-info">
                          <Link to="/ConversationalCommerce" className="dropdown-item">
                            <span>Conversational commerece</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* //item2 */}
                    <div className="dropdown-item">
                      {/* <h3 className="item-heading">Solutions</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <FcConferenceCall />
                        </div>
                        <div className="item-list-info">
                          <Link to="/conversationalSupport" className="dropdown-item">
                            <span>Conversational Support</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <FcConferenceCall />
                        </div>
                        <div className="item-list-info">
                          <Link to="/Kri_Kpi_solution" className="dropdown-item">
                            <span>KRI/KPI Solutions</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav_list nav_list_menu">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Platform{" "}
                </Link>
                <div className="dropdownplatform">
                  <div className="dropdown-inner">
                    <div className="dropdown-item">
                      {/* <h3 className="item-heading">Platform</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <LuBot />
                        </div>
                        <div className="item-list-info">
                          <Link to="/conversationalBot" className="dropdown-item">
                            <span>Conversational Bot</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <MdOutlineReport />
                        </div>
                        <div className="item-list-info">
                          <Link to="/Report_and_Analysis" className="dropdown-item">
                            <span>Reports & Analytics</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* //item2 */}
                    <div className="dropdown-item ps-3">
                      {/* <h3 className="item-heading">Platform</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <MdMan2 />
                        </div>
                        <div className="item-list-info">
                          <Link to="/Agent_Assits" className="dropdown-item">
                            <span>Agent Assist</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <FaRobot />
                        </div>
                        <div className="item-list-info">
                          <Link to="/Bot_Studio" className="dropdown-item">
                            <span>Bot Studio</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav_list nav_list_menu">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Industry{" "}
                </Link>
                <div className="dropdownIndustry">
                  <div className="dropdown-inner">
                    <div className="dropdown-item Indus-width">
                      {/* <h3 className="item-heading">Industry</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <FaMoneyCheck />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>E-commerce</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <FaGraduationCap />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Education</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* //item2 */}
                    <div className="dropdown-item">
                      {/* <h3 className="item-heading">Products</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <CiBank />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Banking</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <IoFastFoodOutline />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Food</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* item3 */}
                    <div className="dropdown-item">
                      <div className="item-list">
                        <div className="item-img">
                          <FaPlane />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Travel</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <TbMathIntegrals />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Logistics</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* //item4 */}
                    <div className="dropdown-item">
                      {/* <h3 className="item-heading">Products</h3> */}
                      <div className="item-list">
                        <div className="item-img">
                          <AiFillMedicineBox />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>HealthCare</span>
                          </Link>
                        </div>
                      </div>
                      <div className="item-list">
                        <div className="item-img">
                          <IoFastFoodOutline />
                        </div>
                        <div className="item-list-info">
                          <Link to="/s-market" className="dropdown-item">
                            <span>Food</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav_list">
                <Link to="/contact" className="nav-link navbar-brand">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="nav_action">
           
              
              
            </div>
            <div className="toogle">
            {/* <button onClick={toggleClass}><IoMenu /></button> */}
            <Link to="/schedule_demo"><button className="btn btn-info w-30  btn-primary">Book a Demo</button></Link>
            </div>
           
          </nav>
        </div>
      </header>
    </div>
  );
}

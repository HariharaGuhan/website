import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./industry.css";
import { FaMoneyCheck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { SiBigcommerce } from "react-icons/si";
import { FaRobot } from "react-icons/fa6";
import { LuBot } from "react-icons/lu";
import { MdMan2, MdOutlineReport } from "react-icons/md";
import { FcConferenceCall } from "react-icons/fc";
import { FaGraduationCap, FaPlane } from "react-icons/fa";
import { TbMathIntegrals } from "react-icons/tb";
import { CiBank } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { AiFillMedicineBox } from "react-icons/ai";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

export default function Industry() {
  return (
    <div className="industry-body">
      <div className="col-lg-12 text-center mt-5 industry-content">
        <div className="row">
          <h2>
            We believe Governance should be kept
            <br />
            separate from management
          </h2>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <FaMoneyCheck className="icons mt-3" />
                <p className="mt-2">E-Commerce</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>
              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <FaGraduationCap className="icons  mt-3" />
                <p className="mt-2">Education</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>

              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
         
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <IoFastFoodOutline className="icons mt-3" />
                <p className="mt-2">Food</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>
              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <FaPlane className="icons mt-3" />
                <p className="mt-2">Travel</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>

              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-12 mt-5">
        <div className="row">
          
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <TbMathIntegrals className="icons mt-3" />
                <p className="mt-2">Logistics</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>

              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <BiCameraMovie className="icons mt-3" />
                <p className="mt-2">Entertainment</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>
              <button>
                Read More
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <MdOutlineRealEstateAgent className="icons mt-3" />
                <p className="mt-2">Real Estate</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>

              <button>
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-3 text-center">
            <div className="card">
              <div className="card-tittle">
                <MdOutlineRealEstateAgent className="icons mt-3" />
                <p className="mt-2">E-Commerce</p>
              </div>
              <div className="card-body">
                <p>Create conversational sales experiences</p>
              </div>

              <button>
                Read More{" "}
                <span>
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

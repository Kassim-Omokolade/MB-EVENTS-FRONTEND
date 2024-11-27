import React, { useState } from "react";
import loginback from "../assets/loginback.png";
import head from "../assets/head.png";
import { PiEyeSlashLight } from "react-icons/pi";
import ActionBtn from "../component/ActionBtn";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";


const Register = () => {
  const[isPasswordVisible,setIsPassWordVisible]=useState(false)
  const[isConfirmPassword,setIsconfirmPassWord]=useState(false)
  const togglePassword=()=>{
    setIsPassWordVisible (!isPasswordVisible) 
  }

  const toggleConfirmPassword=()=>{
      setIsconfirmPassWord (!isConfirmPassword)
  }

  return (
    <div className=" d-flex gap-2 px-lg-4 py-4">
      <div className="col-lg-6 d-none d-xl-block">
        <img
          src={loginback}
          alt="img"
          style={{ height: "100vh", width: "650px" }}
        />
      </div>

      <div className=" px-lg-5 px-3 col-lg-">
        <div className="  justify-content-center align-items-center d-flex">
          <Link to="/">
            <img
              src={head}
              alt="img"
              style={{ height: "81px", width: "200px" }}
            />
          </Link>
        </div>

        <form className="mt-3 align-items-start">
          <h2 className="text-start"> Create Account</h2>
          <p className="fs-4 mb-3">
            Let’s get you started so you can start joining and creating events.
          </p>

          <input
            type="email"
            id="email"
            className="form-control mb-3 shadow-none"
            placeholder="Email"
          />
          <input
            type="text"
            id="name"
            className="form-control mb-3 shadow-none"
            placeholder="Full Name"
          />
          <div className=" signup-pass mb-3">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              className="form-control shadow-none"
              placeholder="Password "
            />
            <span onClick={togglePassword}>
              {isPasswordVisible ? (
                <PiEyeSlashLight className="signup-icon" />
              ) : (
                <IoEyeOutline className="signup-icon" />
              )}
            </span>
          </div>
          <div className=" signup-pass mb-3">
            <input
              type={isConfirmPassword ? "text" : "password"}
              id="confirmpass"
              className="form-control shadow-none"
              placeholder="Confirm Password"
            />
            <span onClick={toggleConfirmPassword}>
              {isConfirmPassword ? (
                <PiEyeSlashLight className="signup-icon" />
              ) : (
                <IoEyeOutline className="signup-icon" />
              )}
            </span>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree" className="form-label ms-2">
              I agree to the terms & conditions
            </label>
          </div>

          <Link to="/">
            <ActionBtn
              content="Sign Up"
              type="submit"
              width="100%"
              className="border-0 mybtn"
            />
          </Link>
          <h5 className="mt-4">
            Already have an account?{"  "}
            <span>
              <Link
                to="/login"
                style={{ color: "#9747FF" }}
                className="text-decoration-none "
              >
                Sign In
              </Link>
            </span>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Register;

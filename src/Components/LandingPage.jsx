import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <nav className="flex justify-between p-6 bg-[#18181b] text-white items-center">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#33F9D8] to-[#3478FF] bg-clip-text text-transparent tracking-wide">
            Expensio
          </h3>
        </div>
        <div className="flex gap-6">
          <p>Features</p>
          <p>About us</p>
          <p>
            <Link to="/Login">Login</Link>
          </p>
          <p>
            <Link
              to="/Signup"
              className="bg-gradient-to-r from-[#33F9D8] to-[#3478FF] px-3 rounded font-medium cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </nav>

      <div className="bg-black flex items-center justify-between px-8 py-12">
        <div className="flex flex-col items-start justify-center max-w-[500px]">
          <h1 className="text-4xl font-bold text-white mb-4">
            {" "}
            Manage your money{" "}
          </h1>
          <p className="mb-6 text-white">
            {" "}
            Expensio is a simple and easy to use expense tracker that helps you
            manage your money.{" "}
          </p>

          <button className="flex items-center justify-between bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold px-6 py-4 rounded-xl w-fit shadow-lg hover:scale-105 transition-transform duration-200">
            <span className="text-lg">Get Started</span>
            <span className="ml-3">
              <img
                src="src\assets\btn-icon.png"
                alt=""
                className="w-7 h-7 object-contain"
              />
            </span>
          </button>
        </div>
        <div>
          {" "}
          <img
            src="src\assets\laptop.png"
            alt="mockup image"
            className="h-[350px] w-[auto] object-cover"
          />{" "}
        </div>
      </div>
    </>
  );
}

export default LandingPage;

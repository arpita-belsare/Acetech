import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/ph.jpg"
const First = () => {
  return (
    <div className="relative">
      <div className="bg-blue-700 h-96 w-full py-14">
        <h1 className="text-9xl text-white font-medium text-center font-sans tracking-wider">
          ORTHOPEDIC
        </h1>

        <div className="border-4 h-auto w-11/12 absolute top-36 bg-cyan-900 left-16 border-sky-200 rounded-2xl py-6 px-6">
          {/* Navbar integrated here */}
          <Navbar />
          <img src={img1} alt="" className="w-full h-80 "/>
        </div>

      </div>
     
    </div>
  );
};

export default First;




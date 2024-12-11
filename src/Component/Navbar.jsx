import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-24 flex justify-between py-6 px-4">
      <div className="flex justify-between items-center w-3/6">
        <h2 className="text-3xl mx-8 font-bold">
          <span className="text-blue-700">RWJ</span>Barnabas
        </h2>
        <ul className="flex justify-around w-1/2 h-full items-center">
          <li className="text-xs text-gray-500">
            <Link to="/about" target="blank" >About</Link>
          </li>
          <li className="text-xs text-gray-500">
            <Link to="/services" target="blank">Services</Link>
          </li>
          <li className="text-xs text-gray-500">
            <Link to="/stories" target="blank">Patient Stories</Link>
          </li>
          <li className="text-xs text-gray-500">
            <Link to="/location" target="blank">Location</Link>
          </li>
        </ul>
      </div>
      <button className="bg-blue-700 text-white px-6 py-3 mr-14 flex rounded-3xl font-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 h-5 my-1 mx-2"
          fill="white"
        >
                 <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
        720-730 1940
      </button>
    </nav>
  );
};

export default Navbar;

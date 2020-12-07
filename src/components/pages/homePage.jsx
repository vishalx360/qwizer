import React from "react";
import { Link } from "react-router-dom";

export default function homepage() {
  return (
    <div className="m-auto w-full h-screen p-2 flex flex-col justify-center items-center">
      <div className="w-26 h-26 my-5">
        <img
          className="imageShadow h-full w-full block object-cover"
          src="icons/icon-152x152.png"
          alt="logo"
        />
      </div>
      <h2 className="text-2xl mt-5 font-bold">QWIZER</h2>
      <p className="my-5 text-center py-1 px-2 w-32 rounded-full bg-gray-100 text-gray-800 border-2 border-gray-500">
        {" "}
        John Doe{" "}
      </p>

      <div>
        <Link className="btn mt-1 bg-green-400 shadow" to="/quiz">
          Free For All
        </Link>
        <Link className="btn mt-4 bg-blue-400 shadow" to="/room">
          Join Private Room
        </Link>
        <Link className="btn mt-4 bg-orange-400 shadow" to="/room">
          Find Room
        </Link>
        <Link className="btn mt-4 bg-red-400 shadow" to="/host">
          Host Room
        </Link>
      </div>

      <p className="credits mt-10">v2.0.0</p>
      <p className="credits">
        Made By{" "}
        <a className="text-green-600" href="https://www.github.com/vishalx360">
          Vishal Kumar
        </a>
      </p>
      <p className="credits">
        Quiz Data is Fetched From{" "}
        <a className="text-blue-600" href="https://opentdb.com/">
          opentdb
        </a>{" "}
        API
      </p>
    </div>
  );
}

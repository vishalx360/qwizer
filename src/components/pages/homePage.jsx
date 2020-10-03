import React from "react";
import { Link } from "react-router-dom";

export default function homepage() {
  return (
    <div className="m-auto  p-2 flex flex-col items-center">
      <div className="w-26 h-26 my-5">
        <img
          className="imageShadow h-full w-full block object-cover"
          src="icons/icon-152x152.png"
          alt="logo"
        />
      </div>
      <h2 className="text-2xl mt-5 ">QWIZER</h2>
      <p className="mt-5"> John Doe </p>

      <div>
        <Link className="btn mt-1" to="/quiz">
          Free For All
        </Link>

        <Link className="btn mt-1" to="/host">
          Host
        </Link>
        <Link className="btn mt-1" to="/room">
          Join
        </Link>
      </div>

      <p className="credits">v2.0.0</p>
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

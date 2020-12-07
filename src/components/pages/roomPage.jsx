import React from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export const roomPage = () => {
  return (
    <>
      <nav className="quiz-nav bg-orange-300 text-center py-2 px-5 w-full flex flex-row items-center">
        <Link className="mr-5 icon_btn" to="/">
          <MdArrowBack size={"2em"} />
        </Link>
        <h1 className="text-2xl">Find Rooms</h1>
      </nav>

      <div className="w-full h-screen">
        <div className="container shadow">
          <ul className="room_list bg-gray-700 p-5">
            <li className="room mt-5 border-2 bg-gray-600 border-gray-300 py-2 px-4 rounded flex flex-row items-center text-gray-200 font-bold">
              <span className="room_title"> All Catrgories</span>
              <span className="room_status ml-auto">4/5</span>
              <button className="btn w-20 inline ml-5">Join</button>
            </li>
            <li className="room mt-5 border-2 bg-gray-600 border-gray-300 py-2 px-4 rounded flex flex-row items-center text-gray-200 font-bold">
              <span className="room_title"> All Catrgories</span>
              <span className="room_status ml-auto">4/5</span>
              <button className="btn w-20 inline ml-5">Join</button>
            </li>
            <li className="room mt-5 border-2 bg-gray-600 border-gray-300 py-2 px-4 rounded flex flex-row items-center text-gray-200 font-bold">
              <span className="room_title"> All Catrgories</span>
              <span className="room_status ml-auto">4/5</span>
              <button className="btn w-20 inline ml-5">Join</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

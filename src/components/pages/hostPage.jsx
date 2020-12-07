import React from "react";

export const hostPage = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 text-gray-900">
      <form className="flex flex-col items-center justify-evenly mt-5 w-full">
        <h2>Host page</h2>
        <select className="py-2 px-5 rounded mt-1 w-full" name="difficulty">
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button className="btn">Create Room</button>
      </form>
    </div>
  );
};

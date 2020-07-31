import React from 'react'
import {Link} from 'react-router-dom'

export default function homepage() {
    return (
        <div className="m-auto  p-2 flex flex-col items-center">
            <div className="w-24 h-24 my-5">
                <img className="imageShadow h-full w-full block object-cover" src="icons/icon-152x152.png" alt="logo" />
            </div>
            <h2 className="text-2xl mt-5 ">QWIZER</h2>
            <p className="mt-5"> John Doe </p>
            <form className="flex flex-col items-center justify-evenly mt-5 w-full">
                <select className="py-2 px-5 rounded mt-1 w-full" name="difficulty">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <Link className="w-full py-2 my-5 px-5 rounded bg-gray-900 text-gray-100 uppercase font-semibold text-center cursor-pointer" to="/quiz">
                START
                </Link>
            </form>
            <p className="credits">v1.0.0</p>
            <p className="credits">Made By <a className="text-green-600" href="https://www.github.com/vishalx360">Vishal Kumar</a></p>
            <p className="credits">Quiz Data is Fetched From <a className="text-blue-600" href="https://opentdb.com/">opentdb</a> API</p>
        </div>
    )
}

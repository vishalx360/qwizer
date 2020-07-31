import React from 'react'
import { Link } from 'react-router-dom'

export default function quizPage() {
    return (
        <>
            <nav className=" bg-red-500 py-2 px-5 w-full flex flex-row items-center justify-between">
                <Link to="/">
                    <img src="page-icons/arrow-left.png" alt="" />
                </Link>
                <div className="score_box">SCORE: <span className="score_ele">0</span></div>
            </nav>

            <div className="h-screen   bg-green-400 w-screen flex flex-col items-center justify-between">
                {/* top */}
                <section className="top bg-red-200 text-center">

                    <h2 className="question_number"><span className="num">0</span>/10</h2>
                    <div className="time_section">
                        <div className="progress">
                            <div className="progress_bar"></div>
                        </div>
                        <div className="time_left">
                            <p><span className="time">4</span> Seconds Left</p>
                        </div>
                    </div>
                </section>



                {/* middle */}
                <section className="question_card  w-full bg-white p-3 sm:px-5 md:px-8 xl:px-12">
                    <p className="question_type text-md text-gray-800 text-base sm:text-lg md:text-xl xl:text-2xl ">Lorem, ipsum.</p>
                    <p className="question text-2xl sm:text-3xl md:text-4xl xl:text-5xl ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, excepturi quam. Culpa quos quasi perferendis.</p>
                </section>



                {/* bottom */}
                <section className="bottom bg-gray-900 w-full p-5 text-gray-100">
                    <div className="hidden md:block text-center">

                        <div >
                            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>
                            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>

                        </div>
                        <div >
                            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>
                            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>

                        </div>
                    </div>

                    <div className="flex flex-col items-center md:hidden">
                        {/* options */}


                        <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>
                        <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>
                        <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>
                        <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">Placeholder text</button>

                    </div>
                </section>
            </div>
        </>
    )
}

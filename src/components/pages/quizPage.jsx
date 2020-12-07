import React from "react";
import { Link } from "react-router-dom";
import "./quizPage_styles.scss";
import { MdArrowBack } from "react-icons/md";

export default function quizPage() {
  return (
    <div className="h-screen">
      <div className="h-full bg-gray-400 w-screen flex flex-col justify-between">
        <nav className="quiz-nav  py-2 px-5 w-full flex flex-row items-center justify-between">
          <Link className="mr-5 icon_btn" to="/">
            <MdArrowBack size={"2em"} />
          </Link>
          <h2 className="question_number">
            <span className="num text-lg">0</span>/10
          </h2>
          <div className="score_box">
            Score: <span className="score_ele">0</span>
          </div>
        </nav>
        {/* top */}
        {/* <section className="p-5 bg-gray-300 text-center">
          <h2 className="question_number">
            <span className="num text-lg">0</span>/10
          </h2>
          <div className="time_section">
            <div className="progress">
              <div className="progress_bar"></div>
            </div>
            <div className="time_left text-base sm:text-lg md:text-xl xl:text-2xl">
              <p>
                <span className="time font-bold">4</span> Seconds Left
              </p>
            </div>
          </div>
        </section> */}

        {/* middle */}
        <section className="question_card h-full  w-full bg-white p-3 sm:px-5 md:px-8 xl:px-12 flex flex-col justify-center">
          <p className="question_type text-md text-gray-800 text-base sm:text-lg md:text-xl xl:text-2xl ">
            Lorem, ipsum.
          </p>
          <p className="question text-2xl sm:text-3xl md:text-4xl xl:text-5xl max-w-5xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            sint nobis expedita facere placeat a sed, illum molestiae, eveniet
            labore quasi corrupti animi sequi voluptas aut. Dignissimos facili
            deserunt alias?
          </p>
        </section>

        {/* bottom */}
        <section className="bottom bg-gray-900 w-full p-5 text-gray-100">
          <div className="hidden md:block text-center">
            <div>
              <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                Placeholder text
              </button>
              <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                Placeholder text
              </button>
            </div>
            <div>
              <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                Placeholder text
              </button>
              <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl m-5 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
                Placeholder text
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center md:hidden">
            {/* options */}

            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              Placeholder text
            </button>
            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              Placeholder text
            </button>
            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              Placeholder text
            </button>
            <button className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mt-2 bg-transparent hover:bg-gray-100 hover:text-gray-900  focus:bg-gray-100 focus:text-gray-900 font-semibold hover:text-white py-2 px-4 border border-gray-100 hover:border-transparent rounded">
              Placeholder text
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

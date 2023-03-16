import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizWrapper";

const Result = () => {
  const { correct, setExit, setStart, quizzes } = useContext(QuizContext);

  const PlayAgain = () => {
    setStart(false);
    setExit(false);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[40%] min-h-[200px] border shadow-lg rounded-md flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold my-5">
          {correct} are correct out of {quizzes.length}
        </h2>
        <button
          className="border border-orange-700 px-7 py-3 rounded hover:bg-orange-600 hover:text-white text-2xl font-bold duration-700"
          onClick={PlayAgain}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Result;

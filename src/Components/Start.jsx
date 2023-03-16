import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizWrapper";

const Start = () => {
  const { setStart } = useContext(QuizContext);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className="border border-orange-700 px-7 py-3 rounded hover:bg-orange-600 hover:text-white text-2xl font-bold duration-700"
        onClick={() => setStart(true)}
      >
        Start
      </button>
    </div>
  );
};

export default Start;

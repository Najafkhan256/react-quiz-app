import React, { useContext, useState } from "react";
import { QuizContext } from "../Context/QuizWrapper";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Box current={current} setCurrent={setCurrent} />
    </div>
  );
};

const Box = ({ current, setCurrent }) => {
  const { quizzes, correct, setCorrect, setExit } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  const saveHandler = () => {
    if (quizzes[current].correctAnswer === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setExit(true);
    } else {
      setCurrent(current + 1);
    }
  };
  return (
    <div className="w-[40%] border shadow-lg rounded-md overflow-hidden">
      <div className="p-2 text-3xl font-semibold">
        {current + 1}) {quizzes[current].question}
      </div>
      <div className="grid grid-cols-2 mt-3">
        <div
          className={`p-2 border ${
            ans === "a" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white cursor-pointer duration-200`}
          onClick={() => setAns("a")}
        >
          {quizzes[current].a}
        </div>
        <div
          className={`p-2 border ${
            ans === "b" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white cursor-pointer duration-200`}
          onClick={() => setAns("b")}
        >
          {quizzes[current].b}
        </div>
        <div
          className={`p-2 border ${
            ans === "c" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white cursor-pointer duration-200`}
          onClick={() => setAns("c")}
        >
          {quizzes[current].c}
        </div>
        <div
          className={`p-2 border ${
            ans === "d" ? "bg-blue-400 text-white" : ""
          } hover:bg-blue-400 hover:text-white cursor-pointer duration-200`}
          onClick={() => setAns("d")}
        >
          {quizzes[current].d}
        </div>
      </div>
      <div className="flex justify-between">
        <div
          className="h-[30px] p-5 text-lg bg-orange-600 text-white flex items-center cursor-pointer"
          onClick={() => setAns("")}
        >
          Reset
        </div>
        <div
          className="h-[30px] p-5 text-lg bg-green-600 text-white flex items-center cursor-pointer"
          onClick={saveHandler}
        >
          Save & Next
        </div>
        <div
          className="h-[30px] p-5 text-lg bg-red-600 text-white flex items-center cursor-pointer"
          onClick={() => setExit(true)}
        >
          Exit
        </div>
      </div>
    </div>
  );
};
export default Quiz;

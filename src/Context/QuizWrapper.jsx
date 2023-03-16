import React, { createContext, useState } from "react";
import { quizzes } from "../Data/data";
const QuizContext = createContext();

const QuizWrapper = (props) => {
  const [start, setStart] = useState(false);
  const [exit, setExit] = useState(false);
  const [correct, setCorrect] = useState(0);
  return (
    <QuizContext.Provider
      value={{ start, exit, setStart, setExit, quizzes, correct, setCorrect }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizWrapper;
export { QuizContext };

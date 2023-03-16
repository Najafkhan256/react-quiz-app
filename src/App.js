import React from "react";
import "./App.css";
import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import { QuizContext } from "./Context/QuizWrapper";
import { useContext } from "react";

function App() {
  const { start, exit, setStart, setExit } = useContext(QuizContext);
  return (
    <>
      {exit === false ? (
        <>
          {start === true ? (
            <Quiz />
          ) : (
            <Start
              start={start}
              setStart={setStart}
              exit={exit}
              setExit={setExit}
            />
          )}
        </>
      ) : (
        <Result />
      )}
    </>
  );
}

export default App;

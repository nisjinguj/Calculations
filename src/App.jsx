import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainContainer from "./components/Container";
import createGlobalStyle from "styled-components";
import OutputCalculators from "./components/Output";
import Line from "./components/Line";
import Button from "./components/Button";
import Globalstyled from "./components/WhiteMode";

function App() {
  const [input, setInput] = useState("");

  // 연산
  const calculate = () => {
    // if문 밖에 선언해야 정상동작
    let operators;
    if (input.includes("+")) {
      operators = "+";
    } else if (input.includes("*")) {
      operators = "*";
    } else if (input.includes("-")) {
      operators = "-";
    }

    const firstNum = input.split(operators)[0];
    const secondNum = input.split(operators)[1];

    if (operators === "+") {
      // 문자열로 바꿔 저장해야 이어서 계산이 이루어진다
      setInput(String(Number(firstNum) + Number(secondNum)));
    } else if (operators === "-") {
      setInput(String(Number(firstNum) - Number(secondNum)));
    } else if (operators === "*") {
      setInput(String(Number(firstNum) * Number(secondNum)));
    }
  };

  const buttonClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "back") {
      // 0부터 input길이 -1 만큼 빼서 구현
      setInput(input.slice(0, input.length - 1));
    } else {
      // 연산자를 하나만 작성할 수 있게
      if (input.includes("+") || input.includes("-") || input.includes("*")) {
        if (value === "+" || value === "-" || value === "*") {
          setInput(input);
        } else {
          setInput(input + value);
        }
      } else {
        setInput(input + value);
      }
    }
  };

  return (
    <>
      <MainContainer>
        <OutputCalculators value={input}></OutputCalculators>
        <Line>
          {/* 7 8 9 = */}
          <Button value={7} onClick={() => buttonClick("7")}></Button>
          <Button value={8} onClick={() => buttonClick("8")}></Button>
          <Button value={9} onClick={() => buttonClick("9")}></Button>
          <Button value={"="} onClick={() => buttonClick("=")}></Button>
        </Line>
        <Line>
          {/* 4 5 6 backspace */}
          <Button value={4} onClick={() => buttonClick("4")}></Button>
          <Button value={5} onClick={() => buttonClick("5")}></Button>
          <Button value={6} onClick={() => buttonClick("6")}></Button>
          <Button value={"back"} onClick={() => buttonClick("back")}></Button>
        </Line>
        <Line>
          {/* 1 2 3 + */}
          <Button value={1} onClick={() => buttonClick("1")}></Button>
          <Button value={2} onClick={() => buttonClick("2")}></Button>
          <Button value={3} onClick={() => buttonClick("3")}></Button>
          <Button value={"+"} onClick={() => buttonClick("+")}></Button>
        </Line>
        <Line>
          {/*  . 0 * - */}
          <Button value={"."} onClick={() => buttonClick(".")}></Button>
          <Button value={0} onClick={() => buttonClick("0")}></Button>
          <Button value={"*"} onClick={() => buttonClick("*")}></Button>
          <Button value={"-"} onClick={() => buttonClick("-")}></Button>
        </Line>
      </MainContainer>
    </>
  );
}

export default App;

import Display from "./Display.jsx";
import Buttons from "./Buttons.jsx";
import "./Parent_div.css";
import { useState } from "react";

function Parent_div() {
  const [initialVal, changeVal] = useState("");

  const buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "C",
    "=",
    ".",
    "+",
    "-",
    "/",
    "*",
    "%",
  ];

  function onClickHandle(item) {
    if (item == "C") {
      changeVal("");
    } else if (item == "=") {
      const result = eval(initialVal);
      changeVal(result);
    } else {
      const result = initialVal + item;
      changeVal(result);
    }
  }

  return (
    <>
      <div className="parent-div">
        <Display initialVal={initialVal} />
        <br />
        <Buttons buttons={buttons} onClickHandle={onClickHandle} />
      </div>
    </>
  );
}

export default Parent_div;

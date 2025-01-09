import "./css/cal.css";
import { useState } from "react";


function Cal(){
  
  const [ initialVal, changeVal ] = useState("");

  function onClickFun(val){
    if (val == '='){
      changeVal(eval(initialVal));
    }
    else if (val == 'C'){
      changeVal("");
    }
    else {
      changeVal(initialVal + val);
    }
    
  }
  
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '%', '*', '/', '+', '=', 'C'];
  return (
    <>
      <div className="cal-div">
        <div className="cal-main">
          <div className="display">
            <input value={initialVal} type="text" readOnly />
          </div>

          <div className="buttons">
            {
              buttons.map((item, index) => (<button className="all-btn" key={index} onClick={() => onClickFun(item)} >{item}</button>))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Cal;
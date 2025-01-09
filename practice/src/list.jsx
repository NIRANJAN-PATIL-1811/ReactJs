import "./css/list.css";
import { useState,useRef } from "react";


function List(){
  const [ initialVal, changeVal ]  = useState([]);
  const [ initialVal2, changeVal2 ] = useState(1000);
  const [ initialValue, changeValue ] = useState(0);

  const input_data1 = useRef();
  const input_data2 = useRef();

  function getData(){
    const newItem = { TASK: input_data1.current.value, VALUE: input_data2.current.value };
    changeVal([...initialVal, newItem]);
    changeValue(eval(`${initialValue} + ${input_data2.current.value}`));
    changeVal2(eval(`${initialVal2} - ${input_data2.current.value}`));
    input_data1.current.value = '';
    input_data2.current.value = '';

  }

  function deleteData(index){
    changeValue(eval(`${initialValue} - ${initialVal[index].VALUE}`));
    changeVal2(eval(`${initialVal2} + ${initialVal[index].VALUE}`));
    const newData = initialVal.filter((_, item) => item !== index)
    changeVal(newData);
  }

  return (
    <>
      <div className="list-div">
        
        <div className="list-heading">       

          <div className="container text-center">
            <div className="row">

              <div className="col-5">
                <input ref={input_data1} type="text" className="form-control" placeholder="Enter your expense"/>
              </div>

              <div className="col-5">
                <input ref={input_data2} type="text" className="form-control" placeholder="Enter amount" />
              </div>

              <div className="col-2">
                <button onClick={() => getData()} className="btn btn-success">Add</button>
              </div>
              
            </div>
          </div>
        </div>

          <div className="main-data">
            <div className="container text-center">

              {
                initialVal.length == 0 ? null :
                initialVal.map((item, index) => (
                  <div key={index} className="row data-row">
                    <div className="col-5">
                      {item.TASK}
                    </div>

                    <div className="col-5">
                      {item.VALUE}
                    </div>

                    <div className="col-2">
                      <button onClick={() => deleteData(index)} className="btn btn-danger">Delete</button>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
          <div className="total-val">Total Amount : {initialValue}</div>
          <div className="total-val">Remaining Amount : {initialVal2}</div>
      </div>
    </>
  );
}

export default List;
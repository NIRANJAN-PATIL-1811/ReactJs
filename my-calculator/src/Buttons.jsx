import "./Buttons.css";

function Buttons({ buttons, onClickHandle }){
  return (
    <>
      <div className="button-div">
        {
          buttons.map((item, index) => (<button key={index} id="all-button" onClick={() => onClickHandle(item)} >{item}</button>))
        }
      </div>
    </>
  );
}

export default Buttons;
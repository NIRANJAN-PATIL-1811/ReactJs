import "./Display.css";

function Display({ initialVal }){
  return (
    <>
      <div className="display-div">
        <input type="text" readOnly className="display-div" value={initialVal} />
      </div>
    </>
  );
}

export default Display;
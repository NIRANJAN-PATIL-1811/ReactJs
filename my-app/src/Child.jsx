function Child({ info, onClickDelete }) {
  return (
    <>
      {info.map((item, index) => (
        <div className="container text-center" key={index}>
          <div className="row">
            <div className="col-4">{item.Name}</div>
            <div className="col-4">{item.Date}</div>
            <div className="col-4">
              <button onClick={() => onClickDelete(item.Name)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Child;

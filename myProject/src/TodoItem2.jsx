function SecondItem() {
  let secondItemName = "Go to Collage";
  let secondItemDate = "4/10/2024";

  return (
    <>
      <div className="container text-center todo-container">
        <div className="row">
          <div className="col-4">{secondItemName}</div>
          <div className="col-5">{secondItemDate}</div>
          <div className="col-3">
            <button type="button" className="btn btn-danger">
              Danger
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondItem;

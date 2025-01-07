function FirstItem() {
  let firstItemName = "Buy Milk";
  let firstItemDate = "4/10/2024";

<<<<<<< HEAD
  return <>
    <div className="container text-center todo-container">
      <div className="row">
        <div className="col-4">{firstItemName}</div>
        <div className="col-5">{firstItemDate}</div>
        <div className="col-3">
          <button type="button" className="btn btn-danger">Danger</button>
=======
  return (
    <>
      <div className="container text-center todo-container">
        <div className="row">
          <div className="col-4">{firstItemName}</div>
          <div className="col-5">{firstItemDate}</div>
          <div className="col-3">
            <button type="button" className="btn btn-danger">
              Danger
            </button>
          </div>
>>>>>>> 8932159f88639663baf93d5c0d25b4a35ad6d8c5
        </div>
      </div>
    </>
  );
}

export default FirstItem;

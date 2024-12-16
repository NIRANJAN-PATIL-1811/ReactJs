function FirstItem(){
  let firstItemName = "Buy Milk";
  let firstItemDate = "4/10/2024";

  return <>
    <div class="container text-center todo-container">
      <div class="row">
        <div class="col-4">{firstItemName}</div>
        <div class="col-5">{firstItemDate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>
    </div>
  </>
}

export default FirstItem;
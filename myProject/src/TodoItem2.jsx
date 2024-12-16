function SecondItem(){
  let secondItemName = "Go to Collage";
  let secondItemDate = "4/10/2024";

  return <>
    <div class="container text-center todo-container">
      <div class="row">
        <div class="col-4">{secondItemName}</div>
        <div class="col-5">{secondItemDate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger">Danger</button>
        </div>
      </div>
    </div>
  </>
}

export default SecondItem;
function Subheading(){
  return <>
    <div class="container text-center">
      <div class="row">
        <div class="col-4">
          <input type="text" placeholder="Enter your todo here..."/>
        </div>

        <div class="col-5">
          <input type="date" />
        </div>
        
        <div class="col-3">
        <button type="button" class="btn btn-success">Add</button>
        </div>      
      </div>
    </div>
  </>
}

export default Subheading;
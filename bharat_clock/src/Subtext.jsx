function Subtext(){
  let time = new Date();

  return <>
    <center>
      <h3>
        This is the clock that shows the time in Bharat at all times.
      </h3>

      <h3>
        This is the current Time: {time.toLocaleString()}
      </h3>
    </center>
  </>
}

export default Subtext;
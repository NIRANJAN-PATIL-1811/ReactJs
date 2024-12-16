const ErrorMessage =(props) => {
  return (
    <>
      {props.FOODITEMS.length === 0 ? <h1>I am hungry!</h1> : null}
    </>
  );
}

export default ErrorMessage;
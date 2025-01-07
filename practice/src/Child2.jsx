import { memo } from "react";

function Child2({ details, myname }){
  return (
    <>
      {
        details()
      }
      {
        console.log(myname)
      }
    </>
  );
}

export default memo(Child2);
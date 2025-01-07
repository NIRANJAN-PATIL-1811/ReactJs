import { memo } from "react";

function ChildA({ getData }){
  return (
    <>
      {
        console.log(getData)
      }
    </>
  );
}

export default memo(ChildA);
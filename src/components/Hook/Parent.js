import React from "react";
import Child from "./Child";

const Parent = params => {
  return (
    <>
      <button onClick={() => params.setName("i'm from Parent")}>
        from Parent
      </button>
      <Child setName={params.setName} />
    </>
  );
};
export default Parent;
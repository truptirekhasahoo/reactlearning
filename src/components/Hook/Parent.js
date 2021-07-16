import React, { useState }  from "react";

const Parent = (props) => {
  return (
    <>
      <h1>I am Parent</h1>
      <div>Message from Grand Parent: "{props.name}"</div>
    </>
  );
};
export default Parent;
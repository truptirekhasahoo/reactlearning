import React, { Component } from "react";

function Button(props) {
  return (
    <div>
      {console.log("Render Button", props.children)}
      <button onClick={props.fn}>{props.children}</button>
    </div>
  );
}

export default React.memo(Button);

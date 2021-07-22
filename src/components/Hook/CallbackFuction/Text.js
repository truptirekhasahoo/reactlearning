import React, { Component } from "react";

function Text(props) {
  return (
    <div>
      {console.log(props.text + ":" + props.state)}
      <p>{props.state}</p>
    </div>
  );
}

export default React.memo(Text);

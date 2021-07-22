import React, { Component } from "react";

function Title() {
  return (
    <div>
      {console.log("Title")}
      <h3>usecallback Hook</h3>
    </div>
  );
}

export default React.memo(Title);

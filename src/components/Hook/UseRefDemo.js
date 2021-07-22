import React, { Component, useRef } from "react";

export default function UseRefDemo() {
  const inputText = useRef();
  const inputpassword = useRef();
  const getData = () => {
    const input1 = inputText.current.value;
    const input2 = inputpassword.current.value;
    alert(input1);
    alert(input2);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="card-body">
            <div className="form-group">
              <input type="text" ref={inputText} placeholder="Enter Name" />
            </div>
            <div className="form-group">
              <input
                type="password"
                ref={inputpassword}
                placeholder="Enter Password"
              />
            </div>
            <button className="btn btn-primary px-3" onClick={getData}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

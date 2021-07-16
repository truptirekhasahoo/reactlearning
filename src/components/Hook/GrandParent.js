import React, { useState } from "react";
import Parent from "./Parent";

const GrandParent = () => {
  const [name, setName] = useState("I'm Grand Parent");
  return (
    <>
      <h1>Grand Parent</h1>
      <div>{name}</div>
      <Parent name={name} />
    </>
  );
};
export default GrandParent;
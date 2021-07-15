import React, { useState } from "react";
import Parent from "./Parent";

const GrandParent = () => {
  const [name, setName] = useState("i'm Grand Parent");
  return (
    <>
      <div>{name}</div>
      <Parent setName={setName} />
    </>
  );
};
export default GrandParent;
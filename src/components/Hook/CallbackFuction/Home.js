import React, { useState, useCallback } from "react";
import Button from "./Button";
import Text from "./Text";
import Title from "./Title";
function Home() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(1000);

  const incAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const incSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Text state={age} text="Age" />
      <Button fn={incAge}>IncAge</Button>
      <Text state={salary} text="Salary" />
      <Button fn={incSalary}>IncSalary</Button>
    </div>
  );
}
export default React.memo(Home);
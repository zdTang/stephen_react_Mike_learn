import { useState, useEffect } from "react";
import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      CounterPage
      <div>
        <h1>Count is {count}</h1>
        <Button
          success
          className="mb-5 mx-2"
          outline
          rounded
          onClick={handleClick}
        >
          Increment
        </Button>
      </div>
    </div>
  );
};

export default CounterPage;

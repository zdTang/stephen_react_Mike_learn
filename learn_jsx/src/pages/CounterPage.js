import Button from "../components/Button";
import Panel from "../components/Panel";
import { useState } from "react";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flax flex-row">
        <Button
          success
          className="mb-5 mx-2"
          outline
          rounded
          onClick={increment}
        >
          Increment
        </Button>
        <Button
          success
          className="mb-5 mx-2"
          outline
          rounded
          onClick={decrement}
        >
          Decrement
        </Button>
      </div>
      <form>
        <label>Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-3"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;

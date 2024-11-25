import Button from "../components/Button";
import Panel from "../components/Panel";
import { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "value_to_add") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  return state;
}

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(initialCount);
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    // setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0; // if the result of parseInt is false, return 0
    dispatch({ type: "value_to_add", payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
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
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-3"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;

import Button from "../components/Button";
import Panel from "../components/Panel";
import { useReducer } from "react";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change_value_to_add";

function reducer(state, action) {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };
    default:
      //throw new Error('Unexcepted action type:' + action.type); // We decide what will put here !!!
      return state;
  }
}

const CounterPage = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(initialCount);
  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    // setCount(count - 1);
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0; // if the result of parseInt is false, return 0
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
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

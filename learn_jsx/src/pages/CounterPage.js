import Button from "../components/Button";
import useCounter from "../hooks/use-Counter";

const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useCounter(initialCount);
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

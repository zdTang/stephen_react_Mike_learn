import Button from "./Button";
const App = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button primary className="mb-8" onClick={handleClick}>
          Hello
        </Button>
      </div>
      <div>
        <Button primary rounded onMouseEnter={handleClick}>
          Big Deal!
        </Button>
      </div>
      <div>
        <Button success outline rounded onMouseLeave={handleClick}>
          Holy Smoke!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          Trump 2024
        </Button>
      </div>
      <div>
        <Button warning outline>
          Learn stuff
        </Button>
      </div>
      <div>
        <Button danger outline>
          Learn stuff
        </Button>
      </div>
    </div>
  );
};

export default App;

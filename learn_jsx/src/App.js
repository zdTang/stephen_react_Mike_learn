import Button from "./Button";
const App = () => {
  return (
    <div>
      <div>
        <Button primary>Hello</Button>
      </div>
      <div>
        <Button primary rounded>
          Big Deal!
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          Holy Smoke!
        </Button>
      </div>
      <div>
        <Button secondary rounder>
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

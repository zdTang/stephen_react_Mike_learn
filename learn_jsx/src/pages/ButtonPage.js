import Button from "../components/Button";
const ButtonPage = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="flex justify-center ">
      <div>
        <Button primary className="mb-5 mx-2" onClick={handleClick}>
          Hello
        </Button>
      </div>
      <div>
        <Button
          primary
          className="mb-5 mx-2"
          rounded
          onMouseEnter={handleClick}
        >
          Big Deal!
        </Button>
      </div>
      <div>
        <Button
          success
          className="mb-5 mx-2"
          outline
          rounded
          onMouseLeave={handleClick}
        >
          Holy Smoke!
        </Button>
      </div>
      <div>
        <Button className="mb-5 mx-2" secondary rounded>
          Trump 2024
        </Button>
      </div>
      <div>
        <Button className="mb-5 mx-2" warning outline>
          Learn stuff
        </Button>
      </div>
      <div>
        <Button className="mb-5 mx-2" danger outline>
          Learn stuff
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;

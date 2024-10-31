import ButtonPage from "./pages/ButtonPage";
const App = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <ButtonPage />
    </div>
  );
};

export default App;

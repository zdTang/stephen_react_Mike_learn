import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";
const App = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <ButtonPage />
      <Accordion />
    </div>
  );
};

export default App;

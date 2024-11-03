import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
const App = () => {
  const options = [
    { label: "Red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];
  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <Dropdown options={options} />
    </div>
  );
};

export default App;

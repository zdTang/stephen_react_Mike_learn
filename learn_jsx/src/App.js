import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
const App = () => {
  const options = [
    { lable: "Red", value: "red" },
    { lable: "blue", value: "blue" },
    { lable: "green", value: "green" },
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

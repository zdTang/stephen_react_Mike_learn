import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
const App = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => setSelected(option);
  const options = [
    { label: "Red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];
  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
};

export default App;

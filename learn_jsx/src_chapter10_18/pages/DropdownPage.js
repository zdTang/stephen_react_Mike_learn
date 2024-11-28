import Dropdown from "../components/Dropdown";
import { useState } from "react";

const DropdownPage = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => setSelected(option);
  const options = [
    { label: "Red", value: "red" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];
  return (
    <div>
      <Dropdown options={options} value={selected} onChange={handleSelect} />
    </div>
  );
};

export default DropdownPage;

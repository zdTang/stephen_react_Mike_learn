import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {
  useEffect(() => {
    const handler = (event) => console.log(event.target);
    document.addEventListener("click", handler, true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDownOpen = () => {
    setIsOpen((currentStatus) => {
      return !currentStatus;
    });
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
    //console.log(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropDownOpen}
      >
        {value?.label || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

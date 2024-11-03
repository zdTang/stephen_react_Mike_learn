import { useState } from "react";
function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDownOpen = () => {
    setIsOpen((currentStatus) => {
      return !currentStatus;
    });
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onSelect(option);
    console.log(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={toggleDropDownOpen}>{selection?.label || "Select..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
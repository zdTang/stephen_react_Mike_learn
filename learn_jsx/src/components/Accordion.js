import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const isExpended = expandedIndex === index;
    const icon = <span>{isExpended ? "down" : "left"}</span>;

    return (
      <div key={item.id}>
        <div onClick={() => handleClick(index)}>
          {item.label}
          {icon}
        </div>
        {isExpended && (
          <div onClick={() => handleClick(-1)}>{item.content}</div>
        )}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Accordion;

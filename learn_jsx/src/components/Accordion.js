import { useState } from "react";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const renderedItems = items.map((item, index) => {
    const isExpended = expandedIndex === index;

    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>{item.label}</div>
        {isExpended && (
          <div onClick={() => setExpandedIndex(-1)}>{item.content}</div>
        )}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
};

export default Accordion;

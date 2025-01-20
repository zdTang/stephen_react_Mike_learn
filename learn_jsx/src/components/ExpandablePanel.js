import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);
  const content = <div className="p-2 border-t">{children}</div>;
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div onClick={() => setExpanded(!expanded)} className="cursor-pointer">
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && content}
    </div>
  );
}

export default ExpandablePanel;

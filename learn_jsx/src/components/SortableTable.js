import Table from "./Table";
import { useState } from "react";
const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;
  const handleClick = (label) => {
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder("null");
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) return column;
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });
  //...props has a 'config',but it will be overwriten
  // Only sort data if both sortOrder and sortBy are not null
  // Find the correct sortValue function and use it for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return "Show both icons";
    }

    if (sortOrder === null) {
      return "show both icons";
    } else if (sortOrder === "asc") {
      return "show up icon";
    } else if (sortOrder === "desc") {
      return "show down icon";
    }
  }
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;

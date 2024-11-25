import { useState } from "react";

export default function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

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

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  return { sortOrder, sortBy, setSortColumn, sortedData };
}

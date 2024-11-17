const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((fruit) => {
    //Render one row
    const renderedCells = config.map((column) => {
      return <td key={column.label}>{column.render(fruit)}</td>;
    });
    return (
      <tr className="border-b-2" key={fruit.name}>
        {renderedCells}
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;

import React from "react";
import classes from "./Table.module.css";
import "./table.css";

const TableComponent = ({ tableHeading, tableData }) => {
  const renderValue = (value, column) => {
    if (column && column.renderValue) {
      return column.renderValue(value);
    }
    return value;
  };

  return (
    <table className={classes.tableDiv}>
      <thead>
        <tr>
          {tableHeading.map((heading, idx) => (
            <th key={idx}>{heading.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {tableHeading.map((heading, colIndex) => (
              <td key={colIndex}>{renderValue(row[heading.key], heading)} </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

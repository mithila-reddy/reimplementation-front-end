import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CourseTableHeader = ({ columnKeys ,onSortClick}) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSortClick = (column) => {
    if(column==='')
    {

    }
    else{
    if (onSortClick) {
      onSortClick(column);
    }
    if (sortColumn === column) {
      // If the same column is clicked twice, toggle the sort direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Otherwise, sort by the new column in ascending order
      setSortColumn(column);
      setSortDirection("asc");
    }
  }
  };

  return (
    <div className="card-component p-2 pointer">
      <div className="card">
        <div className="card-header row">
        {columnKeys.map((column) => (
            <div
              key={column.key}
              className="col-sm-2"
              onClick={() => handleSortClick(column.key)}
            >
              <strong>{column.label}</strong>
              {sortColumn === column.key && (
                <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default CourseTableHeader;
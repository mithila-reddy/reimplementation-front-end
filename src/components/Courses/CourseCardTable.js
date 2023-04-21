import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CourseTableHeader = ({ columnKeys }) => {
    if (!columnKeys) {
        return null; // Or some other fallback component
      }
    
    return (
      <div className="card-component p-2">
        <div className="card">
          <div className="card-header row">
            {columnKeys.map((key) => (
              <div key={key} className="col-sm-2">
                <strong>{key}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default CourseTableHeader;
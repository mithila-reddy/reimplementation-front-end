import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CourseTableHeader = ({ columnKeys }) => {
    if (!columnKeys) {
        return null; // Or some other fallback component
      }
    
    return (
      <div className="card-component card" style={{ overflow: "hidden" }}>
       
          <div className="card-header row">
            {columnKeys.map((key) => (
              <div key={key} className="col">
                <strong>{key}</strong>
              </div>
            ))}
          </div>
      
      </div>
    );
  };
  
export default CourseTableHeader;
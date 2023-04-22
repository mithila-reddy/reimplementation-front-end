import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseList  from "./CourseList";

  const CourseCard = ({ course }) => {
    const [showAssignments, setShowAssignments] = useState(false);
    const keys = Object.keys(course).filter(key => key !== 'assignments' && !key.includes("Id"));
    const columnKeys = [
      { key: "assignmentName", label: "Assignment Name" },
      { key: "institution", label: "Institution" },
      { key: "createDate", label: "Created Date" },
      { key: "updateDate", label: "Updated Date" },
      { key: "", label: "Actions" }
    ];
    function handleClick(event) {
      event.stopPropagation();
    
    }
  
    const toggleAssignments = (assignments) => {
      
        if(!assignments)
        {
         
        }
        else{
        setShowAssignments(!showAssignments);
        
        }
    };
    if (!course) {
        return null; // Or some other fallback component
      }
    
  
    return (
      
        <div style={{ marginBottom: "5px" }}>
        <div className="card-component p-2 card"
           onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#f2f2f2"}
           onMouseOut={(e) => e.currentTarget.style.backgroundColor = ""}>
            
          <div className="card-body row" onClick={() => toggleAssignments(course.assignments)} >
          {keys.map((key, index) => (
        <div key={index} className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black' }}>
          {course[key]}
        </div>
      ))}
      <div className="card-text col" style={{ wordWrap: 'break-word' }}>
            
          </div>

          {showAssignments && 
           <div onClick={handleClick}>
        <CourseList  courses={course.assignments} columnKeys={columnKeys} />
        </div>

        


       
    }

        </div>
        </div>
        </div>
        
    );
  };

  export default CourseCard;

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


  
  
  
  const CourseCard = ({ course }) => {
    const [showAssignments, setShowAssignments] = useState(false);
  
    const toggleAssignments = (assignments) => {
        if(!assignments)
        {
            setShowAssignments(showAssignments)
        }
        else{
      setShowAssignments(!showAssignments);
        }
    };
    if (!course) {
        return null; // Or some other fallback component
      }
    
  
    return (
      
      <div className="card-component p-2">
        <div className="card">
          
          <div className="card-body row" onClick={() => toggleAssignments(course.assignments)}>
            <div className="card-text col-sm-2">{course.courseName}</div>
            <div className="card-text col-sm-2">{course.institution}</div>
            <div className="card-text col-sm-2">{course.createDate}</div>
            <div className="card-text col-sm-2">{course.updateDate}</div>
            <div className="card-text col-sm-2"></div>
          </div>
          {showAssignments && (
            <div className="mt-3">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {course.assignments.map((assignment) => (
                  <div key={assignment.assignmentName} className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{assignment.assignmentName}</h5>
                        <strong> Actions: </strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  export default CourseCard;

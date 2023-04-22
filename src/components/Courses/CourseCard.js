import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export const AssignmentsCard = ({ assignments }) => {
  const columnKeys=['AssignmentName','Institution','Created Date','Updated Date','Actions']

  return (


    <div className="card-component rounded" style={{ overflow: "hidden" , width: "80%" ,marginLeft: "auto"}}>


  <div className="card-header row ">
              {columnKeys.map((key) => (
                <div key={key} className="col"> 
                  <strong>{key}</strong>
                </div>
              ))}
            </div>

        {assignments.map((assignment) => (
          <div key={assignment.assignmentName} className="card-text col">
            <div className="card"  style={{ marginBottom: "0px" }}>

            <div className="card-body row">
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black'  }}>{assignment.assignmentName}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black' }}>{assignment.institution}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black' }}>{assignment.createDate}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word' , borderRight: '1px solid black'}}>{assignment.updateDate}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word' }}></div>
            
          </div>
            </div>
          </div>
        ))}
    </div>
  );
};


  
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
      
        <div style={{ marginBottom: "5px" }}>
        <div className="card-component p-2 card">
          <div className="card-body row" onClick={() => toggleAssignments(course.assignments)}>
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black'  }}>{course.courseName}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black' }}>{course.institution}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word', borderRight: '1px solid black' }}>{course.createDate}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word' , borderRight: '1px solid black'}}>{course.updateDate}</div>
            <div className="card-text col" style={{ wordWrap: 'break-word' }}></div>
          </div>

          {showAssignments && <AssignmentsCard assignments={course.assignments} />}

        </div>
        </div>
        
    );
  };

  export default CourseCard;

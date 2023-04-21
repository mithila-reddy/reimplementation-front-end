import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ list, dataCategory, collapse }) => {
    const [showAssignments, setShowAssignments] = useState(false);
  
    const toggleAssignments = () => {
        if(collapse === true){
            setShowAssignments(!showAssignments);
        }
    }
    return (
    <div className="card-component p-2">
        <div className='card'>
            <div className="card-body row" onClick={toggleAssignments}>
                    {dataCategory === 'assignments' && (
                        <div className="card-text col-sm">
                            {list.assignmentName}
                        </div>
                    )}
                    <div className="card-text col-sm">
                        {list.courseName}
                    </div>
                    <div className="card-text col-sm">
                        {list.institution}
                    </div>
                    <div className="card-text col-sm">
                        {list.createDate}
                    </div>
                    <div className="card-text col-sm">
                        {list.updateDate}
                    </div>
                    <div className="card-text col-sm">
                        {/* need to add actions */}
                    </div>
                </div>
                {showAssignments && (
                    <div className="mt-3">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {list.assignments.map((assignment) => (
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

  export default Card;
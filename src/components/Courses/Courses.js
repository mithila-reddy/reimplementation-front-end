import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CourseCard = ({ course }) => {
    const [showAssignments, setShowAssignments] = useState(false);
  
    const toggleAssignments = () => {
      setShowAssignments(!showAssignments);
    }
  
    return (
        <div class="card-component">
        <div class="card h-100 text-center">
             <h5 class="card-header">{course.courseName}</h5>
      <div class="card-body" onClick={toggleAssignments}>
       
        <h6 class="card-subtitle mb-2 text-muted">{course.institution}</h6>
        <p class="card-text">
                                    <strong>Create Date: </strong>{course.createDate}
                                    <br />
                                    <strong>Update Date: </strong>{course.updateDate}
                                </p>
        {showAssignments && (
          <div className="assignment-list">
            
            {course.assignments.map((assignment) => (
                <div class="card h-50">
                <div class="card-body">
              <div key={assignment.assignmentName} className="assignment-card">
                <h3>{assignment.assignmentName}</h3>
                <p>{assignment.institution}</p>
                <p>Created: {assignment.createDate}</p>
                <p>Last updated: {assignment.updateDate}</p>
              </div>
              </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div class="card-footer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-pencil-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                </svg>
                                <svg width="30" height="25" viewBox="0 0 16 16">
                                    <path fill="#FF0000" d="M14.2,1.7L9.9,6L14.2,10.3c0.5,0.5,0.5,1.3,0,1.8l-1.4,1.4c-0.5,0.5-1.3,0.5-1.8,0L8,9.8L3.7,14.1c-0.5,0.5-1.3,0.5-1.8,0l-1.4-1.4c-0.5-0.5-0.5-1.3,0-1.8L6,6.1L1.7,1.8c-0.5-0.5-0.5-1.3,0-1.8l1.4-1.4c0.5-0.5,1.3-0.5,1.8,0L8,4.2l4.3-4.3c0.5-0.5,1.3-0.5,1.8,0l1.4,1.4C14.7,0.4,14.7,1.2,14.2,1.7z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-plus-fill"
                                    viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd"
                                        d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-person-x-fill"
                                    viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
                                </svg>
                                <svg width="40" height="30" viewBox="0 0 16 16">
                                    <path d="M11,3H5C3.895,3,3,3.895,3,5v6c0,1.105,0.895,2,2,2h6c1.105,0,2-0.895,2-2V5C13,3.895,12.105,3,11,3z M10,11H6v-1h4V11z M10,9H6V8h4V9z M10,7H6V6h4V7z M13,11l-2.5,2.5V13c0,0.553-0.448,1-1,1H5c-0.552,0-1-0.447-1-1V5c0-0.553,0.448-1,1-1h6c0.552,0,1,0.447,1,1v0.5L13,6V11z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle fill="#0077c8" cx="12" cy="12" r="11" />
                                    <path fill="#FFFFFF" d="M19.1 11.3c0 3.5-2.8 6.3-6.3 6.3s-6.3-2.8-6.3-6.3c0-3.5 2.8-6.3 6.3-6.3s6.3 2.8 6.3 6.3z" />
                                    <path fill="#0077c8" d="M12.6 8.6c0 1.7-1.4 3-3 3s-3-1.4-3-3c0-1.7 1.4-3 3-3s3 1.4 3 3z" />
                                    <path fill="#FFFFFF" d="M9.6 8.6c0 .9-.7 1.6-1.6 1.6S6.4 9.5 6.4 8.6c0-.9.7-1.6 1.6-1.6s1.6.7 1.6 1.6z" />
                                </svg>

                            </div>
                             
      </div>
      <br></br>
      </div>
    );
  };
  
  const CourseList = ({ courses }) => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAttribute, setSortAttribute] = useState('courseName');
  
    // Sort courses by name in ascending or descending order
    const sortedCourses = courses.sort((a, b) => {
        const comparison = sortOrder === 'asc' ? 1 : -1;
        if (a[sortAttribute] < b[sortAttribute]) {
          return -comparison;
        }
        if (a[sortAttribute] > b[sortAttribute]) {
          return comparison;
        }
        return 0;
      });
  
    // Filter courses by search term
    const filteredCourses = sortedCourses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.createDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.updateDate.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
    return (
      <div className="course-list">
        <div className="sort-controls">
          <label htmlFor="sort-order">Sort by:</label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <label htmlFor="search-term">Search:</label>
          <input
            id="search-term"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
       
        {filteredCourses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}

     
      </div>
    );
  };





const Courses = () => {
    const dummyData = [
        {
          "courseId": 1,
          "courseName": "Computer Science 101",
          "institution": "Harvard University",
          "createDate": "2022-01-01",
          "updateDate": "2022-02-01",
          "assignments": [
            {
              "assignmentName": "Project 1",
              "institution": "Harvard University",
              "createDate": "2022-01-15",
              "updateDate": "2022-02-01"
            },
            {
              "assignmentName": "Quiz 1",
              "institution": "Harvard University",
              "createDate": "2022-01-30",
              "updateDate": "2022-02-01"
            }
          ]
        },
        {
          "courseId": 2,
          "courseName": "Mathematics 101",
          "institution": "Massachusetts Institute of Technology",
          "createDate": "2022-02-15",
          "updateDate": "2022-03-01",
          "assignments": [
            {
              "assignmentName": "Problem Set 1",
              "institution": "Massachusetts Institute of Technology",
              "createDate": "2022-02-25",
              "updateDate": "2022-03-01"
            },
            {
              "assignmentName": "Midterm Exam",
              "institution": "Massachusetts Institute of Technology",
              "createDate": "2022-03-01",
              "updateDate": "2022-03-10"
            }
          ]
        },
        {
          "courseId": 3,
          "courseName": "English 101",
          "institution": "Stanford University",
          "createDate": "2022-03-15",
          "updateDate": "2022-04-01",
          "assignments": [
            {
              "assignmentName": "Essay 1",
              "institution": "Stanford University",
              "createDate": "2022-03-20",
              "updateDate": "2022-04-01"
            },
            {
              "assignmentName": "Presentation",
              "institution": "Stanford University",
              "createDate": "2022-03-30",
              "updateDate": "2022-04-01"
            }
          ]
        },
        {
          "courseId": 4,
          "courseName": "History 101",
          "institution": "Yale University",
          "createDate": "2022-04-15",
          "updateDate": "2022-05-01",
          "assignments": [
            {
              "assignmentName": "Research Paper",
              "institution": "Yale University",
              "createDate": "2022-04-20",
              "updateDate": "2022-05-01"
            },
            {
              "assignmentName": "Exam 1",
              "institution": "Yale University",
              "createDate": "2022-04-30",
              "updateDate": "2022-05-01"
            }
          ]
        }
        ];
    
      return (
        <div>
          <h1>Courses</h1>
          <CourseList courses={dummyData} />
        </div>
      );
    };

export default Courses;
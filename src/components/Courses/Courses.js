import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const CourseCard = ({ course }) => {
    const [showAssignments, setShowAssignments] = useState(false);
  
    const toggleAssignments = () => {
      setShowAssignments(!showAssignments);
    }
  
    return (
     
  
    

      <div className="card-component p-2">
  <div className="card">
    <div className="card-header row">
      <div className="col-sm-3">
       <strong> Course Name</strong>
      </div>
      <div className="col-sm-3">
        <strong>Institution</strong>
      </div>
      <div className="col-sm-2">
        <strong>Created Date</strong>
      </div>
      <div className="col-sm-2">
        <strong>Updated Date</strong>
      </div>
      <div className="col-sm-2">
        <strong>Actions</strong>
      </div>
    </div>
    <div className="card-body row" onClick={toggleAssignments}>
      <div className="card-text col-sm-3">
        {course.courseName}
      </div>
      <div className="card-text col-sm-3">
        {course.institution}
      </div>
      <div className="card-text col-sm-2">
        {course.createDate}
      </div>
      <div className="card-text col-sm-2">
        {course.updateDate}
      </div>
      <div className="card-text col-sm-2">
        
      </div>
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
      <div className="course-list p-3">
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
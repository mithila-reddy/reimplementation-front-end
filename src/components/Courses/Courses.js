import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../UI/Card/Card';
import CardHeader from "../UI/Card/CardHeader";
  
  const CourseList = ({ courses, header }) => {
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
        
       
        <CardHeader headerList={header} />
        {filteredCourses.map((course) => (
          <Card key={course.courseId} list={course} dataCategory='courses' collapse={true} />
        ))}

     
      </div>
    );
  };





const Courses = () => {
    const header = ['Course', 'Institution', 'Create Date', 'Update Date', 'Actions']
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
          <CourseList courses={dummyData} header={header}/>
        </div>
      );
    };

export default Courses;
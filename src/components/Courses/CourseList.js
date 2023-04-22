import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCard from './CourseCard';
import CourseTableHeader from './CourseCardTable';

const CourseList = ({ courses }) => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortAttribute, setSortAttribute] = useState('courseName');
    const columnKeys = ["Course Name", "Institution", "Created Date", "Updated Date", "Actions"];

  
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
        <br></br>
        <CourseTableHeader columnKeys={columnKeys} />

        {filteredCourses.map((course) => (
          <CourseCard key={course.courseId} course={course}  />
        ))}

     
      </div>
    );
  };

  export default CourseList;
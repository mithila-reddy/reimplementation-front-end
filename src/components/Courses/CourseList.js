import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseCard from './CourseCard';
import CourseTableHeader from './CourseCardTable';

const CourseList = ({ courses }) => {
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const columnKeys = [
      { key: "courseName", label: "Course Name" },
      { key: "institution", label: "Institution" },
      { key: "createDate", label: "Created Date" },
      { key: "updateDate", label: "Updated Date" },
      { key: "", label: "Actions" }
    ];

  
    // Sort courses by name in ascending or descending order
    let sortedCourses = [...courses];

    // Filter courses by search term
    

  const [sortColumn, setSortColumn] = useState('courseName');

  const handleSortClick = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortOrder((prevState) => (prevState === "asc" ? "desc" : "asc"));
      console.log(columnKey)
    } else {
      setSortColumn(columnKey);
      setSortOrder("asc");
    }
  };

  
  if (sortColumn) {
    sortedCourses.sort((a, b) => {
      let comparison = a[sortColumn].localeCompare(b[sortColumn]);
      return sortOrder === "asc" ? comparison : -comparison;
    });
  }
  const filteredCourses = sortedCourses.filter((course) =>
    course.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.createDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.updateDate.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
    return (
      <div className="course-list p-3">
        <div className="sort-controls">

          <label htmlFor="search-term">Search:</label>
          <input
            id="search-term"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <br></br>
        <CourseTableHeader columnKeys={columnKeys} onSortClick={handleSortClick} />

        {filteredCourses.map((course) => (
          <CourseCard key={course.courseId} course={course}  />
        ))}

     
      </div>
    );
  };

  export default CourseList;
import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';
const Courses = () => {
const [courses, setCourses] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    };

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        name: "Course 1",
        institution: "Institution 1",
        createdate: "2021-01-01",
        updatedate: "2021-01-01",
      },
      {
        id: 2,
        name: "Course 2",
        institution: "Institution 2",
        createdate: "2021-01-01",
        updatedate: "2021-01-01",
      },
      {
        id: 3,
        name: "Course 3",
        institution: "Institution 3",
        createdate: "2021-01-01",
        updatedate: "2021-01-01",
      },
    ];
    setCourses(dummyData);
  }, []);

  const filteredData = courses.filter((course) => {
    const courseName = course.name.toLowerCase();
    const search = searchQuery.toLowerCase();
    return courseName.includes(search);
  });

    return (
        <div>
            <h1 class="col text-center">Manage Content</h1>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </form>
            </div>
            <div>
                <Card>
                    <Card.Header>
                        <h3 class="col text-center">My Courses</h3>
                    </Card.Header>
                    <Card.Body>
                        <Card.Header>
                            <div className="row">
                                <div className="col">Name</div>
                                <div className="col">Institution</div>
                                <div className="col">Create Date</div>
                                <div className="col">Update Date</div>
                                <div className="col">Actions</div>
                            </div>
                        </Card.Header>
                        {filteredData.map((course) => (
                            <Card key={course.id}>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col">{course.name}</div>
                                        <div className="col">{course.institution}</div>
                                        <div className="col">{course.createdate}</div>
                                        <div className="col">{course.updatedate}</div>
                                        <div className="col">
                                            
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Courses;
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
                institution: "Institution 9",
                createdate: "2021-01-12",
                updatedate: "2021-01-08",
            },
            {
                id: 2,
                name: "Course 2",
                institution: "Institution 8",
                createdate: "2021-01-11",
                updatedate: "2021-01-10",
            },
            {
                id: 3,
                name: "Course 3",
                institution: "Institution 7",
                createdate: "2021-01-10",
                updatedate: "2021-01-09",
            },
        ];
        setCourses(dummyData);
    }, []);

    const filteredData = courses.filter((course) => {
        const courseName = course.name.toLowerCase();
        const search = searchQuery.toLowerCase();
        return courseName.includes(search);
    });

    const [sortConfig, setSortConfig] = useState({
        key: 'name',
        direction: 'ascending'
    });

    const sortedData = filteredData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });
    const handleSortChange = (event) => {
        const selectedKey = event.target.value;
        setSortConfig({
            key: selectedKey,
            direction: sortConfig.direction
        });
    }

    const [direction, setDirection] = useState('ascending');

    const handleDirectionChange = (selectedDirection) => {
        setDirection(selectedDirection);
        setSortConfig({ ...sortConfig, direction: selectedDirection });
    }

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div class="container">
            <h1 class="text-center mb-5">Manage Courses</h1>
            <form>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </form>
            <label htmlFor="sort-dropdown">Sort By:</label>
            <select id="sort-dropdown" onChange={handleSortChange}>
                <option value="name">Name</option>
                <option value="institution">Institution</option>
                <option value="createdate">CreateDate</option>
                <option value="updatedate">UpdateDate</option>
            </select>
            <label htmlFor="direction"> In </label>
            <select id="direction" value={direction} onChange={(e) => handleDirectionChange(e.target.value)}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            <h3 class="text-center mb-4">My Courses</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {sortedData.map((course) => (
                    <div class="col">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">{course.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{course.institution}</h6>
                                <p class="card-text">
                                    <strong>Create Date: </strong>{course.createdate}
                                    <br />
                                    <strong>Update Date: </strong>{course.updatedate}
                                </p>
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
                    </div>
                ))}
            </div>
        </div>


    );

};

export default Courses;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

function Course() {
  const [courses, setCourses] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [fee, setFee] = useState("");
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    const response = await axios.get(
      "http://localhost:8085/getCourses"
    );
    setCourses(response.data);
  };

  const addCourse = async () => {

  if (!id || !name || !fee) {
    alert("Please fill all fields");
    return;
  }

  const course = {
    id,
    name,
    fee
  };

  try {

    await axios.post(
      "http://localhost:8085/addCourse",
      course
    );

    alert("Course Added Successfully");

    getCourses();

    setId("");
    setName("");
    setFee("");

  } catch(error) {

    alert("Invalid Data! Check Course ID, Name and Fee");

  }
};

  

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    await axios.delete(
      `http://localhost:8085/deleteCourse/${id}`
    );

    alert("Course Deleted Successfully");

    getCourses();
  };

  const editCourse = (course) => {
    setId(course.id);
    setName(course.name);
    setFee(course.fee);
  };

  const updateCourse = async () => {
    if (!id || !name || !fee) {
      alert("Please fill all fields");
      return;
    }

    const course = {
      id,
      name,
      fee
    };

    await axios.put(
      "http://localhost:8085/updateCourse",
      course
    );

    alert("Course Updated Successfully");

    getCourses();

    setId("");
    setName("");
    setFee("");
  };

  const searchCourse = async () => {
    if (!searchId) {
      alert("Enter Course ID");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8085/getCourse/${searchId}`
      );

      setCourses([response.data]);
    } catch {
      alert("Course Not Found");
    }
  };

  const clearFields = () => {
    setId("");
    setName("");
    setFee("");
  };



const sortByFee = () => {

  const sorted = [...courses].sort(
    (a, b) => a.fee - b.fee
  );

  setCourses(sorted);
};

const sortByName = () => {

  const sorted = [...courses].sort(
    (a, b) => a.name.localeCompare(b.name)
  );

  setCourses(sorted);
};

const [searchName, setSearchName] = useState("");

const searchByName = async () => {

  const response = await axios.get(
    `http://localhost:8085/searchByName/${searchName}`
  );

  setCourses(response.data);
};


const highestFee =
  courses.length > 0
    ? Math.max(...courses.map(course => Number(course.fee)))
    : 0;

const lowestFee =
  courses.length > 0
    ? Math.min(...courses.map(course => Number(course.fee)))
    : 0;

   const totalFees = courses.reduce(
  (sum, course) => sum + Number(course.fee),
  0
);

const [searchFee, setSearchFee] = useState("");
const searchByFee = async () => {

  const response = await axios.get(
    `http://localhost:8085/searchByFee/${searchFee}`
  );

  setCourses(response.data);
};

  return (
     <div className="container mt-5" style={{ padding: "20px" }}>
    <div className="card shadow p-3 mb-3">
<h4>📚 Course Management</h4>  <p>
    Add, update, search and manage university courses.
  </p>
  </div>
      <h1
        className="text-center mb-4"
        style={{ color: "#0d6efd" }}
      >
        Course Management System
      </h1>

      <input
        className="form-control"
        type="number"
        placeholder="Enter Course ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <br />
      <input
        className="form-control"
        type="text"
        placeholder="Enter Course Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        className="form-control"
        type="number"
        placeholder="Enter Fee"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />

      <br />

      <button
        className="btn btn-primary"
        onClick={addCourse}
      >
        Add Course
      </button>

      <button
        className="btn btn-success ms-2"
        onClick={updateCourse}
      >
        Update Course
      </button>

      <button
        className="btn btn-secondary"
        onClick={clearFields}
      >
        Clear
      </button>
      <button
  className="btn btn-outline-primary"
  onClick={sortByFee}
>
  Sort By Fee
</button>
<button
  className="btn btn-outline-success"
  onClick={sortByName}
>
  Sort By Name
</button>

      <br />
      <br />

      <input
        className="form-control"
        type="number"
        placeholder="Search by ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />

      <br />

<input
  className="form-control"
  type="number"
  placeholder="Search By Fee"
  value={searchFee}
  onChange={(e) => setSearchFee(e.target.value)}
/>

<br />

<button
  className="btn btn-info"
  onClick={searchByFee}
>
  Search Fee
</button>

      <button
        className="btn btn-info"
        onClick={searchCourse}
      >
        Search
      </button>

      <input
  className="form-control"
  type="text"
  placeholder="Search by Course Name"
  value={searchName}
  onChange={(e) => setSearchName(e.target.value)}
/>

<br />

<button
  className="btn btn-info"
  onClick={searchByName}
>
  Search Name
</button>

      <button
        className="btn btn-dark ms-2"
        onClick={getCourses}
      >
        Show All
      </button>

      <br />
      <br />
      
<div className="row mb-3">

  <div className="col-md-3">
    <div className="card p-3 text-center">
      <h5>Total Courses</h5>
      <h2>{courses.length}</h2>
    </div>
  </div>
    <div className="col-md-3">
    <div className="card p-3 text-center">
      <h5>Total Fees</h5>
      <h2>₹{totalFees}</h2>
    </div>
  </div>

  <div className="col-md-3">
  <div className="card p-3 text-center">
    <h5>Highest Fee</h5>
    <h2>₹{highestFee}</h2>
  </div>
</div>

<div className="col-md-3">
  <div className="card p-3 text-center">
    <h5>Lowest Fee</h5>
    <h2>₹{lowestFee}</h2>
  </div>
</div>

</div>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Fee</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
  {courses.length === 0 ? (
    <tr>
      <td colSpan="4" className="text-center">
        No Courses Found
      </td>
    </tr>
  ) : (
    courses.map((course) => (
      <tr key={course.id}>
        <td>{course.id}</td>
        <td>{course.name}</td>
        <td>{course.fee}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => editCourse(course)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger ms-2"
            onClick={() => deleteCourse(course.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  )}
</tbody>
      </table>
      
    </div>



  );
  
}

export default Course;
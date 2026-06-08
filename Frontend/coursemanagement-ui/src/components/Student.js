import React, { useState, useEffect } from "react";
import axios from "axios";

function Student() {

const [students, setStudents] = useState([]);
const [id, setId] = useState("");
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [mobile, setMobile] = useState("");
const [searchId, setSearchId] = useState("");

useEffect(() => {
getStudents();
}, []);

const getStudents = async () => {
const response = await axios.get(
"http://localhost:8085/getStudents"
);
setStudents(response.data);
};

const addStudent = async () => {

  if (!id || !name || !course || !mobile) {
    alert("Please fill all fields");
    return;
  }

  if (mobile.length !== 10) {
    alert("Mobile number must contain 10 digits");
    return;
  }

  const student = {
    id,
    name,
    course,
    mobile
  };

  await axios.post(
    "http://localhost:8085/addStudent",
    student
  );

  alert("Student Added Successfully");

  getStudents();

  setId("");
  setName("");
  setCourse("");
  setMobile("");
};

const deleteStudent = async (id) => {

const confirmDelete = window.confirm(
  "Delete this student?"
);

if (!confirmDelete) return;

await axios.delete(`http://localhost:8085/deleteStudent/${id}`);

alert("Student Deleted Successfully");

getStudents();
};

const searchStudent = async () => {

if (!searchId) {
  alert("Enter Student ID");
  return;
}

try {

  const response = await axios.get(
    `http://localhost:8085/getStudent/${searchId}`
  );

  setStudents([response.data]);

} catch {

  alert("Student Not Found");

}

};

const editStudent = (student) => {
  setId(student.id);
  setName(student.name);
  setCourse(student.course);
  setMobile(student.mobile);
};

const updateStudent = async () => {
  if (!id || !name || !course || !mobile) {
  alert("Please fill all fields");
  return;
}

if (mobile.length !== 10) {
  alert("Mobile number must contain 10 digits");
  return;
}

  const student = {
    id,
    name,
    course,
    mobile
  };

  await axios.put(
    "http://localhost:8085/updateStudent",
    student
  );

  alert("Student Updated Successfully");

  getStudents();

  setId("");
  setName("");
  setCourse("");
  setMobile("");
};

const [searchName, setSearchName] = useState("");

const searchStudentByName = async () => {

  const response = await axios.get(
    `http://localhost:8085/searchStudentByName/${searchName}`
  );

  setStudents(response.data);
};
return (
  <div className="card p-3 mb-3">
  <h4>Student Management</h4>
  <p>
    Register and manage student information.
  </p>

<div className="container mt-4">

  <h2 className="text-center mb-4">
    Student Management
  </h2>

  <input
    className="form-control"
    placeholder="Student ID"
    value={id}
    onChange={(e) => setId(e.target.value)}
  />

  <br />

  <input
    className="form-control"
    placeholder="Student Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <br />

  <input
    className="form-control"
    placeholder="Course"
    value={course}
    onChange={(e) => setCourse(e.target.value)}
  />

  <br />

  <input
    className="form-control"
    placeholder="Mobile Number"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
  />

  <br />

  <button
    className="btn btn-primary"
    onClick={addStudent}
  >
    Add Student
  </button>

  <br /><br />
  <button
  className="btn btn-success ms-2"
  onClick={updateStudent}
>
  Update Student
</button>

  <input
    className="form-control"
    placeholder="Search Student ID"
    value={searchId}
    onChange={(e) => setSearchId(e.target.value)}
  />

  <br />

  <button
    className="btn btn-info"
    onClick={searchStudent}
  >
    Search Student
  </button>

  <button
    className="btn btn-dark ms-2"
    onClick={getStudents}
  >
    Show All
  </button>

  <hr />

  <div className="card p-3 mb-3">
    <h5>Total Students</h5>
    <h2>{students.length}</h2>
  </div>

  <input
  className="form-control mt-2"
  placeholder="Search Student Name"
  value={searchName}
  onChange={(e) => setSearchName(e.target.value)}
/>

<br />

<button
  className="btn btn-info"
  onClick={searchStudentByName}
>
  Search Name
</button>

<div className="row mb-3">

  <div className="col-md-4">
    <div className="card p-3 bg-info text-white">
      <h5>Total Students</h5>
      <h2>{students.length}</h2>
    </div>
  </div>

</div>
</div>

  <table className="table table-bordered table-striped">

  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Course</th>
      <th>Mobile</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td>{student.course}</td>
        <td>{student.mobile}</td>

        <td>
          <button
            className="btn btn-warning"
            onClick={() => editStudent(student)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger ms-2"
            onClick={() => deleteStudent(student.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>

</table>

</div>

);
}

export default Student;

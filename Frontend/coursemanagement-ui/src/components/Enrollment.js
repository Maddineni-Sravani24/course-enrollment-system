import React, { useEffect, useState } from "react";
import axios from "axios";

function Enrollment() {

  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {

      const studentRes = await axios.get(
        "http://localhost:8085/getStudents"
      );

      const courseRes = await axios.get(
        "http://localhost:8085/getCourses"
      );

      setStudents(studentRes.data);
      setCourses(courseRes.data);

    } catch (error) {
      alert("Failed to load data");
    }
  };

  const enrollStudent = async () => {

    if (!selectedStudent || !selectedCourse) {
      alert("Please select student and course");
      return;
    }

    try {

      const student = students.find(
        (s) => String(s.id) === String(selectedStudent)
      );

      const updatedStudent = {
        id: student.id,
        name: student.name,
        mobile: student.mobile,
        course: selectedCourse
      };

      await axios.put(
        "http://localhost:8085/updateStudent",
        updatedStudent
      );

      alert("Student Enrolled Successfully");

      loadData();

      setSelectedStudent("");
      setSelectedCourse("");

    } catch (error) {

      alert("Enrollment Failed");

    }
  };

  return (
    <div className="card p-3 mb-3">
  <h4>Course Enrollment</h4>
  <p>
    Enroll students into available university courses.
  </p>
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Course Enrollment
      </h2>

      <div className="card p-4">

        <h4 className="mb-3">
          Enroll Student Into Course
        </h4>

        <select
          className="form-control mb-3"
          value={selectedStudent}
          onChange={(e) =>
            setSelectedStudent(e.target.value)
          }
        >
          <option value="">
            Select Student
          </option>

          {students.map((student) => (
            <option
              key={student.id}
              value={student.id}
            >
              {student.name}
            </option>
          ))}
        </select>

        <select
          className="form-control mb-3"
          value={selectedCourse}
          onChange={(e) =>
            setSelectedCourse(e.target.value)
          }
        >
          <option value="">
            Select Course
          </option>

          {courses.map((course) => (
            <option
              key={course.id}
              value={course.name}
            >
              {course.name}
            </option>
          ))}
        </select>

        <button
          className="btn btn-primary"
          onClick={enrollStudent}
        >
          Enroll Student
        </button>

      </div>
</div>
      <br />

      <div className="card p-3">

        <h4>Student Enrollments</h4>

        <table className="table table-bordered mt-3">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Mobile</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{student.mobile}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Enrollment;
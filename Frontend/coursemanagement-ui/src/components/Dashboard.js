import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [courseCount, setCourseCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    getCounts();
  }, []);

  const getCounts = async () => {
    try {

      const courseRes = await axios.get(
        "http://localhost:8085/courseCount"
      );

      const studentRes = await axios.get(
        "http://localhost:8085/studentCount"
      );

      setCourseCount(courseRes.data);
      setStudentCount(studentRes.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">

      {/* Hero Banner */}
      <div className="card shadow p-4 mb-4 text-center">
        <h1>🎓 University Course Enrollment System</h1>
        <p>
          Manage Courses, Students and Enrollments efficiently.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="row">

        <div className="col-md-3">
          <div className="card bg-primary text-white p-3">
            <h5>📚 Total Courses</h5>
            <h2>{courseCount}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-success text-white p-3">
            <h5>👨‍🎓 Total Students</h5>
            <h2>{studentCount}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-warning p-3">
            <h5>📝 Total Enrollments</h5>
            <h2>{studentCount}</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card bg-info text-white p-3">
            <h5>🟢 System Status</h5>
            <h2>Active</h2>
          </div>
        </div>

      </div>

      {/* Welcome Section */}
      <div className="card shadow p-4 mt-4">
        <h3>👋 Welcome</h3>

        <p>
          This system helps administrators manage
          university courses, students and enrollments
          from a single portal.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="row mt-4">

        <div className="col-md-4">
          <div className="card shadow p-3 text-center">
            <h4>📚 Courses</h4>
            <p>Manage all university courses.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3 text-center">
            <h4>👨‍🎓 Students</h4>
            <p>Manage student records.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3 text-center">
            <h4>📝 Enrollments</h4>
            <p>Manage course enrollments.</p>
          </div>
        </div>

      </div>

      {/* Recent Activities */}
      <div className="card shadow p-4 mt-4">

        <h4>📋 Recent Activities</h4>

        <ul>
          <li>✔ Course Added Successfully</li>
          <li>✔ Student Registered</li>
          <li>✔ Enrollment Completed</li>
        </ul>

      </div>

    </div>
  );
}

export default Dashboard;
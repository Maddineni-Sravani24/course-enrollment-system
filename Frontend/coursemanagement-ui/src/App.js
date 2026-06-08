import { useState } from "react";
import Course from "./components/Course";
import Student from "./components/Student";
import Dashboard from "./components/Dashboard";
import Enrollment from "./components/Enrollment";
import EnrollmentReport from "./components/EnrollmentReport";
function App() {

  const [page, setPage] = useState("dashboard");

  return (
    <div>

      <nav className="navbar navbar-dark bg-dark p-3">

       <h4 className="text-white m-0">
  🎓 UCES Portal
</h4>

        <div>

          <button
            className="btn btn-dark me-2"
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className="btn btn-primary me-2"
            onClick={() => setPage("course")}
          >
            Courses
          </button>

          <button
            className="btn btn-success me-2"
            onClick={() => setPage("student")}
          >
            Students
          </button>

          <button
            className="btn btn-warning"
            onClick={() => setPage("enrollment")}
          >
            Enrollment
          </button>

          <button
  className="btn btn-info ms-2"
  onClick={() => setPage("report")}
>
  Reports
</button>

        </div>

      </nav>

      {page === "dashboard" && <Dashboard />}

      {page === "course" && <Course />}

      {page === "student" && <Student />}

      {page === "enrollment" && <Enrollment />}
      {page === "report" && <EnrollmentReport />}

      <footer className="bg-dark text-white text-center p-3 mt-5">
  © 2026 University Course Enrollment System
  <br />
  Developed by Sravani
  <br />
  React JS | Spring Boot | MySQL
</footer>

    </div>
  );
}

export default App;
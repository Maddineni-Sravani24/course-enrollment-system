import React from "react";

function EnrollmentReport() {
  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="text-center">
          📊 Enrollment Report
        </h2>

        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Course Name</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Sravani</td>
              <td>Advanced Java</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EnrollmentReport;
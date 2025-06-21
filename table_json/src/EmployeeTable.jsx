import React, { useEffect, useState } from 'react';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/attendance')
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Emp ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>Basic Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.emp_id}>
            <td>{emp.emp_id}</td>
            <td>{emp.name}</td>
            <td>{emp.designation}</td>
            <td>{emp.department}</td>
            <td>{emp.basic_salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

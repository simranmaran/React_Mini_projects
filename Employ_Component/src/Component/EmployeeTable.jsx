// EmployeeTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/employees');
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ textAlign: 'center' }}>Employee Data</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }} border="1" cellPadding="10">
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp, index) => (
            <tr key={index}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
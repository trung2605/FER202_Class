import React from 'react';

const Exercise2 = ({ employees }) => {
  return (
    <div>
      <h2>Exercise 2</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise2;
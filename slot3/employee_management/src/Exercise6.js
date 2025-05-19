import React from 'react';

const Exercise6 = ({employees}) => {

  const itEmployees = employees.filter(employee => employee.department === "IT");

  return (
    <div>
      <h2>Exercise 6</h2>
      <ul>
        {itEmployees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} - {employee.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise6;
import React from 'react';

const Exercise7 = ({employees}) => {

  const sortedEmployees = [...employees].sort((a, b) => {
    const departmentComparison = a.department.localeCompare(b.department);
    if (departmentComparison !== 0) {
      return departmentComparison;
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div>
      <h2>Exercise 7</h2>
      <ul>
        {sortedEmployees.map((employee, index) => (
          <li key={employee.id || index}>
            {employee.name} ({employee.department})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercise7;
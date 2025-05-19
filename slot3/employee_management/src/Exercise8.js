import React from "react";

const Exercise8 = ({employees}) => {
  const groupedEmployees = employees.reduce((acc, employee) => {
    const { department } = employee;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(employee);
    return acc;
  }, {});

  return (
    <div>
      <h2>Exercise 8</h2>
      {Object.keys(groupedEmployees).map((department) => (
        <div key={department}>
          <h3>{department}</h3>
          <ul>
            {groupedEmployees[department].map((employee, index) => (
              <li key={employee.id || index}>{employee.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Exercise8;

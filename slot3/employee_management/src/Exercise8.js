import React from "react";

const Exercise8 = ({ employees }) => {
  const groupedEmployees = employees.reduce((acc, employee) => {
    const { department } = employee; //destructuring
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(employee);
    return acc;
  }, {});

  // {
  //   "HR": [
  //     { id: 1, name: 'Alice', department: 'HR' },
  //     { id: 4, name: 'David', department: 'HR' }
  //   ],
  //   "Engineering": [
  //     { id: 2, name: 'Bob', department: 'Engineering' },
  //     { id: 5, name: 'Eve', department: 'Engineering' }
  //   ],
  //   "Sales": [
  //     { id: 3, name: 'Charlie', department: 'Sales' }
  //   ]
  // }

  return (
    <div>
      <h2>Exercise 8</h2>
      {Object.keys(groupedEmployees).map((department) => ( //=> ['HR', 'Engineering', 'Sales']
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

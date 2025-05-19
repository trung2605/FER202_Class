import React from 'react';

const Exercise5 = ({employees}) => {

  return (
    <div>
      <h2>Exercise 5</h2>
      <select>
        {employees.map((employee, index) => (
          <option key={employee.id || index} value={employee.name}>
            {employee.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Exercise5;
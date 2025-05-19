import React from 'react';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';
import Exercise3 from './Exercise3';
import Exercise4 from './Exercise4';
import Exercise5 from './Exercise5';
import Exercise6 from './Exercise6';
import Exercise7 from './Exercise7';
import Exercise8 from './Exercise8';


function App() {
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  return (
    <div>
      <h1>Lab 1 Exercises</h1>
      <Exercise1 />
      <hr />
      <Exercise2 employees={employees} />
      <hr />
      <Exercise3 employees={employees} />
      <hr />
      <Exercise4 />
      <hr />
      <Exercise5 employees={employees} />
      <hr />
      <Exercise6 employees={employees} />
      <hr />
      <Exercise7 employees={employees} />
      <hr />
      <Exercise8 employees={employees} />
    </div>
  );
}

export default App;
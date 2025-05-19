import React from 'react';

const Exercise4 = () => {
  const averageAge = (...ages) => {
    if (ages.length === 0) {
      return 0;
    }
    const sum = ages.reduce((acc, age) => acc + age, 0);
    return sum / ages.length;
  };

  const agesToCalculate = [30, 40, 19, 22, 16];
  const avgAge = averageAge(...agesToCalculate);

  return (
    <div>
      <h2>Exercise 4</h2>
      <p>Average Age: {avgAge}</p>
    </div>
  );
};

export default Exercise4;
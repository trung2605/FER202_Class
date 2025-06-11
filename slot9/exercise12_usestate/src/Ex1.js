import React from 'react';
import { useState } from 'react';
function Ex1 () {
  // Use the useState hook to create a state variable called "count" with an initial value of 0
  const [count, setCount] = React.useState(0);

  // Create a function that increments the count by 1
  const increment = () => {
    setCount(count + 1);
  };

  // Return a button that displays the current count and calls the increment function when clicked
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
}

export default Ex1;
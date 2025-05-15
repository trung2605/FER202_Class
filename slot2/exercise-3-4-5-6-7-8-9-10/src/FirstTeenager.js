import React from 'react';

function FirstTeenager({ persons }) {
  const teenager = persons.find(person => person.age >= 13 && person.age <= 19);

  if (teenager) {
    return (
      <div>
        <h2>First Teenager</h2>
        <p>Name: {teenager.name}</p>
        <p>Age: {teenager.age}</p>
        <p>Occupation: {teenager.occupation}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>First Teenager</h2>
        <p>No teenager found in the list.</p>
      </div>
    );
  }
}

export default FirstTeenager;
function findOldestAndYoungest({ persons }) {
  if (!persons || persons.length === 0) {
    return { youngest: null, oldest: null };
  }

  const result = persons.reduce(
    (acc, person) => {
      if (!acc.youngest || person.age < acc.youngest.age) {
        acc.youngest = person;
      }
      if (!acc.oldest || person.age > acc.oldest.age) {
        acc.oldest = person;
      }
      return acc;
    },
    { youngest: null, oldest: null }
  );

  return result;
}

function AgePerson({ persons }) {
  const { youngest, oldest } = findOldestAndYoungest({ persons });
  // Call the function to get the youngest and oldest persons
  //destructure the result to get youngest and oldest persons
  return (
    <div>
      <h2>Age Information</h2>
      {youngest && (
        <p>
          Youngest: {youngest.name}, Age: {youngest.age}
        </p>
      )}
      {oldest && (
        <p>
          Oldest: {oldest.name}, Age: {oldest.age}
        </p>
      )}
    </div>
  );
}

export default AgePerson;

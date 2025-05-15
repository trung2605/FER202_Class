function PersonList ({ persons }) {
  return (
    <div>
      {persons.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <p>City: {person.occupation}</p>
        </div>
      ))}
    </div>
  );
}


export default PersonList;
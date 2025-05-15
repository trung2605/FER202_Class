function groupPeopleByOccupation(persons) {
  const groupedPeople = {};
  persons.forEach(person => {
    if (!groupedPeople[person.occupation]) {
      groupedPeople[person.occupation] = [];
    }
    groupedPeople[person.occupation].push(person);
  });
  return groupedPeople;
}

function GroupPeople({ persons }) {
  const groupedPeople = groupPeopleByOccupation(persons);
  return (
    <div>
      <h2>Grouped People by Occupation</h2>
      {Object.keys(groupedPeople).map(occupation => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          {groupedPeople[occupation].map(person => (
            <div key={person.id}>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GroupPeople;
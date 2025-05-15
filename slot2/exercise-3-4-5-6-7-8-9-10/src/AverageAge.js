function calculateAverageAgeByOccupation(persons) {
  const groupedPeople = groupPeopleByOccupation(persons);
  const averageAgeByOccupation = {};

  for (const occupation in groupedPeople) {
    if (groupedPeople.hasOwnProperty(occupation)) { // Kiểm tra thuộc tính của đối tượng
      const peopleWithOccupation = groupedPeople[occupation];
      const totalAge = peopleWithOccupation.reduce((sum, person) => sum + person.age, 0); // Tính tổng tuổi
      const averageAge = totalAge / peopleWithOccupation.length; // Tính tuổi trung bình
      averageAgeByOccupation[occupation] = averageAge;
    }
  }
  return averageAgeByOccupation;
}

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

function AverageAge({ persons }) {
  const averageAgeByOccupation = calculateAverageAgeByOccupation(persons);
  return (
    <div>
      <h2>Average Age by Occupation</h2>
      {Object.keys(averageAgeByOccupation).map(occupation => (
        <div key={occupation}>
          <h3>{occupation}</h3>
          <p>Average Age: {averageAgeByOccupation[occupation].toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default AverageAge;
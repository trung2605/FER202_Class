import React from 'react';

function sortPeople(persons) {
  const sortedPeople = [...persons].sort((a, b) => {
    // Sắp xếp theo nghề nghiệp (theo bảng chữ cái)
    const occupationComparison = a.occupation.localeCompare(b.occupation);
    if (occupationComparison !== 0) {
      return occupationComparison;
    }
    // Nếu nghề nghiệp giống nhau, sắp xếp theo tuổi (tăng dần)
    return a.age - b.age;
  });
  return sortedPeople;
}

function PeopleSort({ persons }) {
    const sorted = sortPeople(persons);
  return (
    <div>
      <h2>Sorted List of People</h2>
      <ul>
        {sorted.map(person => (
          <li key={person.id}>
            {person.name} - Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleSort;
import React from "react";

import PersonList from "./PersonList";
import PeopleTable from './PeopleTable';
import FirstTeenager from './FirstTeenager';
import AreAllTeenagers from './AreAllTeenagers';
import PeopleSort from './SortPeople';
import GroupPeople from './GroupPeople';
import AgePerson from "./AgePerson";  
import AverageAge from "./AverageAge";

function App() {
  const persons = [
    { id: 1, name: "John Doe", age: 30, occupation: "Software Engineer" },
    { id: 2, name: "Jane Smith", age: 25, occupation: "Data Scientist" },
    { id: 3, name: "Alice Johnson", age: 28, occupation: "Product Manager" },
    { id: 4, name: "Bob Brown", age: 35, occupation: "UX Designer" },
    { id: 5, name: "Charlie Davis", age: 22, occupation: "Intern" },
    { id: 6, name: "Diana Prince", age: 19, occupation: "Student" },
    { id: 7, name: "Ethan Hunt", age: 10, occupation: "Spy" },
    { id: 8, name: "Fiona Apple", age: 18, occupation: "Musician" },
    { id: 9, name: "George Clooney", age: 60, occupation: "Singer" },
    { id: 10, name: "Hannah Montana", age: 17, occupation: "Singer" }
  ];

  return (
    <div>
      <PersonList persons={persons} />
      <PeopleTable persons={persons} />
      <FirstTeenager persons={persons} />
      <AreAllTeenagers persons={persons} />
      <PeopleSort persons={persons} />
      <GroupPeople persons={persons} />
      <AgePerson persons={persons} />
      <AverageAge persons={persons} />
    </div>
  );
}

export default App;

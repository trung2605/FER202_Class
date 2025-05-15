function AreAllTeenagers({ persons }) {
  return (
    <div>
        <h2>Are All Teenagers?</h2>
       {
        persons.map(person => person.age >= 13 && person.age <= 19).every(isTeenager => isTeenager) ? (
          <p>Yes, all persons are teenagers.</p>
        ) : (
          <p>No, not all persons are teenagers.</p>
        )
       }
    </div>
  );
}

export default AreAllTeenagers;

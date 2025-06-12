
import React, { useState } from 'react';

function Ex4() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h2>Bài 4: Simple Todo List (Ex4.js)</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add a new todo..."
          style={{ padding: '8px', width: '200px', marginRight: '5px' }}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.length === 0 ? (
          <p>No todos yet. Add some!</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 0',
                borderBottom: '1px dashed #eee',
              }}
            >
              <span>{todo}</span>
              <button
                onClick={() => handleDeleteTodo(index)}
                style={{ background: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Ex4;
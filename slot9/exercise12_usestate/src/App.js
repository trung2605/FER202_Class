import React from 'react'
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Ex5 from './Ex5';
import Ex6 from './Ex6';
import Ex7 from './Ex7';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <Ex1 />
      <h1>Ex2</h1>
      <Ex2 />
      <h1>Ex3</h1>
       <Ex3 />
      {/*<h1>Ex4</h1>
      <Ex4 />
      <h1>Ex5</h1>
      <Ex5 />
      <h1>Ex6</h1>
      <Ex6 />
      <h1>Ex7</h1>     
      <Ex7 />   */}
    </div>
  );
}

export default App;

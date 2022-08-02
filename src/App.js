import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shapes, setShapes] = useState()
  function getAPI() {
    return fetch("http://localhost:7054/Shape")
      .then(response => response.json())
      .then(data => setShapes({ data }));
  }
  useEffect(async () => {
    await getAPI();
  }, []);
  return (
    <div className="App">
      {
        shapes.map((shape) => {
          return (
            <h6>{shape.id}</h6>
          )
        })
      }
    </div>
  );
}

export default App;

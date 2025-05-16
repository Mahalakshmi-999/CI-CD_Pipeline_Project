import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <h1>Message from Backend:</h1>
      <p>{message || 'Loading...'}</p>
    </div>
  );
}

export default App;

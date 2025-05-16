const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Message from Backend: Hello from backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello from root!');
})

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye from backend!' });
});

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});
app.get('/api/greet/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

app.get('/api/greet/:name/:age/:city', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  const city = req.params.city;
  res.json({ message: `Hello, ${name}! You are ${age} years old and live in ${city}.` });
});
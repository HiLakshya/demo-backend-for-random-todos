const express = require('express');
const todos = require('./todo.json');

const app = express();
const port = 3000;

app.get('/random-todos', (req, res) => {
  const shuffledTodos = todos.sort(() => Math.random() - 0.5);
  const randomTodos = shuffledTodos.slice(0, 3);
  res.json(randomTodos);
});

app.get('/help', (req, res) => {
  res.send('Go to /random-todos route for 3 random todos.');
});

// Redirect all other routes to /help
app.get('*', (req, res) => {
  res.redirect('/help');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

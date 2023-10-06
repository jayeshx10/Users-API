const express = require('express');
const initializeDatabase = require('./db.connect');
const moviesRouter = require('./routers/movies.router');
const usersRouter = require('./routers/users.router');

const app = express();
app.use(express.json());

initializeDatabase();

app.get('/', (req, res) => {
  res.send("Express app has started.")
})

app.listen(3000, () => {
  console.log("App started on Port 3000")
})

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
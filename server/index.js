const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const habitsRouter = require('./routes/habits');
const quotesRouter = require('./routes/quotes');
const usersRouter = require('./routes/users');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>hello world</h1>');
});

app.use('/api/tasks', tasksRouter);
app.use('/api/habits', habitsRouter);
app.use('/api/quotes', quotesRouter);
app.use('/api/users', usersRouter)

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('app running on ', PORT);
});

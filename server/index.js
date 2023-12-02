const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');
const quotesRouter = require('./routes/quotes');
const loginRouter = require('./routes/login');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('<h1>hello world</h1>');
});

app.use('/api/tasks', tasksRouter);
app.use('/api/quotes', quotesRouter);
app.use('api/login', loginRouter)

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('app running on ', PORT);
});

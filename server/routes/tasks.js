const express = require('express');
const router = express.Router();
const { User, Task, Habit } = require('../models/index')

router.get('/:id', async (req, res) => {
    const TASKS = await Task.find({ user: req.params.id })
    res.send(TASKS);
});


router.post('/:id', async (req, res) => {
    try {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        const TodayDate = `${day}-${month}-${year}`;
        const TomDate = `${day + 1}-${month}-${year}`;
        var defaultDate = TodayDate
        const argsDate = req.query.date
        if (argsDate == "tom") {
            defaultDate = TomDate
        }
        const task = await Task.create({
            name: req.body.name,
            deadline: defaultDate,
            priority: 3,
            user: req.params.id
        })
        const user = await User.findById(req.params.id)
        if (user) {
            user.tasks.push(task)
            user.save()
        }
        res.send(task).status(201).end()
    } catch (err) { console.log(err.message) }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteTask = await Task.deleteOne({ _id: req.params.id })
        res.send(deleteTask).status(201).end()
    } catch (err) { console.log(err.message) }
})

module.exports = router;

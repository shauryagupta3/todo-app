const express = require('express');
const router = express.Router();
const { User, Task, Habit } = require('../models/index')

router.get('/:id', async (req, res) => {
    const HABITS = await Habit.find({ user: req.params.id })
    res.send(HABITS);
});

router.post('/:id', async (req, res) => {
    try {
        const habit = await Habit.create({
            name: req.body.name,
            days: "mon",
            user: req.params.id
        })
        const user = await User.findById(req.params.id)
        if (user) {
            user.habits.push(habit)
            user.save()
        }
        res.send(habit).status(201).end()
    } catch (err) { console.log(err) }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteTask = await Habit.deleteOne({ _id: req.params.id })
        res.send(deleteTask).status(201).end()
    } catch (err) { console.log(err.message) }
})

module.exports = router;

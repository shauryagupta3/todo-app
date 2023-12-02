const express = require('express');
const router = express.Router();
var tasks = require('../db.json');
// const tasks

router.get('/', (req, res) => {
    res.header('Content-Type', 'application/json');
    console.log(tasks.task)
    res.send(JSON.stringify(tasks));
});

router.post('/', (req, res) => {
    const newTask = req.body;
    const typeOfTask = newTask.type;
    var currentTasks = []
    typeOfTask === "task" || typeOfTask === "habit" ? null : res.send("error type").status(404).end()
    typeOfTask === "habit" ? currentTasks = tasks.habit : currentTasks = tasks.task
    var prevID = 0
    if (currentTasks.length > 0) {
        prevID = currentTasks[currentTasks.length - 1].id
    }
    newTask.id = Number(prevID) + 1
    taskToPush = {
        name:newTask.name,
        deadline:newTask.deadline,
        done:newTask.done
    }
    currentTasks.push(taskToPush)
    typeOfTask === "habit" ? tasks.habit = currentTasks : tasks.task = currentTasks
    res.send('done').status(200).end();
});

router.delete('/:id', (req, res) => {
    console.log("deleting")
    var currentTasks = tasks.task;
    const findTask = currentTasks.find(e => e.id == req.params.id)
    if (findTask) {
        const newTasks = currentTasks.filter((task) => task.id != req.params.id)
        tasks.task = newTasks
        res.send("deleted").status(200).end()

    }
    res.send("error").status(404).end()
})

module.exports = router;

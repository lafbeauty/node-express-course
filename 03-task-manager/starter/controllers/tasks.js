const Task = require("../models/task")

const getAllTasks = (req, res) => {
  res.send("get all tasks")
}

const createTask = async (req, res) => {
  //const task = await Task.create({name: 'first task'})
  //res.send("create task")
  const task = await Task.create(req.body)
  //res.json(req.body)
  res.status(201).json({ task })
}

const getTask = (req, res) => {
  //res.send("get single task")
  res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
  res.send("update task")
}

const deleteTask = (req, res) => {
  res.send("delete task")
}

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  deleteTask,
  updateTask,
}

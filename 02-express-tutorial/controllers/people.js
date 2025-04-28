let { people } = require("../data.js")

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const addPerson = (req, res) => {
  const newPerson = req.body
  if (!newPerson.name) {
    res.status(400).json({ success: false, message: "Please provide a name" })
  } else {
    people.push({ id: people.length + 1, name: req.body.name })
    res.status(201).json({ success: true, name: req.body.name })
  }
}

const getPerson = (req, res) => {
  const id = Number(req.params.id)
  const person = people.find((person) => person.id === id)

  if (!person) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` })
  } else {
    res.status(200).json({ success: true, data: person })
  }
}

const updatePerson = (req, res) => {
  const id = Number(req.params.id)
  const { name } = req.body

  const personIndex = people.findIndex((person) => person.id === id)

  if (personIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: `No person with id ${id}` })
  }

  people[personIndex] = { ...people[personIndex], name }

  res.status(200).json({ success: true, data: people[personIndex] })
}

module.exports = { getPeople, addPerson, getPerson, updatePerson }

const express = require("express")
const router = express.Router()
//let { people } = require("../data")
const {
  addPerson,
  getPeople,
  getPerson,
  updatePerson,
} = require("../controllers/people.js")

router.get("/", getPeople)
router.post("/", addPerson)

router.get("/:id", getPerson)

router.update("/:id", updatePerson)

/*
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people })
})

router.post("/", (req, res) => {
  const newPerson = req.body
  if (!newPerson.name) {
    res.status(400).json({ success: false, message: "Please provide a name" })
  } else {
    people.push({ id: people.length + 1, name: req.body.name })

    res.status(201).json({ success: true, name: req.body.name })
  }
}) */

module.exports = router
